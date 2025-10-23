# ⚡ Quick Start - BarberPro

## 🎯 Comece em 3 Minutos

### **Método 1: Testar Localmente** (Mais Rápido)

1. **Baixe a pasta `html-export`**
2. **Abra `index.html`** no navegador
3. **Pronto!** Navegue pelo site

---

### **Método 2: Subir para GitHub + Deploy Online**

#### **Passo 1: GitHub (2 minutos)**

```bash
cd html-export
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/barberpro.git
git push -u origin main
```

#### **Passo 2: Deploy no Netlify (1 minuto)**

1. Acesse [netlify.com](https://netlify.com)
2. Arraste a pasta `html-export` ou conecte o GitHub
3. **PRONTO!** Link online funcionando

---

## 📂 Arquivos Principais

| Arquivo | Descrição |
|---------|-----------|
| `index.html` | Página inicial com hero e recursos |
| `login.html` | Login com Google e email |
| `signup.html` | Cadastro completo |
| `dashboard.html` | Painel com agenda semanal e métricas |
| `history.html` | Histórico completo de agendamentos |
| `pricing.html` | Planos R$ 20/mês e R$ 499/ano |
| `contact.html` | Formulário de contato |
| `styles.css` | Todo o CSS (tema dark + dourado) |
| `app.js` | JavaScript com 38 clientes mock |

---

## 🎨 Design

- **Cores**: Fundo preto (#0D0D0D), Dourado (#C19A6B), Amarelo (#EAB308)
- **Fontes**: Montserrat (títulos), Inter (corpo)
- **Tema**: Dark mode profissional
- **Responsivo**: Mobile, tablet e desktop

---

## 💡 Funcionalidades

### ✅ **Implementadas**

- [x] Sistema de navegação entre páginas
- [x] Login/cadastro (simulado)
- [x] Dashboard com métricas dinâmicas
- [x] Agenda semanal por dias
- [x] Toggle de pagamento (Pago/Não Pago)
- [x] Cancelar agendamentos
- [x] Histórico com filtros (Todos/Ativos/Cancelados)
- [x] 38 clientes pré-cadastrados
- [x] LocalStorage para persistência
- [x] WhatsApp integration
- [x] Recuperação de senha
- [x] Página de planos com preços

### 🔜 **Próximas Melhorias** (Opcional)

- [ ] Backend real (Node.js/PHP)
- [ ] Banco de dados (MySQL/PostgreSQL)
- [ ] Autenticação JWT
- [ ] Envio real de e-mails
- [ ] API do WhatsApp Business
- [ ] Sistema de pagamento (Stripe/Mercado Pago)
- [ ] Exportar relatórios em PDF
- [ ] Calendário com arrastar e soltar

---

## 🔑 Login de Teste

Como o sistema é simulado, qualquer email/senha funciona:

- **Email**: `teste@barberpro.com`
- **Senha**: `123456`

Ou clique em "Continuar com Google" (também simulado).

---

## 📱 Páginas e Rotas

| URL | Página |
|-----|--------|
| `/index.html` | Home |
| `/login.html` | Login |
| `/signup.html` | Cadastro |
| `/forgot-password.html` | Recuperar senha |
| `/dashboard.html` | Dashboard (requer login) |
| `/history.html` | Histórico (requer login) |
| `/pricing.html` | Planos |
| `/contact.html` | Contato |

---

## 🛠️ Personalizar

### **Mudar Cores**

Edite `styles.css` linha 8:

```css
:root {
    --color-primary: #C19A6B;      /* Sua cor primária */
    --color-secondary: #EAB308;     /* Sua cor secundária */
    --color-bg-dark: #0D0D0D;      /* Fundo */
}
```

### **Adicionar Mais Clientes**

Edite `app.js` linha 12 e adicione ao array:

```javascript
{ 
    id: 39, 
    client: "Novo Cliente", 
    service: "Corte Premium", 
    time: "18:00", 
    day: "Sábado", 
    status: "confirmed", 
    paid: false 
}
```

### **Mudar Preços**

Edite `pricing.html` e `app.js` (valores dos serviços).

---

## 🐛 Solução de Problemas

### **CSS não carrega**
✅ Verifique se `styles.css` está na mesma pasta do HTML

### **JavaScript não funciona**
✅ Abra o Console (F12) e veja se há erros

### **Dados não salvam**
✅ Navegador em modo anônimo não salva LocalStorage

### **Navegação quebrada**
✅ Use servidor local ou abra direto os `.html`

---

## 📞 Suporte

- 📧 Email: contato@barberpro.com
- 📱 WhatsApp: (11) 98765-4321
- 💬 Issues: [GitHub Issues](https://github.com/SEU-USUARIO/barberpro/issues)

---

## 📄 Licença

MIT License - Veja [LICENSE](LICENSE) para detalhes.

Livre para usar, modificar e distribuir! 🎉

---

**Desenvolvido com ❤️ para barbeiros modernos**

[⬆️ Voltar ao topo](#-quick-start---barberpro)
