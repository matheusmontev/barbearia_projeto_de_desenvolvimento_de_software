# 🔧 Guia Completo para Desenvolvedor Backend - BarberPro

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Estrutura da API](#estrutura-da-api)
3. [Modelo de Dados MongoDB](#modelo-de-dados-mongodb)
4. [Endpoints Necessários](#endpoints-necessários)
5. [Exemplos de Implementação](#exemplos-de-implementação)
6. [Validações](#validações)
7. [Segurança](#segurança)
8. [Deploy](#deploy)

---

## 🎯 Visão Geral

O BarberPro é um sistema de gestão para barbearias que precisa de uma API REST para gerenciar agendamentos. O frontend está **100% pronto** e preparado para consumir a API.

### Tecnologias Recomendadas

**Opção 1: Node.js + Express + MongoDB**
- Express.js para API REST
- Mongoose como ODM
- MongoDB Atlas (gratuito)
- CORS configurado

**Opção 2: NestJS + MongoDB**
- NestJS framework
- Mongoose integration
- Validation pipes

**Opção 3: Python + FastAPI + MongoDB**
- FastAPI framework
- Motor (async MongoDB driver)
- Pydantic para validação

---

## 📊 Modelo de Dados MongoDB

### Collection: `appointments`

```javascript
{
  _id: ObjectId("..."),
  client: String,           // Nome do cliente (required)
  service: String,          // Nome do serviço (required)
  time: String,             // Horário no formato "HH:MM" (required)
  day: String,              // Dia da semana (required)
  status: String,           // "confirmed" ou "canceled" (required)
  paid: Boolean,            // Status de pagamento (default: false)
  value: Number,            // Valor do serviço em reais (required)
  phone: String,            // Telefone do cliente (optional)
  createdAt: Date,          // Data de criação (auto)
  updatedAt: Date,          // Data de atualização (auto)
  canceledAt: Date          // Data de cancelamento (optional)
}
```

### Mongoose Schema Exemplo

```javascript
const appointmentSchema = new mongoose.Schema({
  client: {
    type: String,
    required: [true, 'Nome do cliente é obrigatório'],
    trim: true,
    minlength: 2,
    maxlength: 100
  },
  service: {
    type: String,
    required: [true, 'Serviço é obrigatório'],
    enum: ['Corte', 'Corte + Barba', 'Barba', 'Corte Premium', 'Corte Tradicional']
  },
  time: {
    type: String,
    required: [true, 'Horário é obrigatório'],
    match: /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/,
    validate: {
      validator: function(v) {
        const validTimes = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
        return validTimes.includes(v);
      },
      message: 'Horário inválido'
    }
  },
  day: {
    type: String,
    required: [true, 'Dia da semana é obrigatório'],
    enum: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  },
  status: {
    type: String,
    enum: ['confirmed', 'canceled'],
    default: 'confirmed'
  },
  paid: {
    type: Boolean,
    default: false
  },
  value: {
    type: Number,
    required: [true, 'Valor é obrigatório'],
    min: [0, 'Valor não pode ser negativo']
  },
  phone: {
    type: String,
    match: /^\+?[1-9]\d{1,14}$/
  },
  canceledAt: {
    type: Date
  }
}, {
  timestamps: true
});

// Indexes for better query performance
appointmentSchema.index({ day: 1, time: 1 });
appointmentSchema.index({ status: 1 });
appointmentSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Appointment', appointmentSchema);
```

---

## 🔌 Endpoints Necessários

### Base URL
```
http://localhost:3000/api
```

### 1. **GET /appointments** - Listar todos os agendamentos

#### Query Parameters
- `status` (optional): `active` | `canceled` | `all`

#### Response Success (200)
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "client": "João Silva",
    "service": "Corte + Barba",
    "time": "09:00",
    "day": "Segunda",
    "status": "confirmed",
    "paid": true,
    "value": 60,
    "phone": "+5511987654321",
    "createdAt": "2025-01-10T10:00:00.000Z",
    "updatedAt": "2025-01-10T10:00:00.000Z"
  }
]
```

#### Lógica
```javascript
// Pseudo-código
if (status === 'active') {
  return appointments.find({ status: 'confirmed' }).sort({ createdAt: -1 });
} else if (status === 'canceled') {
  return appointments.find({ status: 'canceled' }).sort({ canceledAt: -1 });
} else {
  return appointments.find({}).sort({ createdAt: -1 });
}
```

---

### 2. **POST /appointments** - Criar novo agendamento

#### Request Body
```json
{
  "client": "João Silva",
  "service": "Corte + Barba",
  "time": "09:00",
  "day": "Segunda",
  "status": "confirmed",
  "paid": false,
  "value": 60,
  "phone": "+5511987654321"
}
```

#### Response Success (201)
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "client": "João Silva",
  "service": "Corte + Barba",
  "time": "09:00",
  "day": "Segunda",
  "status": "confirmed",
  "paid": false,
  "value": 60,
  "phone": "+5511987654321",
  "createdAt": "2025-01-10T10:00:00.000Z",
  "updatedAt": "2025-01-10T10:00:00.000Z"
}
```

#### Validações Importantes
1. Verificar se horário está disponível (não existe outro agendamento no mesmo dia/horário)
2. Validar formato do horário (HH:MM)
3. Validar dia da semana
4. Validar serviço
5. Valor não pode ser negativo

#### Response Error (400)
```json
{
  "error": "Horário já ocupado",
  "message": "Já existe um agendamento para Segunda às 09:00"
}
```

---

### 3. **PUT /appointments/:id** - Atualizar agendamento

#### Request Body (partial update)
```json
{
  "paid": true
}
```

#### Response Success (200)
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "client": "João Silva",
  "service": "Corte + Barba",
  "time": "09:00",
  "day": "Segunda",
  "status": "confirmed",
  "paid": true,
  "value": 60,
  "phone": "+5511987654321",
  "createdAt": "2025-01-10T10:00:00.000Z",
  "updatedAt": "2025-01-10T15:30:00.000Z"
}
```

---

### 4. **PATCH /appointments/:id/toggle-payment** - Toggle status de pagamento

#### Request Body (nenhum)

#### Response Success (200)
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "paid": true,
  // ... resto dos dados
}
```

#### Lógica
```javascript
// Pseudo-código
const appointment = await Appointment.findById(id);
appointment.paid = !appointment.paid;
await appointment.save();
return appointment;
```

---

### 5. **PATCH /appointments/:id/cancel** - Cancelar agendamento (soft delete)

#### Request Body (nenhum)

#### Response Success (200)
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "client": "João Silva",
  "service": "Corte + Barba",
  "time": "09:00",
  "day": "Segunda",
  "status": "canceled",
  "paid": false,
  "value": 60,
  "phone": "+5511987654321",
  "canceledAt": "2025-01-10T16:00:00.000Z",
  "createdAt": "2025-01-10T10:00:00.000Z",
  "updatedAt": "2025-01-10T16:00:00.000Z"
}
```

#### Lógica
```javascript
// Pseudo-código
const appointment = await Appointment.findById(id);
appointment.status = 'canceled';
appointment.canceledAt = new Date();
await appointment.save();
return appointment;
```

---

### 6. **GET /metrics** - Obter métricas do dashboard

#### Response Success (200)
```json
{
  "totalCuts": 38,
  "totalRevenue": 1920,
  "uniqueClients": 38,
  "occupancyRate": 70,
  "busiestHour": "10:00",
  "growthPercentage": 12
}
```

#### Lógica de Cálculo
```javascript
// Pseudo-código
const appointments = await Appointment.find({ status: 'confirmed' });

// Total de cortes
const totalCuts = appointments.length;

// Faturamento total (apenas pagos)
const totalRevenue = appointments
  .filter(apt => apt.paid)
  .reduce((sum, apt) => sum + apt.value, 0);

// Clientes únicos
const uniqueClients = new Set(appointments.map(apt => apt.client)).size;

// Taxa de ocupação (54 slots totais: 9 horários x 6 dias)
const totalSlots = 9 * 6;
const occupancyRate = Math.round((totalCuts / totalSlots) * 100);

// Horário mais cheio
const hourCounts = {};
appointments.forEach(apt => {
  hourCounts[apt.time] = (hourCounts[apt.time] || 0) + 1;
});
const busiestHour = Object.entries(hourCounts)
  .sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A";

// Crescimento (simulado ou calculado baseado em dados históricos)
const growthPercentage = 12;

return {
  totalCuts,
  totalRevenue,
  uniqueClients,
  occupancyRate,
  busiestHour,
  growthPercentage
};
```

---

## 💻 Exemplos de Implementação

### Node.js + Express + Mongoose

#### server.js
```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB conectado'))
.catch(err => console.error('❌ Erro ao conectar MongoDB:', err));

// Routes
app.use('/api/appointments', require('./routes/appointments'));
app.use('/api/metrics', require('./routes/metrics'));

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erro interno do servidor' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
```

#### routes/appointments.js
```javascript
const router = require('express').Router();
const Appointment = require('../models/Appointment');

// GET /api/appointments
router.get('/', async (req, res) => {
  try {
    const { status } = req.query;
    
    let query = {};
    if (status === 'active') {
      query.status = 'confirmed';
    } else if (status === 'canceled') {
      query.status = 'canceled';
    }
    
    const appointments = await Appointment.find(query)
      .sort({ createdAt: -1 });
    
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/appointments
router.post('/', async (req, res) => {
  try {
    const { client, service, time, day, value, phone } = req.body;
    
    // Check if time slot is available
    const existing = await Appointment.findOne({
      day,
      time,
      status: 'confirmed'
    });
    
    if (existing) {
      return res.status(400).json({
        error: 'Horário já ocupado',
        message: `Já existe um agendamento para ${day} às ${time}`
      });
    }
    
    const appointment = new Appointment({
      client,
      service,
      time,
      day,
      status: 'confirmed',
      paid: false,
      value,
      phone
    });
    
    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PATCH /api/appointments/:id/toggle-payment
router.patch('/:id/toggle-payment', async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    
    if (!appointment) {
      return res.status(404).json({ error: 'Agendamento não encontrado' });
    }
    
    appointment.paid = !appointment.paid;
    await appointment.save();
    
    res.json(appointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PATCH /api/appointments/:id/cancel
router.patch('/:id/cancel', async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    
    if (!appointment) {
      return res.status(404).json({ error: 'Agendamento não encontrado' });
    }
    
    appointment.status = 'canceled';
    appointment.canceledAt = new Date();
    await appointment.save();
    
    res.json(appointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
```

#### routes/metrics.js
```javascript
const router = require('express').Router();
const Appointment = require('../models/Appointment');

// GET /api/metrics
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find({ status: 'confirmed' });
    
    const totalCuts = appointments.length;
    
    const totalRevenue = appointments
      .filter(apt => apt.paid)
      .reduce((sum, apt) => sum + apt.value, 0);
    
    const uniqueClients = new Set(appointments.map(apt => apt.client)).size;
    
    const totalSlots = 9 * 6;
    const occupancyRate = totalSlots > 0 
      ? Math.round((totalCuts / totalSlots) * 100) 
      : 0;
    
    const hourCounts = {};
    appointments.forEach(apt => {
      hourCounts[apt.time] = (hourCounts[apt.time] || 0) + 1;
    });
    const busiestHour = Object.entries(hourCounts)
      .sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A";
    
    const growthPercentage = 12; // Pode ser calculado baseado em dados históricos
    
    res.json({
      totalCuts,
      totalRevenue,
      uniqueClients,
      occupancyRate,
      busiestHour,
      growthPercentage
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
```

---

## 🔒 Segurança

### CORS Configuration
```javascript
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  credentials: true
};

app.use(cors(corsOptions));
```

### Environment Variables
```env
MONGODB_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/barberpro
PORT=3000
FRONTEND_URL=http://localhost:5173
NODE_ENV=production
```

### Rate Limiting (Opcional)
```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100 // limite de 100 requisições por IP
});

app.use('/api/', limiter);
```

---

## 🚀 Deploy

### Opção 1: Heroku

```bash
# 1. Criar Procfile
echo "web: node server.js" > Procfile

# 2. Deploy
heroku create barberpro-api
git push heroku main

# 3. Configurar MongoDB Atlas
heroku config:set MONGODB_URI="mongodb+srv://..."
```

### Opção 2: Railway

1. Conecte seu repositório GitHub
2. Configure variáveis de ambiente
3. Deploy automático

### Opção 3: Render

1. Conecte repositório
2. Configure build command: `npm install`
3. Start command: `node server.js`
4. Adicione variáveis de ambiente

---

## ✅ Checklist de Implementação

- [ ] Configurar MongoDB Atlas (gratuito)
- [ ] Criar schema do Appointment
- [ ] Implementar endpoint GET /appointments
- [ ] Implementar endpoint POST /appointments
- [ ] Implementar endpoint PATCH /toggle-payment
- [ ] Implementar endpoint PATCH /cancel
- [ ] Implementar endpoint GET /metrics
- [ ] Configurar CORS
- [ ] Adicionar validações
- [ ] Tratamento de erros
- [ ] Testes básicos
- [ ] Deploy no Heroku/Railway/Render
- [ ] Atualizar VITE_API_URL no frontend

---

## 📞 Contato

Dúvidas sobre a integração?

- 📧 Email: contato@barberpro.com
- 💬 Issues: GitHub Issues

---

**Desenvolvido para integração perfeita com BarberPro Frontend** ✂️
