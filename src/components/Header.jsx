import React, { useContext, useState } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

function Header() {
  const { language, changeLanguage, t, availableLanguages } = useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú móvil
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false); // Estado para el menú de idioma

  // Cerrar el menú de idioma al hacer clic fuera
  React.useEffect(() => {
    function handleClickOutside(e) {
      if (!e.target.closest('.lang-dropdown')) {
        setIsLangMenuOpen(false);
      }
    }
    if (isLangMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLangMenuOpen]);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-expressvpn-bg shadow-lg p-4 flex justify-between items-center fixed top-0 left-0 w-full z-20 animate-slide-down" style={{background: '#f9f8f2', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
      <div className="flex items-center justify-between w-full">
        <span className="text-2xl font-bold text-expressvpn-logo">Soluciones Mike</span>
        <nav className="flex items-center space-x-6">
          <Link to="/" className="text-expressvpn-text hover:text-expressvpn-accent font-medium" aria-label={t('header.home')}>
            {t('header.home')}
          </Link>
          <a
            href="#services"
            className="text-expressvpn-text hover:text-expressvpn-accent font-medium"
            aria-label={t('header.services')}
            onClick={e => {
              e.preventDefault();
              const section = document.getElementById('services');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            {t('header.services')}
          </a>
          <Link to="/contacto" className="text-expressvpn-text hover:text-expressvpn-accent font-medium" aria-label={t('header.contact')}>
            {t('header.contact')}
          </Link>
          <div className="relative ml-8 lang-dropdown">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center px-4 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-expressvpn-accent transition-all duration-200"
              aria-label={t('header.languageSelector')}
            >
              <img
                src={language === 'en' ? '/src/assets/usa.png' : '/src/assets/spain.png'}
                alt={language === 'en' ? 'English' : 'Español'}
                className="w-6 h-6 rounded-full mr-2"
              />
              <span className="text-gray-700 font-medium">
                {language === 'en' ? 'English' : 'Español'}
              </span>
              <svg className={`ml-2 w-4 h-4 text-gray-700 transform transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 7l3 3 3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div
              className={`absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-30 origin-top
                transition-transform transition-opacity duration-300 ease-out
                ${isLangMenuOpen ? 'scale-y-100 opacity-100 translate-y-0 shadow-xl animate-fade-in-down' : 'scale-y-0 opacity-0 -translate-y-2 pointer-events-none'}`}
              style={{ transformOrigin: 'top' }}
            >
              <button
                onClick={() => { changeLanguage('en'); setIsLangMenuOpen(false); }}
                className="flex items-center w-full px-4 py-2 hover:bg-gray-100 focus:outline-none transition-all duration-150"
                aria-label="English"
              >
                <img src="/src/assets/usa.png" alt="English" className="w-5 h-5 rounded-full mr-2" />
                <span>English</span>
              </button>
              <button
                onClick={() => { changeLanguage('es'); setIsLangMenuOpen(false); }}
                className="flex items-center w-full px-4 py-2 hover:bg-gray-100 focus:outline-none transition-all duration-150"
                aria-label="Español"
              >
                <img src="/src/assets/spain.png" alt="Español" className="w-5 h-5 rounded-full mr-2" />
                <span>Español</span>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Botón de Menú (Hamburguesa) - Visible en móviles, oculto en desktop */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-expressvpn-text hover:text-expressvpn-accent focus:outline-none" aria-label={isMenuOpen ? t('header.closeMenu') : t('header.openMenu')}>
          {/* Icono de Hamburguesa o X */}
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú Desplegable para Móviles */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-expressvpn-bg shadow-lg py-4 flex flex-col items-center space-y-4 z-20 transition-all duration-300 max-h-screen overflow-y-auto">
          <div className="flex flex-col items-center space-y-4 w-full">
            <Link to="/" className="text-expressvpn-text hover:text-expressvpn-accent font-medium" onClick={toggleMenu} aria-label={t('header.home')}>
              {t('header.home')}
            </Link>
            <a
              href="#services"
              className="text-expressvpn-text hover:text-expressvpn-accent font-medium"
              onClick={e => {
                e.preventDefault();
                const section = document.getElementById('services');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                toggleMenu();
              }}
              aria-label={t('header.services')}
            >
              {t('header.services')}
            </a>
            <Link to="/contacto" className="text-expressvpn-text hover:text-expressvpn-accent font-medium" onClick={toggleMenu} aria-label={t('header.contact')}>
              {t('header.contact')}
            </Link>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <button
              onClick={() => { changeLanguage('es'); toggleMenu(); }}
              className={`w-8 h-8 rounded-full border-2 ${language === 'es' ? 'border-expressvpn-accent' : 'border-transparent'} focus:outline-none transition-all duration-200`}
              aria-label="Español"
            >
              <img src="/src/assets/spain.png" alt="Español" className="w-8 h-8 rounded-full" />
            </button>
            <button
              onClick={() => { changeLanguage('en'); toggleMenu(); }}
              className={`w-8 h-8 rounded-full border-2 ${language === 'en' ? 'border-expressvpn-accent' : 'border-transparent'} focus:outline-none transition-all duration-200`}
              aria-label="English"
            >
              <img src="/src/assets/usa.png" alt="English" className="w-8 h-8 rounded-full" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;