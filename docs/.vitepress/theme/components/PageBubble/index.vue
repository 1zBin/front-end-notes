<script setup lang="ts">
import pageBubble from "./page-bubble";
import { onMounted, onBeforeUnmount, ref, unref } from "vue";

const bubbleCanvas = ref<HTMLCanvasElement>();

onMounted(async () => {
  pageBubble.init(unref(bubbleCanvas)!);
});

onBeforeUnmount(() => {
  pageBubble.removeListeners();
});
</script>

<template>
  <div class="bubble">
    <canvas ref="bubbleCanvas" />
  </div>
</template>

<style scoped lang="less">
.bubble {
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: -1;
}
</style>
