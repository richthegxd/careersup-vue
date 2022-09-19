<template>
  <JobFilterSidebarInput
    :value="jobSkillsTerm"
    :mutation="UPDATE_SKILLS_SEARCH_TERM"
    placeholder="Computer programming, Finance degree, UX"
  />
</template>

<script setup lang="ts">
import { useSkillsTerm } from "@/store/composables";

// * Constants
import { UPDATE_SKILLS_SEARCH_TERM } from "@/store/constants";

// * Input
import JobFilterSidebarInput from "./JobFilterSidebarInput.vue";

// * Main
const jobSkillsTerm = useSkillsTerm();
</script>
