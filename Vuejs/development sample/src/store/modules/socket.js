import { 
    Command, 
    CommandMap, 
    Popup, 
    MessageType,
    GameState,
} from "@/libs"

const state = {}

const getters = {
}

const actions = {
    
    onopen({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        dispatch(CommandMap[Command.C2S_Login], {});
    },
    
    onmessage({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        const { cmd, data } = payload;
        dispatch(CommandMap[cmd.toString()], payload);
    },
    
    onclose({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        dispatch("setting/redirectMessage", { type: MessageType.SocketClose }, { root: true });
    },
    
    onerror({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
    },
    
    connect({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
    },
    
    beforeSend({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        const token = rootState.platform.token;
        dispatch("send", {
            ...payload,
            meta: {
                token: [token]
            }
        });
    },
    
    send({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {},
    
    C2S_Login({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        dispatch("setting/showLoading", {}, { root: true });
        dispatch("beforeSend", { cmd: Command.C2S_Login });
    },

    S2C_LoginAck({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        dispatch("setting/hideProgressing", {}, { root: true });
        dispatch("setting/hideLoading", {}, { root: true });
        dispatch("game/S2C_LoginAck", payload, { root: true });
    },

    C2S_WalletTransfer({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        dispatch("setting/showLoading", {}, { root: true });
        dispatch("beforeSend", { cmd: Command.C2S_WalletTransfer, data: payload });
    },

    S2C_WalletTransferAck({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        dispatch("setting/hideLoading", {}, { root: true });
        dispatch("game/S2C_WalletTransferAck", payload, { root: true });
    },

    C2S_Logout({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        dispatch("setting/showLoading", {}, { root: true });
        dispatch("beforeSend", { cmd: Command.C2S_Logout, data: payload });
    },

    S2C_LogoutAck({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        dispatch("setting/hideLoading", {}, { root: true });
        dispatch("game/S2C_LogoutAck", payload, { root: true });
    },

    C2S_PingPong({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        dispatch("beforeSend", { cmd: Command.C2S_PingPong, data: payload });
    },

    S2C_PingPongAck({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        setTimeout(() => {
            dispatch("C2S_PingPong", {});
        }, 10000);
    },

    C2S_MemberBalance({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        dispatch("beforeSend", { cmd: Command.C2S_MemberBalance, data: payload });
    },

    S2C_MemberBalance({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        dispatch("game/S2C_MemberBalance", payload, { root: true });
    },

    S2C_ErrorAck({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        const { cmd, data } = payload;
    },
    
    S2C_LoginRepeat({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        dispatch("setting/showLoading", {}, { root: true });
        dispatch("setting/redirectMessage", { type: MessageType.LoginRepeat }, { root: true });
    },
    
    S2C_MaintainKick({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        dispatch("setting/showLoading", {}, { root: true });
        dispatch("setting/redirectMessage", { type: MessageType.Maintain }, { root: true });
    },
    
    S2C_MaintainNotify({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        const temp = rootState.popup.current;
        if (temp !== Popup.None) {
            commit("popup/setTemp", { temp }, { root: true });
        }
        dispatch("popup/showMessage", { message: "伺服器即將進入維護，請玩家盡早下線。" }, { root: true });
    },

    C2S_JoinRoom({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        dispatch("setting/showLoading", {}, { root: true });
        dispatch("beforeSend", { cmd: Command.C2S_JoinRoom, data: payload });
    },

    C2S_LeaveRoom({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        dispatch("setting/showLoading", {}, { root: true });
        dispatch("beforeSend", { cmd: Command.C2S_LeaveRoom, data: payload });
    },

    S2C_LeaveRoomAck({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        const { success } = payload; 
        if (success) {
            dispatch("game/changeState", { gameState: GameState.Init }, { root: true });
            commit("bet/clearCardType", {}, { root: true });
            commit("bet/clearBet", {}, { root: true });
            commit("bet/clearBetDone", {}, { root: true });
            commit("bet/clearTemp", {}, { root: true });
            commit("bet/clearTotal", {}, { root: true });
            commit("bet/clearPayInfo", {}, { root: true });
            commit("bet/clearSelectOptions", {}, { root: true });
            commit("bet/resetCountCondition", {}, { root: true });
            commit("bet/clearCardInfo", {}, { root: true });
            dispatch("C2S_MemberBalance", {});
        }
    },

    S2C_JoinRoomAck({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        const { cmd, data, success } = payload;
        dispatch("setting/hideLoading", {}, { root: true });
        if (success) {
            commit("bet/setNoBetTimes", { times: 0 }, { root: true });
            commit("bet/clearBet", {}, { root: true });
            commit("bet/clearBetDone", {}, { root: true });
            commit("bet/clearTemp", {}, { root: true });
            commit("bet/clearTotal", {}, { root: true });
            commit("bet/clearBackup", {}, { root: true });
            commit("bet/clearCardInfo", {}, { root: true });
            commit("bet/clearPayInfo", {}, { root: true });
            commit("bet/resetIdelCount", {}, { root: true });
            dispatch("game/setCountTime", { time: 0 }, { root: true });
            dispatch("game/hideSettle", {}, { root: true });
            dispatch("game/hideResult", {}, { root: true });
            dispatch("game/JoinRoom", { data }, { root: true });
        } else {
            dispatch("popup/showMessage", { message: "正在結算，請稍後再進入。" }, { root: true });
        }
    },

    S2C_OccupiedUpdate({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        const { data } = payload
        dispatch("lobby/updateRoomInfo", { data }, { root: true }); 
    },

    C2S_JoinSeat({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        dispatch("beforeSend", { cmd: Command.C2S_JoinSeat, data: payload });
    },

    S2C_JoinSeatAck({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        const { success } = payload
        if (success) {
            
        }
    },

    C2S_LeaveSeat({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        dispatch("beforeSend", { cmd: Command.C2S_LeaveSeat, data: payload });
    },

    S2C_LeaveSeatAck({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        
    },

    S2C_SeatUpdate({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        const { data } = payload
        dispatch("lobby/updateRoomInfo", { data }, { root: true }); 
    },

    S2C_LobbyInfo({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        dispatch("setting/hideLoading", {}, { root: true });
        dispatch("game/enterLobby", payload, { root: true });
    },

    S2C_LobbyUpdate({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        dispatch("lobby/updateRooms", payload, { root: true });
    },

    S2C_RoundStart({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        const { data } = payload;
        dispatch("game/hideSettle", {}, { root: true });
        dispatch("game/hideResult", {}, { root: true });
        dispatch("lobby/updateRoundInfo", { data, id: rootState.game.tableId }, { root: true });
        dispatch("game/changeState", { gameState: GameState.GameStart }, { root: true });
        dispatch("game/playEnable", { playEnable: true }, { root: true });
        dispatch("bet/setIdleCount", {}, { root: true });
    },

    S2C_Shuffle({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        dispatch("game/changeState", { gameState: GameState.Shuffle }, { root: true });
        dispatch("game/playEnable", { playEnable: true }, { root: true });
    },

    S2C_BetStart({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        dispatch("game/playEnable", { playEnable: true }, { root: true });
    },

    S2C_Bet({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        const { cmd, data } = payload;
        const { time } = data;
        dispatch("game/setCountTime", { time }, { root: true });
        dispatch("game/changeState", { gameState: GameState.BettingBase }, { root: true });
        dispatch("game/playEnable", { playEnable: true }, { root: true });
    },

    C2S_Bet({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        dispatch("setting/showLoading", {}, { root: true });
        dispatch("beforeSend", { cmd: Command.C2S_Bet, data: payload });
        dispatch("game/playEnable", { playEnable: true }, { root: true });
    },

    S2C_BetAck({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        const { success } = payload;
        dispatch("setting/hideLoading", {}, { root: true });
        dispatch("game/playEnable", { playEnable: true }, { root: true });
        if (success) {
            dispatch("music/playSound", "bet_success", { root: true });
            dispatch("bet/betBaseSuccess", {}, { root: true });
            dispatch("game/showTip", { message: "下注成功", safe: true, duration: 1000 }, { root: true });
        }
        else {
            dispatch("music/playSound", "bet_failed", { root: true });
            dispatch("game/showTip", { message: "下注失敗", safe: false, duration: 1000 }, { root: true });
        }
    },

    S2C_BetEnd({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        if (!rootState.game.playEnable) return;
        dispatch("game/changeState", { gameState: GameState.BettingBaseEnd }, { root: true });
        dispatch("game/setCountTime", { time: 0 }, { root: true });
        commit("bet/backup", {}, { root: true });
    },

    S2C_BetSummary({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        const { success, data } = payload;
        if (success) {
            dispatch("bet/betSummary", payload, { root: true });
        }
    },

    S2C_DealCard({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        if (!rootState.game.playEnable) return;
        dispatch("game/changeState", { gameState: GameState.DealBase }, { root: true });
        dispatch("bet/setClientCards", payload, { root: true });
    },

    S2C_Bonus({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        if (!rootState.game.playEnable) return;
        dispatch("game/changeState", { gameState: GameState.Bonus }, { root: true });
        const { data, success } = payload
        if (success) {
            dispatch("bet/highlight", { data, target: "bonus", enable: true }, { root: true });
        }
    },

    S2C_BonusPayout({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        if (!rootState.game.playEnable) return;
        const { success, data } = payload;
        dispatch("game/changeState", { gameState: GameState.BonusPayout }, { root: true });
        if (success) {
            dispatch("bet/bonusPayout", payload, { root: true });
        }
    },

    S2C_BankerSelect({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        if (!rootState.game.playEnable) return;
        dispatch("game/changeState", { gameState: GameState.BankerSelect }, { root: true });
        dispatch("music/playSound", "bankerSelect", { root: true });
        setTimeout(() => {
            dispatch("bet/setCardSelect", { position: "bet_host", select: true }, { root: true })
        }, 2000)
    },

    S2C_SendOption({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        if (!rootState.game.playEnable) return;
        const { success, data } = payload;
        dispatch("game/changeState", { gameState: GameState.SendOption }, { root: true });
        if (success) {
            dispatch("bet/setSelectOptions", payload, { root: true });
        }
    },

    C2S_SelectOption({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        if (!rootState.game.playEnable) return;
        dispatch("beforeSend", { cmd: Command.C2S_SelectOption, data: payload });
    },

    S2C_SelectStar({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        if (!rootState.game.playEnable) return;
        dispatch("game/changeState", { gameState: GameState.SelectStar }, { root: true });
        setTimeout(() => dispatch("music/playSound", "playerSelect", { root: true }), 1500)
    },
    
    S2C_SelectOptionAck({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {

    },

    S2C_Select({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        if (!rootState.game.playEnable) return;
        const { time } = payload.data;
        dispatch("game/setCountTimeSelectCard", { time }, { root: true });
        dispatch("game/changeState", { gameState: GameState.SelectCountdown }, { root: true });
    },

    S2C_SelectSummary({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        if (!rootState.game.playEnable) return;
        const { success, data } = payload;
        if (success) {
            payload.isSelectSummary = true;
            dispatch("bet/setClientCards", payload, { root: true });
        }
    },

    S2C_SelectEnd({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        if (!rootState.game.playEnable) return;
        dispatch("game/setCountTimeSelectCard", { time: 0 }, { root: true });
    },

    S2C_BankerShow({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        if (!rootState.game.playEnable) return;
        dispatch("game/changeState", { gameState: GameState.ShowBankerCard }, { root: true });
        dispatch("bet/bankerCardOpen", payload, { root: true });
    },

    S2C_Compare({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {

    },

    S2C_BetPayout({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        if (!rootState.game.playEnable) return;
        dispatch("game/changeState", { gameState: GameState.BetPayout }, { root: true });
        dispatch("bet/betPayout", payload, { root: true });
    },

    S2C_TotalPayout({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        const { data } = payload;
        dispatch("game/showSettle", payload, { root: true });
        if (data.pay > 0) {
            dispatch("music/playSound", "win", { root: true });
            dispatch("music/playSound", "coin_rain", { root: true });
        } else if (data.pay === 0) {
            dispatch("game/showTip", { message: `平手 $${Math.abs(data.pay)}`, duration: -1, safe: true }, { root: true });
        } else {
            dispatch("music/playSound", "refueling", { root: true });
            dispatch("game/showTip", { message: `您輸了 $${Math.abs(data.pay)}`, duration: -1, safe: false }, { root: true });
        }
        setTimeout(() => {
            dispatch("game/hideTip", {}, { root: true });
            dispatch("game/hideSettle", {}, { root: true });
            dispatch("music/stopSound", "coin_rain", { root: true });
        },  2000)
        dispatch("game/changeState", { gameState: GameState.Settlement }, { root: true });
    },

    S2C_Result({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        if (!rootState.game.playEnable) return;
        const { data } = payload;
        dispatch("game/changeState", { gameState: GameState.Result, data }, { root: true });
        dispatch("bet/setGameResult", { data }, { root: true });
        dispatch("lobby/updateGameResult", { data, id: rootState.game.tableId }, { root: true });
    },

    S2C_RoundEnd({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        const { data } = payload;
        dispatch("game/changeState", { gameState: GameState.GameEnd }, { root: true });
        commit("bet/clearCardType", {}, { root: true });
        commit("bet/clearBet", {}, { root: true });
        commit("bet/clearBetDone", {}, { root: true });
        commit("bet/clearTemp", {}, { root: true });
        commit("bet/clearTotal", {}, { root: true });
        commit("bet/clearPayInfo", {}, { root: true });
        commit("bet/clearSelectOptions", {}, { root: true });
        commit("bet/resetCountCondition", {}, { root: true });
        dispatch("bet/checkNoBet", { betInfo: rootState.bet.betInfo }, { root: true });
        dispatch("C2S_MemberBalance", {});
        setTimeout(() => {
            commit("bet/clearCardInfo", {}, { root: true });
        }, 300);
    },

}

const mutations = {

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}