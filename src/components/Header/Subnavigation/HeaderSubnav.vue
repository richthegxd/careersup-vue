<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-gray-1">
    <div class="flex items-center justify-between h-full px-8">
      <template v-if="onJobResultsPage">
        <div class="flex flex-row">
          <div class="flex items-center font-medium" data-test="job-count">
            <FontAwesomeIcon :icon="['fas', 'search']" class="mr-3" />
            <p>
              <span class="text-brand-green-1">{{ jobsCount.length }}</span>
              jobs matched
            </p>
          </div>
        </div>
      </template>

      <RouterLink
        to="/jobs/favorites"
        class="duration-300 text-brand-gray-5 py-2.5 hover:text-brand-black-1 ml-auto"
      >
        Saved jobs
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
// * Composables
import useConfirmRoute from "@/composables/useConfirmRoute";
import { useFilteredJobs } from "@/store/composables";

const jobsCount = useFilteredJobs();

const onJobResultsPage = useConfirmRoute("jobs-results");
</script>
