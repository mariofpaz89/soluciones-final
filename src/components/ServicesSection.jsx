import React, { useContext } from 'react'; // Importa useContext
import { LanguageContext } from '../contexts/LanguageContext'; // Importa el contexto

function ServicesSection() {
  const { t } = useContext(LanguageContext); // Usamos useContext

  return (
    <section className="bg-gray-50 py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
          {t('servicesSection.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2">
            <div className="text-6xl text-purple-600 mb-6">
              ⚙️
            </div>
            <h3 className="text-3xl font-bold text-purple-700 mb-4">
              {t('servicesSection.automationTitle')}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('servicesSection.automationDescription')}
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2">
            <div className="text-6xl text-green-600 mb-6">
              🌐
            </div>
            <h3 className="text-3xl font-bold text-green-700 mb-4">
              {t('servicesSection.websiteCreationTitle')}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('servicesSection.websiteCreationDescription')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;