import Vue from "vue"
import Vuex from "vuex"
import { SocketProxy } from "../libs"
import { GameProxy, SoundManager } from "./plugins"
import history from "./modules/history"
import setting from "./modules/setting"
import socket from "./modules/socket"
import game from "./modules/game"
import popup from "./modules/popup"
import music from "./modules/music"
import lobby from "./modules/lobby"
import room from "./modules/room"
import config from "./modules/config"
import platform from "./modules/platform"
import log from "./modules/log"
import member from "./modules/member"
import bet from "./modules/bet"

const proxyGame = new SocketProxy();
const plguinGame = GameProxy(proxyGame);

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    getters: {},
    actions: {},
    mutations: {},
    modules: {
        history, setting, socket, game, popup, lobby, room, config, platform, log, member, music, bet
    },
    plugins: [
        plguinGame,
        SoundManager
    ]
})