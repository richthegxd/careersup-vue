<template>
  <div class="py-5 border-b border-solid border-brand-gray-1">
    <div
      class="flex flex-wrap items-center justify-between cursor-pointer"
      @click="toggleAccordionOpen"
    >
      <h3 class="text-base font-semibold">{{ header }}</h3>
      <FontAwesomeIcon
        :icon="['fas', 'angle-down']"
        class="duration-300"
        :style="[iconStyle]"
      />
    </div>

    <template v-if="isAccordionOpen">
      <div v-show="isAccordionOpen" class="w-full mt-5">
        <slot></slot>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

defineProps({
  header: {
    type: String,
    default: "Title",
  },
});

// * Main
const isAccordionOpen = ref(false);

const iconStyle = computed(() =>
  isAccordionOpen.value
    ? "transform: rotate(180deg)"
    : "transform: rotate(0deg)"
);

function toggleAccordionOpen() {
  isAccordionOpen.value = !isAccordionOpen.value;
}
</script>
