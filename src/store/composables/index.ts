import { computed } from "vue";
import { useStore } from "vuex";

// * Vuex key
import { key } from "@/store";

// * Types
import { Job } from "@/services/interfaces/job.interface";

// * Constants
import {
  FILTERED_JOBS,
  FAVORITES_JOBS,
  UNIQUE_JOB_TYPES,
  UNIQUE_ORGANIZATIONS,
  UNIQUE_DEGREES,
  FETCH_JOB_BY_IDS,
  FETCH_DEGREES,
  FETCH_JOB_BY_ID,
  ADD_JOB_TO_FAVORITES,
  REMOVE_JOB_FROM_FAVORITES,
} from "../constants";

// * State
export const useSkillsTerm = () => {
  const store = useStore(key);
  return computed(() => store.state.skillsSearchTerm);
};

export const useLocationsTerm = () => {
  const store = useStore(key);
  return computed(() => store.state.locationsSearchTerm);
};

export const useSelectedJob = () => {
  const store = useStore(key);
  return computed<Job>(() => store.state.selectedJob);
};

export const useFavoritesJobsId = () => {
  const store = useStore(key);
  return computed(() => store.state.favoritesJobsId);
};

// * Getters
export const useFilteredJobs = () => {
  const store = useStore(key);
  return computed<Job[]>(() => store.getters[FILTERED_JOBS]);
};

export const useFavoritesJobs = () => {
  const store = useStore(key);
  return computed<Job[]>(() => store.getters[FAVORITES_JOBS]);
};

export const useUniqueJobType = () => {
  const store = useStore(key);
  return computed<Set<string>>(() => store.getters[UNIQUE_JOB_TYPES]);
};

export const useUniqueOrganizations = () => {
  const store = useStore(key);
  return computed<Set<string>>(() => store.getters[UNIQUE_ORGANIZATIONS]);
};

export const useUniqueDegrees = () => {
  const store = useStore(key);
  return computed<string[]>(() => store.getters[UNIQUE_DEGREES]);
};

// * Actions
export const useFetchJobsDispatch = async () => {
  const store = useStore(key);
  await store.dispatch(FETCH_JOB_BY_IDS);
};

export const useFetchDegreesDispatch = async () => {
  const store = useStore(key);
  await store.dispatch(FETCH_DEGREES);
};

export const useFetchJobDispatch = async (id: number) => {
  const store = useStore(key);
  await store.dispatch(FETCH_JOB_BY_ID, id);
};

// * Favorites job
export const useFavoritesJobsCommit = () => {
  const store = useStore(key);

  function addJobToFavorites(id: number) {
    store.commit(ADD_JOB_TO_FAVORITES, id);
  }

  function removeJobFromFavorites(id: number) {
    store.commit(REMOVE_JOB_FROM_FAVORITES, id);
  }

  return {
    addJobToFavorites,
    removeJobFromFavorites,
  };
};
