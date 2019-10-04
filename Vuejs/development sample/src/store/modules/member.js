const state = {
    user_name: "",
    balance: 0
}

const getters = {

    user_name : (state, getters, rootState, rootGetters) => {
        return state.user_name
    },

    mySelf: (state, getters, rootState, rootGetters) => name => {
        return state.user_name === name
    },
    
}

const actions = {
    setMemberInfo({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        const { name } = payload;
        commit("setMemberInfo", { name });
    },
    setBalance({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        const { balance } = payload;
        commit("setBalance", { balance });
    }
}

const mutations = {
    setMemberInfo(state, payload) {
        const { name } = payload;
        state.user_name = name;
    },
    setBalance(state, payload) {
        const { balance } = payload;
        state.balance = balance;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}