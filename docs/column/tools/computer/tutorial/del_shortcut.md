# win10系统怎么去掉程序快捷方式字样
<br/>
<br/>
有时候我们在使用win10系统的时候，想去掉程序图标的快捷方式字样，怎么去掉呢，下面来分享一下方法

## 工具/原料

- win10系统
- 去掉程序快捷方式字样

## 方法/步骤

1. 第一步在win10系统上按win+R键，打开运行，输入regedit，如下图所示：

![win10系统怎么去掉程序快捷方式字样](https://exp-picture.cdn.bcebos.com/d04eec260d9a310eaa78dc9931b842406bfea274.jpg?x-bce-process=image%2Fresize%2Cm_lfit%2Cw_500%2Climit_1%2Fformat%2Cf_auto%2Fquality%2Cq_80)

2. 第二步打开注册表编辑器之后，点击“HKEY_CURRENT_USER”，如下图所示：

![win10系统怎么去掉程序快捷方式字样](https://exp-picture.cdn.bcebos.com/bbf95c406afec3143224a05dcac1b727ad539c74.jpg?x-bce-process=image%2Fresize%2Cm_lfit%2Cw_500%2Climit_1%2Fformat%2Cf_auto%2Fquality%2Cq_80)

3. 第三步依次点击“Software->Microsoft->Windows->CurrentVersion->Explorer”，如下图所示：

![win10系统怎么去掉程序快捷方式字样](https://exp-picture.cdn.bcebos.com/07c98f2ca5cadce85ca9354ffcf7980e5e209574.jpg?x-bce-process=image%2Fresize%2Cm_lfit%2Cw_500%2Climit_1%2Fformat%2Cf_auto%2Fquality%2Cq_80)

4. 第四步在Explorer右侧找到link，鼠标右键选择修改，如下图所示：

![win10系统怎么去掉程序快捷方式字样](https://exp-picture.cdn.bcebos.com/5e9a2820b93acd89f62413bc0335dd8a58de8b74.jpg?x-bce-process=image%2Fresize%2Cm_lfit%2Cw_500%2Climit_1%2Fformat%2Cf_auto%2Fquality%2Cq_80)

5. 第五步将link的值设置为“00 00 00 00”，如下图所示：

![win10系统怎么去掉程序快捷方式字样](https://exp-picture.cdn.bcebos.com/589f5b07880138700ba00f3f2d08a50f95fc8374.jpg?x-bce-process=image%2Fresize%2Cm_lfit%2Cw_500%2Climit_1%2Fformat%2Cf_auto%2Fquality%2Cq_80)

6. 第六步设置完成之后，重启电脑，程序图标的快捷方式字样就去掉了，需要注意的是新建程序的快捷方式还是带字样的，如下图所示：

![win10系统怎么去掉程序快捷方式字样](https://exp-picture.cdn.bcebos.com/a44e8afc508c9bce2219bfc4d6dd884ce44afa74.jpg?x-bce-process=image%2Fresize%2Cm_lfit%2Cw_500%2Climit_1%2Fformat%2Cf_auto%2Fquality%2Cq_80)