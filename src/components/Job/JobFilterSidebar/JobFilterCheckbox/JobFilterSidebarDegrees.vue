<template>
  <SidebaseFilterCheckboxGroup
    :values="degrees"
    :mutation="ADD_SELECTED_DEGREES"
  />
</template>

<script setup lang="ts">
// * Constants
import { ADD_SELECTED_DEGREES } from "@/store/constants";

// * Composables
import { useUniqueDegrees } from "@/store/composables";

// * Checkbox group
import SidebaseFilterCheckboxGroup from "./JobFilterSidebarCheckboxGroup.vue";

// * Main
const degrees = useUniqueDegrees();
</script>
