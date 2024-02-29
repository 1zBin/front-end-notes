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
    name: 几时带我去见识下
    text: 真正的莞式.
    tagline: /斜杠青年/人间清醒/工具控/
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
  - icon: 🧩
    title: 斜杆青年
    details: 是个平平无奇但是又很热爱学习的斜杆青年。
---