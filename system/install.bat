@echo off
cls
echo ------------------------------------------
echo.
echo            请选择你要安装的应用：
echo.
echo ------------------------------------------
echo.
echo    常备软件：
echo.
echo    1、微信          2、QQ          3、火绒
echo.
echo    4、QQ音乐        5、网易云音乐
echo.
echo    游戏程序：
echo.
echo    6、steam         7、wegame      8、epic
echo.
echo    9、永劫无间
echo.
echo    办公工具：
echo.
echo    10、wps            11、Microsoft office
echo.
echo    12、更换下载通道（请右键管理员模式运行该程序）
echo.
@set /p id=请输入软件序号（0 退出）：
if %id%== 0 goto 0
if %id%==1 goto 1
if %id%==2 goto 2
if %id%==3 goto 3
if %id%==4 goto 4
if %id%==5 goto 5
if %id%==6 goto 6
if %id%==7 goto 7
if %id%==8 goto 8
if %id%==9 goto 9
if %id%==10 goto10
if %id%==11 goto 11
if %id%==12 goto 12


:0
goto menu
:1
Winget install --id Tencent.WeChat -i
goto menu
:2
Winget install --id Tencent.QQ -i
goto menu
:3
Winget install --id XPDNH1FMW7NB40 -i
goto menu
:4
Winget install --id Tencent.QQMusic -i
goto menu
:5
Winget install --id NetEase.CloudMusic -i
goto menu
:6
Winget install --id Valve.Steam -i
goto menu
:7
start https://www.wegame.com.cn/home/
goto menu
:8
Winget install --id EpicGames.EpicGamesLauncher -i
goto menu
:9
start https://www.yjwujian.cn/download/#/
goto menu
:10
winget install --id Kingsoft.WPSOffice -i
goto menu
:11
start https://otp.landian.vip/zh-cn/download.html
goto menu
:12
winget source remove winget
winget source add winget https://mirrors.ustc.edu.cn/winget-source
goto menu

:menu
del install.bat
exit