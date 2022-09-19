import { GlobalState } from "./interfaces/state.interface";
import { Job } from "@/services/interfaces/job.interface";

const state = (): GlobalState => {
  return {
    isLoggedIn: false,

    jobs: [],
    degrees: [],

    favoritesJobsId: JSON.parse(
      localStorage.getItem("favoritesJobs") as string
    ) as number[],

    selectedJob: {} as Job,

    locationsSearchTerm: "",
    skillsSearchTerm: "",

    selectedOrganizations: [],
    selectedJobTypes: [],
    selectedDegrees: [],
  };
};

export default state;
