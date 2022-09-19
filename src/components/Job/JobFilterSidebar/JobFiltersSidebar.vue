<template>
  <JobSidebar>
    <JobFiltersSidebasePrompt />

    <Accordion header="Locations">
      <JobFilterSidebarLocation />
    </Accordion>

    <Accordion header="Skills & Qualifications">
      <JobFiltersSidebarSkills />
    </Accordion>

    <Accordion header="Degrees">
      <JobFilterSidebarDegrees />
    </Accordion>

    <Accordion header="Job types">
      <JobFilterSidebarJobTypes />
    </Accordion>

    <Accordion header="Organization">
      <JobFilterSidebarOrganizations />
    </Accordion>
  </JobSidebar>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";

// Vuex
import { useStore } from "vuex";
import { key } from "@/store";

// * Constants
import {
  UPDATE_SKILLS_SEARCH_TERM,
  UPDATE_LOCATION_SEARCH_TERM,
} from "@/store/constants";

// * Sidebar
import JobSidebar from "@/components/Job/JobSidebar/JobSidebar.vue";

// * Filter prompt
import JobFiltersSidebasePrompt from "./JobFiltersSidebarPrompt.vue";

// * Checkbox group
import JobFilterSidebarDegrees from "./JobFilterCheckbox/JobFilterSidebarDegrees.vue";
import JobFilterSidebarJobTypes from "./JobFilterCheckbox/JobFilterSidebarJobTypes.vue";
import JobFilterSidebarOrganizations from "./JobFilterCheckbox/JobFilterSidebarOrganizations.vue";

// * Other filters
import JobFiltersSidebarSkills from "./JobFilterInput/JobFiltersSidebarSkills.vue";
import JobFilterSidebarLocation from "./JobFilterInput/JobFilterSidebarLocation.vue";

// * Common components
import Accordion from "@/components/Shared/Accordion/Accordion.vue";

// * Parsing query params from router to filter jobs
const store = useStore(key);

function parseSearchTerms(searchTerm: string, mutation: string) {
  const route = useRoute();
  const foundTerm = route.query[searchTerm] || "";

  store.commit(mutation, foundTerm);
}

onMounted(() => {
  parseSearchTerms("role", UPDATE_SKILLS_SEARCH_TERM);
  parseSearchTerms("location", UPDATE_LOCATION_SEARCH_TERM);
});
</script>
