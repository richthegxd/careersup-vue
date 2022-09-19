<template>
  <div class="flex flex-row flex-nowrap w-full">
    <JobSidebar class="!p-0">
      <RouterLink to="/jobs/results">
        <div
          class="flex items-center text-sm p-6 border-b border-solid border-brand-gray-1 text-brand-gray-5 cursor-pointer"
        >
          <FontAwesomeIcon :icon="['fas', 'angle-left']" />
          <p class="font-semibold ml-3">Edit filters</p>
        </div>
      </RouterLink>
    </JobSidebar>

    <JobListings :jobs-loading="jobsLoading" :job-listings="jobListings" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

// * Composables
import { useFavoritesJobs, useFetchJobsDispatch } from "@/store/composables";

// // * Sidebar
import JobSidebar from "@/components/Job/JobSidebar/JobSidebar.vue";

// * Job listings
import JobListings from "@/components/Job/JobListings.vue";

// * Flag for render spinner or job listings
const jobsLoading = ref(true);

// * Main
const jobListings = useFavoritesJobs();

onMounted(async () => {
  await useFetchJobsDispatch();
  jobsLoading.value = false;
});
</script>
