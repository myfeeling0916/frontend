export const GameState = {
  Init: 0,
  GameStart: 1,
  Shuffle: 2,
  BettingBase: 3,
  BettingBaseEnd: 4,
  DealBase: 5,
  Bonus: 6,
  BonusPayout: 7,
  BankerSelect: 8,
  SendOption: 9,
  SelectStar: 10,
  SelectCountdown: 11,
  ShowBankerCard: 12,
  BetPayout: 13,
  TotalPayout: 14,
  Result: 15,
  Settlement: 16,
  GameEnd: 17
}

export const GameStateMap = {
  "shuffle": GameState.Shuffle,
  "onebet": GameState.BettingBase,
  "sendcard": GameState.DealBase,
  "showresult": GameState.Result,
  "showbouns": GameState.Settlement,
  "gameend": GameState.GameEnd
}