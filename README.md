BarberPro Backend
=================

Instruções rápidas:

1. Copie .env.example para .env e ajuste MONGO_URI
2. npm install
3. npm run dev

Endpoints:
- GET /api/appointments
- GET /api/appointments?status=active
- GET /api/appointments?status=canceled
- POST /api/appointments
- PATCH /api/appointments/:id/toggle-payment
- PATCH /api/appointments/:id/cancel
- GET /api/metrics

Modelo MongoDB: veja src/models/Appointment.js
