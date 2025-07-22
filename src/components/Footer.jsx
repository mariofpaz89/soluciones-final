
import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

function Footer() {
  const { t } = useContext(LanguageContext);

  return (
    <footer className="bg-expressvpn-footer text-expressvpn-buttonText py-8 px-8 text-center border-t border-expressvpn-border shadow-md">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm mb-4 text-expressvpn-buttonText">
          {t('footer.rightsReserved')}
        </p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-expressvpn-buttonText hover:text-expressvpn-button transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-expressvpn-button focus:ring-offset-2">
            {t('footer.privacyPolicy')}
          </a>
          <a href="#" className="text-expressvpn-buttonText hover:text-expressvpn-button transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-expressvpn-button focus:ring-offset-2">
            {t('footer.termsOfService')}
          </a>
        </div>
        <div className="mt-6 text-expressvpn-border text-xs">
          Diseñado y Desarrollado con <span className="text-expressvpn-button">❤</span> por Soluciones Mike
        </div>
      </div>
    </footer>
  );
}

export default Footer;