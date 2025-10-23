# 🚀 Guia de Deploy - BarberPro

## Deploy Rápido (3 opções gratuitas)

### 1️⃣ Netlify (Recomendado - Mais Fácil)

**Método 1: Drag & Drop**
1. Acesse [netlify.com](https://netlify.com)
2. Crie uma conta gratuita
3. Arraste a pasta `html-export` para a área de drop
4. Pronto! Seu site está online

**Método 2: GitHub + Netlify**
```bash
# 1. Criar repositório no GitHub
# 2. Fazer upload dos arquivos

git init
git add .
git commit -m "Deploy BarberPro"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/barberpro.git
git push -u origin main

# 3. No Netlify:
# - New site from Git
# - Conectar GitHub
# - Selecionar repositório
# - Deploy!
```

**URL personalizada** (opcional):
- No Netlify > Site settings > Domain management
- Adicione seu domínio customizado

---

### 2️⃣ Vercel

```bash
# Opção 1: Vercel CLI
npm i -g vercel
cd html-export
vercel

# Opção 2: GitHub
# 1. Push para GitHub
# 2. Acesse vercel.com
# 3. Import repository
# 4. Deploy automático
```

---

### 3️⃣ GitHub Pages

```bash
# 1. Criar repositório público no GitHub
# 2. Upload dos arquivos
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/barberpro.git
git push -u origin main

# 3. Ativar GitHub Pages:
# Ir em: Settings > Pages
# Source: Deploy from branch
# Branch: main / (root)
# Save

# Seu site estará em:
# https://SEU-USUARIO.github.io/barberpro/
```

---

## 🔧 Configurações Importantes

### Variáveis de Ambiente (se usar backend)

Crie um arquivo `.env` (já está no .gitignore):

```env
# WhatsApp API (opcional)
WHATSAPP_API_KEY=sua_chave_aqui

# Email Service (opcional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu_email@gmail.com
SMTP_PASS=sua_senha_app

# Database (se implementar)
DATABASE_URL=postgresql://...
```

---

## 🌐 Domínio Personalizado

### Netlify
1. Site settings > Domain management
2. Add custom domain
3. Configure DNS:
   - **A Record**: `75.2.60.5`
   - **CNAME**: `seu-site.netlify.app`

### Vercel
1. Project settings > Domains
2. Add domain
3. Configure DNS conforme instruções

---

## ⚡ Otimizações de Performance

### 1. Comprimir Imagens
```bash
# Usar TinyPNG ou Squoosh
# Reduzir imagens para web (< 200KB cada)
```

### 2. Minificar CSS/JS (opcional)
```bash
# Instalar minificadores
npm install -g clean-css-cli uglify-js

# Minificar
cleancss -o styles.min.css styles.css
uglifyjs app.js -o app.min.js

# Atualizar referências nos HTML
```

### 3. CDN para Fontes
As fontes do Google já estão otimizadas via CDN.

---

## 🔐 HTTPS

Todos os serviços (Netlify, Vercel, GitHub Pages) fornecem **HTTPS automático e gratuito**.

---

## 📊 Analytics (Opcional)

### Google Analytics
Adicione antes do `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🐛 Troubleshooting

### Problema: Links quebrados
**Solução**: Use caminhos relativos
```html
<!-- ✅ Correto -->
<a href="login.html">Login</a>

<!-- ❌ Errado -->
<a href="/login.html">Login</a>
```

### Problema: CSS não carrega
**Solução**: Verificar caminho
```html
<!-- Se index.html está na raiz -->
<link rel="stylesheet" href="styles.css">
```

### Problema: JavaScript não funciona
**Solução**: Verificar console do navegador (F12)

---

## 🔄 Atualizações

### Atualizar site no Netlify
```bash
# Opção 1: Drag & Drop
# Arraste a pasta novamente

# Opção 2: Git
git add .
git commit -m "Atualizações"
git push
# Deploy automático!
```

### Atualizar no Vercel
```bash
git push
# Deploy automático!
```

### Atualizar no GitHub Pages
```bash
git add .
git commit -m "Update"
git push
# Aguardar 1-2 minutos
```

---

## ✅ Checklist Pré-Deploy

- [ ] Testar todas as páginas localmente
- [ ] Verificar links funcionam
- [ ] Testar formulários
- [ ] Comprimir imagens
- [ ] Remover console.logs
- [ ] Adicionar .gitignore
- [ ] Testar responsividade (mobile/desktop)
- [ ] Verificar metadados (title, description)

---

## 🎯 Próximos Passos (Opcional)

1. **Backend**: Implementar Node.js/PHP para salvar dados reais
2. **Banco de Dados**: MySQL, PostgreSQL ou MongoDB
3. **Autenticação**: JWT ou OAuth
4. **Email**: SendGrid ou Mailgun para notificações
5. **Pagamentos**: Stripe ou Mercado Pago
6. **WhatsApp API**: Twilio ou oficial do WhatsApp Business

---

## 📞 Suporte

- **Documentação**: Leia o README.md
- **Issues**: Abra um issue no GitHub
- **Email**: contato@barberpro.com

---

**Deploy feito! 🎉**

Seu site está pronto para o mundo!
