// * Types
import { GlobalState } from "./interfaces/state.interface";
import { Job } from "@/services/interfaces/job.interface";
import { Degree } from "@/services/interfaces/degree.interface";

// * Constants
import {
  LOGIN_USER,
  RECEIVE_JOBS,
  RECEIVE_JOB,
  RECEIVE_DEGREES,
  ADD_SELECTED_ORGANIZATIONS,
  ADD_SELECTED_JOB_TYPES,
  ADD_SELECTED_DEGREES,
  CLEAR_USER_JOB_FILTER_SELECTION,
  UPDATE_SKILLS_SEARCH_TERM,
  UPDATE_LOCATION_SEARCH_TERM,
  ADD_JOB_TO_FAVORITES,
  REMOVE_JOB_FROM_FAVORITES,
} from "./constants";

const mutations = {
  [LOGIN_USER]: (state: GlobalState) => {
    state.isLoggedIn = true;
  },

  [RECEIVE_JOBS]: (state: GlobalState, jobs: Job[]) => {
    state.jobs = jobs;
  },

  [RECEIVE_JOB]: (state: GlobalState, job: Job) => {
    state.selectedJob = job;
  },

  [RECEIVE_DEGREES]: (state: GlobalState, degrees: Degree[]) => {
    state.degrees = degrees;
  },

  [ADD_SELECTED_ORGANIZATIONS]: (
    state: GlobalState,
    organizations: string[]
  ) => {
    state.selectedOrganizations = organizations;
  },

  [ADD_SELECTED_JOB_TYPES]: (state: GlobalState, jobTypes: string[]) => {
    state.selectedJobTypes = jobTypes;
  },

  [ADD_SELECTED_DEGREES]: (state: GlobalState, degrees: string[]) => {
    state.selectedDegrees = degrees;
  },

  [CLEAR_USER_JOB_FILTER_SELECTION]: (state: GlobalState) => {
    state.selectedOrganizations = [];
    state.selectedJobTypes = [];
    state.selectedDegrees = [];
    state.skillsSearchTerm = "";
    state.locationsSearchTerm = "";
  },

  [UPDATE_SKILLS_SEARCH_TERM]: (
    state: GlobalState,
    skillsSearchTerm: string
  ) => {
    state.skillsSearchTerm = skillsSearchTerm;
  },

  [UPDATE_LOCATION_SEARCH_TERM]: (
    state: GlobalState,
    locationsSearchTerm: string
  ) => {
    state.locationsSearchTerm = locationsSearchTerm;
  },

  [ADD_JOB_TO_FAVORITES]: (state: GlobalState, jobId: number) => {
    state.favoritesJobsId.push(jobId);

    localStorage.setItem(
      "favoritesJobs",
      JSON.stringify(state.favoritesJobsId)
    );
  },

  [REMOVE_JOB_FROM_FAVORITES]: (state: GlobalState, jobId: number) => {
    state.favoritesJobsId = state.favoritesJobsId.filter(
      (favoriteJobId) => favoriteJobId !== jobId
    );

    localStorage.setItem(
      "favoritesJobs",
      JSON.stringify(state.favoritesJobsId)
    );
  },
};

export default mutations;
