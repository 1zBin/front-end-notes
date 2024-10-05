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
        {
          text: "JS实现数组扁平化的五种方法",
          link: "/column/front-end/study/js/squeeze",
        },
        {
          text: "JS实现Date() - 日期格式化的三种常用方法",
          link: "/column/front-end/study/js/format-time",
        },
        {
          text: "JS中数组排序的方法有哪些",
          link: "/column/front-end/study/js/array-sort",
        },
        {
          text: "JS实现数组去重的方式",
          link: "/column/front-end/study/js/distinct",
        },
      ],
    },
    // 第三部分
    {
      text: "其他",
      items: [
        {
          text: "Vue3 使用 import.meta.glob 动态加载路由组件",
          link: "/column/front-end/study/others/meta-glob",
        },
        {
          text: "虚拟滚动",
          link: "/column/front-end/study/others/virtual-scroll",
        },
        {
          text: "前端大屏适配几种方案",
          link: "/column/front-end/study/others/large-screen",
        },
        {
          text: "Vue3 mitt 组件通信 - 附完整示例",
          link: "/column/front-end/study/others/mitt",
        },
        {
          text: "前端 非全量更新表单数据的函数封装",
          link: "/column/front-end/study/others/change-form-data",
        },
        {
          text: "Vite+Vue3+Electron 快速构建一个桌面应用（一）",
          link: "/column/front-end/study/others/vite-electron-01",
        },
        {
          text: "Vite+Vue3+Electron 快速构建一个桌面应用（二）",
          link: "/column/front-end/study/others/vite-electron-02",
        },
        {
          text: "Vite+Vue3+Electron 快速构建一个桌面应用（三）",
          link: "/column/front-end/study/others/vite-electron-03",
        },
        {
          text: "前端 Vue3+Live2d 开发虚拟人物应用",
          link: "/column/front-end/study/others/vue3+live2d",
        },
        {
          text: "Vue3+Live2d+Electron 开发桌面宠物应用程式",
          link: "/column/front-end/study/others/vue3+live2d+electron",
        },
      ],
    },
  ],
  "/column/front-end/plugin/": [
    {
      text: "在线预览",
      items: [
        {
          text: "Vue3 实现 PDF 文件在线预览功能",
          link: "/column/front-end/plugin/online-preview/vue3-pdf",
        },
        {
          text: "这可能是最简单的docx、pdf、excel文件预览vue组件库",
          link: "/column/front-end/plugin/online-preview/office-vue",
        },
      ],
    },
    {
      text: "地图插件",
      items: [
        {
          text: "百度地图简单用法-Vue3",
          link: "/column/front-end/plugin/map/bmap",
        },
        {
          text: "高德地图简单用法-Vue3",
          link: "/column/front-end/plugin/map/gmap",
        },
      ],
    },
    {
      text: "GIS开发",
      items: [
        {
          text: "OpenLayers在线瓦片数据源汇总",
          link: "/column/front-end/plugin/gis/tile-data-source",
        },
      ],
    },
    {
      text: "全屏单页滚动",
      items: [
        {
          text: "Vue-Fullpage基础用法",
          link: "/column/front-end/plugin/full-screen-scroll/vue-fullpage",
        },
      ],
    },
  ],
  "/column/front-end/others/": [
    {
      text: "环境方面",
      items: [
        {
          text: "nvm的简介、安装、使用（简单明了）",
          link: "/column/front-end/others/environment/nvm",
        },
        {
          text: "yarn : 无法加载文件，因为在此系统上禁止运行脚本",
          link: "/column/front-end/others/environment/yarn-not-loaded",
        },
      ],
    },
    {
      text: "AI方面",
      items: [
        {
          text: "谷歌 Gemini 本地一键部署教程，媲美 GPT4，免费调用API key",
          link: "/column/front-end/others/ai/google-ai",
        },
      ],
    },
    {
      text: "搭建方面",
      items: [
        {
          text: "十分钟教会你如何使用VitePress搭建及部署个人博客站点",
          link: "/column/front-end/others/cage-structure/vite-press",
        },
        {
          text: "10 分钟教你搭建一个 ChatGPT 网站，发给朋友直接用",
          link: "/column/front-end/others/cage-structure/gpt",
        },
      ],
    },
    {
      text: "版本控制系统",
      items: [
        {
          text: "Git常用命令速查表",
          link: "/column/front-end/others/git/git",
        },
      ],
    },
  ],
  "/column/tools/computer/": [
    {
      text: "电脑方面",
      items: [
        {
          text: "win10系统怎么去掉程序快捷方式字样",
          link: "/column/tools/computer/tutorial/del_shortcut",
        },
        {
          text: "一键隐藏硬盘盘符",
          link: "/column/tools/computer/tutorial/drive-hide",
        },
        {
          text: "资源管理器地址栏记录自动清除",
          link: "/column/tools/computer/tutorial/clear-log",
        },
        {
          text: "一键永久激活Windows系统",
          link: "/column/tools/computer/tutorial/activate-win",
        },
      ],
    },
  ],
};
