<template>
  <SidebaseFilterCheckboxGroup
    :values="jobs"
    :mutation="ADD_SELECTED_JOB_TYPES"
  />
</template>

<script setup lang="ts">
// * Constants
import { ADD_SELECTED_JOB_TYPES } from "@/store/constants";

// * Composables
import { useUniqueJobType } from "@/store/composables";

// * Checkbox group
import SidebaseFilterCheckboxGroup from "./JobFilterSidebarCheckboxGroup.vue";

// * Main
const jobs = useUniqueJobType();
</script>
