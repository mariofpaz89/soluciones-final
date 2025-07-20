import { useState, useEffect, useCallback } from 'react';
import translations from '../data/translations.json';

const defaultLanguage = 'es'; // Idioma por defecto

export const useLanguage = () => {
  // Estado para el idioma actual, inicializado desde localStorage o el idioma por defecto
  const [language, setLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem('appLanguage');
    return storedLanguage || defaultLanguage;
  });

  // Estado para las traducciones del idioma actual
  const [t, setT] = useState({});

  // Efecto para cargar las traducciones cuando el idioma cambia
  useEffect(() => {
    if (translations[language]) {
      setT(translations[language]);
    } else {
      // Si el idioma seleccionado no tiene traducciones, volvemos al por defecto
      setLanguage(defaultLanguage);
      setT(translations[defaultLanguage]);
      localStorage.setItem('appLanguage', defaultLanguage);
    }
  }, [language]);

  // Efecto para persistir el idioma en localStorage
  useEffect(() => {
    localStorage.setItem('appLanguage', language);
  }, [language]);

  // Función para cambiar el idioma
  // useCallback para evitar que la función se recree innecesariamente
  const changeLanguage = useCallback((newLang) => {
    if (translations[newLang]) {
      setLanguage(newLang);
    } else {
      console.warn(`Idioma '${newLang}' no soportado. Se mantiene en '${language}'.`);
    }
  }, [language]); // Dependencia 'language' para advertir correctamente

  // La función 'translate' permite acceder a las traducciones de forma anidada
  // Ejemplo: translate('header.home')
  const translate = useCallback((key) => {
    const keys = key.split('.');
    let currentTranslation = t;
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
  }, [t, language]); // Dependencias: 't' (traducciones) y 'language'

  return {
    language,
    changeLanguage,
    t: translate, // Renombramos la función a 't' para un uso más conciso
    availableLanguages: Object.keys(translations)
  };
};