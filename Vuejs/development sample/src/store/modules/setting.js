const state = {

    preload: [],
    progress: 0,
    isProgressing: false,
    isLoading: false,
    version: "",
    debug: false
}

const getters = {

    version: (state, getters, rootState, rootGetters) => {
        return state.version
    },
    
}

const actions = {

    showProgressing({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        commit("setProgressing", { display: true });
    },

    hideProgressing({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        commit("setProgressing", { display: false });
    },

    setProgress({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        commit("setProgress", payload);
    },

    showLoading({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        commit("setLoading", { display: true });
    },

    hideLoading({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        commit("setLoading", { display: false });
    },

    redirect({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        const { url } = payload;
        window.location.replace(url);
    },

    redirectMessage({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        const { type } = payload;
        const url = `/message?type=${type}`;
        window.location.replace(url);
    },

    log({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
        if (state.debug) {
            console.log(...payload);
        }
    }
}

const mutations = {

    setPreload(state, payload) {
        const { preload } = payload;
        state.preload = preload;
    },

    setProgress(state, payload) {
        const { percent } = payload;
        state.progress = percent;
    },

    setProgressing(state, payload) {
        const { display } = payload;
        state.isProgressing = display;
    },

    setLoading(state, payload) {
        const { display } = payload;
        state.isLoading = display;
    },

    setVersion(state, payload) {
        const { version } = payload.version;
        state.version = version;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}