
import React, { useContext } from "react";
import { LanguageContext } from '../contexts/LanguageContext';

function ContactSection() {
  const { t } = useContext(LanguageContext);
  return (
    <section className="pt-4 pb-6 px-1 sm:px-4 bg-expressvpn-bg text-expressvpn-text animate-fade-in-up">
      <div className="w-full max-w-3xl mx-auto rounded-xl p-2 sm:p-4 md:p-10 backdrop-blur-md bg-white border border-expressvpn-border text-sm sm:text-base">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">{t('contactSection.title')}</h2>
        <p className="text-center mb-8 text-lg">{t('contactSection.subtitle')}</p>
        <form className="flex flex-col gap-6">
          <input type="email" placeholder={t('contactSection.emailPlaceholder')} className="p-4 rounded-lg border-2 border-expressvpn-accent bg-white focus:ring-2 focus:ring-expressvpn-accent text-expressvpn-text" required />
          <textarea placeholder={t('contactSection.messagePlaceholder')} className="p-4 rounded-lg border-2 border-expressvpn-accent bg-white focus:ring-2 focus:ring-expressvpn-accent text-expressvpn-text" rows={4} required />
          <button type="submit" className="bg-expressvpn-button text-expressvpn-buttonText font-bold py-3 px-8 rounded-full shadow-md hover:bg-expressvpn-accent transition-all duration-300 border border-expressvpn-accent">{t('contactSection.sendButton')}</button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
