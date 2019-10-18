<template>
  <div>
    <button @click="closed">关闭</button>
  </div>
</template>

<script>
export default {
  methods: {
    closed() {
      const { ipcRenderer } = this.$electron;
      ipcRenderer.send("close");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>