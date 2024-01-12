import { defineConfig } from "vitepress";
import { nav, sidebar } from "./relaConf";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/front-end-notes/",
  title: "老潇的成长记录",
  description: "老潇的成长记录",
  themeConfig: {
    siteTitle: "老潇的成长记录",
    logo: "/avatar.png", // 表示docs/public/avatar.png
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,
    sidebar: sidebar, // 把定义的sidebar给替换进来
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    outline: {
      level: [2, 6],
      label: "目录",
    },
  },
});
