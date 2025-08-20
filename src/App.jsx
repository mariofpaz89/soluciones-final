import React from 'react';
import './index.css';
import { LanguageProvider } from './contexts/LanguageContext';



import FAQAccordion from "./components/FAQAccordion";
import SolutionsSection from "./components/SolutionsSection";
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import TestimonialsSection from './components/TestimonialsSection';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookieBanner from './components/CookieBanner';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';
import MaintenanceBanner from './components/MaintenanceBanner';



function App() {
  const isMaintenance = import.meta.env.VITE_MAINTENANCE_MODE === 'true';
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        {isMaintenance ? (
          <MaintenanceBanner />
        ) : (
          <div className="App min-h-screen flex flex-col bg-expressvpn-bg">
            <Header />
            <main className="flex-1 w-full pt-20 md:pt-24">
              <Routes>
                <Route path="/" element={
                  <>
                    <section className="relative">
                      <HeroSection />
                    </section>
                    <ServicesSection />
                    <SolutionsSection />
                    <FAQAccordion />
                    <TestimonialsSection />
                  </>
                } />
                <Route path="/contacto" element={<ContactPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
              </Routes>
            </main>
            <Footer />
            <ChatWidget />
            <CookieBanner />
          </div>
        )}
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;