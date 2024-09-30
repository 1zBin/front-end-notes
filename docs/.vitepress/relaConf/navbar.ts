// docs/.vitepress/relaConf/navbar.ts
import { DefaultTheme } from "vitepress";
export const nav: DefaultTheme.NavItem[] = [
  {
    text: "首页",
    link: "/", // 表示docs/index.md
  },
  {
    text: "前端笔记",
    items: [
      {
        text: "学习资料",
        link: "/column/front-end/study/",
      },
      {
        text: "插件用法",
        link: "/column/front-end/plugin/",
      },
      {
        text: "其他教学",
        link: "/column/front-end/others/",
      },
    ],
  },
  {
    text: "工具箱",
    items: [
      {
        text: "前端工具箱",
        link: "/column/tools/front-end/",
      },
      {
        text: "电脑工具箱",
        link: "/column/tools/computer/",
      },
    ],
  },
  // {
  //   text: "关于我",
  //   items: [
  //     { text: "Github", link: "https://github.com/" },
  //     {
  //       text: "飞书社区",
  //       link: "https://pzfqk98jn1.feishu.cn/",
  //     },
  //   ],
  // },
];
