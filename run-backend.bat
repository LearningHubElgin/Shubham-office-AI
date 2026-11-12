@echo off
title Karttik AI - Flask Backend
cd /d "%~dp0backend"
echo ========================================================
echo   Starting Karttik AI Backend (Flask + SQL on port 5000)
echo ========================================================
call "venv\Scripts\activate.bat"
python app.py
pause

