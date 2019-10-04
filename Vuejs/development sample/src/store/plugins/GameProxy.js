import { Base64 } from 'js-base64';
import { Command, CommandMap } from "../../libs"

export function GameProxy(proxy) {

    return store => {

        proxy.store = store;

        proxy.onopen = (e, proxy) => {
            store.dispatch("log/append", ["onopen"]);
            store.dispatch("socket/onopen", {});
        };

        proxy.onclose = (e, proxy) => {
            store.dispatch("socket/onclose", {});
            store.dispatch("log/append", ["onclose"]);
        };

        proxy.onmessage = (e, proxy) => {
            const store = proxy.store;
            const payload = JSON.parse(Base64.decode(e.data));
            const { cmd } = payload;
            switch (cmd) {
                case Command.S2C_PingPongAck:
                    break;
                default:
                    store.dispatch("log/append", ["onmessage", CommandMap[cmd], payload]);
                    break;
            }
            store.dispatch("socket/onmessage", payload);
        };

        proxy.onerror = (e, proxy) => {
            store.dispatch("socket/onerror", {});
            store.dispatch("log/append", ["onerror", e]);
        };

        store.subscribeAction((action, state) => {
            const { type, payload } = action;
            switch (type) {
                case "socket/connect":
                    const { gameServer } = payload;
                    proxy.connect(gameServer);
                    proxy.store.dispatch("log/append", ["connect", gameServer]);
                    break;
                case "socket/send":
                    const { cmd } = payload;
                    switch (cmd) {
                        case Command.C2S_PingPong:
                            break;
                        default:
                            proxy.store.dispatch("log/append", ["send", CommandMap[cmd], payload]);
                            break;
                    }
                    proxy.send(payload);
                    break;
            }
        });

        // store.subscribe((mutation, state) => {

        // });
    }
}