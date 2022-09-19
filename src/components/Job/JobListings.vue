<template>
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
    <template v-if="jobsLoading">
      <Spinner class="self-center" />
    </template>

    <template v-else>
      <template v-if="displayedJobs.length > 0">
        <ol>
          <template v-for="job in displayedJobs" :key="job.id">
            <JobListing :job="job" />
          </template>

          <div class="mt-8 mx-auto">
            <div class="flex flex-row flex-nowrap">
              <p class="text-sm flex-grow">
                Page {{ currentPage }} of
                {{ Math.ceil(jobListings.length / jobPerPage) }}
              </p>

              <div class="flex items-center justify-center">
                <template v-if="previousPage">
                  <RouterLink
                    :to="{
                      name: 'jobs-results',
                      query: { page: previousPage },
                    }"
                    class="mx-3 text-sm font-semibold text-brand-blue-1 hover:text-brand-blue-3"
                  >
                    Previous
                  </RouterLink>
                </template>

                <template v-if="nextPage">
                  <RouterLink
                    :to="{ name: 'jobs-results', query: { page: nextPage } }"
                    class="mx-3 text-sm font-semibold text-brand-blue-1 hover:text-brand-blue-3"
                  >
                    Next
                  </RouterLink>
                </template>
              </div>
            </div>
          </div>
        </ol>
      </template>

      <template v-else>
        <JobListingsEmpty />
      </template>
    </template>
  </main>
</template>

<script setup lang="ts">
import { computed, PropType } from "vue";

// * interfaces
import { Job } from "@/services/interfaces/job.interface";

// * Composables
import useCurrentPage from "@/composables/useCurrentPage";
import usePreviousAndNextPages from "@/composables/usePreviousAndNextPages";

// * Shared components
import Spinner from "@/components/Shared/Spinner/Spinner.vue";

// * Job listing (single item)
import JobListing from "./JobListing.vue";

// * Jobs not found component
import JobListingsEmpty from "./JobListingsEmpty.vue";

// *
const props = defineProps({
  jobsLoading: {
    type: Boolean,
    default: true,
  },

  jobListings: {
    type: Array as PropType<Job[]>,
    default: () => [],
  },
});

// * Pagination
const jobPerPage = 12;

const currentPage = useCurrentPage();
const maxPage = computed(() =>
  Math.ceil(props.jobListings.length / jobPerPage)
);

const firstJobIndex = computed(() => (currentPage.value - 1) * jobPerPage);
const lastJobIndex = computed(() => currentPage.value * jobPerPage);

const displayedJobs = computed(() =>
  props.jobListings.slice(firstJobIndex.value, lastJobIndex.value)
);

const { previousPage, nextPage } = usePreviousAndNextPages(
  currentPage,
  maxPage
);
</script>

<style></style>
