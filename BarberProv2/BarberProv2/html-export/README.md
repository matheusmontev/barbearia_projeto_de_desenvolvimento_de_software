# 💈 BarberPro - Sistema de Gestão para Barbearias

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![HTML](https://img.shields.io/badge/HTML-5-orange.svg)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-3-blue.svg)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow.svg)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

Sistema completo de gestão para barbearias com agendamentos, controle de pagamentos e relatórios em tempo real.

[🚀 Quick Start](QUICK_START.md) | [📖 Deploy Guide](DEPLOY.md) | [🐛 Reportar Bug](https://github.com/seu-usuario/barberpro/issues) | [⭐ GitHub Setup](GITHUB_SETUP.md)

---

## ✨ Funcionalidades

- ✅ **Gestão de Agendamentos** - Agenda semanal completa
- ✅ **Controle de Pagamentos** - Marque clientes que já pagaram
- ✅ **Histórico Completo** - Veja todos os agendamentos (ativos e cancelados)
- ✅ **Métricas em Tempo Real** - Faturamento, ocupação e estatísticas
- ✅ **WhatsApp Integration** - Envie confirmações direto para o cliente
- ✅ **Sistema de Login** - Autenticação com Google ou email
- ✅ **Teste Grátis** - 7 dias sem cartão de crédito
- ✅ **100% Responsivo** - Funciona em desktop, tablet e mobile

---

## 📁 Estrutura de Arquivos

```
html-export/
├── index.html              # Página inicial ✅
├── login.html             # Login ✅
├── signup.html            # Cadastro ✅
├── forgot-password.html   # Recuperar senha ✅
├── pricing.html           # Planos (R$ 20/mês ou R$ 499/ano) ✅
├── dashboard.html         # Dashboard do barbeiro ✅
├── history.html           # Histórico de agendamentos ✅
├── contact.html           # Contato ✅
├── styles.css             # Todos os estilos CSS ✅
├── app.js                 # Toda a lógica JavaScript ✅
├── .gitignore             # Arquivos ignorados pelo Git ✅
├── DEPLOY.md              # Guia completo de deploy ✅
└── README.md              # Este arquivo ✅
```

---

## 🚀 Como Usar

### **Opção 1: Testar Localmente** ⚡

```bash
# 1. Clone ou baixe o repositório
# 2. Navegue até a pasta
cd html-export

# 3. Abra no navegador
open index.html  # macOS
start index.html  # Windows
xdg-open index.html  # Linux
```

### **Opção 2: Deploy Online (GitHub + Netlify)** 🌐

#### **Netlify (Recomendado - Grátis)**

1. Acesse [netlify.com](https://netlify.com)
2. Crie uma conta gratuita
3. Arraste a pasta `html-export` para o Netlify Drop
4. Pronto! Seu site está no ar

#### **GitHub Pages**

```bash
# 1. Criar repositório no GitHub
# 2. Fazer upload dos arquivos
git init
git add .
git commit -m "Deploy BarberPro"
git branch -M main
git remote add origin SEU-REPOSITORIO
git push -u origin main

# 3. Ir em Settings > Pages
# 4. Selecionar branch 'main' e pasta 'root'
# 5. Salvar e aguardar deploy
```

#### **Vercel**

1. Acesse [vercel.com](https://vercel.com)
2. Importe seu repositório ou arraste a pasta
3. Deploy automático

## 🎨 Personalização

### **Mudar Cores**

Edite o arquivo `styles.css` nas linhas 8-13:

```css
:root {
    --color-primary: #C19A6B;      /* Dourado/Bronze */
    --color-secondary: #EAB308;     /* Amarelo Dourado */
    --color-bg-dark: #0D0D0D;      /* Fundo Preto */
    --color-bg-card: #1A1A1A;      /* Cards */
    --color-text-white: #ffffff;   /* Texto Branco */
}
```

### **Adicionar Logo**

Substitua o SVG da tesoura no header por sua imagem:

```html
<!-- Antes (linha ~50 do index.html) -->
<div class="logo-icon">
    <svg>...</svg>
</div>

<!-- Depois -->
<div class="logo-icon">
    <img src="seu-logo.png" alt="Logo" style="width: 24px; height: 24px;">
</div>
```

### **Mudar Fontes**

No `<head>` de cada HTML, troque o Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=SuaFonte:wght@400;700&display=swap" rel="stylesheet">
```

E no CSS:

```css
body {
    font-family: 'SuaFonte', sans-serif;
}
```

## 💾 Dados Persistentes

Os dados são salvos no **LocalStorage** do navegador. Para resetar:

```javascript
// Abra o Console do navegador (F12) e digite:
localStorage.clear();
location.reload();
```

## 🔧 Funcionalidades

### **Login**
- Email/senha ou Google (simulado)
- Credenciais salvas no LocalStorage
- Redirecionamento automático

### **Dashboard**
- Métricas em tempo real
- Toggle de pagamento (Pago/Não Pago)
- Cancelar agendamentos
- Agenda semanal por dias

### **Histórico**
- Todos os agendamentos (ativos + cancelados)
- Filtros por status
- Cálculo de receita

### **Agendamentos**
- 38 clientes pré-cadastrados
- Distribuídos de Segunda a Sábado
- Sistema de pagamento e cancelamento

## 📱 Responsividade

O site é 100% responsivo:
- **Desktop**: Layout completo com sidebar
- **Tablet**: Grid adaptativo
- **Mobile**: Menu hamburger, cards empilhados

## 🐛 Solução de Problemas

### **"Navegação não funciona"**
- Verifique se todos os arquivos HTML estão na mesma pasta
- Confira os links nos botões (devem ser relativos: `login.html`)

### **"Estilos não carregam"**
- Verifique se `styles.css` está na mesma pasta
- Cheque a tag `<link>` no `<head>`

### **"JavaScript não funciona"**
- Confirme que `app.js` está na mesma pasta
- Verifique se está antes do fechamento `</body>`

### **"Dados não salvam"**
- LocalStorage pode estar desabilitado
- Abra em modo normal (não anônimo)

## 📊 Demonstração

### **Screenshots**

#### Home Page
![Home](https://via.placeholder.com/800x400/0D0D0D/C19A6B?text=BarberPro+Home)

#### Dashboard
![Dashboard](https://via.placeholder.com/800x400/0D0D0D/EAB308?text=Dashboard+com+Métricas)

#### Histórico
![History](https://via.placeholder.com/800x400/0D0D0D/C19A6B?text=Histórico+de+Agendamentos)

---

## 🔐 Segurança

⚠️ **IMPORTANTE**: Esta é uma versão de demonstração front-end.

### **Para Produção Real:**

- ✅ Implementar backend (Node.js, PHP, Python, etc.)
- ✅ Usar banco de dados (MySQL, PostgreSQL, MongoDB)
- ✅ Autenticação JWT ou OAuth
- ✅ HTTPS obrigatório
- ✅ Validação server-side
- ✅ Sanitização de inputs
- ✅ Rate limiting
- ✅ CORS configurado

### **Dados Atuais:**
- Salvos no **LocalStorage** do navegador
- Sem backend real
- Login simulado (aceita qualquer email/senha)

## 📞 Suporte

Precisa de ajuda? Entre em contato:
- 📧 Email: contato@barberpro.com
- 📱 WhatsApp: (11) 98765-4321

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

---

## 📝 Changelog

### v1.0.0 (2025-01-10)
- ✨ Lançamento inicial
- ✅ 8 páginas HTML completas
- ✅ Sistema de agendamentos
- ✅ Dashboard com métricas
- ✅ Histórico de agendamentos
- ✅ 38 clientes pré-cadastrados
- ✅ Design responsivo

---

## 👥 Autores

- **Desenvolvedor Principal** - [Seu Nome](https://github.com/seu-usuario)

---

## 📄 Licença

Este projeto está sob a licença MIT - veja [LICENSE](LICENSE) para mais detalhes.

**Livre para usar, modificar e distribuir!**

---

## ⭐ Mostre seu Apoio

Se este projeto te ajudou, dê uma ⭐ no GitHub!

[![GitHub stars](https://img.shields.io/github/stars/seu-usuario/barberpro?style=social)](https://github.com/seu-usuario/barberpro/stargazers)

---

**Desenvolvido com ❤️ para barbeiros modernos**

[⬆️ Voltar ao topo](#-barberpro---sistema-de-gestão-para-barbearias)
