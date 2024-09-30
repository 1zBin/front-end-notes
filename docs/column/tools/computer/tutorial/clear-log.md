
# 资源管理器地址栏记录自动清除的设置方法

键盘上按 win + R ，然后输入 regedit 打开注册表，选择到
 HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\TypedPaths
右键点 TypedPaths 选权限，把所有用户的权限都选为拒绝。这样设置后，关闭资源管理器记录也自动清除。

![01](./image/clear-log/01.jpg)