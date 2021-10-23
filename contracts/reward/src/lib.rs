use std::result::Result;
use std::u128;

use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::collections::LookupMap;
use near_sdk::serde::Serialize;
use near_sdk::{env, near_bindgen, AccountId, PanicOnDefault, Promise};

near_sdk::setup_alloc!();

#[derive(BorshSerialize, BorshDeserialize, Clone, Serialize)]
#[serde(crate = "near_sdk::serde")]
pub struct AccountInfo {
    pub id: AccountId,
    pub score: u128,
}

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]
pub struct Contract {
    pub rank: Vec<AccountInfo>,
    pub balance: u128,
    pub play_record: LookupMap<AccountId, bool>,
}

#[derive(Serialize)]
#[serde(crate = "near_sdk::serde")]
pub struct ListRes {
    pub total_reward: u128,
    pub rank: Vec<AccountInfo>,
}

#[near_bindgen]
impl Contract {
    #[init]
    pub fn new() -> Self {
        assert!(!env::state_exists(), "Already initialized");
        Self {
            rank: Vec::<AccountInfo>::new(),
            balance: env::account_balance(),
            play_record: LookupMap::new(b"r".to_vec()),
        }
    }

    // sign up
    #[payable]
    pub fn sign_up(&mut self, account_id: AccountId) -> Result<bool, String> {
        assert_eq!(
            env::signer_account_id(),
            account_id,
            "expected account_id is signer"
        );
        let deposit = env::attached_deposit();
        assert!(deposit >= 1, "Attached deposti must be greater than 1");

        self.play_record.insert(&account_id, &true);

        Ok(true)
    }

    // play game
    pub fn play_game(&mut self, account_id: AccountId) -> bool {
        assert_eq!(
            env::signer_account_id(),
            account_id,
            "expected account_id is signer"
        );
        if let Some(_ok) = self.play_record.get(&account_id) {
            self.play_record.insert(&account_id, &false);
            return true;
        } else {
            return false;
        }
    }

    //  check sign
    pub fn check_sign(&self, account_id: AccountId) -> bool {
        if let Some(ok) = self.play_record.get(&account_id) {
            if ok {
                return ok;
            }
        }
        false
    }

    // upload score
    pub fn upload_score(&mut self, account_id: AccountId, score: u128) {
        assert_eq!(env::signer_account_id(), account_id);
        assert!(score > 0, "score need big than zero");
        self.rank.push(AccountInfo {
            id: account_id,
            score: score,
        });
        self.rank.sort_by(|a, b| b.score.cmp(&a.score));
    }

    // list rank
    pub fn list_score(self) -> ListRes {
        let new_balance = env::account_balance();
        let total_bonus = new_balance - self.balance;
        ListRes {
            total_reward: total_bonus,
            rank: self.rank.clone(),
        }
    }

    // reward
    pub fn reward(&mut self) {
        if self.rank.len() == 0 {
            return;
        }
        let new_balance = env::account_balance();
        let total_bonus = new_balance - self.balance;
        let bonus = total_bonus / 2;
        let left = total_bonus - bonus;

        Promise::new(self.rank[0].clone().id).transfer(u128::from(bonus));

        self.rank = Vec::<AccountInfo>::new();
        self.balance += left;
    }
}

#[cfg(all(test, not(target_arch = "wasm32")))]
mod tests {
    use super::*;
    use near_sdk::json_types::ValidAccountId;
    use near_sdk::test_utils::{accounts, VMContextBuilder};
    use near_sdk::{testing_env, MockedBlockchain};

    const NEAR1: u128 = 1_000_000_000_000_000_000_000_000;
    const NEAR100: u128 = 100_000_000_000_000_000_000_000_000;

    fn get_context(predecessor_account_id: ValidAccountId) -> VMContextBuilder {
        let mut builder = VMContextBuilder::new();
        builder
            .account_balance(NEAR100)
            .current_account_id(accounts(0))
            .signer_account_id(predecessor_account_id.clone())
            .predecessor_account_id(predecessor_account_id);
        builder
    }

    #[test]
    fn test_new() {
        let mut context = get_context(accounts(1));
        testing_env!(context.build());
        let contract = Contract::new();
        testing_env!(context.is_view(true).build());
        assert_eq!(contract.balance, NEAR100);
        assert_eq!(contract.rank.len(), 0);
    }

    #[test]
    fn test_update_score() {
        let mut context = get_context(accounts(0));
        testing_env!(context.build());
        let mut contract = Contract::new();
        contract.upload_score(accounts(0).into(), 10);
        contract.upload_score(accounts(0).into(), 13);
        contract.upload_score(accounts(0).into(), 30);
        contract.upload_score(accounts(0).into(), 20);
        testing_env!(context.is_view(true).build());
        assert_eq!(contract.balance, NEAR100);
        assert_eq!(contract.rank[0].score, 30);
        assert_eq!(contract.rank[2].score, 13);
        assert_eq!(contract.rank.len(), 4);
    }

    #[test]
    fn test_reward() {
        let mut context = get_context(accounts(0));
        testing_env!(context.build());
        let mut contract = Contract::new();
        assert_eq!(contract.balance, NEAR100);
        testing_env!(context.signer_account_id(accounts(4)).build());
        Promise::new(env::current_account_id()).transfer(NEAR1);
        Promise::new(env::current_account_id()).transfer(NEAR1);
        Promise::new(env::current_account_id()).transfer(NEAR1);
        Promise::new(env::current_account_id()).transfer(NEAR1);
        testing_env!(context.signer_account_id(accounts(0)).build());
        contract.upload_score(accounts(0).into(), 10);
        contract.upload_score(accounts(0).into(), 13);
        contract.upload_score(accounts(0).into(), 30);
        contract.upload_score(accounts(0).into(), 20);
        contract.reward();
        testing_env!(context.is_view(true).build());
        assert_eq!(contract.rank.len(), 0);
    }

    #[test]
    fn test_sign_up() {
        let mut context = get_context(accounts(0));
        testing_env!(context.build());
        let mut contract = Contract::new();
        testing_env!(context
            .signer_account_id(accounts(4))
            .attached_deposit(1)
            .build());
        assert_eq!(contract.sign_up(accounts(4).into()), Ok(true));
        assert_eq!(contract.check_sign(accounts(4).into()), true);

        testing_env!(context.signer_account_id(accounts(3)).build());

        assert_eq!(contract.check_sign(accounts(3).into()), false);
        assert_eq!(contract.play_game(accounts(3).into()), false);

        testing_env!(context.signer_account_id(accounts(4)).build());

        assert_eq!(contract.play_game(accounts(4).into()), true);
        assert_eq!(contract.check_sign(accounts(4).into()), false);
    }
}
