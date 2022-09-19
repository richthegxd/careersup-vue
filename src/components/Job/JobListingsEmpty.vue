<template>
  <div class="flex flex-col items-center justify-center mt-5">
    <h2 class="text-[200px] text-brand-gray-1">(·_·)</h2>
    <p class="mt-5 text-2xl font-medium">No jobs found.</p>

    <Button
      label="Clear filter"
      color="secondary"
      class="mt-5 text-sm rounded"
      @click="clearFilter"
    />
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { key } from "@/store";

// * Constants
import { CLEAR_USER_JOB_FILTER_SELECTION } from "@/store/constants";

// * Common components
import Button from "@/components/Shared/Button/Button.vue";

// * Clear filter action
const store = useStore(key);

function clearFilter() {
  store.commit(CLEAR_USER_JOB_FILTER_SELECTION);
}
</script>
