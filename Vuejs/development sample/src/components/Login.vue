<template>
  <div style="position: fixed; top: 0; left:0; width:100%; height: 100%; background: #dedede">
    <p>Account</p>
    <input type="text" v-model="account">
    <button @click="login">login</button>
    <p>{{ token }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  mounted() {
    console.clear();
    window.addEventListener('keyup', this.listenerEnter, false);
  },
  data() {
    return {
      account: "travis",
      token: ""
    };
  },
  computed: {
    ...mapGetters("config", ["api_server"]),
    ...mapState("config", ["api_id", "authorization"]),
    url() {
      return `${this.api_server}/thirdparty/v1/game/${this.api_id}/login`;
    }
  },
  methods: {
    login() {
      const data = {
        account: this.account
      };
      fetch(this.url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.authorization
        })
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          }
        })
        .then(json => {
          if (json === undefined) {
            this.showAlert();
            return;
          }
          const { token } = json;
          if (token === undefined || token.length === 0) {
            this.showAlert();
            return;
          }
          this.token = token;
          this.$store.dispatch("setting/redirect", {
            url: `/?token=${token}`
          });
        })
        .catch(err => {
          console.error(err);
        });
    },
    showAlert() {
      alert("no token!!!");
    },
    listenerEnter(e) {
      if (e.keyCode === 13) {
        this.login();
      }
    }
  },
  destroyed() {
    window.removeEventListener('keyup', this.listenerEnter, false)
  }
};
</script>