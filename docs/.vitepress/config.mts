import { defineConfig } from "vitepress";
import { nav, sidebar } from "./relaConf";
import mdItCustomAttrs from "markdown-it-custom-attrs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  title: "LzBin的成长记录",
  description: "LzBin的成长记录",
  lastUpdated: false,
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css",
      },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js",
      },
    ],
  ],
  themeConfig: {
    siteTitle: "LzBin",
    logo: "/avatar.png", // 表示docs/public/avatar.png
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,
    sidebar: sidebar, // 把定义的sidebar给替换进来
    // socialLinks: [
    //   { icon: "github", link: "https://github.com/vuejs/vitepress" },
    // ],
    outline: {
      level: [2, 6],
      label: "目录",
    },
  },
  markdown: {
    config: (md) => {
      // use more markdown-it plugins!
      md.use(mdItCustomAttrs, "image", {
        "data-fancybox": "gallery",
      });
    },
  },
});
