// * Function witch shallowMount vue element
import { mount, RouterLinkStub } from "@vue/test-utils";

// * Nav consts
import navItems from "@/components/Header/constants/nav-items.consts";

// * Vuex
import { useStore } from "vuex";
jest.mock("vuex");

// * Header component
import Header from "@/components/Header/Header.vue";

describe("Test header component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Header, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });
  });

  it("Should display logo text", () => {
    expect(wrapper.text()).toMatch("CareersUp!");
  });

  it("Should display items of navigation", () => {
    const navigationMenuItems = wrapper.findAll("li");
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text());

    expect(navigationMenuTexts).toEqual(navItems);
  });
});
