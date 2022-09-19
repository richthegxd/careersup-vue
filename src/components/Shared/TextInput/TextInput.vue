<template>
  <input
    v-model="model"
    class="w-full text-lg font-normal focus:outline-none placeholder-brand-gray-4"
    type="text"
    :placeholder="placeholder"
  />
</template>

<script setup lang="ts">
// * Vue imports
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },

  placeholder: {
    type: String,
    default: "Placeholder",
  },
});

const emit = defineEmits(["update:modelValue"]);

// * Common model for input
const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<style></style>
