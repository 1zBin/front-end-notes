
# Windows 一键隐藏硬盘盘符

今天给大家带来一个，一键隐藏硬盘盘符的方法。如果你是老司机，可能你会喜欢这个方法，因为它将保证你行车的安全。下面我们一起来看看。

```
@echo off
mode con cols=80 lines=60
color 2e
echo.
echo					一键隐藏硬盘盘符BAT
echo.
echo.
echo		分区盘符对应的NoDrives10进制码：
echo.
echo		不隐藏--------0
echo		A-------------1
echo		B-------------2
echo		C-------------4
echo		D-------------8
echo		E-------------16
echo		F-------------32
echo		G-------------64
echo		H-------------128
echo		I-------------256
echo		J-------------512
echo		K-------------1024
echo		L-------------2048
echo		M-------------4096
echo		N-------------8192
echo		O-------------16384
echo		P-------------32768
echo		Q-------------65536
echo		R-------------131072
echo		S-------------262144
echo		T-------------524288
echo		U-------------1048576
echo		V-------------2097152
echo		W-------------4194304
echo		X-------------8388608
echo		Y-------------16777216
echo		Z-------------33554432
echo.
echo.
echo		【1】参照以上内容，重新编辑该BAT，把想要隐藏的盘符对应的码填写到dword /d后，保存更改。
echo		【2】重新运行该BAT。按任意键开始执行隐藏命令。
pause
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\Explorer" /v "NoDrives" /t reg_dword /d 448 /f
echo		【3】按任意键确定立即关机重启，使隐藏生效。
pause
shutdown -r
```

打开TXT，输入以上命令，保存为“一键隐藏硬盘盘符.BAT”。原理是通过修改HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\Explorer下的NoDrives值来实现隐藏硬盘盘符的效果。

![02](https://pic1.zhimg.com/80/v2-8d13a53424da006bce72b5ae3e92701c_720w.webp)

在“一键隐藏硬盘盘符.BAT”里小编为大家提供了分区盘符对应的NoDrives10进制码。打开这个BAY，查看你想要隐藏的盘符的对应的10进制码。然后，右键打开该BAT进行编辑，把对应的10进制码填写在dword /d后面。重新点开 “一键隐藏硬盘盘符.BAT”，按任意键开始执行修改注册表隐藏硬盘盘符的命令，接下来按任意键重启电脑即可生效。

下面我们来看看使用“一键隐藏硬盘盘符.BAT”的效果。

![03](https://pic1.zhimg.com/80/v2-f0a97b91891867c736a3942f1a882134_720w.webp)

我的电脑上D盘是光威悍将480G SSD。我只需要在“一键隐藏硬盘盘符.BAT”里把NoDrives的值改为8，重新打开BAT，按两下回车，重启电脑就可以了。

![04](https://pic2.zhimg.com/80/v2-e8c54aeda3d8ca693c199aa204989611_720w.webp)

看看是不是D盘是光威悍将480G SSD就被隐藏起来了呢。

![05](https://pic3.zhimg.com/80/v2-9f2a45304d67adce3ad0e59675d6944e_720w.webp)

使用“一键隐藏硬盘盘符.BAT”我们还可以一次隐藏多个盘符。比如说我们想隐藏光威悍将480G（D:）和凤凰系统（G:），我们只需要查找他们对应的NoDrives10进制码（D——8，G——64），将他们加起来的数字（72）填入BAT里的NoDrives值后面，运行BAT即可。

![06](https://pic1.zhimg.com/80/v2-69d7bc9d4a633b3bbbdb7e38325ad8b4_720w.webp)

使用“一键隐藏硬盘盘符.BAT”来隐藏我们的盘符非常简单快捷。但是实际上我们用这个方法隐藏了盘符，但是我们在磁盘管理里仍然可以看到我们隐藏了的盘符，并且能够打开该分区查看里面的数据。

也就是说这个隐藏盘符的方法，在懂电脑的玩家发现你有硬盘没显示之后，会分分钟将之看破。但是要能发现，才能看破。在人心浮躁的现代社会，粗心大意，后知后觉的人实在太多太多了。因此大家完全可以放心使用这个隐藏硬盘盘符的方法。