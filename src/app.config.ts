/** 多端配置：勿从 @tarojs/taro 引入（Node 编译 app.config 时可能触发环境问题） */
export default {
  pages: [
    "pages/welcome/index",
    "pages/ai-chat/index",
    "pages/budget-result/index",
    "pages/event-list/index",
    "pages/playlist-detail/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#ffffff",
    navigationBarTitleText: "Rave Pulse",
    navigationBarTextStyle: "black",
  },
};
