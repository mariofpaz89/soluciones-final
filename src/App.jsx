import React from 'react';
import './index.css';
// Importamos el Provider de nuestro contexto
import { LanguageProvider } from './contexts/LanguageContext';

// Importamos los componentes
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';

function App() {
  return (
    // Envolvemos toda la aplicación con el LanguageProvider
    // Esto hace que el contexto del idioma esté disponible para todos los componentes anidados
    <LanguageProvider>
      <div className="App">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;