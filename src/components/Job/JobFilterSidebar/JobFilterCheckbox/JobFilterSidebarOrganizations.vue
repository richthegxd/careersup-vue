<template>
  <SidebaseFilterCheckboxGroup
    :values="organizations"
    :mutation="ADD_SELECTED_ORGANIZATIONS"
  />
</template>

<script setup lang="ts">
// * Constants
import { ADD_SELECTED_ORGANIZATIONS } from "@/store/constants";

// * Composables
import { useUniqueOrganizations } from "@/store/composables";

// * Checkbox group
import SidebaseFilterCheckboxGroup from "./JobFilterSidebarCheckboxGroup.vue";

// * Main
const organizations = useUniqueOrganizations();
</script>
