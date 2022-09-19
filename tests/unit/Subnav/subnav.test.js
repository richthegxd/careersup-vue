// * Function witch mount vue element
import { mount } from "@vue/test-utils";

// * Vue router
import { useRoute } from "vue-router";
jest.mock("vue-router");

// * Vuex
import { useStore } from "vuex";
jest.mock("vuex");

// * Subnav component
import Subnav from "@/components/Header/Subnavigation/HeaderSubnav.vue";

describe("Test header subnav component", () => {
  const createConfig = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });

  describe("When user on the job page", () => {
    it("Should display jobs count", () => {
      useRoute.mockReturnValue({
        name: "jobs-results",
      });

      useStore.mockReturnValue({
        getters: {
          FILTERED_JOBS: [{ id: 2 }, { id: 1 }],
        },
      });

      const wrapper = mount(Subnav, createConfig());

      const jobCountElement = wrapper.find("[data-test='job-count']");

      expect(jobCountElement.text()).toMatch("2 jobs matched");
    });
  });

  describe("When user not on the job page", () => {
    it("Shouldn't display job count", () => {
      useRoute.mockReturnValue({
        name: "home",
      });

      useStore.mockReturnValue({
        getters: {
          FILTERED_JOBS: [],
        },
      });

      const wrapper = mount(Subnav, createConfig());

      const jobCountElement = wrapper.find("[data-test='job-count']");

      expect(jobCountElement.exists()).toBe(false);
    });
  });
});
