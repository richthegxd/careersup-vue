<template>
  <ul class="relative flex flex-row flex-nowrap h-[268px]">
    <template v-if="isPrevButton">
      <PrevButton
        class="absolute top-1/2 -translate-y-1/2 -left-[26vh] z-[1]"
        @click="slideLeft"
      />
    </template>

    <div
      ref="container"
      :style="[`transform: translateX(-${position}px)`]"
      class="flex flex-row flex-nowrap duration-300"
    >
      <template v-for="(spotlight, index) in spotlights" :key="spotlight.id">
        <li class="mx-3 h-full flex first:ml-0">
          <SpotlightItem :spotlight="spotlight" :small="index % 2 === 0" />
        </li>
      </template>
    </div>

    <template v-if="isNextButton">
      <NextButton
        class="absolute top-1/2 -translate-y-1/2 right-10 z-[1]"
        @click="slideRight"
      />
    </template>
  </ul>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useElementSize } from "@vueuse/core";
import { serverGetSpotlights } from "@/services";

// * Spotlight type
import { Spotlight } from "@/services/interfaces/spotlight.interface";

// * Spotlight item
import SpotlightItem from "./SpotlightItem.vue";

// * Spotlight controllers
import PrevButton from "./SpolightsControls/PrevButton.vue";
import NextButton from "./SpolightsControls/NextButton.vue";

// * Slider controllers
const container = ref<HTMLElement | null>(null);
const { width } = useElementSize(container);

const position = ref(0);
const translateSize = 300;

function slideLeft() {
  position.value -= translateSize;
}

function slideRight() {
  position.value += translateSize;
}

const isPrevButton = computed(() => position.value > 0);
const isNextButton = computed(() => position.value <= width.value);

// * Gettings spotlights
const spotlights = ref<Spotlight[]>([]);

onMounted(async () => {
  spotlights.value = await serverGetSpotlights();
});
</script>
