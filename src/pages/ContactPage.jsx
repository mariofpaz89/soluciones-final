import React from "react";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { LanguageProvider } from '../contexts/LanguageContext';

function ContactPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-expressvpn-bg">
        <Header />
        <main className="flex-1 pt-20 md:pt-24">
          {/* Eliminado el botón 'Volver al inicio' */}
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default ContactPage;
