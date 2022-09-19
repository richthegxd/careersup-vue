<template>
  <section class="mb-16">
    <h1 class="font-bold tracking-tighter text-8xl mb-14">
      <div class="overflow-hidden pb-[12px]">
        <span ref="headlineActionEl" :class="[actionClasses, 'inline-block']">
          {{ actions[currentActionIndex] }}
        </span>
      </div>

      for everyone
    </h1>

    <h2 class="text-3xl font-regular">
      Find your next job at
      <span :class="[actionClasses, 'duration-300', 'font-semibold']">
        CareersUp!
      </span>
    </h2>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

// * Headline ref template for animation
const headlineActionEl = ref<HTMLElement | null>(null);

// * Headline basis
const actions = ["Build", "Create", "Design", "Code"];
const currentActionIndex = ref(0);

// * Action classes
const actionClasses = computed(() => {
  return {
    [actions[currentActionIndex.value].toLowerCase()]: true,
  };
});

// * An interval that changes the current action index
let intervalChangeActionIndex: number | undefined = undefined;

function changeCurrentActionIndex() {
  intervalChangeActionIndex = setInterval(() => {
    currentActionIndex.value = (currentActionIndex.value + 1) % 4;
  }, 3000);
}

onMounted(() => {
  changeCurrentActionIndex();
});

onUnmounted(() => {
  clearInterval(intervalChangeActionIndex);
});
</script>

<style lang="sass" scoped>

@import "./styles/headline"
</style>
