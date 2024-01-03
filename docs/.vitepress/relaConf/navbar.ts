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
        text: "数据结构与算法",
        link: "/column/Algorithm/", // 对应docs/column/Algorithm下的idnex.md文件
      },
    ],
  },
  {
    text: "工具箱",
    items: [
      {
        text: "IT工具箱",
        link: "/column/Tool/", // 表示docs/column/Travel/index.md
      },
    ],
  },
  {
    text: "关于我",
    items: [
      { text: "Github", link: "https://github.com/Jacqueline712" },
      {
        text: "掘金",
        link: "https://juejin.cn/user/3131845139247960/posts",
      },
      {
        text: "飞书社区",
        link: "https://pzfqk98jn1.feishu.cn/wiki/space/7193915595975491587?ccm_open_type=lark_wiki_spaceLink",
      },
    ],
  },
];
