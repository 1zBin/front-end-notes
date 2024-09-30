# 十分钟教会你如何使用VitePress搭建及部署个人博客站点

使用VitePress可以让我们快速搭建一个静态博客网站，这篇文章将带领大家搭建一个基于VitePress的静态博客网站并且部署到GitHub Pages(github提供的静态网页服务)

## 快速上手

### 新建目录并初始化(我的目录名为kittydocs)

这里我们使用pnpm式，当然yarn，npm都是可以的,如果你没有安装pnpm可以全局安装

```npm i pnpm -g```

然后初始化

```pnpm init```

### 安装vitepress

```pnpm i vitepress```

### package.json添加script

```
"scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  }
```
这三个脚本分别代表启动本地文档服务，打包文档，启动打包后（dist）服务

### 创建文档 文档放在docs目录下，新建docs/index.md

``` ## hello juejin ```

此时我们的文件结构为

```
.
├─ docs 
│  └─ index.md
└─ package.json
```

### 启动本地服务文档站点

```pnpm run docs:dev```

此时便会启动一个``http://localhost:3000/`` 的服务,默认加载docs/index.md

![01.jpg](https://pic1.zhimg.com/80/v2-b6cb15d2f599a03c63f5383e98c4c564_720w.webp)


到这里一个简单的站点就完成了，当然这肯定是不够的，接下来我们看vitepress的配置

## 配置文件

在docs目录下创建一个 .vuepress目录，如下结构

```
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  └─ index.md
└─ package.json
```

config.js导出一个js对象

```
export default {
    title: 'kittyui', //站点标题
    description: '一个vue3组件库',//mate标签description，多用于搜索引擎抓取摘要
  }
```

此时我们重启服务便可看到

![02.jpg](https://pic1.zhimg.com/80/v2-6f68f2a9bffb6e27d9c3b81a47fe98f8_720w.webp)

## 导航栏

### title和logo

首先看一下title和logo的配置

```
export default {
  themeConfig: {
    siteTitle: "Kitty",
    logo: "/logo.png",
  },
};
```

其中logo的地址对应的是public下的图片，目录结构如下所示

```
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ public
│  │   └─ logo.png
│  └─ index.md
└─ package.json
```

这里logo我是用了vue的图标，此时页面效果为

![03.jpg](https://pic3.zhimg.com/80/v2-a661342dc5bf0584bd9b19675902865e_720w.webp)

### 右侧导航

我们可以在themeConfig.nav配置右侧导航,并且点击可以跳转我们指定页面。

```
themeConfig: {
    siteTitle: "Kitty",
    logo: "/logo.png",
    nav: [
      { text: "Guide", link: "/guide/" },
      { text: "GuideTest", link: "/guide/test" },
      { text: "gitee", link: "https://gitee.com/geeksdidi" },
    ],
  }
```

同时我们在docs下新建guide/index.md和test.md

```
# guild
# test
```

此时我们页面即可展示我们打nva并且支持了跳转本地markdown文件以及外部链接

![04.jpg](https://pic3.zhimg.com/80/v2-f7bae486b12afa91c118389408911f3a_720w.webp)


我们还可以这样嵌套配置，使得导航栏出现下拉选项

```
themeConfig: {
    siteTitle: "Kitty",
    logo: "/logo.png",
    nav: [
      { text: "Guide", link: "/guide/" },
      { text: "GuideTest", link: "/guide/test" },
      { text: "gitee", link: "https://gitee.com/geeksdidi" },
      {
        text: "Drop Menu",
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ]
  }
```
![05.jpg](https://pic1.zhimg.com/80/v2-7f85dee582951c51140aa8867b33a940_720w.webp)


如果我们想要让下拉选项分组，即中间有条分割线，我们的nav可以这样写

```
nav: [
      { text: "Guide", link: "/guide/" },
      { text: "GuideTest", link: "/guide/test" },
      { text: "gitee", link: "https://gitee.com/geeksdidi" },
      {
        text: "Drop Menu",
        items: [
          {
            items: [
              { text: "Item A1", link: "/item-A1" },
              { text: "Item A2", link: "/item-A2" },
            ],
          },
          {
            items: [
              { text: "Item B1", link: "/item-B1" },
              { text: "Item B2", link: "/item-B2" },
            ],
          },
        ],
      },
    ]
```
此时效果为

![06.jpg](https://pic1.zhimg.com/80/v2-f9dcaec41b93621d38087719f6fda87c_720w.webp)


## 配置社交链接socialLinks

使用themeConfig.socialLinks可以配置我们的社交链接，目前支持的有

```
type SocialLinkIcon =
  | 'discord'
  | 'facebook'
  | 'github'
  | 'instagram'
  | 'linkedin'
  | 'slack'
  | 'twitter'
  | 'youtube'
  | { svg: string }
```
配置如下
```
socialLinks: [
      { icon: "github", link: "https://gitee.com/geeksdidi" },
      { icon: "twitter", link: "```" },
      // You can also add custom icons by passing SVG as string:
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="SVG namespace"><title>Dribbble</title><path d="M12```6.38z"/></svg>',
        },
        link: "```",
      },
    ],
```
![07.jpg](https://pic2.zhimg.com/80/v2-bb00eb6b79a5611229d1734e7ba398d5_720w.webp)


## 侧边栏Sidebar

侧边栏可以在themeConfig.Sidebar中配置，其实和nav配置差不多

```
sidebar: [
      {
        text: "组件库源码实现",
        items: [
          {
            text: "组件库环境搭建",
            link: "/articles/组件库环境搭建",
          },
          { text: "gulp的使用", link: "/articles/gulp的使用" },
        ],
      },
      {
        text: "vue教程",
        items: [
          {
            text: "pina和vuex",
            link: "/articles/pina和vuex",
          },
        ],
      },
    ],
```

这里我搬运了我掘金上的一些文章放了进去，目录结构如下图

![08.jpg](https://pic2.zhimg.com/80/v2-bb00eb6b79a5611229d1734e7ba398d5_720w.webp)

页面展示效果如下

![09.jpg](https://pic1.zhimg.com/80/v2-4baaae26c8d5dbc2cba0c40c66198fcc_720w.webp)


不过我们一般不会使用这种方式配置侧边栏，因为这样每个页面都会有侧边栏。我们需要做到仅某些页面才会出现侧边栏。所以我们可以这样配置

```
sidebar: {
      "/articles/": [
        {
          text: "组件库源码实现",
          items: [
            {
              text: "组件库环境搭建",
              link: "/articles/组件库环境搭建",
            },
            { text: "gulp的使用", link: "/articles/gulp的使用" },
          ],
        },
        {
          text: "vue教程",
          items: [
            {
              text: "pina和vuex",
              link: "/articles/pina和vuex",
            },
          ],
        },
      ],
    },
```

sideBar值改成一个对象，对象的key是一个路径，只有包含这个路径的才会出现侧边栏。所以我们将nav的配置中的guild改成博客，同时路径指向我们的articles下的markdown文件

```
nav: [
      { text: "博客", link: "/articles/组件库环境搭建" },
     ]
```

此时你会发现进入首页并不会出现sideBar，只有点击博客才会出现侧边栏

```
sidebar: {
      "/articles/": [
        {
          text: "组件库源码实现",
          items: [
            {
              text: "组件库环境搭建",
              link: "/articles/组件库环境搭建",
            },
            { text: "gulp的使用", link: "/articles/gulp的使用" },
          ],
        },
        {
          text: "vue教程",
          items: [
            {
              text: "pina和vuex",
              link: "/articles/pina和vuex",
            },
          ],
        },
      ],
    },
```

sideBar值改成一个对象，对象的key是一个路径，只有包含这个路径的才会出现侧边栏。所以我们将nav的配置中的guild改成博客，同时路径指向我们的articles下的markdown文件

```
nav: [
      { text: "博客", link: "/articles/组件库环境搭建" },
     ]
```

此时你会发现进入首页并不会出现sideBar，只有点击博客才会出现侧边栏

![09.jpg](https://pic4.zhimg.com/80/v2-14ba1cba149d0afdc8e35aed1f2cdd5b_720w.webp)

## 配置可折叠侧边栏

配置可折叠侧边栏只需将collapsible设置为true即可,默认初始页面是全部展开页面，如果你需要关闭状态只需要将collapsed设置为true

```
        {
          text: "vue教程",
          collapsible: true,
          collapsed:true,
          items: [
            {
              text: "pina和vuex",
              link: "/articles/pina和vuex",
            },
          ],
        },
```

## 首页布局

首页就是进入我们博客会加载docs/index.md,所以我们需要对其进行一个美化，我们VitePress默认主题提供了一个主页布局

```
---
layout: home

hero:
  name: 东方小月的博客
  text: 随便写点啥.
  tagline: 帅气又迷人的小月
  image:
    src: /logo.png
    alt: Kitty
  actions:
    - theme: brand
      text: 快来快来
      link: /articles/组件库环境搭建
    - theme: alt
      text: View on Gitee
      link: https://gitee.com/geeksdidi

features:
  - icon: ⚡️
    title: 这是一个闪电图标
    details: wawawa
  - icon:  
    title: 这是一个手掌图标
    details: good```
  - icon:  ️
    title: 这是一个修理图标
    details: cocococo
---
```

![10.jpg](https://pic4.zhimg.com/80/v2-9746f6173d9485e2426d67f2668b35c3_720w.webp)


## 部署到GitHub Pages

既然要部署到GitHub Pages，你得先在github新建一个仓库，因为要用他的GitHub Pages，所以仓库命名为http://username.github.io的形式，username是你github的用户名。然后点击设置

![11.jpg](https://pic2.zhimg.com/80/v2-f2967266d0578a7cd8144d8c8428a105_720w.webp)

选择pages

![12.jpg](https://pic1.zhimg.com/80/v2-668703c30484e785c38af6618299e12c_720w.webp)


这里设置根目录/(root),当然也可以选择其它目录,点击保存，如果选择其它目录比如docs，config.js就需要配置一个base

```
export default {
    base:'/docs/'
  }
```

最后选择一个主题(这里不选择我发现站点不生效,后面把打包后的代码推上来即可,会默认加载index.html)

然后将打包后的dist下的文件推送到你的远程仓库。vitepress官网给我们提供了一个脚本文件deploy.sh,我们只需要改下远程仓库即可

```
#!/usr/bin/env sh

# 忽略错误
set -e

# 构建
npm run docs:build

# 进入待发布的目录
cd docs/.vitepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果是部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```

直接执行这个脚本文件，我们的打包后的文件就会被推送到我们的仓库。然后我们就可以直接访问我们的静态博客站点了，比如我的这个示例博客东方小月.如果你想要自定义其它域名的话,可以创建一个组织然后在组织下新建仓库名为organization.github.io的形式(organization是你组织名)然后执行同样的操作即可。具体可以点这里创建 [GitHub Pages](https://docs.github.com/zh/pages/getting-started-with-github-pages/creating-a-github-pages-site) 站点

最后代码已经推送到[kittypage](https://gitee.com/geeksdidi/kittypage),需要的可以自行获取

原文：[东方小月：十分钟教会你如何使用VitePress搭建及部署个人博客站点](https://zhuanlan.zhihu.com/p/551291839)