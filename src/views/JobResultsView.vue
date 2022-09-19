<template>
  <div class="flex flex-row flex-nowrap w-full">
    <JobFilltersSidebar />
    <JobListings :jobs-loading="jobsLoading" :job-listings="jobListings" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

// * Composables
import {
  useFilteredJobs,
  useFetchJobsDispatch,
  useFetchDegreesDispatch,
} from "@/store/composables";

// * Sidebar
import JobFilltersSidebar from "@/components/Job/JobFilterSidebar/JobFiltersSidebar.vue";

// * Job listings
import JobListings from "@/components/Job/JobListings.vue";

// * Flag for render spinner or job listings
const jobsLoading = ref(true);

// * Main
const jobListings = useFilteredJobs();

onMounted(async () => {
  await Promise.all([useFetchDegreesDispatch(), useFetchJobsDispatch()]);
  jobsLoading.value = false;
});
</script>
