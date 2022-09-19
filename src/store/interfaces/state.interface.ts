import { Job } from "@/services/interfaces/job.interface";
import { Degree } from "@/services/interfaces/degree.interface";

export interface GlobalState {
  isLoggedIn: boolean;

  jobs: Job[];
  degrees: Degree[];

  favoritesJobsId: number[];
  selectedJob: Job;

  locationsSearchTerm: string;
  skillsSearchTerm: string;

  selectedOrganizations: string[];
  selectedJobTypes: string[];
  selectedDegrees: string[];
}
