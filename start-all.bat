@echo off
title Karttik AI - Full Stack Launcher
echo ========================================================
echo   Launching Karttik AI Backend (Flask) ^& Frontend (Vite)
echo ========================================================
if exist "%~dp0backend\venv\Scripts\activate.bat" (
  start "Karttik AI - Backend" cmd /k "cd /d %~dp0backend && call venv\Scripts\activate.bat && python app.py"
) else (
  start "Karttik AI - Backend" cmd /k "cd /d %~dp0backend && python app.py"
)
start "Karttik AI - Frontend" cmd /k "cd /d %~dp0 && npm run dev"
echo.
echo Both servers have been launched in separate windows:
echo   - Marketing Site: http://localhost:5173
echo   - User App:       http://localhost:5173/app/
echo   - Login:          http://localhost:5173/login
echo   - Backend API:    http://localhost:5000
echo.
echo Verified Account: Subham@gmail.com / Subham123
echo ========================================================
pause
