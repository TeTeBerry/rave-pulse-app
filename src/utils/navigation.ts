import Taro from "@tarojs/taro";

/** Taro 页面路径（不传 query） */
export const PAGES = {
  welcome: "/pages/welcome/index",
  aiChat: "/pages/ai-chat/index",
  budgetResult: "/pages/budget-result/index",
  eventList: "/pages/event-list/index",
  playlistDetail: "/pages/playlist-detail/index",
} as const;

export function navigateTo(url: keyof typeof PAGES): void {
  void Taro.navigateTo({ url: PAGES[url] });
}

export function navigateBack(delta = 1): void {
  void Taro.navigateBack({ delta });
}

/** 有历史栈则返回，否则跳到指定页面（小程序首页直开等场景） */
export function navigateBackOrTo(fallback: keyof typeof PAGES): void {
  const pages = Taro.getCurrentPages?.() ?? [];
  if (pages.length > 1) {
    navigateBack();
    return;
  }
  navigateTo(fallback);
}
