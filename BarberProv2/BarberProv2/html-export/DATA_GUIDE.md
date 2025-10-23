# 📊 Guia de Dados - BarberPro

## Dados Mockados Incluídos

O sistema vem com **38 clientes pré-cadastrados** para demonstração.

---

## 📅 Distribuição por Dias

| Dia | Agendamentos |
|-----|--------------|
| Segunda-feira | 6 clientes |
| Terça-feira | 6 clientes |
| Quarta-feira | 6 clientes |
| Quinta-feira | 6 clientes |
| Sexta-feira | 7 clientes |
| Sábado | 7 clientes |
| **TOTAL** | **38 clientes** |

---

## 💰 Valores dos Serviços

| Serviço | Valor | Código |
|---------|-------|--------|
| Corte + Barba | R$ 60 | `"Corte + Barba"` |
| Corte Tradicional | R$ 40 | `"Corte"` |
| Barba | R$ 30 | `"Barba"` |
| Corte Premium | R$ 80 | `"Corte Premium"` |

**Faturamento Total (se todos pagarem)**: ~R$ 2.040

---

## 👥 Lista Completa de Clientes

### **Segunda-feira**
1. João Silva - Corte + Barba - 09:00 (✅ Pago)
2. Pedro Santos - Corte - 10:00 (✅ Pago)
3. Miguel Ferreira - Corte Premium - 11:00 (✅ Pago)
4. André Souza - Barba - 14:00 (❌ Não Pago)
5. Felipe Rocha - Corte + Barba - 15:00 (✅ Pago)
6. Bruno Dias - Corte - 16:00 (✅ Pago)

### **Terça-feira**
7. Carlos Oliveira - Barba - 09:00 (❌ Não Pago)
8. Rodrigo Lima - Corte + Barba - 10:00 (✅ Pago)
9. Thiago Martins - Corte - 11:00 (✅ Pago)
10. Gabriel Almeida - Corte Premium - 14:00 (✅ Pago)
11. Leonardo Castro - Corte + Barba - 15:00 (❌ Não Pago)
12. Vinícius Ribeiro - Corte - 17:00 (✅ Pago)

### **Quarta-feira**
13. Lucas Costa - Corte Premium - 09:00 (✅ Pago)
14. Marcelo Pinto - Corte + Barba - 10:00 (✅ Pago)
15. Diego Moreira - Barba - 11:00 (✅ Pago)
16. Renato Silva - Corte - 14:00 (❌ Não Pago)
17. Fernando Gomes - Corte + Barba - 16:00 (✅ Pago)
18. Paulo Araújo - Corte Premium - 17:00 (✅ Pago)

### **Quinta-feira**
19. Rafael Alves - Corte + Barba - 09:00 (✅ Pago)
20. Gustavo Cunha - Corte - 10:00 (✅ Pago)
21. Henrique Barbosa - Barba - 11:00 (❌ Não Pago)
22. Mateus Carvalho - Corte + Barba - 14:00 (✅ Pago)
23. Daniel Nunes - Corte Premium - 15:00 (✅ Pago)
24. Ricardo Monteiro - Corte - 16:00 (✅ Pago)

### **Sexta-feira**
25. Eduardo Freitas - Corte + Barba - 09:00 (✅ Pago)
26. Fábio Correia - Corte Premium - 10:00 (✅ Pago)
27. Ivan Santos - Corte - 11:00 (❌ Não Pago)
28. Jorge Teixeira - Barba - 14:00 (✅ Pago)
29. Kleber Vieira - Corte + Barba - 15:00 (✅ Pago)
30. Leandro Ramos - Corte - 16:00 (✅ Pago)
31. Mário Duarte - Corte Premium - 17:00 (✅ Pago)

### **Sábado**
32. Nelson Borges - Corte + Barba - 09:00 (✅ Pago)
33. Otávio Mendes - Corte - 10:00 (✅ Pago)
34. Pedro Azevedo - Barba - 11:00 (❌ Não Pago)
35. Raul Fonseca - Corte Premium - 12:00 (✅ Pago)
36. Sérgio Campos - Corte + Barba - 14:00 (✅ Pago)
37. Túlio Pacheco - Corte - 15:00 (✅ Pago)
38. Wagner Lopes - Corte + Barba - 16:00 (✅ Pago)

---

## 📈 Métricas Calculadas

### **Automaticamente Geradas:**

- **Total de Cortes**: 38
- **Faturamento**: Soma dos serviços pagos
- **Clientes Únicos**: 38 (todos diferentes)
- **Taxa de Ocupação**: ~70% (38 de 54 slots)
- **Horário Mais Cheio**: Calculado dinamicamente
- **Crescimento**: +12% (simulado)

---

## 🔄 Como Adicionar Novos Clientes

### **Método 1: Editar `app.js`**

Abra `app.js` e adicione ao array `appointments` (linha ~12):

```javascript
{
    id: 39,                      // Próximo ID
    client: "Novo Cliente",      // Nome do cliente
    service: "Corte + Barba",   // Serviço escolhido
    time: "18:00",              // Horário
    day: "Segunda",             // Dia da semana
    status: "confirmed",        // Status (confirmed/pending)
    paid: false                 // Se já foi pago
}
```

### **Método 2: Via Interface (Dashboard)**

*Funcionalidade futura - adicionar formulário de novo agendamento*

---

## 💾 Onde os Dados São Salvos?

### **LocalStorage do Navegador**

Os dados são salvos em:
```
localStorage.setItem('barberProState', JSON.stringify(AppState))
```

### **Ver Dados Salvos:**

Abra o Console do navegador (F12) e digite:
```javascript
JSON.parse(localStorage.getItem('barberProState'))
```

### **Resetar Dados:**

```javascript
localStorage.clear();
location.reload();
```

---

## 🔧 Personalizar Serviços

Edite `app.js` linha ~39:

```javascript
const serviceValues = {
    "Corte + Barba": 60,      // Seu preço
    "Corte Tradicional": 40,
    "Corte": 40,
    "Barba": 30,
    "Corte Premium": 80,
    "Novo Serviço": 100       // Adicione aqui
};
```

---

## 📊 Estrutura do Objeto Appointment

```javascript
{
    id: number,              // ID único
    client: string,          // Nome do cliente
    service: string,         // Serviço escolhido
    time: string,            // Horário (HH:MM)
    day: string,             // Dia da semana
    status: string,          // "confirmed" | "pending"
    paid: boolean,           // true | false
    canceledAt?: string      // Data/hora do cancelamento (opcional)
}
```

---

## 🎯 Exemplos de Uso

### **Filtrar agendamentos pagos:**

```javascript
const pagos = AppState.appointments.filter(apt => apt.paid);
```

### **Contar agendamentos de um dia:**

```javascript
const segunda = AppState.appointments.filter(apt => apt.day === "Segunda").length;
```

### **Calcular faturamento:**

```javascript
const total = AppState.appointments
    .filter(apt => apt.paid)
    .reduce((sum, apt) => sum + serviceValues[apt.service], 0);
```

---

## 🔐 Backup dos Dados

### **Exportar para JSON:**

```javascript
// No Console (F12)
const dados = localStorage.getItem('barberProState');
console.log(dados);
// Copie e salve em um arquivo .json
```

### **Importar de JSON:**

```javascript
// Cole o JSON salvo
const dadosSalvos = `{"appointments":[...],"isLoggedIn":true}`;
localStorage.setItem('barberProState', dadosSalvos);
location.reload();
```

---

## 🚀 Integração com Backend (Futuro)

### **Exemplo de API REST:**

```javascript
// Buscar agendamentos
fetch('/api/appointments')
    .then(res => res.json())
    .then(data => setAppointments(data));

// Criar agendamento
fetch('/api/appointments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(novoAgendamento)
});
```

---

## 📞 Suporte

Dúvidas sobre os dados?

- 📧 Email: contato@barberpro.com
- 📱 WhatsApp: (11) 98765-4321
- 💬 [Abrir Issue](https://github.com/seu-usuario/barberpro/issues)

---

**Última atualização**: 10/01/2025
