import React, { useContext } from 'react'; // Importa useContext
import { LanguageContext } from '../contexts/LanguageContext'; // Importa el contexto

function Header() {
  // Usamos useContext para obtener el valor del contexto
  const { language, changeLanguage, t, availableLanguages } = useContext(LanguageContext);

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10 animate-slide-down">
      <div className="text-2xl font-bold text-blue-700">
        Soluciones Mike
      </div>
      <nav className="flex items-center space-x-6">
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
          {t('header.home')}
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
          {t('header.services')}
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
          {t('header.contact')}
        </a>

        <div className="relative">
          <label htmlFor="language-select-header" className="sr-only">
            {t('header.languageSelector')}
          </label>
          <select
            id="language-select-header"
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="block appearance-none w-full bg-gray-50 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          >
            {availableLanguages.map((langCode) => (
              <option key={langCode} value={langCode}>
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
    </header>
  );
}

export default Header;