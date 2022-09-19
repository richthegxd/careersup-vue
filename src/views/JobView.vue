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

    <main
      :class="[
        'flex',
        'flex-auto',
        'justify-center',
        'p-8',
        'bg-brand-gray-2',
        'min-h-screen',
      ]"
    >
      <template v-if="isJobLoading">
        <Spinner class="self-center" />
      </template>

      <template v-else>
        <JobListing :job="job" full-job-description />
      </template>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

// * Composabes
import { useFetchJobDispatch, useSelectedJob } from "@/store/composables";

// // * Sidebar
import JobSidebar from "@/components/Job/JobSidebar/JobSidebar.vue";

// * Job listings
import JobListing from "@/components/Job/JobListing.vue";

// * Shared components
import Spinner from "@/components/Shared/Spinner/Spinner.vue";

// * Flag for render spinner or jobs listings
const isJobLoading = ref(true);

// * Main
const route = useRoute();

const job = useSelectedJob();

onMounted(async () => {
  await useFetchJobDispatch(Number(route.params.jobId));
  isJobLoading.value = false;
});
</script>
