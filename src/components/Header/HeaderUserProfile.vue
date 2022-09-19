<template>
  <img class="w-9 h-9 rounded-3xl border-2 border-gray-400" :src="imageLink" />
</template>

<script setup lang="ts">
import { ref } from "vue";

const imageLink = ref(
  "https://sun1-56.userapi.com/impg/RO9cRqA_7O97qXDQhmLuXtwPN0OLuVAiXtN7Nw/sRuHtLDCPUY.jpg?size=1023x1280&quality=96&sign=5de250614c11c9156353448824e84414&type=album"
);
</script>
