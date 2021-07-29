<template>
  <div v-bind="attribute" :style="style" v-html="html"></div>
</template>

<script>
import element from './element';

export default {
  extends: element,
}
</script>

