
# 保姆级，10 分钟教你搭建一个 ChatGPT 网站，发给朋友直接用

今天，教大家搭建一个自己的 GPT 网站（支持 ChatGPT-4.0），可以分享给朋友用，有网就行（无需科学上网工具）。

## 保姆级教程，带你一步一步搭建

Github 地址：https://github.com/magicCJ/ChatGPT-Next-Web

进入这个地址后，往下拉，点击 Deploy

![01](https://pic2.zhimg.com/80/v2-62f334c5803039e9e79f2a75bcaa15cd_720w.webp)


点击 Deploy 后跳转到创建页面。

第一步：关联 GitHub 账号

第二步：给自己的网站起一个名字，我这里直接是默认名字 ChatGPT-Next-Web

第三步：点击 Create 创建

![02](https://pic3.zhimg.com/80/v2-ad624106837f7b5afbc9cc04112f9bee_720w.webp)


输入 OPENAI_API_KEY （不知道怎么获取的同学往下看）和 网站访问密码（随便设置，但是要记住，别忘了）

![03](https://pic1.zhimg.com/80/v2-a7282e1eb29ecb7c64292183006ebb44_720w.webp)

点击 Deploy，大概需要 5 分钟左右，你的网站就创建好了。

![03](https://pic4.zhimg.com/80/v2-35e02971fa360ef274c7492805741d9b_720w.webp)

点击右上角 Continue to Dashboard，进行设置域名。

![04](https://pic1.zhimg.com/80/v2-2220eb7b0a6dcc3d779364b50448e30c_720w.webp)

点击 Domains 设置域名，如果没有域名的同学，可以直接点下方的默认链接。

![05](https://pic3.zhimg.com/80/v2-7b4f7fdc81693603752e0e0256392bb2_720w.webp)

如果要配置自己的域名，找到购买域名的平台，我的是阿里云平台，进入控制台，按照下面的信息添加配置即可。

![06](https://pic4.zhimg.com/80/v2-9c9f48f8b6b187b43e53153af38f30b3_720w.webp)

过一会，看到域名下方的校验都勾上了，那就是配置成功啦。

![07](https://pic4.zhimg.com/80/v2-b922114a3edb1abcd3e7ebf7b0165873_720w.webp)

可以选择默认的角色进行问答，也可以直接进入默认模式。

![08](https://pic3.zhimg.com/80/v2-6c1f11449c4c9613f86d0c03cd4710b6_720w.webp)

这样就可以把你的网站链接发给朋友一起用啦！可以使用上面设置的密码访问，也可以通过输入用户自己的 OPENAI_API_KEY 访问，非常方便！

![09](https://pic1.zhimg.com/80/v2-d71b11c1268c5a19c00c970438c102b0_720w.webp)

此外，你还可以设置模型和模型参数，让 ChatGPT 更符合你的需要！

## 怎么获取 OPENAI_API_KEY ？

官网申请的现在要收费，建议去这里申请免费的CHATGPT-API https://github.com/popjane/free_chatgpt_api

有 ChatGPT 账号的同学，进入下方链接，点击 Create new secret key 复制保存下来即可。

新增 OPENAI_API_KEY 网址： https://platform.openai.com/api-keys

![09](https://pic3.zhimg.com/80/v2-6330b5bdb6933232e992234801c91c8e_720w.webp)


## 怎么获取 Gemini_API_KEY ？

如果 ChatGPT Key 无法使用，那么推荐使用谷歌的 GPT Key，谷歌最近正式开放了Gemini模型的 API，只要你拥有一个Google账号和一个海外 IP，你就可以免费申请使用Gemini Pro和Gemini Pro Vision，有关功能居然能媲美GPT-4！
<br/>
[跳转到"谷歌 Gemini 本地一键部署教程..."文章](../ai/google-ai.md#api)

------

这简直是不会科学上网同学的福音，发给那些非编程领域的人，绝对就一个字「牛」，赶紧去试试吧～～

原文：[伍六七AI编程：保姆级，10 分钟教你搭建一个 ChatGPT 网站，发给朋友直接用](https://zhuanlan.zhihu.com/p/670899959)