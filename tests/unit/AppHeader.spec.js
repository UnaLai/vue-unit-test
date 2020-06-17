import AppHeader from "@/components/AppHeader";
import { mount } from "@vue/test-utils";

describe("AppHeader", () => {
  test("如果沒有登入，就不應該看到登出按鈕", () => {
    const wrapper = mount(AppHeader);
    expect(wrapper.find("button").isVisible()).toBe(false);
  });

  test("如果有登入，就應該看到登出按鈕", async () => {
    const wrapper = mount(AppHeader);
    wrapper.setData({ loggedIn: true });
    await wrapper.vm.$nextTick();
    expect(wrapper.find("button").isVisible()).toBe(true);
  });
});
