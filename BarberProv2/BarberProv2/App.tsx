import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { LoginPage } from "./components/LoginPage";
import { SignupPage } from "./components/SignupPage";
import { ForgotPasswordPage } from "./components/ForgotPasswordPage";
import { PricingPage } from "./components/PricingPage";
import { DashboardPage } from "./components/DashboardPage";
import { HistoryPage } from "./components/HistoryPage";
import { ContactPage } from "./components/ContactPage";
import { TermsPage } from "./components/TermsPage";
import { PrivacyPage } from "./components/PrivacyPage";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner@2.0.3";
import { getAppointments, getAppointmentsByStatus, type Appointment } from "./services/api";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [canceledAppointments, setCanceledAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Load appointments when user logs in
  useEffect(() => {
    if (isLoggedIn) {
      loadAppointments();
    }
  }, [isLoggedIn]);

  const loadAppointments = async () => {
    setIsLoading(true);
    try {
      const [active, canceled] = await Promise.all([
        getAppointmentsByStatus('active'),
        getAppointmentsByStatus('canceled')
      ]);
      
      setAppointments(active);
      setCanceledAppointments(canceled);
      
      // Only show success toast if we actually got data
      if (active.length > 0 || canceled.length > 0) {
        toast.success('Agendamentos carregados com sucesso!');
      } else {
        // Show info toast only once when first logging in
        toast.info('Modo Demonstração', {
          description: 'Nenhum agendamento encontrado. Crie seu primeiro agendamento!'
        });
      }
    } catch (error) {
      console.error('Error loading appointments:', error);
      toast.error('Erro ao carregar agendamentos.');
      
      // In case of error, keep empty arrays
      setAppointments([]);
      setCanceledAppointments([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage("dashboard");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage("home");
    toast.success("Logout realizado com sucesso!");
  };

  const handleRefreshAppointments = () => {
    loadAppointments();
  };

  const renderPage = () => {
    // If not logged in and trying to access dashboard or history, redirect to login
    if (!isLoggedIn && (currentPage === "dashboard" || currentPage === "history")) {
      return (
        <LoginPage 
          onLogin={handleLogin} 
          onNavigateToSignup={() => setCurrentPage("signup")}
          onNavigateToForgotPassword={() => setCurrentPage("forgot-password")}
        />
      );
    }

    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={setCurrentPage} />;
      case "login":
        return (
          <LoginPage 
            onLogin={handleLogin} 
            onNavigateToSignup={() => setCurrentPage("signup")}
            onNavigateToForgotPassword={() => setCurrentPage("forgot-password")}
          />
        );
      case "signup":
        return <SignupPage onSignup={handleLogin} onNavigateToLogin={() => setCurrentPage("login")} />;
      case "forgot-password":
        return <ForgotPasswordPage onNavigateToLogin={() => setCurrentPage("login")} />;
      case "pricing":
        return <PricingPage onNavigate={setCurrentPage} />;
      case "dashboard":
        return (
          <DashboardPage 
            appointments={appointments}
            isLoading={isLoading}
            onRefresh={handleRefreshAppointments}
          />
        );
      case "history":
        return (
          <HistoryPage 
            appointments={appointments}
            canceledAppointments={canceledAppointments}
            isLoading={isLoading}
            onRefresh={handleRefreshAppointments}
          />
        );
      case "contact":
        return <ContactPage />;
      case "terms":
        return <TermsPage onNavigate={setCurrentPage} />;
      case "privacy":
        return <PrivacyPage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  // Don't show header and footer on login/signup/forgot-password pages
  const showHeaderFooter = currentPage !== "login" && currentPage !== "signup" && currentPage !== "forgot-password";

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      {showHeaderFooter && (
        <Header 
          currentPage={currentPage} 
          onNavigate={setCurrentPage}
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
        />
      )}
      {renderPage()}
      {showHeaderFooter && <Footer onNavigate={setCurrentPage} />}
      <Toaster 
        theme="dark" 
        position="top-right"
        toastOptions={{
          style: {
            background: '#1A1A1A',
            border: '1px solid rgba(193, 154, 107, 0.2)',
            color: '#fff',
          },
        }}
      />
    </div>
  );
}
