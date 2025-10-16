require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
require('express-async-errors');

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Mongo connection
const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/barberpro';
mongoose.connect(MONGO, {useNewUrlParser:true, useUnifiedTopology:true})
  .then(()=> console.log('MongoDB connected'))
  .catch(e=> console.error('MongoDB connection error', e));

const Appointment = require('./models/Appointment');

// Helpers: valid sets
const VALID_TIMES = ["08:00","09:00","10:00","11:00","12:00","14:00","15:00","16:00","17:00","18:00"];
const VALID_DAYS = ["Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
const SATURDAY_ALLOWED = ["08:00","09:00","10:00","11:00","12:00"];
const VALID_SERVICES = ["Corte","Corte + Barba","Barba","Corte Premium"];

// GET /api/appointments?status=
app.get('/api/appointments', async (req,res)=>{
    const {status} = req.query;
    const filter = {};
    if(status==='active') filter.status='confirmed';
    else if(status==='canceled') filter.status='canceled';
    const items = await Appointment.find(filter).sort({day:1,time:1,createdAt:1});
    res.json(items);
});

// POST /api/appointments
app.post('/api/appointments', async (req,res)=>{
    const {client, service, time, day, value=0, phone} = req.body;
    // basic validation
    if(!client || !service || !time || !day) return res.status(400).json({error:'client, service, time e day são obrigatórios'});
    if(!VALID_SERVICES.includes(service)) return res.status(400).json({error:'serviço inválido'});
    if(!VALID_DAYS.includes(day)) return res.status(400).json({error:'dia inválido'});
    if(!VALID_TIMES.includes(time)) return res.status(400).json({error:'horário inválido'});
    if(day==='Sábado' && !SATURDAY_ALLOWED.includes(time)) return res.status(400).json({error:'aos Sábados o funcionamento é das 08:00 às 12:00' });
    if(typeof value !== 'number' || value < 0) return res.status(400).json({error:'value deve ser número >= 0'});

    // Horário único: não permitir 2 agendamentos mesmo dia/hora (com status diferente de canceled)
    const exists = await Appointment.findOne({day, time, status: { $ne: 'canceled' }});
    if(exists) return res.status(409).json({error:'Já existe um agendamento para esse dia e horário'});

    const ap = new Appointment({
        client, service, time, day, value, phone, status: 'confirmed', paid: false
    });
    await ap.save();
    res.status(201).json(ap);
});

// PATCH toggle payment
app.patch('/api/appointments/:id/toggle-payment', async (req,res)=>{
    const {id} = req.params;
    const a = await Appointment.findById(id);
    if(!a) return res.status(404).json({error:'Agendamento não encontrado'});
    a.paid = !a.paid;
    a.updatedAt = new Date();
    await a.save();
    res.json(a);
});

// PATCH cancel
app.patch('/api/appointments/:id/cancel', async (req,res)=>{
    const {id} = req.params;
    const a = await Appointment.findById(id);
    if(!a) return res.status(404).json({error:'Agendamento não encontrado'});
    if(a.status === 'canceled') return res.status(400).json({error:'Agendamento já está cancelado'});
    a.status = 'canceled';
    a.canceledAt = new Date();
    a.updatedAt = new Date();
    await a.save();
    res.json(a);
});

// GET /api/metrics
app.get('/api/metrics', async (req,res)=>{
    const total = await Appointment.countDocuments();
    const active = await Appointment.countDocuments({status:'confirmed'});
    const canceled = await Appointment.countDocuments({status:'canceled'});
    const paid = await Appointment.countDocuments({paid:true});
    const unpaid = await Appointment.countDocuments({paid:false});
    // simple revenue
    const paidDocs = await Appointment.find({paid:true});
    const revenue = paidDocs.reduce((s,doc)=>s+(doc.value||0),0);
    res.json({total, active, canceled, paid, unpaid, revenue});
});

// global error handler
app.use((err, req, res, next)=>{
    console.error(err);
    res.status(500).json({error: err.message || 'Internal error'});
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, ()=> console.log('Server running on port', PORT));
