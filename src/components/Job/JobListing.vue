<template>
  <li class="mb-7 list-none">
    <div
      :to="jobPageLink"
      class="block mx-auto bg-white border border-solid border-brand-gray-1 rounded duration-300 hover:shadow-gray hover:border-transparent"
    >
      <div class="pt-5 pb-3 mx-8 border-b border-solid border-brand-gray-1">
        <div class="flex flex-row flex-nowrap justify-between items-center">
          <h2 class="mb-3 text-2xl text-brand-black-1 font-semibold">
            {{ job.title }}
          </h2>

          <div class="flex flex-row gap-5">
            <JobHeaderButton :icon="['fas', 'link']" label="Share">
              <template #dropdown>
                <JonHeaderMenuCopy :job-page-link="jobPageLink" />
              </template>
            </JobHeaderButton>

            <JobHeaderButton
              :active="headerButtonProps.active"
              :icon="headerButtonProps.icon"
              :label="headerButtonProps.label"
              @click="headerButtonProps.action(job.id)"
            />
          </div>
        </div>

        <div class="flex flex-row align-middle">
          <div class="flex flex-row items-center mr-5">
            <FontAwesomeIcon
              :icon="['fas', 'building']"
              class="text-brand-gray-6"
            />
            <span class="ml-[5px] text-sm text-brand-gray-4 font-semibold">
              {{ job.organization }}
            </span>
          </div>

          <div class="flex flex-row items-center mr-5">
            <FontAwesomeIcon
              :icon="['fas', 'location-dot']"
              class="text-brand-gray-6"
            />
            <ul>
              <template v-for="location in job.locations" :key="location">
                <li class="inline-block">
                  <span
                    class="ml-[5px] text-sm text-brand-gray-4 font-semibold"
                  >
                    {{ location }},
                  </span>
                </li>
              </template>
            </ul>
          </div>
        </div>
      </div>

      <div class="px-8 py-8">
        <JobListingQualifications
          header="Minimum qualifications:"
          :qualification-list="job.minimumQualifications"
        />

        <template v-if="fullJobDescription">
          <div class="mt-10">
            <JobListingQualifications
              header="Preferred qualifications:"
              :qualification-list="job.preferredQualifications"
              class="pb-5 border-b border-solid border-brand-gray-1"
            />

            <div class="mt-5">
              <h2 class="text-2xl font-medium">About the job</h2>
              <p class="mt-5 font-normal max-w-screen-lg">
                {{ job.description.join() }}
              </p>
            </div>
          </div>
        </template>

        <template v-if="!fullJobDescription">
          <div class="mt-5 text-center h-7">
            <RouterLink
              :to="jobPageLink"
              class="text-brand-blue-1 text-sm font-semibold"
            >
              <Button color="secondary" label="Expand" class="rounded" />
            </RouterLink>
          </div>
        </template>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import { computed, PropType } from "vue";
import { Job } from "@/services/interfaces/job.interface";

// * Composables
import {
  useFavoritesJobsCommit,
  useFavoritesJobsId,
} from "@/store/composables";

// * Header job button
import JobHeaderButton from "./JobListingParts/JobListingHeaderButton.vue";

// * Qualifications list
import JobListingQualifications from "./JobListingParts/JobListingQualifications.vue";

// * Header job button menu
import JonHeaderMenuCopy from "./JobListingParts/JobListingHeaderButtonMenu/JobHeaderMenuCopy.vue";

// * Shared component
import Button from "@/components/Shared/Button/Button.vue";

const props = defineProps({
  job: {
    type: Object as PropType<Job>,
    default: () => {},
  },

  fullJobDescription: {
    type: Boolean,
    default: false,
  },
});

// * Composables actions
const { removeJobFromFavorites, addJobToFavorites } = useFavoritesJobsCommit();
const favoritesJobsId = useFavoritesJobsId();

const isFavoriteJob = computed(() =>
  favoritesJobsId.value.includes(props.job.id)
);

const headerButtonProps = computed(() =>
  isFavoriteJob.value
    ? {
        label: "Remove",
        icon: ["fas", "bookmark"],
        action: removeJobFromFavorites,
        active: true,
      }
    : {
        label: "Save",
        icon: ["far", "bookmark"],
        action: addJobToFavorites,
        active: false,
      }
);

const jobPageLink = computed(() => `/jobs/results/${props.job.id}`);
</script>
