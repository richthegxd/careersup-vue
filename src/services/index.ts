import axios from "@/plugins/Axios";

// * Types
import { Job } from "./interfaces/job.interface";
import { Spotlight } from "./interfaces/spotlight.interface";
import { Degree } from "./interfaces/degree.interface";

async function serverGetJobs() {
  try {
    const jobs: Job[] = await axios.get("/jobs");
    return jobs;
  } catch (e) {
    return Promise.reject(e);
  }
}

async function serverGetJobById(id: number) {
  try {
    const job: Job[] = await axios.get(`/jobs/${id}`);
    return job;
  } catch (e) {
    return Promise.reject(e);
  }
}

async function serverGetSpotlights() {
  try {
    const spotlights: Spotlight[] = await axios.get("/spotlights");
    return spotlights;
  } catch (e) {
    return Promise.reject(e);
  }
}

async function serverGetDegrees() {
  try {
    const degrees: Degree[] = await axios.get("/degrees");
    return degrees;
  } catch (e) {
    return Promise.reject(e);
  }
}

export {
  serverGetJobs,
  serverGetJobById,
  serverGetSpotlights,
  serverGetDegrees,
};
