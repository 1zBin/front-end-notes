---
# 提供三种布局，doc、page和home
# 官方文档相关配置：https://vitepress.dev/reference/default-theme-layout
layout: home
home: true

# 官方文档相关配置：https://vitepress.dev/reference/default-theme-home-page
title: LzBin的博客
titleTemplate: Hi，终于等到你！
editLink: true
lastUpdated: true

hero:
    name: 前端笔记
    text: Stay foolish, Stay hungry.
    tagline: /前端黑奴/人间清醒/工具控/
    image:
        # 首页右边的图片
        src: /vitepress-logo-large.webp
        # 图片的描述
        alt: avatar
    # 按钮相关
    actions:
    - theme: brand
      text: 进入主页
      link: /column/personage/
    - theme: alt
      text: 个人成长
      link: /column/personage/
# 按钮下方的描述
features:
  - icon: 👨‍💻
    title: Web前端
    details: 前端黑奴，国内某互联网公司搬砖。
    link: /column/front-end/study/
  - icon: ⚙️
    title: 收藏工具
    details: 喜欢用各种各样的工具插件实现某些小功能。
    link: /column/tools/computer/
  - icon: 🧩
    title: 其他
    details: 涵盖范围之外，包罗万象，不限于此。
---

<PageBubble />