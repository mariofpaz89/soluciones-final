import React from 'react';
import './index.css';
import { LanguageProvider } from './contexts/LanguageContext';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <LanguageProvider>
      <div className="App min-h-screen flex flex-col bg-expressvpn-bg">
        <Header />
        <main className="flex-1 w-full">
          <section className="relative">
            <HeroSection />
          </section>
          <ServicesSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;