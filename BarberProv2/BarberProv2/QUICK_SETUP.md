# ⚡ Setup Rápido - BarberPro

## 🎯 Para Desenvolvedores Frontend

### 1. Instalar e Rodar

```bash
# Clone e instale
git clone https://github.com/seu-usuario/barberpro.git
cd barberpro
npm install

# Configure variáveis
cp .env.example .env

# Rode o projeto
npm run dev
```

### 2. Configurar Chave PIX e WhatsApp

Edite `components/DashboardPage.tsx` (linhas 17-18):

```typescript
const WHATSAPP_NUMBER = "+5511987654321"; // SEU NÚMERO
const PIX_KEY = "seuemail@gmail.com";      // SUA CHAVE PIX
```

### 3. Conectar com Backend

Após o backend estar pronto, edite `.env`:

```env
VITE_API_URL=https://sua-api.herokuapp.com/api
```

**Pronto!** Sistema funcionando.

---

## 🎯 Para Desenvolvedores Backend

### O Que Fazer

1. **Leia**: [`HANDOFF_BACKEND.md`](./HANDOFF_BACKEND.md) (5 min)
2. **Implemente**: 6 endpoints REST (3-4 horas)
3. **Retorne**: URL da API para configurar frontend

### Endpoints Necessários

```
GET    /api/appointments
GET    /api/appointments?status=active
GET    /api/appointments?status=canceled
POST   /api/appointments
PATCH  /api/appointments/:id/toggle-payment
PATCH  /api/appointments/:id/cancel
GET    /api/metrics
```

### Referências

- 📖 [BACKEND_GUIDE.md](./BACKEND_GUIDE.md) - Guia completo
- 📦 [HANDOFF_BACKEND.md](./HANDOFF_BACKEND.md) - Resumo executivo
- 🔌 [services/api.ts](./services/api.ts) - Referência frontend

### Quick Start Backend

```bash
# 1. Criar projeto Node
mkdir barberpro-api && cd barberpro-api
npm init -y

# 2. Instalar deps
npm install express mongoose cors dotenv

# 3. Configurar MongoDB Atlas
# mongodb.com/cloud/atlas (gratuito)

# 4. Criar .env
echo "MONGODB_URI=mongodb+srv://..." > .env
echo "PORT=3000" >> .env

# 5. Implementar endpoints
# (ver BACKEND_GUIDE.md)

# 6. Rodar
node server.js
```

**Tempo estimado**: 4-6 horas total

---

## 🚀 Modo Desenvolvimento

### Frontend Only (Sem Backend)

O sistema funciona parcialmente sem backend:

- ✅ UI completa
- ✅ Navegação
- ❌ Dados não persistem
- ❌ API calls falham

### Frontend + Backend

Quando backend estiver pronto:

- ✅ UI completa
- ✅ Navegação
- ✅ Dados persistem no MongoDB
- ✅ API calls funcionam
- ✅ Sistema 100% funcional

---

## 📦 Build de Produção

### Frontend

```bash
npm run build
npm run preview  # Testar build local
```

Deploy:
- Netlify: `netlify deploy --prod`
- Vercel: `vercel --prod`

### Backend

Ver [`BACKEND_GUIDE.md`](./BACKEND_GUIDE.md) seção Deploy

---

## 🐛 Troubleshooting

### CORS Error

Configure no backend:

```javascript
app.use(cors({
  origin: 'http://localhost:5173'
}));
```

### API não responde

Verifique:
1. Backend está rodando?
2. `VITE_API_URL` está correto no `.env`?
3. CORS configurado?

### Dados não aparecem

Verifique Console (F12) para erros de API

---

## ✅ Checklist Final

### Frontend
- [ ] `npm install` executado
- [ ] `.env` configurado
- [ ] PIX_KEY atualizado
- [ ] WHATSAPP_NUMBER atualizado
- [ ] `npm run dev` funcionando

### Backend
- [ ] MongoDB configurado
- [ ] 6 endpoints implementados
- [ ] CORS configurado
- [ ] Deploy realizado
- [ ] URL fornecida para frontend

### Integração
- [ ] `VITE_API_URL` atualizado
- [ ] Teste criar agendamento
- [ ] Teste toggle pagamento
- [ ] Teste cancelar agendamento
- [ ] Teste métricas
- [ ] Build de produção ok

---

## 📞 Ajuda Rápida

| Precisa de... | Ver... |
|---------------|--------|
| Setup completo | Este arquivo |
| Documentação backend | [BACKEND_GUIDE.md](./BACKEND_GUIDE.md) |
| Resumo backend | [HANDOFF_BACKEND.md](./HANDOFF_BACKEND.md) |
| API reference | [services/api.ts](./services/api.ts) |
| Troubleshooting | README.md |

---

**Desenvolvido para setup rápido** ⚡
