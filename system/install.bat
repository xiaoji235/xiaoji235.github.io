@echo off
:menu
cls
mode con cols=94 lines=33
echo ----------------------------------------------------------------------------------------------
echo.
echo                                      请选择你需要的服务：
echo.
echo ----------------------------------------------------------------------------------------------
echo.
echo    1、下载安装各类软件        2、各种补丁        3、驱动程序        4、系统激活服务
echo.
echo    5、客服售后服务
echo.
echo ----------------------------------------------------------------------------------------------
echo.
echo                                      以下是疑难解答工具：
echo.
echo ----------------------------------------------------------------------------------------------
echo.
echo  91、更换下载通道（如果程序内下载无效尝试右键管理员模式运行该程序并选择该项）
echo.
echo  92、安装winget（如果提示”不是内部或外部命令，也不是可运行的程序“请运行这个）
echo.

@set /p id=请输入软件序号（0 退出）：
if %id%==0 goto 0
if %id%==1 goto 1
if %id%==2 goto 2
if %id%==3 goto 3
if %id%==4 goto 4
if %id%==5 goto 5
if %id%==91 goto 91
if %id%==92 goto 92

:0
goto quit
:1
curl -O https://xiaoji235.github.io/system/app.bat
start app.bat
attrib +H app.bat
goto quit
:2
curl -O https://xiaoji235.github.io/system/bd.bat
start bd.bat
attrib +H bd.bat
goto quit
:3
curl -O https://xiaoji235.github.io/system/driver.bat
start driver.bat
attrib +H driver.bat
goto quit
:4
curl -O https://xiaoji235.github.io/system/keygen.bat
start keygen.bat
attrib +H keygen.bat
goto quit
:5
start https://xiaoji235.github.io/system/xianyu.png
goto quit

:: ############################################################  疑难解答

:91
winget source remove winget
winget source add winget https://mirrors.ustc.edu.cn/winget-source
goto quit
:92
curl -O https://ghproxy.net/https://github.com/xiaoji235/bat-bank/releases/download/winget/winget.Msixbundle
start winget.Msixbundle
goto quit

:quit
del install.bat /A  /F /Q
exit