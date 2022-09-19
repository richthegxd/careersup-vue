// * Types
import { Context } from "./interfaces/actions.interface";

// * Constants
import {
  FETCH_JOBS,
  FETCH_JOB,
  FETCH_DEGREES,
  RECEIVE_JOBS,
  RECEIVE_JOB,
  RECEIVE_DEGREES,
} from "./constants";

// * Job services
import { serverGetJobs, serverGetJobById, serverGetDegrees } from "@/services";

const actions = {
  [FETCH_JOBS]: async (context: Context) => {
    const jobListings = await serverGetJobs();
    context.commit(RECEIVE_JOBS, jobListings);
  },

  [FETCH_JOB]: async (context: Context, id: number) => {
    const job = await serverGetJobById(id);
    context.commit(RECEIVE_JOB, job);
  },

  [FETCH_DEGREES]: async (context: Context) => {
    const degrees = await serverGetDegrees();
    context.commit(RECEIVE_DEGREES, degrees);
  },
};

export default actions;
