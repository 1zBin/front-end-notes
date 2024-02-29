import { DefaultTheme } from "vitepress";
export const sidebar: DefaultTheme.Sidebar = {
  // /column/Algothm/表示对这个文件夹下的所有md文件做侧边栏配置
  "/column/front-end/study/": [
    // 第一部分
    {
      text: "CSS篇",
      items: [
        {
          text: "Flex 布局教程：语法篇",
          link: "/column/front-end/study/css/flex-grammar",
        },
        {
          text: "Flex 布局教程：实例篇",
          link: "/column/front-end/study/css/flex-example",
        },
        {
          text: "CSS Grid 网格布局教程",
          link: "/column/front-end/study/css/grid",
        },
      ],
    },
    // 第二部分
    {
      text: "JS篇",
      items: [
        {
          text: "JS中扁平与树形数据的转换",
          link: "/column/front-end/study/js/tree-transfer",
        },
      ],
    },
    // 第三部分
    {
      text: "其他",
      items: [
        {
          text: "虚拟滚动",
          link: "/column/front-end/study/others/virtual-scroll",
        },
      ],
    },
  ],
};
