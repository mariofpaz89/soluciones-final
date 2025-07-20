import React, { useContext } from 'react'; // Importa useContext
import { LanguageContext } from '../contexts/LanguageContext'; // Importa el contexto

function Footer() {
  const { t } = useContext(LanguageContext); // Usamos useContext

  return (
    <footer className="bg-gray-800 text-white py-8 px-8 text-center">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm mb-4">
          {t('footer.rightsReserved')}
        </p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
            {t('footer.privacyPolicy')}
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
            {t('footer.termsOfService')}
          </a>
        </div>
        <div className="mt-6 text-gray-400 text-xs">
          Diseñado y Desarrollado con ❤️ por Soluciones Mike
        </div>
      </div>
    </footer>
  );
}

export default Footer;