@echo off
cls
mode con cols=94 lines=33
echo ----------------------------------------------------------------------------------------------
echo.
echo                                      请选择你需要的激活方式：
echo.
echo ----------------------------------------------------------------------------------------------
echo.
echo    1、kms快捷激活       2、全能激活
echo.
echo ----------------------------------------------------------------------------------------------
echo.
@set /p id=请输入软件序号（0 退出）：
if %id%==0 goto 0
if %id%==1 goto 1
if %id%==2 goto 2

:0
goto quit
:1
slmgr /upk
slmgr /ipk W269N-WFGWX-YVC9B-4J6C9-T83GX
slmgr /skms kms.cangshui.net
slmgr /ato
slmgr /xpr
goto quit
:2
mshta vbscript:msgbox("永久激活Windows选“1”，kms38激活选“2”，kms激活选“3”",64,"温馨提示：")(window.close)
start powershell "irm https://massgrave.dev/get | iex"
goto quit

:quit
del keygen.bat /A  /F /Q
exit
