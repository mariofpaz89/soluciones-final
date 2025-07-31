

import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const PrivacyPolicy = () => {
  const { t } = useContext(LanguageContext);
  return (
    <div className="max-w-2xl mx-auto py-10 px-4 animate-fade-in-up">
      <h1 className="text-3xl font-bold mb-6 text-expressvpn-button">{t('privacyPolicy.title')}</h1>
      <nav className="mb-8">
        <ul className="flex flex-col gap-2 text-expressvpn-accent text-sm underline">
          <li><a href="#intro">{t('privacyPolicy.intro')}</a></li>
          <li><a href="#data">{t('privacyPolicy.dataCollectionTitle')}</a></li>
          <li><a href="#usage">{t('privacyPolicy.usageTitle')}</a></li>
          <li><a href="#rights">{t('privacyPolicy.rightsTitle')}</a></li>
          <li><a href="#contact">{t('privacyPolicy.contactTitle')}</a></li>
        </ul>
      </nav>
      <section id="intro" className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{t('privacyPolicy.intro')}</h2>
        <p className="text-base mb-2">{t('privacyPolicy.usage')}</p>
      </section>
      <section id="data" className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{t('privacyPolicy.dataCollectionTitle')}</h2>
        <ul className="list-disc ml-6 mb-2">
          <li>{t('privacyPolicy.dataCollection1')}</li>
          <li>{t('privacyPolicy.dataCollection2')}</li>
          <li>{t('privacyPolicy.dataCollection3')}</li>
        </ul>
      </section>
      <section id="usage" className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{t('privacyPolicy.usageTitle')}</h2>
        <p>{t('privacyPolicy.usage')}</p>
      </section>
      <section id="rights" className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{t('privacyPolicy.rightsTitle')}</h2>
        <p>{t('privacyPolicy.rights')}</p>
      </section>
      <section id="contact" className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{t('privacyPolicy.contactTitle')}</h2>
        <p>{t('privacyPolicy.contact')}</p>
        <div className="mt-2">
          <a href="mailto:info@crexa.digital" className="text-expressvpn-accent underline">info@crexa.digital</a>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
