import { Howl, Howler } from "howler"
import { BGMDefine, EffectDefine } from "../../libs"

export function SoundManager(store) {
    const dict = {};
    const bgmArray = BGMDefine;
    const effectArray = EffectDefine;

    bgmArray.forEach(key => {
        dict[key] = new Howl({
            src: [`media/bgm/${key}.mp3`],
            preload: true,
            loop: true
        });
    });

    effectArray.forEach(key => {
        dict[key] = new Howl({
            src: [`media/effect/${key}.mp3`],
            preload: true,
            loop: false
        });
    });

    store.subscribeAction((action, state) => {
        const { type, payload } = action;
        if (type.indexOf("music/") === 0) {
            const action = type.slice(6);
            if (action === "pageHidden") {
                Howler.mute(payload);
            }
            else if (action === "stopSounds") {
                effectArray.forEach(key => {
                    dict[key].stop();
                });
            }
            else {
                const target = dict[payload];
                if (target === undefined) {
                    return;
                }
                switch (action) {
                    case "playSound":
                        target.stop();
                        target.play();
                        break;
                    case "stopSound":
                        target.stop();
                        break;
                }
            }
        }
    });

    store.subscribe((mutation, state) => {
        const type = mutation.type;
        let mute = false;
        let targets = [];
        let process = false;
        if (type.indexOf("music/") === 0) {
            switch (type) {
                case "music/bgmSwitch":
                    process = true;
                    targets = bgmArray;
                    mute = !state.music.bgm;
                    break;
                case "music/effectSwitch":
                    process = true;
                    targets = effectArray;
                    mute = !state.music.effect;
                    break;
            }
        }
        if (process) {
            const vol = mute ? 0 : 1;
            targets.forEach(key => {
                const sound = dict[key];
                sound.volume(vol);
                //sound.mute(mute);
            });
        }
    });
}