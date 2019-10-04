const state = {
}

const getters = {
    debug: (state, getters, rootState, rootGetters) => {
        return rootState.config.debug;
    },
}

const actions = {
    clear({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        console.clear();
    },
    append({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        if (getters.debug) {
            console.log(new Date(), ...payload);
        }
    },
    table({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        if (getters.debug) {
            console.table(payload);
        }
    }
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