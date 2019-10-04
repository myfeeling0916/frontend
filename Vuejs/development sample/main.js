import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import VueSessionStorage from 'vue-sessionstorage'
Vue.use(VueSessionStorage);

import Vue2Filters from "vue2-filters"
Vue.use(Vue2Filters);

import { PadStart, Moment, ChipVal, ThousandSeprator } from "./filters"
Vue.filter("padStart", PadStart);
Vue.filter("moment", Moment);
Vue.filter("chipVal", ChipVal);

import visibility from 'vue-visibility-change';
Vue.use(visibility);
const handler = visibility.change((evt, hidden) => {
  store.dispatch("music/pageHidden", hidden);
});

let configRequest = fetch("/config.json").then(resp => { return resp.json() })
let preloadRequest = fetch("/preload.json").then(resp => { return resp.json() })
// let versionRequest = fetch("/version.json").then(resp => { return resp.json() })
const requests = [configRequest, preloadRequest];

Promise.all(requests)
  .then(results => {
    const conf = results[0];
    const preload = results[1];
    // const version = results[2];

    if (conf === undefined) {
      console.error("config undefined");
      return;
    }

    store.dispatch("config/setConfig", conf);
    store.commit("setting/setPreload", { preload });
    // store.commit("setting/setVersion", { version });

    new Vue({
      el: '#app',
      router,
      store,
      render: h => h(App)
    }).$mount("#app")

  });