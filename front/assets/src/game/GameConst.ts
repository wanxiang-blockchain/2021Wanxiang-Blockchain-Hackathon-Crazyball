import SingletonClass from '../common/base/SingletonClass';

export default class theme_configGameConst extends SingletonClass {
  static ins() {
    return super.ins() as GameConst;
  }

  readonly ball_init_x = 0;
  readonly ball_init_y = -540;
  readonly ball_speed = 1000;
  readonly ball_radius = 15;

  readonly brick_radius = 43;
  readonly brick_init_x = 0;
  readonly brick_init_y = 600;

  readonly max_ball_init_count = 60;
  readonly max_ball_fire_speed = 10;

  readonly theme_price = 500;
  readonly sign_interval_sec = 3600;

  readonly theme_config: { color: cc.Color[]; theme: string }[] = [
    {
      color: [
        cc.color(242, 242, 242),
        cc.color(24, 225, 156),
        cc.color(20, 186, 242),
        cc.color(188, 85, 250),
        cc.color(238, 196, 39),
        cc.color(244, 110, 57),
        cc.color(199, 53, 67),
      ],
      theme: 'theme0'
    }
  ];

  readonly brick_type_percent = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0, //正方形
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1, //圆
    2,
    2,
    2,
    2,
    2, //六边形
    3, //三角1
    4, //三角2
    5, //三角3
    6, //三角4
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7, //球
    8,
    8, //星1 正
    9, //星1 圆
    10 //星2 六
  ];
}
