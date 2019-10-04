import { CoinMap, JwtPayload } from "../../libs"

const state = {
    token: "",
    wallet: [],
    walletInfo: [],
    todo: "",
    transferLock: false
}

const getters = {
    walletInfo: (state, getters, rootState, rootGetters) => {
        const enabled = state.walletInfo.filter(coin => coin.status === 1);
        const sorted = enabled.sort((a, b) => {
            return a.sort - b.sort;
        });
        const result = sorted.map(coin => {
            const target = state.wallet.find(item => item.type === coin.type);
            return {
                ...coin,
                name: CoinMap[coin.type],
                class: `type_0${coin.type}`,
                amount: target.amount
            }
        })
        return result;
    },
    walletUrl: (state, getters, rootState, rootGetters) => {
        const api_server = rootGetters["config/api_server"];
        return `${api_server}/userinfo`;
    }
}

const actions = {
    setToken({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        const { token } = payload;
        const { game_id, member_token, origin: redirect_url } = JwtPayload(token);
        commit("setToken", { token });
        dispatch("config/setConfig", { game_id, member_token, redirect_url }, { root: true });
    },
    setWallet({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        const { wallet } = payload;
        commit("setWallet", { wallet });
    },
    setWalletInfo({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        const { walletInfo } = payload;
        commit("setWalletInfo", { walletInfo });
    },
    returnPlatform({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        const url = rootState.config.redirect_url;
        window.location.replace(url);
    },
    refreshWallet({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        dispatch("setting/showLoading", {}, { root: true });
        let formData = new FormData();
        formData.append("token", state.token);
        fetch(getters.walletUrl, {
            method: "post",
            body: formData
        })
            .then(response => {
                dispatch("setting/hideLoading", {}, { root: true });
                return response.json();
            })
            .then(json => {
                const { user_coin_quota } = json;
                dispatch("setWallet", { wallet: user_coin_quota.concat() });
            })
            .catch(function (err) {
            });
    },
    doQuit({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        commit("setTodo", { todo: "quit" });
        if (rootGetters["game/inRoom"] === true) {
            dispatch("game/C2S_LeaveRoom", {}, { root: true });
        } else {
            dispatch("game/C2S_Logout", {}, { root: true });
        }
    },
    doTransfer({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        commit("setTodo", { todo: "transfer" });
        if (rootGetters["game/inRoom"] === true) {
            dispatch("game/C2S_LeaveRoom", {}, { root: true });
        } else {
            dispatch("game/C2S_Logout", {}, { root: true });
        }
    },
    setSettle({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        const { amount_coin } = payload;
        const keys = Object.keys(amount_coin);
        const settle = keys.map(key => {
            return {
                type: parseInt(key.replace("coin", ""), 10),
                amount: amount_coin[key]
            };
        });
        commit("setSettle", { settle });
    },
    settleConfirm({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        switch (state.todo) {
            case "quit":
                commit("setTodo", { todo: "" });
                dispatch("returnPlatform", {});
                break;
            case "transfer":
                commit("setTodo", { todo: "" });
                dispatch("socket/C2S_Login", {}, { root: true });
                break;
        }
    },

    lockTransfer({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        commit("setTransferLock", { transferLock: true });
    },
    
    unlockTransfer({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        commit("setTransferLock", { transferLock: false });
    },
}

const mutations = {
    setToken(state, payload) {
        const { token } = payload;
        state.token = token;
    },
    setWallet(state, payload) {
        const { wallet } = payload;
        state.wallet = wallet;
    },
    setWalletInfo(state, payload) {
        const { walletInfo } = payload;
        state.walletInfo = walletInfo;
    },
    setSettle(state, payload) {
        const { settle } = payload;
        settle.forEach(coin => {
            const target = state.wallet.find(item => item.type == coin.type);
            target.amount = coin.amount;
        });
    },
    setTodo(state, payload) {
        const { todo } = payload;
        state.todo = todo;
    },
    
    setTransferLock(state, payload) {
        const { transferLock } = payload;
        state.transferLock = transferLock;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}