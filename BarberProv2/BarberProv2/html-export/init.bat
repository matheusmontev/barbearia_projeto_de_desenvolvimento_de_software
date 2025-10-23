@echo off
REM BarberPro - Script de Inicialização para Windows
REM Execute com: init.bat

echo ========================================
echo 🔥 BarberPro - Configuração Automática
echo ========================================
echo.

REM Verificar se Git está instalado
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Git não está instalado!
    echo Baixe em: https://git-scm.com
    pause
    exit /b 1
)

echo ✅ Git encontrado
echo.

set /p github_user="📝 Digite seu usuário do GitHub: "

if "%github_user%"=="" (
    echo ❌ Nome de usuário é obrigatório!
    pause
    exit /b 1
)

set /p repo_name="📝 Nome do repositório (padrão: barberpro): "
if "%repo_name%"=="" set repo_name=barberpro

echo.
echo 🚀 Configurando Git...

REM Inicializar Git se ainda não foi
if not exist ".git" (
    git init
    echo ✅ Git inicializado
)

REM Adicionar arquivos
git add .
echo ✅ Arquivos adicionados

REM Commit
git commit -m "🎉 Initial commit - BarberPro v1.0" >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Commit criado
) else (
    echo ⚠️  Já existe commit
)

REM Renomear branch para main
git branch -M main
echo ✅ Branch renomeada para main

REM Adicionar remote
git remote add origin https://github.com/%github_user%/%repo_name%.git >nul 2>&1
if %errorlevel% neq 0 (
    git remote set-url origin https://github.com/%github_user%/%repo_name%.git
)
echo ✅ Remote configurado

echo.
echo ========================================
echo ✅ Configuração concluída!
echo.
echo 📌 Próximos passos:
echo.
echo 1️⃣  Crie o repositório no GitHub:
echo    https://github.com/new
echo    Nome: %repo_name%
echo.
echo 2️⃣  Execute o push:
echo    git push -u origin main
echo.
echo 3️⃣  Deploy no Netlify:
echo    https://app.netlify.com/drop
echo    (Arraste a pasta html-export)
echo.
echo ========================================
echo 🎉 Pronto para usar!
echo.
pause
