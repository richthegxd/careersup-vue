<template>
  <div class="flex flex-row justify-between">
    <h3 class="my-4 text-base font-semibold leading-[18px]">
      What do you want to do?
    </h3>
    <div class="flex items-center text-sm">
      <Button
        color="secondary"
        label="Clear filters"
        class="rounded"
        @click="clearFilter"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { key } from "@/store";

// * Common components
import Button from "@/components/Shared/Button/Button.vue";

// * Constants
import { CLEAR_USER_JOB_FILTER_SELECTION } from "@/store/constants";

// * Clear filter action
const store = useStore(key);

function clearFilter() {
  store.commit(CLEAR_USER_JOB_FILTER_SELECTION);
}
</script>
