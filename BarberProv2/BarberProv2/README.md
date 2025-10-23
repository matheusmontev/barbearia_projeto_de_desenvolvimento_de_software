# 💈 BarberPro - Sistema de Gestão para Barbearias

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-blue.svg)](https://tailwindcss.com/)

Sistema completo de gestão para barbearias com agendamentos, controle de pagamentos e relatórios em tempo real.

![BarberPro Screenshot](https://via.placeholder.com/800x400/0D0D0D/C19A6B?text=BarberPro+Dashboard)

---

## ✨ Funcionalidades

- ✅ **Dashboard Interativo** - Métricas em tempo real (faturamento, ocupação, crescimento)
- ✅ **Agenda Semanal** - Visualize e gerencie agendamentos por dia
- ✅ **Controle de Pagamentos** - Toggle rápido entre pago/não pago
- ✅ **Histórico Completo** - Filtros por status (ativos/cancelados)
- ✅ **WhatsApp Integration** - Envie confirmações automáticas com chave PIX
- ✅ **Cancelamento** - Soft delete com data/hora registrada
- ✅ **Páginas Legais** - Termos de Uso e Política de Privacidade (LGPD)
- ✅ **Design Responsivo** - Funciona perfeitamente em mobile e desktop
- ✅ **Tema Dark** - Interface moderna com tons dourados (#C19A6B)

---

## 🚀 Status do Projeto

### Frontend: ✅ 100% Completo e Funcional

- [x] Todas as páginas implementadas
- [x] Componentes reutilizáveis
- [x] Service layer com TypeScript
- [x] Estados e loading bem definidos
- [x] Tratamento de erros robusto
- [x] Toast notifications
- [x] Design system completo
- [x] **Funciona perfeitamente sem backend (Modo Demonstração)**

### Backend: ⏳ Opcional (para persistir dados)

O frontend está **totalmente preparado** para consumir a API REST.

🔵 **Modo Demonstração Ativo**: Sistema funciona 100% sem backend para testes e demonstrações.

📖 **[Ver como funciona o Modo Demonstração →](./MODO_OFFLINE.md)**

👉 **[Ver Guia Completo para Backend →](./BACKEND_GUIDE.md)**

---

## 🛠️ Tecnologias

### Frontend
- **React 18** - Library UI
- **TypeScript** - Type safety
- **Tailwind CSS 4.0** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons
- **Sonner** - Toast notifications
- **Motion** - Animations

### Backend (Recomendado)
- **Node.js + Express** - API REST
- **MongoDB** - Database
- **Mongoose** - ODM
- **CORS** - Cross-origin

---

## 📦 Instalação e Configuração

### 1. Clone o Repositório

```bash
git clone https://github.com/seu-usuario/barberpro.git
cd barberpro
```

### 2. Instale as Dependências

```bash
npm install
```

### 3. Configure as Variáveis de Ambiente

O arquivo `.env` já foi criado com valores padrão. Edite conforme necessário:

```env
VITE_API_URL=http://localhost:3000/api
VITE_WHATSAPP_NUMBER=+5511987654321
VITE_PIX_KEY=seuemail@gmail.com
```

📖 **Ver guia completo**: [CONFIG.md](./CONFIG.md)

### 4. Execute o Projeto

```bash
npm run dev
```

Acesse: `http://localhost:5173`

---

## 🔌 Integração com Backend

### Endpoints Necessários

O frontend espera os seguintes endpoints:

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/appointments` | Listar agendamentos |
| GET | `/api/appointments?status=active` | Agendamentos ativos |
| GET | `/api/appointments?status=canceled` | Agendamentos cancelados |
| POST | `/api/appointments` | Criar agendamento |
| PATCH | `/api/appointments/:id/toggle-payment` | Toggle pagamento |
| PATCH | `/api/appointments/:id/cancel` | Cancelar agendamento |
| GET | `/api/metrics` | Buscar métricas |

### Documentação Completa

- 📖 [**BACKEND_GUIDE.md**](./BACKEND_GUIDE.md) - Guia detalhado com exemplos
- 📦 [**HANDOFF_BACKEND.md**](./HANDOFF_BACKEND.md) - Resumo executivo para dev backend
- 🔌 [**services/api.ts**](./services/api.ts) - Service layer do frontend

---

## 📊 Modelo de Dados

```typescript
interface Appointment {
  _id?: string;
  client: string;              // Nome do cliente
  service: string;             // Serviço escolhido
  time: string;                // Horário (HH:MM)
  day: string;                 // Dia da semana
  status: 'confirmed' | 'canceled';
  paid: boolean;               // Status de pagamento
  value: number;               // Valor em reais
  phone?: string;              // Telefone do cliente
  createdAt?: string;
  canceledAt?: string;
}
```

### Serviços Disponíveis

| Serviço | Valor |
|---------|-------|
| Corte | R$ 40 |
| Corte + Barba | R$ 60 |
| Barba | R$ 30 |
| Corte Premium | R$ 80 |

---

## 🎨 Personalização

### Cores do Tema

Edite em `styles/globals.css` ou `DashboardPage.tsx`:

```css
--color-primary: #C19A6B;      /* Dourado/Bronze */
--color-secondary: #EAB308;     /* Amarelo Dourado */
--color-bg-dark: #0D0D0D;      /* Fundo Preto */
```

### Chave PIX e WhatsApp

Edite em `DashboardPage.tsx` (linhas 17-18):

```typescript
const WHATSAPP_NUMBER = "+5511987654321";
const PIX_KEY = "seuemail@gmail.com";
```

Ou configure em `AddAppointmentDialog.tsx` (linhas 17-18):

```typescript
const PIX_KEY = "seuemail@gmail.com";
const WHATSAPP_NUMBER = "+5511987654321";
```

---

## 📱 Estrutura do Projeto

```
barberpro/
├── components/
│   ├── DashboardPage.tsx       # Dashboard principal
│   ├── HistoryPage.tsx         # Histórico de agendamentos
│   ├── AddAppointmentDialog.tsx # Modal de novo agendamento
│   ├── HomePage.tsx            # Landing page
│   ├── LoginPage.tsx           # Autenticação
│   ├── PricingPage.tsx         # Planos e preços
│   ├── TermsPage.tsx           # Termos de Uso
│   ├── PrivacyPage.tsx         # Política de Privacidade
│   └── ui/                     # Componentes reutilizáveis
├── services/
│   └── api.ts                  # Service layer (API calls)
├── styles/
│   └── globals.css             # Estilos globais
├── App.tsx                     # Componente raiz
├── BACKEND_GUIDE.md            # 📖 Guia backend
├── HANDOFF_BACKEND.md          # 📦 Resumo backend
└── README.md                   # Este arquivo
```

---

## 🔐 Segurança

### Importante

⚠️ **Esta é uma aplicação frontend**. Para produção:

- Implemente autenticação real (JWT/OAuth)
- Use HTTPS em produção
- Valide dados no backend
- Configure Rate Limiting
- Implemente CORS adequado
- Não exponha chaves sensíveis

---

## 🚢 Deploy

### Frontend (Netlify/Vercel)

```bash
# Build
npm run build

# Deploy no Netlify
netlify deploy --prod

# Ou Vercel
vercel --prod
```

### Backend (Heroku/Railway/Render)

Siga as instruções em [`BACKEND_GUIDE.md`](./BACKEND_GUIDE.md)

---

## 📈 Métricas Calculadas

O dashboard exibe:

- **Total de Cortes** - Agendamentos confirmados
- **Faturamento** - Soma dos pagamentos confirmados
- **Clientes Únicos** - Quantidade de clientes diferentes
- **Taxa de Ocupação** - Porcentagem de slots preenchidos
- **Horário Mais Cheio** - Hora com mais agendamentos
- **Crescimento** - Comparação com período anterior

---

## 🤝 Contribuindo

Contribuições são bem-vindas!

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

---

## 📝 Changelog

### v2.0.0 (2025-01-10) - API Ready
- ✨ Removidos dados mockados
- ✨ Integração completa com API REST
- ✨ Service layer implementado
- ✨ Loading states e tratamento de erros
- ✨ Documentação backend completa

### v1.0.0 (2025-01-09) - Initial Release
- ✨ Dashboard completo
- ✨ Agenda semanal
- ✨ Histórico de agendamentos
- ✨ 38 clientes mockados

---

## 📄 Licença

Este projeto está sob a licença MIT - veja [LICENSE](LICENSE) para mais detalhes.

---

## 👥 Autores

- **Desenvolvedor Frontend** - [Seu Nome](https://github.com/seu-usuario)

---

## 📞 Suporte

- 📧 Email: contato@barberpro.com
- 💬 Issues: [GitHub Issues](https://github.com/seu-usuario/barberpro/issues)
- 📖 Docs: [BACKEND_GUIDE.md](./BACKEND_GUIDE.md)

---

## ⭐ Mostre seu Apoio

Se este projeto te ajudou, dê uma ⭐ no GitHub!

[![GitHub stars](https://img.shields.io/github/stars/seu-usuario/barberpro?style=social)](https://github.com/seu-usuario/barberpro/stargazers)

---

**Desenvolvido com ❤️ para barbeiros modernos** ✂️

[⬆️ Voltar ao topo](#-barberpro---sistema-de-gestão-para-barbearias)
