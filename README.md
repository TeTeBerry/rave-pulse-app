# rave-pulse-app（RavePulse · Taro 单仓）

纯 **Taro** 项目：源码 **`src/`**，路由与布局用 **`@tarojs/components`**、`Taro.navigateTo`。

| 产物 | 源码目录 | 命令 | 输出 |
| --- | --- | --- | --- |
| **Taro H5** | `src/` | `npm run dev` / `npm run build` | `dist/h5/` |
| **微信小程序** | `src/` | `npm run dev:weapp` / `npm run build:weapp` | `dist/weapp/` |

- **样式**：全局入口 `src/app.scss`；多端主题 `src/styles/ravepulse.css`；页面可使用 **SCSS**（如 `pages/welcome/index.scss`）。
- **路径别名**：`@/*` → `./src/*`（见 `tsconfig.taro.json`）。

## 环境要求

- Node.js ≥ 18
- （小程序）微信开发者工具导入 `project.config.json`，`miniprogramRoot` 指向 `dist/weapp`。

## 安装与脚本

```bash
npm install
npm run dev          # H5 开发（watch）
npm run build        # H5 生产构建
npm run dev:weapp    # 微信小程序开发（watch）
npm run build:weapp  # 微信小程序生产构建
npm run lint
```
# rave-pulse-app
