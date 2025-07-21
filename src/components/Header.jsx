import React, { useContext, useState } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

function Header() {
  const { language, changeLanguage, t, availableLanguages } = useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú móvil

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-expressvpn-bg shadow-lg p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10 animate-slide-down">
      <div className="text-2xl font-bold text-expressvpn-logo">
        Soluciones Mike
      </div>

      {/* Menú de Navegación - Oculto en móviles, visible en desktop */}
      <nav className="hidden md:flex items-center space-x-6">
        <Link to="/" className="text-expressvpn-text hover:text-expressvpn-text font-medium" aria-label={t('header.home')}>
          {t('header.home')}
        </Link>
        <a href="#services" className="text-expressvpn-text hover:text-expressvpn-text font-medium" aria-label={t('header.services')}>
          {t('header.services')}
        </a>
        <Link to="/contacto" className="text-expressvpn-text hover:text-expressvpn-text font-medium" aria-label={t('header.contact')}>
          {t('header.contact')}
        </Link>

        {/* Selector de Idioma para Desktop */}
        <div className="relative">
          <label htmlFor="language-select-header-desktop" className="sr-only">
            {t('header.languageSelector')}
          </label>
          <select
            id="language-select-header-desktop"
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="block appearance-none w-full bg-gray-50 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            aria-label={t('header.languageSelector')}
          >
            {availableLanguages.map((langCode) => (
              <option key={langCode} value={langCode} className="capitalize">
                {langCode === 'es' ? 'Español' : langCode === 'en' ? 'English' : langCode}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z" />
            </svg>
          </div>
        </div>
      </nav>

      {/* Botón de Menú (Hamburguesa) - Visible en móviles, oculto en desktop */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 focus:outline-none" aria-label={isMenuOpen ? t('header.closeMenu') : t('header.openMenu')}>
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
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center space-y-4 z-20 transition-all duration-300 max-h-screen overflow-y-auto">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu} aria-label={t('header.home')}>
            {t('header.home')}
          </Link>
          <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu} aria-label={t('header.services')}>
            {t('header.services')}
          </a>
          <Link to="/contacto" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu} aria-label={t('header.contact')}>
            {t('header.contact')}
          </Link>

          {/* Selector de Idioma para Móviles */}
          <div className="relative w-40">
            <label htmlFor="language-select-header-mobile" className="sr-only">
              {t('header.languageSelector')}
            </label>
            <select
              id="language-select-header-mobile"
              value={language}
              onChange={(e) => {
                changeLanguage(e.target.value);
                toggleMenu();
              }}
              className="block appearance-none w-full bg-gray-50 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              aria-label={t('header.languageSelector')}
            >
              {availableLanguages.map((langCode) => (
                <option key={langCode} value={langCode} className="capitalize">
                  {langCode === 'es' ? 'Español' : langCode === 'en' ? 'English' : langCode}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;