const state = {
    bgm: true,
    effect: true,
}

const getters = {

}

const actions = {

    playSoundIfNone({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {

    },

    playSound({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {

    },

    stopSound({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {

    },

    stopSounds({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {

    },

    pageHidden({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
    }
}

const mutations = {

    bgmSwitch(state, payload) {
        state.bgm = !state.bgm;
    },

    effectSwitch(state, payload) {
        state.effect = !state.effect;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}