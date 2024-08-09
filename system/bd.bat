@echo off
cls
mode con cols=94 lines=33
echo ----------------------------------------------------------------------------------------------
echo.
echo                                      请选择你要安装的补丁：
echo.
echo ----------------------------------------------------------------------------------------------
echo.
echo    1、微软运行库合集
echo.

@set /p id=请输入软件序号（0 退出）：
if %id%==0 goto 0
if %id%==1 goto 1

:0
goto quit
:1
curl -O https://ghproxy.net/https://github.com/xiaoji235/bat-bank/releases/download/%E5%BE%AE%E8%BD%AF%E5%B8%B8%E7%94%A8%E8%BF%90%E8%A1%8C%E5%BA%93%E5%90%88%E9%9B%86/mslibs.exe
start mslibs.exe
goto quit

:quit
del bd.bat /A  /F /Q
exit