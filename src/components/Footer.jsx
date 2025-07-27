

import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

function Footer() {
  const { t } = useContext(LanguageContext);

  return (
    <footer className="bg-expressvpn-footer text-expressvpn-buttonText py-4 px-2 sm:px-8 text-center border-t border-expressvpn-border shadow-md text-xs sm:text-sm">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm mb-4 text-expressvpn-buttonText">
          {t('footer.rightsReserved')}
        </p>
        <div className="flex justify-center space-x-6">
          <Link to="/privacy-policy" className="text-expressvpn-buttonText hover:text-expressvpn-button transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-expressvpn-button focus:ring-offset-2">
            {t('footer.privacyPolicy')}
          </Link>
          <Link to="/terms-of-service" className="text-expressvpn-buttonText hover:text-expressvpn-button transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-expressvpn-button focus:ring-offset-2">
            {t('footer.termsOfService')}
          </Link>
        </div>
        <div className="mt-6 text-expressvpn-border text-xs">
          Diseñado y Desarrollado con <span className="text-expressvpn-button">❤</span> por Soluciones Mike
        </div>
      </div>
    </footer>
  );
}

export default Footer;