
import React from 'react';
import './index.css';
import { LanguageProvider } from './contexts/LanguageContext';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';
// import TestimonialsSection from './components/TestimonialsSection';
// import ContactSection from './components/ContactSection';

function App() {
  return (
    <LanguageProvider>
      <div className="App min-h-screen flex flex-col bg-expressvpn-bg">
        <Header />
        <main className="flex-1 w-full pt-20 md:pt-24">
          <section className="relative">
            <HeroSection />
          </section>
          <ServicesSection />
          {/* <ContactSection /> */}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;