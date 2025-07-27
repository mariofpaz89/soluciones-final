

import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const TermsOfService = () => {
  const { t } = useContext(LanguageContext);
  return (
    <div className="max-w-2xl mx-auto py-10 px-4 animate-fade-in-up">
      <h1 className="text-3xl font-bold mb-6 text-expressvpn-button">{t('terms.title')}</h1>
      <nav className="mb-8">
        <ul className="flex flex-col gap-2 text-expressvpn-accent text-sm underline">
          <li><a href="#intro">{t('terms.intro')}</a></li>
          <li><a href="#acceptance">{t('terms.acceptanceTitle')}</a></li>
          <li><a href="#usage">{t('terms.usageTitle')}</a></li>
          <li><a href="#limitation">{t('terms.limitationTitle')}</a></li>
          <li><a href="#contact">{t('terms.contactTitle')}</a></li>
        </ul>
      </nav>
      <section id="intro" className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{t('terms.intro')}</h2>
        <p className="text-base mb-2">{t('terms.acceptance')}</p>
      </section>
      <section id="acceptance" className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{t('terms.acceptanceTitle')}</h2>
        <p>{t('terms.acceptance')}</p>
      </section>
      <section id="usage" className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{t('terms.usageTitle')}</h2>
        <p>{t('terms.usage')}</p>
      </section>
      <section id="limitation" className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{t('terms.limitationTitle')}</h2>
        <p>{t('terms.limitation')}</p>
      </section>
      <section id="contact" className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{t('terms.contactTitle')}</h2>
        <p>{t('terms.contact')}</p>
        <div className="mt-2">
          <a href="mailto:info@solucionesmike.com" className="text-expressvpn-accent underline">info@solucionesmike.com</a>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
