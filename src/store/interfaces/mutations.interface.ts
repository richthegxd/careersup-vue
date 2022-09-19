import { Job } from "@/services/interfaces/job.interface";
import { Degree } from "@/services/interfaces/degree.interface";

export interface IncludeJobGetters {
  INCLUDE_JOB_BY_ORGANIZATION: (job: Job) => boolean;
  INCLUDE_JOB_BY_JOB_TYPE: (job: Job) => boolean;
  INCLUDE_JOB_BY_DEGREE: (degree: Degree) => boolean;
  INCLUDE_JOB_BY_SKILL: (job: Job) => boolean;
  INCLUDE_JOB_BY_LOCATION: (job: Job) => boolean;
}
