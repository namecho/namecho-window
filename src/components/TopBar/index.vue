<template>
  <div class="top-bar">
    <div class="left">
      <div class="header">留言系统</div>
      <ul class="menu">
        <li>用户信息</li>
        <li>登陆</li>
        <li>注册</li>
      </ul>
    </div>
    <div class="right">
      <div class="iconfont minimize" @click="minimize">&#xeb9f;</div>
      <div class="iconfont maximize" v-show="!isMaximize" @click="maximize">&#xeb9e;</div>
      <div class="iconfont restore" v-show="isMaximize" @click="restore">&#xeba1;</div>
      <div class="iconfont close" @click="close">&#xeb9c;</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMaximize: false
    };
  },
  methods: {
    // 最小化
    minimize() {
      const { ipcRenderer } = this.$electron;
      ipcRenderer.send("minimize");
    },
    // 最大化
    maximize() {
      const { ipcRenderer } = this.$electron;
      ipcRenderer.send("maximize");
      this.isMaximize = true;
    },
    // 返回窗口
    restore() {
      const { ipcRenderer } = this.$electron;
      ipcRenderer.send("restore");
      this.isMaximize = false;
    },
    // 关闭
    close() {
      const { ipcRenderer } = this.$electron;
      ipcRenderer.send("close");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>