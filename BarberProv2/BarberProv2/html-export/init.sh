#!/bin/bash

# BarberPro - Script de Inicialização Automática
# Execute com: bash init.sh

echo "🔥 BarberPro - Configuração Automática"
echo "======================================"
echo ""

# Verificar se Git está instalado
if ! command -v git &> /dev/null; then
    echo "❌ Git não está instalado. Instale em: https://git-scm.com"
    exit 1
fi

echo "✅ Git encontrado"

# Perguntar nome do usuário GitHub
read -p "📝 Digite seu usuário do GitHub: " github_user

if [ -z "$github_user" ]; then
    echo "❌ Nome de usuário é obrigatório!"
    exit 1
fi

# Perguntar nome do repositório
read -p "📝 Nome do repositório (padrão: barberpro): " repo_name
repo_name=${repo_name:-barberpro}

echo ""
echo "🚀 Configurando Git..."

# Inicializar Git se ainda não foi
if [ ! -d ".git" ]; then
    git init
    echo "✅ Git inicializado"
fi

# Adicionar arquivos
git add .
echo "✅ Arquivos adicionados"

# Commit
git commit -m "🎉 Initial commit - BarberPro v1.0" 2>/dev/null || echo "⚠️  Já existe commit"

# Renomear branch para main
git branch -M main
echo "✅ Branch renomeada para main"

# Adicionar remote
git remote add origin "https://github.com/$github_user/$repo_name.git" 2>/dev/null || \
git remote set-url origin "https://github.com/$github_user/$repo_name.git"
echo "✅ Remote configurado"

echo ""
echo "======================================"
echo "✅ Configuração concluída!"
echo ""
echo "📌 Próximos passos:"
echo ""
echo "1️⃣  Crie o repositório no GitHub:"
echo "   https://github.com/new"
echo "   Nome: $repo_name"
echo ""
echo "2️⃣  Execute o push:"
echo "   git push -u origin main"
echo ""
echo "3️⃣  Deploy no Netlify:"
echo "   https://app.netlify.com/drop"
echo "   (Arraste a pasta html-export)"
echo ""
echo "======================================"
echo "🎉 Pronto para usar!"
echo ""
