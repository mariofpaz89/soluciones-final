import { useState, useEffect, useCallback } from 'react';
import translations from '../data/translations.json';

const defaultLanguage = 'en'; // Idioma por defecto

export const useLanguage = () => {
  // Estado para el idioma actual, inicializado desde localStorage o el idioma por defecto
  const [language, setLanguage] = useState(() => {
    const storedLang = localStorage.getItem('appLanguage');
    return storedLang && translations[storedLang] ? storedLang : defaultLanguage;
  });

  // Estado para las traducciones del idioma actual
  const [translationsState, setTranslationsState] = useState({});

  // Efecto para cargar las traducciones cuando el idioma cambia
  useEffect(() => {
    if (translations[language]) {
      setTranslationsState(translations[language]);
    } else {
      // Si el idioma seleccionado no tiene traducciones, volvemos al por defecto
      setLanguage(defaultLanguage);
      setTranslationsState(translations[defaultLanguage]);
      localStorage.setItem('appLanguage', defaultLanguage);
    }
  }, [language]);

  // Efecto para persistir el idioma en localStorage
  useEffect(() => {
    if (translations[language]) {
      localStorage.setItem('appLanguage', language);
    }
  }, [language]);

  // Función para cambiar el idioma
  // useCallback para evitar que la función se recree innecesariamente
  const changeLanguage = useCallback((newLang) => {
    if (translations[newLang]) {
      setLanguage(newLang);
      localStorage.setItem('appLanguage', newLang);
    } else {
      console.warn(`Idioma '${newLang}' no soportado. Se mantiene en '${language}'.`);
    }
  }, [language]); // Dependencia 'language' para advertir correctamente

  // La función 'translate' permite acceder a las traducciones de forma anidada
  // Ejemplo: translate('header.home')
  const translate = useCallback((key) => {
    const keys = key.split('.');
    let currentTranslation = translationsState;
    for (const k of keys) {
      if (currentTranslation && currentTranslation[k] !== undefined) {
        currentTranslation = currentTranslation[k];
      } else {
        // Si la clave no se encuentra, retornamos la clave para depuración
        console.warn(`Traducción para '${key}' no encontrada en el idioma '${language}'.`);
        return key;
      }
    }
    return currentTranslation;
  }, [translationsState, language]);

  return {
    language,
    changeLanguage,
    t: translate, // Renombramos la función a 't' para un uso más conciso
    availableLanguages: Object.keys(translations)
  };
};