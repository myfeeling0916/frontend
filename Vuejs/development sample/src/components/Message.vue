<template>
  <div class="popup_wrapper">
    <div class="popup_mask"></div>
    <div class="popup notice">
      <div class="popup_label">
        <span class="popup_header"></span>
      </div>
      <div class="popup_container">
        <p class="popup_desc light">{{ message }}</p>
      </div>
      <div class="popup_btn_wrapper">
        <div class="popup_btn check" @click="returnPlatform"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { MessageType } from "../libs";

export default {
  props: ["type"],
  methods: {
    ...mapActions("platform", ["returnPlatform"])
  },
  computed: {
    message() {
      let result = "";
      const t = parseInt(this.type, 10);
      switch (t) {
        case MessageType.AccessDenied:
          result = "禁止訪問，點擊確認回到****首頁。";
          break;
        case MessageType.LoginRepeat:
          result =
            "系統發現您發生重複登入，點擊確認後返回******大廳。如有疑問，請洽系統管理員。";
          break;
        case MessageType.LoginFailed:
          result = "登入失敗，點擊確認回到****首頁。";
          break;
        case MessageType.Maintain:
          result = "系統維護中，點擊確認回到****首頁。";
          break;
        case MessageType.SocketClose:
          result = "系統連線中斷，點擊確認回到****首頁。";
          break;
        default:
          result = "系統異常，點擊確認回到****首頁。";
          break;
      }
      return result;
    }
  }
};
</script>

<style>
</style>
