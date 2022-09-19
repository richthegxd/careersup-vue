<template>
  <button :class="color">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { ButtonClass } from "./types/button-class.types";

defineProps({
  color: {
    type: String as PropType<ButtonClass>,
    default: "",
  },

  label: {
    type: String,
    default: "Button",
  },
});
</script>

<style lang="sass" scoped>

@import "./styles/index"
</style>
