use near_contract_standards::non_fungible_token::core::{
    NonFungibleTokenCore, NonFungibleTokenResolver,
};
use near_contract_standards::non_fungible_token::metadata::{
    NFTContractMetadata, NonFungibleTokenMetadataProvider, TokenMetadata, NFT_METADATA_SPEC,
};
use near_contract_standards::non_fungible_token::NonFungibleToken;
use near_contract_standards::non_fungible_token::{Token, TokenId};
use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::collections::{LazyOption, LookupMap, UnorderedMap, UnorderedSet};
use near_sdk::json_types::{U128, U64};
use near_sdk::serde::{Deserialize, Serialize};
use near_sdk::{
    env, near_bindgen, AccountId, Balance, BorshStorageKey, PanicOnDefault, Promise, PromiseOrValue,
};
use std::collections::HashMap;

/// CUSTOM TYPES

/// payout type for royalties to market
pub type Payout = HashMap<AccountId, U128>;

/// between token_type_id and edition number e.g. 42:2 where 42 is type and 2 is edition
pub const TOKEN_DELIMETER: char = ':';
/// TokenMetadata.title returned for individual token e.g. "Title — 2/10" where 10 is max copies
pub const TITLE_DELIMETER: &str = " — ";
/// e.g. "Title — 2/10" where 10 is max copies
pub const EDITION_DELIMETER: &str = "/";

pub type TokenTypeId = u64;
pub type TokenTypeTitle = String;

#[derive(BorshDeserialize, BorshSerialize)]
pub struct TokenType {
    metadata: TokenMetadata,
    owner_id: AccountId,
    royalty: HashMap<AccountId, u32>,
    tokens: UnorderedSet<TokenId>,
    approved_market_id: Option<AccountId>,
}

#[derive(Serialize, Deserialize)]
#[serde(crate = "near_sdk::serde")]
pub struct TokenTypeJson {
    metadata: TokenMetadata,
    owner_id: AccountId,
    royalty: HashMap<AccountId, u32>,
}

#[derive(Serialize, Deserialize)]
#[serde(crate = "near_sdk::serde")]
pub struct TypeMintArgs {
    token_type_title: TokenTypeTitle,
    receiver_id: AccountId,
}

/// STANDARD
#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]
pub struct Contract {
    tokens: NonFungibleToken,
    metadata: LazyOption<NFTContractMetadata>,
    // CUSTOM
    token_type_by_title: LookupMap<TokenTypeTitle, TokenTypeId>,
    token_type_by_id: UnorderedMap<TokenTypeId, TokenType>,
}

//CUSTOM Game ICON
const DATA_IMAGE_SVG_NEAR_ICON: &str = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj48cGF0aCBkPSJNMTIgMGM2LjYyNyAwIDEyIDUuMzczIDEyIDEycy01LjM3MyAxMi0xMiAxMlMwIDE4LjYyNyAwIDEyIDUuMzczIDAgMTIgMHptMCA0YTguMDM3IDguMDM3IDAgMCAwLTMuMTE0LjYyOSA4LjAxOSA4LjAxOSAwIDAgMC00LjcyNCA1Ljc2IDguMDQyIDguMDQyIDAgMCAwIC40NjcgNC43MjUgNy45OSA3Ljk5IDAgMCAwIDEuNzE0IDIuNTQzIDcuOTkzIDcuOTkzIDAgMCAwIDExLjMxNCAwQTcuOTY4IDcuOTY4IDAgMCAwIDIwIDEyYTcuOTk1IDcuOTk1IDAgMCAwLS42MjktMy4xMTQgNy45NiA3Ljk2IDAgMCAwLTEuNzE0LTIuNTQyIDguMDA1IDguMDA1IDAgMCAwLTQuMDQ2LTIuMThBOC4wMyA4LjAzIDAgMCAwIDEyLjAwMSA0em0xLjE2MyA5LjExOGwuMDQ1LS4wMTUuMjEyLjU3YTI4LjE0IDI4LjE0IDAgMCAxIDEuMjQ4IDQuNjE4IDYuNzk4IDYuNzk4IDAgMCAxLTIuNjY4LjU0MWMtMS41NSAwLTIuOTgtLjUxNi00LjEyNi0xLjM4N2wtLjA3My0uMDYuMDM2LS4wN2MuMjMyLS40NDggMS42NTEtMi45MTcgNS4zMjYtNC4xOTd6bTUuNTgzLS4wMzNhNi44MzcgNi44MzcgMCAwIDEtMi45MjggNC41ODJsLS4wOTItLjQ5OWEzMC43MzcgMzAuNzM3IDAgMCAwLTEuMjM4LTQuMzgxYzIuMjA2LS4zNTMgNC4xMTcuMjUyIDQuMjU4LjI5OHptLTYuNTU4LTIuMjc1Yy4xOTYuMzgzLjM4My43NzMuNTU0IDEuMTYybC0uMjY5LjA4MWMtMi45OTIuOTY3LTQuNzg3IDMuMzM0LTUuMzU4IDQuMTkybC0uMi4zMTctLjE4NC0uMjE0QTYuODA2IDYuODA2IDAgMCAxIDUuMTY4IDEyYzAtLjA3My4wMDMtLjE0NC4wMDYtLjIxNmwuMzc4LjAwMWMuOTktLjAwOSAzLjc2Ni0uMTE2IDYuNjM2LS45NzV6bTUuMDg5LTMuMTVhNi43OTggNi43OTggMCAwIDEgMS41NTMgNC4yNzJsLS40MjgtLjA4MWMtLjc4OS0uMTM1LTIuNTUtLjM2Ny00LjMzLS4xNDNsLS4xNDgtLjM1M2EyMC40NTYgMjAuNDU2IDAgMCAwLS40NTQtLjk5YzIuNjk4LTEuMTAyIDMuNzk0LTIuNjg2IDMuODA3LTIuNzA1ek05LjA4NSA1LjgybC40OS42ODVjLjQ5My43MSAxLjI4NyAxLjkwMSAyLjA0NyAzLjI1Mi0zLjI4Ljg3Mi02LjEyNy44MzgtNi4zMDguODM0YTYuODQyIDYuODQyIDAgMCAxIDMuNzcxLTQuNzd6TTEyIDUuMTY5YzEuNzMgMCAzLjMwOS42NDUgNC41MTMgMS43MDRsLS4wOTEuMTI2Yy0uMjk1LjM4LTEuMzI5IDEuNTQzLTMuNDc4IDIuMzQ4bC0uMjUyLS40NTJBMzQuNzU3IDM0Ljc1NyAwIDAgMCAxMC4zOSA1LjM2IDYuODIyIDYuODIyIDAgMCAxIDEyIDUuMTY4eiIvPjwvc3ZnPgo=";

#[derive(BorshSerialize, BorshStorageKey)]
enum StorageKey {
    // STANDARD
    NonFungibleToken,
    Metadata,
    TokenMetadata,
    Enumeration,
    Approval,
    // CUSTOM
    TokenTypeByTitle,
    TokenTypeById,
    TokensByTypeInner { token_type_id: u64 },
}

#[near_bindgen]
impl Contract {
    #[init]
    pub fn new_default_meta(owner_id: AccountId) -> Self {
        Self::new(
            owner_id,
            NFTContractMetadata {
                spec: NFT_METADATA_SPEC.to_string(),
                name: "Crazy to play ball".to_string(),
                symbol: "BALL".to_string(),
                icon: Some(DATA_IMAGE_SVG_NEAR_ICON.to_string()),
                base_uri: None,
                reference: None,
                reference_hash: None,
            },
        )
    }

    #[init]
    pub fn new(owner_id: AccountId, metadata: NFTContractMetadata) -> Self {
        assert!(!env::state_exists(), "Already initialized");
        metadata.assert_valid();
        Self {
            tokens: NonFungibleToken::new(
                StorageKey::NonFungibleToken,
                owner_id,
                Some(StorageKey::TokenMetadata),
                Some(StorageKey::Enumeration),
                Some(StorageKey::Approval),
            ),
            token_type_by_id: UnorderedMap::new(StorageKey::TokenTypeById),
            token_type_by_title: LookupMap::new(StorageKey::TokenTypeByTitle),
            metadata: LazyOption::new(StorageKey::Metadata, Some(&metadata)),
        }
    }

    // CUSTOM

    #[payable]
    pub fn nft_create_type(&mut self, metadata: TokenMetadata, royalty: HashMap<AccountId, u32>) {
        let initial_storage_usage = env::storage_usage();
        let owner_id = env::predecessor_account_id();
        let title = metadata.title.clone();
        assert!(title.is_some(), "token_metadata.title is required");
        let token_type_id = self.token_type_by_id.len() + 1;
        assert!(
            self.token_type_by_title
                .insert(&title.unwrap(), &token_type_id)
                .is_none(),
            "token_metadata.title exists"
        );
        self.token_type_by_id.insert(
            &token_type_id,
            &TokenType {
                metadata,
                owner_id,
                royalty,
                tokens: UnorderedSet::new(
                    StorageKey::TokensByTypeInner { token_type_id }
                        .try_to_vec()
                        .unwrap(),
                ),
                approved_market_id: None,
            },
        );

        refund_deposit(env::storage_usage() - initial_storage_usage);
    }

    #[payable]
    pub fn nft_mint_type(
        &mut self,
        token_type_title: TokenTypeTitle,
        receiver_id: AccountId,
    ) -> Token {
        let initial_storage_usage = env::storage_usage();

        let token_type_id = self
            .token_type_by_title
            .get(&token_type_title)
            .expect("no type");
        let mut token_type = self.token_type_by_id.get(&token_type_id).expect("no token");
        assert_eq!(
            &env::predecessor_account_id(),
            &token_type.owner_id,
            "not type owner"
        );

        let num_tokens = token_type.tokens.len();
        let max_copies = token_type.metadata.copies.unwrap_or(u64::MAX);
        assert_ne!(num_tokens, max_copies, "type supply maxed");

        let token_id = format!("{}{}{}", &token_type_id, TOKEN_DELIMETER, num_tokens + 1);
        token_type.tokens.insert(&token_id);
        self.token_type_by_id.insert(&token_type_id, &token_type);

        // you can add custom metadata to each token here
        // make sure you update self.nft_token to "patch" over the type metadata
        let metadata = Some(TokenMetadata {
            title: None,          // ex. "Arch Nemesis: Mail Carrier" or "Parcel #5055"
            description: None,    // free-form description
            media: None, // URL to associated media, preferably to decentralized, content-addressed storage
            media_hash: None, // Base64-encoded sha256 hash of content referenced by the `media` field. Required if `media` is included.
            copies: None, // number of copies of this set of metadata in existence when token was minted.
            issued_at: None, // ISO 8601 datetime when token was issued or minted
            expires_at: None, // ISO 8601 datetime when token expires
            starts_at: None, // ISO 8601 datetime when token starts being valid
            updated_at: None, // ISO 8601 datetime when token was last updated
            extra: None, // anything extra the NFT wants to store on-chain. Can be stringified JSON.
            reference: None, // URL to an off-chain JSON file with more info.
            reference_hash: None, // Base64-encoded sha256 hash of JSON from reference field. Required if `reference` is included.
        });
        let token = self.tokens.mint(token_id, receiver_id, metadata);

        refund_deposit(env::storage_usage() - initial_storage_usage);
        token
    }

    /// CUSTOM re-implement core standard here, not using macros from near-contract-standards

    /// pass through
    #[payable]
    pub fn nft_transfer(
        &mut self,
        receiver_id: AccountId,
        token_id: TokenId,
        approval_id: Option<u64>,
        memo: Option<String>,
    ) {
        self.tokens
            .nft_transfer(receiver_id, token_id, approval_id, memo)
    }

    /// pass through
    #[payable]
    pub fn nft_transfer_call(
        &mut self,
        receiver_id: AccountId,
        token_id: TokenId,
        approval_id: Option<u64>,
        memo: Option<String>,
        msg: String,
    ) -> PromiseOrValue<bool> {
        self.tokens
            .nft_transfer_call(receiver_id, token_id, approval_id, memo, msg)
    }

    /// CUSTOM royalties payout
    #[payable]
    pub fn nft_transfer_payout(
        &mut self,
        receiver_id: AccountId,
        token_id: TokenId,
        approval_id: u64,
        memo: Option<String>,
        balance: Option<U128>,
        max_len_payout: Option<u32>,
    ) -> Option<Payout> {
        // lazy minting?
        let type_mint_args = memo.clone();
        let previous_token = if let Some(type_mint_args) = type_mint_args {
            let TypeMintArgs {
                token_type_title,
                receiver_id,
            } = near_sdk::serde_json::from_str(&type_mint_args).expect("invalid TypeMintArgs");
            self.nft_mint_type(token_type_title, receiver_id)
        } else {
            let prev_token = self.nft_token(token_id.clone()).expect("no token");
            self.tokens
                .nft_transfer(receiver_id, token_id.clone(), Some(approval_id), memo);
            prev_token
        };

        // compute payouts based on balance option
        let owner_id = previous_token.owner_id;
        let payout = if let Some(balance) = balance {
            let complete_royalty = 10_000u128;
            let balance_piece = u128::from(balance) / complete_royalty;
            let mut total_royalty_percentage = 0;
            let mut payout: Payout = HashMap::new();
            let mut token_id_iter = token_id.split(TOKEN_DELIMETER);
            let token_type_id = token_id_iter.next().unwrap().parse().unwrap();
            let royalty = self
                .token_type_by_id
                .get(&token_type_id)
                .expect("no type")
                .royalty;

            if let Some(max_len_payout) = max_len_payout {
                assert!(
                    royalty.len() as u32 <= max_len_payout,
                    "exceeds max_len_payout"
                );
            }
            for (k, v) in royalty.iter() {
                let key = k.clone();
                // skip seller and payout once at end
                if key != owner_id {
                    payout.insert(key, U128(*v as u128 * balance_piece));
                    total_royalty_percentage += *v;
                }
            }
            // payout to seller
            payout.insert(
                owner_id,
                U128((complete_royalty - total_royalty_percentage as u128) * balance_piece),
            );
            Some(payout)
        } else {
            None
        };

        payout
    }

    /// CUSTOM re-implementation of near-contract-standards (not using macros)

    /// CUSTOM every enumeration method goes through here (watch the gas on views...)

    pub fn nft_token(&self, token_id: TokenId) -> Option<Token> {
        let owner_id = self.tokens.owner_by_id.get(&token_id)?;
        let approved_account_ids = self
            .tokens
            .approvals_by_id
            .as_ref()
            .and_then(|by_id| by_id.get(&token_id).or_else(|| Some(HashMap::new())));

        // CUSTOM (switch metadata for the token_type metadata)
        let mut token_id_iter = token_id.split(TOKEN_DELIMETER);
        let token_type_id = token_id_iter.next().unwrap().parse().unwrap();
        // make edition titles nice for showing in wallet
        let mut metadata = self.token_type_by_id.get(&token_type_id).unwrap().metadata;
        let copies = metadata.copies;
        if let Some(copies) = copies {
            metadata.title = Some(format!(
                "{}{}{}{}{}",
                metadata.title.unwrap(),
                TITLE_DELIMETER,
                token_id_iter.next().unwrap(),
                EDITION_DELIMETER,
                copies
            ));
        }

        // CUSTOM
        // implement this if you need to combine individual token metadata
        // e.g. metadata.extra with TokenType.metadata.extra and return something unique
        // let token_metadata = self.tokens.token_metadata_by_id.get(&token_id)?;
        // metadata.extra = token_metadata.extra;

        Some(Token {
            token_id,
            owner_id,
            metadata: Some(metadata),
            approved_account_ids,
        })
    }

    pub fn nft_total_supply(&self) -> U128 {
        (self.tokens.owner_by_id.len() as u128).into()
    }

    pub fn nft_tokens(&self, from_index: Option<U128>, limit: Option<u64>) -> Vec<Token> {
        // Get starting index, whether or not it was explicitly given.
        // Defaults to 0 based on the spec:
        // https://nomicon.io/Standards/NonFungibleToken/Enumeration.html#interface
        let start_index: u128 = from_index.map(From::from).unwrap_or_default();
        assert!(
            (self.tokens.owner_by_id.len() as u128) > start_index,
            "Out of bounds, please use a smaller from_index."
        );
        let limit = limit.map(|v| v as usize).unwrap_or(usize::MAX);
        assert_ne!(limit, 0, "Cannot provide limit of 0.");
        self.tokens
            .owner_by_id
            .iter()
            .skip(start_index as usize)
            .take(limit)
            .map(|(token_id, _)| self.nft_token(token_id).unwrap())
            .collect()
    }

    pub fn nft_supply_for_owner(self, account_id: AccountId) -> U128 {
        let tokens_per_owner = self.tokens.tokens_per_owner.expect(
            "Could not find tokens_per_owner when calling a method on the enumeration standard.",
        );
        tokens_per_owner
            .get(&account_id)
            .map(|account_tokens| U128::from(account_tokens.len() as u128))
            .unwrap_or(U128(0))
    }

    pub fn nft_tokens_for_owner(
        &self,
        account_id: AccountId,
        from_index: Option<U128>,
        limit: Option<u64>,
    ) -> Vec<Token> {
        let tokens_per_owner = self.tokens.tokens_per_owner.as_ref().expect(
            "Could not find tokens_per_owner when calling a method on the enumeration standard.",
        );
        let token_set = if let Some(token_set) = tokens_per_owner.get(&account_id) {
            token_set
        } else {
            return vec![];
        };
        let limit = limit.map(|v| v as usize).unwrap_or(usize::MAX);
        assert_ne!(limit, 0, "Cannot provide limit of 0.");
        let start_index: u128 = from_index.map(From::from).unwrap_or_default();
        assert!(
            token_set.len() as u128 > start_index,
            "Out of bounds, please use a smaller from_index."
        );
        token_set
            .iter()
            .skip(start_index as usize)
            .take(limit)
            .map(|token_id| self.nft_token(token_id).unwrap())
            .collect()
    }

    /// CUSTOM VIEWS for typed tokens

    pub fn nft_tokens_for_owner_token_ids(
        &self,
        account_id: AccountId,
        from_index: Option<U128>,
        limit: Option<u64>,
    ) -> Vec<String> {
        let tokens_per_owner = self.tokens.tokens_per_owner.as_ref().expect(
            "Could not find tokens_per_owner when calling a method on the enumeration standard.",
        );
        let token_set = if let Some(token_set) = tokens_per_owner.get(&account_id) {
            token_set
        } else {
            return vec![];
        };
        let limit = limit.map(|v| v as usize).unwrap_or(usize::MAX);
        assert_ne!(limit, 0, "Cannot provide limit of 0.");
        let start_index: u128 = from_index.map(From::from).unwrap_or_default();
        assert!(
            token_set.len() as u128 > start_index,
            "Out of bounds, please use a smaller from_index."
        );
        token_set
            .iter()
            .skip(start_index as usize)
            .take(limit)
            .map(|token_id| token_id)
            .collect()
    }

    pub fn nft_get_type(&self, token_type_title: TokenTypeTitle) -> TokenTypeJson {
        let token_type = self
            .token_type_by_id
            .get(
                &self
                    .token_type_by_title
                    .get(&token_type_title)
                    .expect("no type"),
            )
            .expect("no type");
        TokenTypeJson {
            metadata: token_type.metadata,
            owner_id: token_type.owner_id,
            royalty: token_type.royalty,
        }
    }

    pub fn nft_get_type_format(&self) -> (char, &'static str, &'static str) {
        (TOKEN_DELIMETER, TITLE_DELIMETER, EDITION_DELIMETER)
    }

    pub fn nft_get_types(
        &self,
        from_index: Option<U128>,
        limit: Option<u64>,
    ) -> Vec<TokenTypeJson> {
        let start_index: u128 = from_index.map(From::from).unwrap_or_default();
        assert!(
            (self.token_type_by_id.len() as u128) > start_index,
            "Out of bounds, please use a smaller from_index."
        );
        let limit = limit.map(|v| v as usize).unwrap_or(usize::MAX);
        assert_ne!(limit, 0, "Cannot provide limit of 0.");

        self.token_type_by_id
            .iter()
            .skip(start_index as usize)
            .take(limit)
            .map(|(_, token_type)| TokenTypeJson {
                metadata: token_type.metadata,
                owner_id: token_type.owner_id,
                royalty: token_type.royalty,
            })
            .collect()
    }

    pub fn nft_supply_for_type(&self, token_type_title: TokenTypeTitle) -> U64 {
        self.token_type_by_id
            .get(
                &self
                    .token_type_by_title
                    .get(&token_type_title)
                    .expect("no type"),
            )
            .expect("no type")
            .tokens
            .len()
            .into()
    }

    pub fn nft_tokens_by_type(
        &self,
        token_type_title: TokenTypeTitle,
        from_index: Option<U128>,
        limit: Option<u64>,
    ) -> Vec<Token> {
        let start_index: u128 = from_index.map(From::from).unwrap_or_default();
        let tokens = self
            .token_type_by_id
            .get(
                &self
                    .token_type_by_title
                    .get(&token_type_title)
                    .expect("no type"),
            )
            .expect("no type")
            .tokens;
        assert!(
            (tokens.len() as u128) > start_index,
            "Out of bounds, please use a smaller from_index."
        );
        let limit = limit.map(|v| v as usize).unwrap_or(usize::MAX);
        assert_ne!(limit, 0, "Cannot provide limit of 0.");

        tokens
            .iter()
            .skip(start_index as usize)
            .take(limit)
            .map(|token_id| self.nft_token(token_id).unwrap())
            .collect()
    }

    ///BURN NFT
    #[payable]
    pub fn nft_burn(&mut self, token_id: TokenId) {
        let burn_address = AccountId::new_unchecked("".to_string());
        let sender_id = env::predecessor_account_id();
        self.tokens
            .internal_transfer(&sender_id, &burn_address, &token_id, None, None);
    }
}

// near-contract-standards macros
// near_contract_standards::impl_non_fungible_token_core!(Contract, tokens);
// near_contract_standards::impl_non_fungible_token_enumeration!(Contract, tokens);
near_contract_standards::impl_non_fungible_token_approval!(Contract, tokens);

#[near_bindgen]
impl NonFungibleTokenMetadataProvider for Contract {
    fn nft_metadata(&self) -> NFTContractMetadata {
        self.metadata.get().unwrap()
    }
}

#[near_bindgen]
impl NonFungibleTokenResolver for Contract {
    #[private]
    fn nft_resolve_transfer(
        &mut self,
        previous_owner_id: AccountId,
        receiver_id: AccountId,
        token_id: TokenId,
        approved_account_ids: Option<HashMap<AccountId, u64>>,
    ) -> bool {
        self.tokens.nft_resolve_transfer(
            previous_owner_id,
            receiver_id,
            token_id,
            approved_account_ids,
        )
    }
}

/// from https://github.com/near/near-sdk-rs/blob/e4abb739ff953b06d718037aa1b8ab768db17348/near-contract-standards/src/non_fungible_token/utils.rs#L29

pub fn refund_deposit(storage_used: u64) {
    let required_cost = env::storage_byte_cost() * Balance::from(storage_used);
    let attached_deposit = env::attached_deposit();

    assert!(
        required_cost <= attached_deposit,
        "Must attach {} yoctoNEAR to cover storage",
        required_cost,
    );

    let refund = attached_deposit - required_cost;
    // log!("refund_deposit amount {}", refund);
    if refund > 1 {
        Promise::new(env::predecessor_account_id()).transfer(refund);
    }
}
