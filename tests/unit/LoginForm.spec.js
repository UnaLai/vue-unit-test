import LoginForm from "@/components/LoginForm";
import { mount } from "@vue/test-utils";

describe("AppHeader", () => {
  test("帶著 user 資料觸發送出事件", () => {
    const wrapper = mount(LoginForm);
    // 1.find text input
    const input = wrapper.find('input[type="text"]');
    // 2.set value for text input
    input.setValue("Adam Jahr");
    // 3.simulate from submission
    wrapper.trigger("submit");
    // 4.Assert event has been emitted
    const formSubmittedCalls = wrapper.emitted("formSubmitted");
    expect(formSubmittedCalls).toHaveLength(1);
    // 5.Assert payload is correct
    const expectedPayload = { name: "Adam Jahr" };
    expect(wrapper.emitted("formSubmitted")[0][0]).toMatchObject(
      expectedPayload
    );
  });
});
