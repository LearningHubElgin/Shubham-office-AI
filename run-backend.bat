@echo off
title iSuite AI - Flask Backend
cd /d "%~dp0backend"
echo ========================================================
echo   Starting iSuite AI Backend (Flask + MySQL on port 3307)
echo ========================================================
call "venv\Scripts\activate.bat"
python app.py
pause

