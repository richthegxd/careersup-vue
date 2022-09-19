// * Function witch mount vue element
import { mount } from "@vue/test-utils";

// * Input component
import Input from "@/components/Shared/TextInput/TextInput.vue";

describe("Test input component", () => {
  it("Communicates that user has entered character", () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: "",
      },
    });

    const input = wrapper.find("input");

    // * Set input values
    input.setValue("HandsUp");
    input.setValue("HandsUp1");
    input.setValue("HandsUp2");

    const messages = wrapper.emitted()["update:modelValue"];
    expect(messages).toEqual([["HandsUp"], ["HandsUp1"], ["HandsUp2"]]);
  });
});
