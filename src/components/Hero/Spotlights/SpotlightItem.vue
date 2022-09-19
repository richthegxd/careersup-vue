<template>
  <RouterLink to="/jobs/results" class="flex">
    <template v-if="small">
      <div class="flex flex-col w-72 bg-white rounded-lg">
        <img :src="spotlight.img" class="h-[102px] rounded-t-lg" />

        <div class="px-6 py-4">
          <h3 class="text-lg font-bold leading-6">
            {{ spotlight.title }}
          </h3>

          <p class="mt-3 text-[12px] text-brand-gray-5 leading-4">
            {{ spotlight.description }}
          </p>
        </div>

        <RouterLink
          to="/jobs/results"
          class="px-6 pb-4 text-[12px] font-medium mt-auto text-brand-blue-1"
        >
          See jobs
        </RouterLink>
      </div>
    </template>
    <template v-else>
      <div class="relative flex flex-col" :style="{ width: '530px' }">
        <div
          :style="{ backgroundImage: `url(${spotlight.img})` }"
          class="flex flex-col justify-end h-full rounded-lg bg-cover after:bg-image-gradient after:absolute after:bottom-0 after:top-0 after:left-0 after:right-0 after:rounded-lg"
        >
          <div class="text-white z-10">
            <div class="px-6 py-4">
              <h3 class="text-[22px] font-bold">
                {{ spotlight.title }}
              </h3>

              <p class="pt-4 text-sm">
                {{ spotlight.description }}
              </p>
            </div>
          </div>

          <RouterLink
            to="/jobs/results"
            class="px-6 pb-4 text-[12px] font-bold text-white z-10"
          >
            See jobs
          </RouterLink>
        </div>
      </div>
    </template>
  </RouterLink>
</template>

<script setup lang="ts">
defineProps({
  spotlight: {
    type: Object,
    default: () => {},
  },

  small: {
    type: Boolean,
    default: true,
  },
});
</script>
