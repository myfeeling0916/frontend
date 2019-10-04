export const Prefix = 8015000;

export const Command = {
    // ErrorMsg
    S2C_ErrorAck: Prefix + 91,
    // Base 
    S2C_MemberBalance: Prefix + 95,
    S2C_MaintainKick: Prefix + 96,
    S2C_MaintainNotify: Prefix + 97,
    S2C_LoginRepeat: Prefix + 98,
    S2C_PingPongAck: Prefix + 99,
    C2S_MemberBalance: Prefix + 195,
    C2S_PingPong: Prefix + 199,
    S2C_LoginAck: Prefix + 50,
    S2C_WalletTransferAck: Prefix + 51,
    S2C_LogoutAck: Prefix + 52,
    C2S_Login: Prefix + 150,
    C2S_WalletTransfer: Prefix + 151,
    C2S_Logout: Prefix + 152,  
    S2C_LobbyInfo: Prefix + 1,          // 大廳資訊
    S2C_LobbyUpdate: Prefix + 2,        // 路圖更新
    S2C_OccupiedUpdate: Prefix + 3,     // 房間佔領狀態更新
    S2C_JoinRoomAck: Prefix + 4,      // 選擇房間回應
    C2S_JoinRoom: Prefix + 104,       // 選擇房間
    S2C_LeaveRoomAck: Prefix + 5,       // 離開房間
    C2S_LeaveRoom: Prefix + 105,        // 離開房間
    S2C_RoomInfo: Prefix + 10,          // 房間資訊
    S2C_RoomUpdate: Prefix + 11,        // 房間路圖更新
    S2C_BetAck: Prefix + 12,            // 下注回應
    C2S_Bet: Prefix + 112,              // 下注
    S2C_BetSummary: Prefix + 13,        // 下注同步廣播
    S2C_SelectOptionAck: Prefix + 14,   // 選項回應
    C2S_SelectOption: Prefix + 114,     // 選擇選項
    S2C_SelectSummary: Prefix + 15,     // 選項同步廣播
    S2C_JoinSeatAck: Prefix + 16,       // 加入座位
    C2S_JoinSeat: Prefix + 116,         // 選擇座位
    S2C_LeaveSeatAck: Prefix + 17,      // 離開座位
    C2S_LeaveSeat: Prefix + 117,        // 離開座位
    S2C_SeatUpdate: Prefix + 18,        // 房間座位更新
    S2C_RoundStart: Prefix + 30,        // 回合開始
    S2C_Shuffle: Prefix + 31,           // 洗牌
    S2C_BetStart: Prefix + 32,          // 下注開始
    S2C_Bet: Prefix + 33,               // 下注期間持續廣播秒數
    S2C_BetEnd: Prefix + 34,            // 下注結束
    S2C_DealCard: Prefix + 35,          // 發牌
    S2C_Bonus: Prefix + 36,             // 顯示對注中獎區域
    S2C_BonusPayout: Prefix + 37,       // 對注派彩
    S2C_BankerSelect: Prefix + 38,      // 莊家刁牌動畫
    S2C_SendOption: Prefix + 39,        // 送出刁牌選項
    S2C_SelectStar: Prefix + 40,        // 開始刁牌
    S2C_Select: Prefix + 41,            // 刁牌期間廣播秒數
    S2C_SelectEnd: Prefix + 42,         // 刁牌結束
    S2C_BankerShow: Prefix + 43,        // 莊家開牌
    S2C_Compare: Prefix + 44,           // 比牌階段
    S2C_BetPayout: Prefix + 45,         // 顯示底注中獎區域並派彩
    S2C_TotalPayout: Prefix + 46,       // 該局玩家總贏
    S2C_Result: Prefix + 47,            // 更新路圖
    S2C_RoundEnd: Prefix + 48           // 回合結束
}

export const CommandMap = {
    // ErrorMsg
    [Command.S2C_ErrorAck]: "S2C_ErrorAck",
    // Base  
    [Command.S2C_MemberBalance]: "S2C_MemberBalance",
    [Command.S2C_MaintainKick]: "S2C_MaintainKick",
    [Command.S2C_MaintainNotify]: "S2C_MaintainNotify",
    [Command.S2C_LoginRepeat]: "S2C_LoginRepeat",
    [Command.S2C_PingPongAck]: "S2C_PingPongAck",
    [Command.C2S_MemberBalance]: "C2S_MemberBalance",
    [Command.C2S_PingPong]: "C2S_PingPong",
    [Command.C2S_LeaveRoom]: "C2S_LeaveRoom",
    // Login
    [Command.S2C_LoginAck]: "S2C_LoginAck",
    [Command.S2C_WalletTransferAck]: "S2C_WalletTransferAck",
    [Command.S2C_LogoutAck]: "S2C_LogoutAck",
    [Command.C2S_Login]: "C2S_Login",
    [Command.C2S_WalletTransfer]: "C2S_WalletTransfer",
    [Command.C2S_Logout]: "C2S_Logout",
    [Command.S2C_LobbyInfo]: "S2C_LobbyInfo",
    [Command.S2C_LobbyUpdate]: "S2C_LobbyUpdate",
    [Command.S2C_OccupiedUpdate]: "S2C_OccupiedUpdate",
    [Command.S2C_JoinRoomAck]: "S2C_JoinRoomAck",
    [Command.C2S_JoinRoom]: "C2S_JoinRoom",
    [Command.S2C_LeaveRoomAck]: "S2C_LeaveRoomAck",
    [Command.S2C_RoomInfo]: "S2C_RoomInfo",
    [Command.S2C_RoomUpdate]: "S2C_RoomUpdate",
    [Command.C2S_Bet]: "C2S_Bet",
    [Command.S2C_BetAck]: "S2C_BetAck",
    [Command.S2C_BetSummary]: "S2C_BetSummary",
    [Command.S2C_SelectOptionAck]: "S2C_SelectOptionAck",
    [Command.C2S_SelectOption]: "C2S_SelectOption",
    [Command.S2C_SelectSummary]: "S2C_SelectSummary",
    [Command.S2C_JoinSeatAck]: "S2C_JoinSeatAck",
    [Command.C2S_JoinSeat]: "C2S_JoinSeat",
    [Command.S2C_LeaveSeatAck]: "S2C_LeaveSeatAck",
    [Command.C2S_LeaveSeat]: "C2S_LeaveSeat",
    [Command.S2C_SeatUpdate]: "S2C_SeatUpdate",
    [Command.S2C_RoundStart]: "S2C_RoundStart",
    [Command.S2C_Shuffle]: "S2C_Shuffle",
    [Command.S2C_BetStart]: "S2C_BetStart",
    [Command.S2C_Bet]: "S2C_Bet",
    [Command.S2C_BetEnd]: "S2C_BetEnd",
    [Command.S2C_DealCard]: "S2C_DealCard",
    [Command.S2C_Bonus]: "S2C_Bonus",
    [Command.S2C_BonusPayout]: "S2C_BonusPayout",
    [Command.S2C_BankerSelect]: "S2C_BankerSelect",
    [Command.S2C_SendOption]: "S2C_SendOption",
    [Command.S2C_SelectStar]: "S2C_SelectStar",
    [Command.S2C_Select]: "S2C_Select",
    [Command.S2C_SelectEnd]: "S2C_SelectEnd",
    [Command.S2C_BankerShow]: "S2C_BankerShow",
    [Command.S2C_Compare]: "S2C_Compare",
    [Command.S2C_BetPayout]: "S2C_BetPayout",
    [Command.S2C_TotalPayout]: "S2C_TotalPayout",
    [Command.S2C_Result]: "S2C_Result",
    [Command.S2C_RoundEnd]: "S2C_RoundEnd"
}