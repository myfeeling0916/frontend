export const BetZoneDefine = [
  "bet_left",
  "bet_center",
  "bet_right",
  "bet_host"
];

export const PlayerPosition = BetZoneDefine.slice(0, 3);

export const BetZoneInitData = code => {
  return {
    code,
    info: [
        { temp: 0, bet: 0, backup: 0, total: 0, pay: 0, done: false },
        { temp: 0, bet: 0, backup: 0, total: 0, pay: 0, done: false }
    ],
    addDone: false,
    betDone: false,
  }
}

export const BetZoneCardInitData = code => {
  return {
    code,
    info: [
      { flip: true, deal: false, card: "" },
      { flip: true, deal: false, card: "" },
      { flip: true, deal: false, card: "" },
      { flip: true, deal: false, card: "" }
    ],
    option: [],
    type: -1,
    bet: false,
    select: false,
    showPoint: false,
    done: false,
    win: true,
    win_result: ""
  }
}

export const IdleCount = {
  bet_left: { val: 0, isCount: false},
  bet_center: { val: 0, isCount: false},
  bet_right: { val: 0, isCount: false},
}

export const BetZoneMap = {
  "bet_left": "left",
  "bet_center": "center",
  "bet_right": "right",
  "bet_host": "host"
};

export const PositionMap = {
  "banker": "莊家",
  "right": "右位",
  "center": "中位",
  "left": "左位",
}

export const CardsTypeMap = {
  800: "one-pair",
  801: "two-pair",
  802: "three",
  803: "straight",
  804: "flush",
  805: "four-gong",
  806: "straight-flush",
  807: "fourknife",
  "-1": "lose",
}

export const CardsTypeZhMap = {
  800   : "一對",
  801   : "兩對",
  802   : "三條",
  803   : "順子",
  804   : "同花",
  805   : "四公",
  806   : "同花順",
  807   : "四支刀",
  0     : "逼機",
  0.5   : "半點",
  1     : "1點",
  1.5   : "1點半",
  2     : "2點",
  2.5   : "2點半",
  3     : "3點",
  3.5   : "3點半",
  4     : "4點",
  4.5   : "4點半",
  5     : "5點",
  5.5   : "5點半",
  6     : "6點",
  6.5   : "6點半",
  7     : "7點",
  7.5   : "7點半",
  8     : "8點",
  8.5   : "8點半",
  9     : "9點",
  9.5   : "9點半",
  10    :	"囉嗦",
  22    :	"2對子",
  33    :	"3對子",
  44    : "4對子",
  55    :	"5對子",
  66    :	"6對子",
  77    :	"7對子",
  88    :	"8對子",
  99    :	"9對子",
  1010  :	"10對子",
  1111  :	"J對子",
  1212  :	"Q對子",
  1313  :	"K對子",
  1414  :	"A對子",
  13130 :	"四支刀",
  12120 :	"四支刀",
  11110 :	"四支刀",
  10100 :	"四支刀",
  9900  :	"四支刀",
  8800  :	"四支刀",
  7700  :	"四支刀",
  6600  :	"四支刀",
  5500  :	"四支刀",
  4400  :	"四支刀",
  3300  :	"四支刀",
  2200  :	"四支刀",
  14140 :	"四支刀",
}

export const CardsPointClassMap = {
  0   : "point_0",
  0.5 : "point_1",
  1   : "point_2",
  1.5 : "point_11",
  2   : "point_3",
  2.5 : "point_12",
  3   : "point_4",
  3.5 : "point_13",
  4   : "point_5",
  4.5 : "point_14",
  5   : "point_6",
  5.5 : "point_15",
  6   : "point_7",
  6.5 : "point_16",
  7   : "point_8",
  7.5 : "point_17",
  8   : "point_9",
  8.5 : "point_18",
  9   : "point_10",
  9.5 : "point_19"
}

export const CardsPairClassMap = {
  10    : "luoso",
  1414  : "pair pair_1",
  22    : "pair pair_2",
  33    : "pair pair_3",
  44    : "pair pair_4",
  55    : "pair pair_5",
  66    : "pair pair_6",
  77    : "pair pair_7",
  88    : "pair pair_8",
  99    : "pair pair_9",
  1010  : "pair pair_10",
  1111  : "pair pair_11",
  1212  : "pair pair_12",
  1313  : "pair pair_13",
  13130 :	"fourknife",
  12120 :	"fourknife",
  11110 :	"fourknife",
  10100 :	"fourknife",
  9900  :	"fourknife",
  8800  :	"fourknife",
  7700  :	"fourknife",
  6600  :	"fourknife",
  5500  :	"fourknife",
  4400  :	"fourknife",
  3300  :	"fourknife",
  2200  :	"fourknife",
  14140 :	"fourknife",
}

export const CardPointColorMap = {
  10    :	"yellow",
  1414  :	"blue",
  22    :	"blue",
  33    :	"blue",
  44    : "blue",
  55    :	"blue",
  66    :	"blue",
  77    :	"blue",
  88    :	"blue",
  99    :	"blue",
  1010  :	"blue",
  1111  :	"blue",
  1212  :	"blue",
  1313  :	"blue",
  13130 :	"red",
  12120 :	"red",
  11110 :	"red",
  10100 :	"red",
  9900  :	"red",
  8800  :	"red",
  7700  :	"red",
  6600  :	"red",
  5500  :	"red",
  4400  :	"red",
  3300  :	"red",
  2200  :	"red",
  14140 :	"red",
}