// Taro babel preset（多端编译使用；与根目录 Vite 独立）
module.exports = {
  presets: [
    [
      'taro',
      {
        framework: 'react',
        ts: true,
        compiler: 'webpack5',
      },
    ],
  ],
};
