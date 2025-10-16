const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  client: {type: String, required: true},
  service: {type: String, required: true},
  time: {type: String, required: true},
  day: {type: String, required: true},
  status: {type: String, enum: ['confirmed','canceled'], default: 'confirmed'},
  paid: {type: Boolean, default: false},
  value: {type: Number, default: 0, min: 0},
  phone: {type: String},
  canceledAt: {type: Date},
}, {timestamps: true});

module.exports = mongoose.model('Appointment', AppointmentSchema);
