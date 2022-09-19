<template>
  <JobFilterSidebarInput
    :value="jobLocationTerm"
    :mutation="UPDATE_LOCATION_SEARCH_TERM"
    placeholder="San Francisco, London, Michigan"
  />
</template>

<script setup lang="ts">
import { useLocationsTerm } from "@/store/composables";

// * Constants
import { UPDATE_LOCATION_SEARCH_TERM } from "@/store/constants";

// * Input
import JobFilterSidebarInput from "./JobFilterSidebarInput.vue";

// * Main
const jobLocationTerm = useLocationsTerm();
</script>
