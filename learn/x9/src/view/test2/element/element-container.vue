<template>
  <content-items
    class="element-container"
    tag="div"
    :list="data.children"
    :group="{ name: group }"
    :v-bind="attribute"
    :style="style"
  />
</template>

<script>
import element from './element';

export default {
  extends: element,
}
</script>

<style lang="less">
.element-container {
  outline: 1px dotted #ccc;
}
</style>
