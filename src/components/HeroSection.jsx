import React, { useContext } from 'react'; // Importa useContext
import { LanguageContext } from '../contexts/LanguageContext'; // Importa el contexto

function HeroSection() {
  const { t } = useContext(LanguageContext); // Usamos useContext

  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white min-h-screen flex items-center justify-center text-center p-8 mt-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
          {t('heroSection.title')}
        </h1>
        <p className="text-xl md:text-2xl opacity-90 animate-fade-in-up">
          {t('heroSection.subtitle')}
        </p>
        <button className="mt-8 bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          ¡Contáctanos!
        </button>
      </div>
    </section>
  );
}

export default HeroSection;