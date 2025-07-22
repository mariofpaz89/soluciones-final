
import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

function ServicesSection() {
  const { t } = useContext(LanguageContext);

  return (
    <section id="services" className="bg-expressvpn-section py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-expressvpn-text mb-14 animate-fade-in-down">
          {t('servicesSection.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-expressvpn-section p-10 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-expressvpn-border animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <span className="inline-block bg-expressvpn-bg text-expressvpn-button rounded-full p-4 text-4xl shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 0h6m-6 0a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2m-6 0a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2" />
                </svg>
              </span>
            </div>
            <h3 className="text-2xl font-bold text-expressvpn-button mb-4">
              {t('servicesSection.automationTitle')}
            </h3>
            <p className="text-lg text-expressvpn-text leading-relaxed">
              {t('servicesSection.automationDescription')}
            </p>
          </div>
          <div className="bg-expressvpn-section p-10 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-expressvpn-border animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <span className="inline-block bg-expressvpn-bg text-expressvpn-button rounded-full p-4 text-4xl shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </div>
            <h3 className="text-2xl font-bold text-expressvpn-button mb-4">
              {t('servicesSection.websiteCreationTitle')}
            </h3>
            <p className="text-lg text-expressvpn-text leading-relaxed">
              {t('servicesSection.websiteCreationDescription')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;