import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },

  {
    path: "/jobs/results",
    name: "jobs-results",
    component: () => import("@/views/JobResultsView.vue"),
  },

  {
    path: "/jobs/results/:jobId",
    name: "job-listing",
    component: () => import("@/views/JobView.vue"),
  },

  {
    path: "/jobs/favorites",
    name: "jobs-favorites",
    component: () => import("@/views/FavoritesView.vue"),
  },

  {
    path: "/teams",
    name: "teams",
    component: () => import("@/views/TeamsView.vue"),
  },

  {
    path: "/benefits",
    name: "benefits",
    component: () => import("@/views/BenefitsView.vue"),
  },

  {
    path: "/locations",
    name: "locations",
    component: () => import("@/views/LocationsView.vue"),
  },

  {
    path: "/students",
    name: "students",
    component: () => import("@/views/StudentsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" };
  },
});

export default router;
