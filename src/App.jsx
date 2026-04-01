import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import HowItWorksPage from "./pages/HowItWorksPage";
import ImpactPage from "./pages/ImpactPage";
import NGOPage from "./pages/NGOPage";
import CitiesPage from "./pages/CitiesPage";
import DonatePage from "./pages/DonatePage";
import NGOLoginPage from "./pages/NGOLogin";
import NGOJoinPage from "./pages/NGOJoin";
import NGODashboard from "./pages/NGODashboard";
import ParticleCanvas from "./components/ui/ParticleCanvas";

function AppContent() {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  return (
    <div className="relative z-10 flex flex-col min-h-screen">
      {!isDashboard && <Navbar />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/ngos" element={<NGOPage />} />
          <Route path="/cities" element={<CitiesPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/login" element={<NGOLoginPage />} />
          <Route path="/join" element={<NGOJoinPage />} />
          <Route path="/dashboard" element={<NGODashboard />} />
        </Routes>
      </main>
      {!isDashboard && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Global Background Elements */}
      <ParticleCanvas />
      <div className="noise-grain" />
      
      <AppContent />
    </BrowserRouter>
  );
}
