// * Function witch mount vue element
import { mount } from "@vue/test-utils";

// * Router
import { useRouter } from "vue-router";
jest.mock("vue-router");

// * Form component
import JobSearchForm from "@/components/Job/JobSearch/JobSearchForm.vue";

describe("Test job search form", () => {
  it("Should redirect user's to the job results page with search params", async () => {
    const push = jest.fn();

    useRouter.mockReturnValue({
      push,
    });

    const wrapper = mount(JobSearchForm, {
      attachTo: document.body,
      global: {
        stubs: {
          FontAwesomeIcon: true,
        },
      },
    });

    const roleInput = wrapper.find("[data-test='role-input']");
    await roleInput.setValue("Vue developer");

    const locationInput = wrapper.find("[data-test='location-input']");
    await locationInput.setValue("Dallas");

    const submitButton = wrapper.find("[data-test='submit-button']");
    await submitButton.trigger("click");

    expect(push).toHaveBeenCalledWith({
      name: "jobs-results",
      query: {
        role: "Vue developer",
        location: "Dallas",
      },
    });
  });
});
