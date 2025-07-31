
import React, { useContext } from 'react';
import { siteConfig } from '../data/siteConfig';
import { LanguageContext } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

function HeroSection() {
  const { t } = useContext(LanguageContext);

  return (
    <section className="relative bg-expressvpn-bg text-expressvpn-text min-h-[70vh] flex items-center justify-center text-center px-2 pt-6 md:pt-16 pb-10 overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <div className="mb-4 animate-fade-in-down">
          <img src={siteConfig.logo} alt={siteConfig.logoAlt} className="w-16 h-16 md:w-24 md:h-24 drop-shadow-xl" />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down text-expressvpn-text">
          {t('heroSection.title')}
        </h1>
        <p className="text-base sm:text-lg md:text-2xl opacity-90 mb-8 animate-fade-in-up text-expressvpn-text">
          {t('heroSection.subtitle')}
        </p>
        <Link
          to="/contacto"
          className="inline-block bg-expressvpn-button text-expressvpn-buttonText px-8 py-4 rounded-full shadow-md hover:scale-105 hover:bg-expressvpn-accent transition-all duration-300 text-xl font-bold animate-fade-in-up focus:outline-none focus:ring-2 focus:ring-expressvpn-accent focus:ring-offset-2"
        >
          {t('header.contact')}
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;