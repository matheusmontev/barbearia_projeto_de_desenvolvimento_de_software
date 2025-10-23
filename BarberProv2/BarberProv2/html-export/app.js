// BarberPro - JavaScript Principal

// Estado da aplicação
const AppState = {
    isLoggedIn: false,
    currentUser: null,
    appointments: [
        // Segunda-feira
        { id: 1, client: "João Silva", service: "Corte + Barba", time: "09:00", day: "Segunda", status: "confirmed", paid: true },
        { id: 2, client: "Pedro Santos", service: "Corte", time: "10:00", day: "Segunda", status: "confirmed", paid: true },
        { id: 3, client: "Miguel Ferreira", service: "Corte Premium", time: "11:00", day: "Segunda", status: "confirmed", paid: true },
        { id: 4, client: "André Souza", service: "Barba", time: "14:00", day: "Segunda", status: "confirmed", paid: false },
        { id: 5, client: "Felipe Rocha", service: "Corte + Barba", time: "15:00", day: "Segunda", status: "confirmed", paid: true },
        { id: 6, client: "Bruno Dias", service: "Corte", time: "16:00", day: "Segunda", status: "confirmed", paid: true },
        // Terça-feira
        { id: 7, client: "Carlos Oliveira", service: "Barba", time: "09:00", day: "Terça", status: "confirmed", paid: false },
        { id: 8, client: "Rodrigo Lima", service: "Corte + Barba", time: "10:00", day: "Terça", status: "confirmed", paid: true },
        { id: 9, client: "Thiago Martins", service: "Corte", time: "11:00", day: "Terça", status: "confirmed", paid: true },
        { id: 10, client: "Gabriel Almeida", service: "Corte Premium", time: "14:00", day: "Terça", status: "confirmed", paid: true },
        { id: 11, client: "Leonardo Castro", service: "Corte + Barba", time: "15:00", day: "Terça", status: "confirmed", paid: false },
        { id: 12, client: "Vinícius Ribeiro", service: "Corte", time: "17:00", day: "Terça", status: "confirmed", paid: true },
        // Quarta-feira
        { id: 13, client: "Lucas Costa", service: "Corte Premium", time: "09:00", day: "Quarta", status: "confirmed", paid: true },
        { id: 14, client: "Marcelo Pinto", service: "Corte + Barba", time: "10:00", day: "Quarta", status: "confirmed", paid: true },
        { id: 15, client: "Diego Moreira", service: "Barba", time: "11:00", day: "Quarta", status: "confirmed", paid: true },
        { id: 16, client: "Renato Silva", service: "Corte", time: "14:00", day: "Quarta", status: "confirmed", paid: false },
        { id: 17, client: "Fernando Gomes", service: "Corte + Barba", time: "16:00", day: "Quarta", status: "confirmed", paid: true },
        { id: 18, client: "Paulo Araújo", service: "Corte Premium", time: "17:00", day: "Quarta", status: "confirmed", paid: true },
        // Quinta-feira
        { id: 19, client: "Rafael Alves", service: "Corte + Barba", time: "09:00", day: "Quinta", status: "confirmed", paid: true },
        { id: 20, client: "Gustavo Cunha", service: "Corte", time: "10:00", day: "Quinta", status: "confirmed", paid: true },
        { id: 21, client: "Henrique Barbosa", service: "Barba", time: "11:00", day: "Quinta", status: "confirmed", paid: false },
        { id: 22, client: "Mateus Carvalho", service: "Corte + Barba", time: "14:00", day: "Quinta", status: "confirmed", paid: true },
        { id: 23, client: "Daniel Nunes", service: "Corte Premium", time: "15:00", day: "Quinta", status: "confirmed", paid: true },
        { id: 24, client: "Ricardo Monteiro", service: "Corte", time: "16:00", day: "Quinta", status: "confirmed", paid: true },
        // Sexta-feira
        { id: 25, client: "Eduardo Freitas", service: "Corte + Barba", time: "09:00", day: "Sexta", status: "confirmed", paid: true },
        { id: 26, client: "Fábio Correia", service: "Corte Premium", time: "10:00", day: "Sexta", status: "confirmed", paid: true },
        { id: 27, client: "Ivan Santos", service: "Corte", time: "11:00", day: "Sexta", status: "confirmed", paid: false },
        { id: 28, client: "Jorge Teixeira", service: "Barba", time: "14:00", day: "Sexta", status: "confirmed", paid: true },
        { id: 29, client: "Kleber Vieira", service: "Corte + Barba", time: "15:00", day: "Sexta", status: "confirmed", paid: true },
        { id: 30, client: "Leandro Ramos", service: "Corte", time: "16:00", day: "Sexta", status: "confirmed", paid: true },
        { id: 31, client: "Mário Duarte", service: "Corte Premium", time: "17:00", day: "Sexta", status: "confirmed", paid: true },
        // Sábado
        { id: 32, client: "Nelson Borges", service: "Corte + Barba", time: "09:00", day: "Sábado", status: "confirmed", paid: true },
        { id: 33, client: "Otávio Mendes", service: "Corte", time: "10:00", day: "Sábado", status: "confirmed", paid: true },
        { id: 34, client: "Pedro Azevedo", service: "Barba", time: "11:00", day: "Sábado", status: "confirmed", paid: false },
        { id: 35, client: "Raul Fonseca", service: "Corte Premium", time: "12:00", day: "Sábado", status: "confirmed", paid: true },
        { id: 36, client: "Sérgio Campos", service: "Corte + Barba", time: "14:00", day: "Sábado", status: "confirmed", paid: true },
        { id: 37, client: "Túlio Pacheco", service: "Corte", time: "15:00", day: "Sábado", status: "confirmed", paid: true },
        { id: 38, client: "Wagner Lopes", service: "Corte + Barba", time: "16:00", day: "Sábado", status: "confirmed", paid: true }
    ],
    canceledAppointments: []
};

// Valores dos serviços
const serviceValues = {
    "Corte + Barba": 60,
    "Corte Tradicional": 40,
    "Corte": 40,
    "Barba": 30,
    "Corte Premium": 80
};

// Funções de utilidade
function saveState() {
    localStorage.setItem('barberProState', JSON.stringify(AppState));
}

function loadState() {
    const saved = localStorage.getItem('barberProState');
    if (saved) {
        const state = JSON.parse(saved);
        Object.assign(AppState, state);
    }
}

function checkAuth() {
    const currentPage = window.location.pathname.split('/').pop();
    if (!AppState.isLoggedIn && (currentPage === 'dashboard.html' || currentPage === 'history.html')) {
        window.location.href = 'login.html';
    }
}

// Toast notifications
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.style.background = type === 'success' ? '#25D366' : '#DC2626';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Funções de navegação
function navigateTo(page) {
    window.location.href = page;
}

// Login
function handleLogin(event) {
    if (event) event.preventDefault();
    const email = document.getElementById('email')?.value;
    const password = document.getElementById('password')?.value;
    
    if (email && password) {
        AppState.isLoggedIn = true;
        AppState.currentUser = { email };
        saveState();
        showToast('Login realizado com sucesso!');
        setTimeout(() => navigateTo('dashboard.html'), 1000);
    }
}

// Signup
function handleSignup(event) {
    if (event) event.preventDefault();
    const name = document.getElementById('name')?.value;
    const email = document.getElementById('email')?.value;
    const password = document.getElementById('password')?.value;
    
    if (name && email && password) {
        AppState.isLoggedIn = true;
        AppState.currentUser = { name, email };
        saveState();
        showToast('Cadastro realizado! Teste grátis por 7 dias ativado.');
        setTimeout(() => navigateTo('dashboard.html'), 1000);
    }
}

// Logout
function handleLogout() {
    AppState.isLoggedIn = false;
    AppState.currentUser = null;
    saveState();
    showToast('Logout realizado com sucesso!');
    setTimeout(() => navigateTo('index.html'), 1000);
}

// Toggle pagamento
function togglePayment(id) {
    const appointment = AppState.appointments.find(apt => apt.id === parseInt(id));
    if (appointment) {
        appointment.paid = !appointment.paid;
        saveState();
        updateDashboard();
    }
}

// Cancelar agendamento
function cancelAppointment(id) {
    const appointment = AppState.appointments.find(apt => apt.id === parseInt(id));
    if (appointment) {
        const now = new Date();
        appointment.canceledAt = now.toLocaleString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        AppState.canceledAppointments.push(appointment);
        AppState.appointments = AppState.appointments.filter(apt => apt.id !== parseInt(id));
        saveState();
        showToast('Agendamento cancelado com sucesso!');
        updateDashboard();
    }
}

// Calcular métricas
function calculateMetrics() {
    const totalCuts = AppState.appointments.filter(apt => apt.status === 'confirmed').length;
    const totalRevenue = AppState.appointments
        .filter(apt => apt.paid)
        .reduce((sum, apt) => sum + (serviceValues[apt.service] || 0), 0);
    const uniqueClients = new Set(AppState.appointments.map(apt => apt.client)).size;
    
    const totalSlots = 9 * 6;
    const occupancyRate = Math.round((AppState.appointments.length / totalSlots) * 100);
    
    // Horário mais cheio
    const hourCounts = {};
    AppState.appointments.forEach(apt => {
        hourCounts[apt.time] = (hourCounts[apt.time] || 0) + 1;
    });
    const busiestHour = Object.entries(hourCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A";
    
    const growthPercentage = 12; // Simulado

    return { totalCuts, totalRevenue, uniqueClients, occupancyRate, busiestHour, growthPercentage };
}

// Atualizar dashboard (se estiver na página)
function updateDashboard() {
    if (window.location.pathname.includes('dashboard.html')) {
        const metrics = calculateMetrics();
        
        document.getElementById('totalCuts').textContent = metrics.totalCuts;
        document.getElementById('totalRevenue').textContent = `R$ ${metrics.totalRevenue.toLocaleString('pt-BR')}`;
        document.getElementById('uniqueClients').textContent = metrics.uniqueClients;
        document.getElementById('occupancyRate').textContent = `${metrics.occupancyRate}%`;
        document.getElementById('busiestHour').textContent = metrics.busiestHour;
        document.getElementById('growthPercentage').textContent = `+${metrics.growthPercentage}%`;
    }
}

// Enviar via WhatsApp
function sendWhatsApp(appointmentData) {
    const { client, service, date, time, value, pixKey } = appointmentData;
    const message = `🔥 *AGENDAMENTO CONFIRMADO* 🔥

👤 *Cliente:* ${client}
✂️ *Serviço:* ${service}
📅 *Data:* ${date}
🕐 *Horário:* ${time}
💰 *Valor:* R$ ${value}

💳 *Pagamento via Pix:*
📱 Chave: ${pixKey}

_Aguardo você! Qualquer dúvida, só chamar._`;

    const phone = '5511987654321'; // Número de exemplo
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

// Recuperar senha
function handleForgotPassword(event) {
    if (event) event.preventDefault();
    const email = document.getElementById('email')?.value;
    
    if (email) {
        showToast('E-mail de recuperação enviado!');
        setTimeout(() => {
            document.getElementById('forgotForm').style.display = 'none';
            document.getElementById('successMessage').style.display = 'block';
        }, 1000);
    }
}

// Inicializar ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    checkAuth();
    
    // Atualizar UI baseado no estado de login
    const isAuthPage = window.location.pathname.includes('login') || 
                      window.location.pathname.includes('signup') ||
                      window.location.pathname.includes('forgot-password');
    
    if (!isAuthPage) {
        updateNavigation();
    }
    
    // Se estiver no dashboard, atualizar métricas
    if (window.location.pathname.includes('dashboard.html')) {
        updateDashboard();
    }
});

// Atualizar navegação baseado no login
function updateNavigation() {
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    
    if (AppState.isLoggedIn) {
        if (loginBtn) loginBtn.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'inline-block';
    } else {
        if (loginBtn) loginBtn.style.display = 'inline-block';
        if (logoutBtn) logoutBtn.style.display = 'none';
    }
}

// Exportar funções para uso global
window.navigateTo = navigateTo;
window.handleLogin = handleLogin;
window.handleSignup = handleSignup;
window.handleLogout = handleLogout;
window.togglePayment = togglePayment;
window.cancelAppointment = cancelAppointment;
window.sendWhatsApp = sendWhatsApp;
window.handleForgotPassword = handleForgotPassword;
window.AppState = AppState;
