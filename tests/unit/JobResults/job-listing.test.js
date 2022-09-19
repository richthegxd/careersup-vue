// * Function witch mount vue element
import { mount, RouterLinkStub } from "@vue/test-utils";

// * Job listing component
import JobListing from "@/components/Job/JobListing.vue";

describe("JobListing component test", () => {
  const createJobProps = (jobProps = {}) => ({
    title: "Vue Dev.",
    organization: "HandsUp",
    ...jobProps,
  });

  const createConfig = (jobProps) => ({
    props: {
      job: {
        ...jobProps,
      },
    },
    global: {
      stubs: {
        RouterLink: RouterLinkStub,
        FontAwesomeIcon: true,
      },
    },
  });

  it("Should render job title", () => {
    const jobProps = createJobProps({ title: "Vue Dev." });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Vue Dev.");
  });

  it("Should render job organization", () => {
    const jobProps = createJobProps({ organization: "HandsUp" });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("HandsUp");
  });

  it("Should render job location", () => {
    const jobProps = createJobProps({ location: ["Orlando", "Los Angeles"] });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Orlando");
    expect(wrapper.text()).toMatch("Los Angeles");
  });

  it("Should render job qualifications", () => {
    const jobProps = createJobProps({
      minimumQualifications: ["Dev", "Code"],
    });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Dev");
    expect(wrapper.text()).toMatch("Code");
  });
});
