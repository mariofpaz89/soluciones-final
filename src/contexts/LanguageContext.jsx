import React, { createContext } from 'react';
import { useLanguage } from '../hooks/useLanguage'; // Importamos nuestro hook existente

// Creamos el Contexto.
// Proporciona un valor por defecto que ayuda a los IDEs con el autocompletado,
// pero el Provider siempre sobrescribirá este valor.
export const LanguageContext = createContext({
  language: 'en', // Valor por defecto
  changeLanguage: () => {}, // Función por defecto
  t: (key) => key, // Función de traducción por defecto
  availableLanguages: ['es', 'en'] // Idiomas disponibles por defecto
});

// Este componente será el "Proveedor" de nuestro contexto
// Envolverá a toda la aplicación para que todos los componentes anidados tengan acceso
export const LanguageProvider = ({ children }) => {
  // Nuestro hook useLanguage es la fuente de la lógica del idioma
  const languageProps = useLanguage();

  return (
    <LanguageContext.Provider value={languageProps}>
      {children}
    </LanguageContext.Provider>
  );
};