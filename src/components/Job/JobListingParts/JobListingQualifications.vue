<template>
  <div>
    <h3 class="mt-1 mb-2 font-semibold">{{ header }}</h3>

    <div>
      <ul class="pl-8 list-disc">
        <template
          v-for="qualification in qualificationList"
          :key="qualification"
        >
          <li class="text-brand-gray-1 text-sm">
            <span class="text-brand-black-1 text-base font-normal leading-7">
              {{ qualification }}
            </span>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  header: {
    type: String,
    default: "",
  },

  qualificationList: {
    type: Array,
    default: () => [],
  },
});
</script>
