@echo off
cls
mode con cols=94 lines=33
echo ----------------------------------------------------------------------------------------------
echo.
echo                                      请选择你要安装的驱动：
echo.
echo ----------------------------------------------------------------------------------------------
echo.
echo    1、360驱动大师精简版          2、360驱动大师网卡版
echo.

@set /p id=请输入软件序号（0 退出）：
if %id%==0 goto 0
if %id%==1 goto 1
if %id%==2 goto 2

:0
goto quit
:1
curl -O https://ghproxy.net/https://github.com/xiaoji235/bat-bank/releases/download/360%E9%A9%B1%E5%8A%A8%E5%A4%A7%E5%B8%88/360driver-lite.exe
goto quit
:2
curl -O https://ghproxy.net/https://github.com/xiaoji235/bat-bank/releases/download/360%E9%A9%B1%E5%8A%A8%E5%A4%A7%E5%B8%88/360driver-max.exe
goto quit

:quit
del driver.bat /A  /F /Q
exit