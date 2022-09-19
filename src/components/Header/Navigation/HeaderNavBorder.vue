<template>
  <div :style="[params]" class="h-[2px] duration-300 rounded-md"></div>
</template>

<script setup lang="ts">
defineProps({
  params: {
    type: Object,
    default: () => {},
  },
});
</script>

<style></style>
