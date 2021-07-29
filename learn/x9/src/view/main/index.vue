<template>
  <div class="view-main">
    <div class="header">xxx</div>
    <div class="container">
      <div class="left-content"></div>
      <div class="main-content"></div>
      <div class="right-content"></div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
@import "/less/common.less";
.view-main {
  display: flex;
  flex-direction: column;
  position: relative;
}

.header {
  height: 60px;
  background: @bg-black;
}

.container {
  display: flex;
  flex: 1;
  background: @bg-body;
}

.main-content {
  flex: 1;
}
</style>
