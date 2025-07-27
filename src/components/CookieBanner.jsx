
const defaultPrefs = {
  essential: true,
  analytics: false,
  marketing: false,
};

const CookieBanner = () => {
  const { t } = useContext(LanguageContext);
  const [visible, setVisible] = useState(() => !localStorage.getItem('cookiesPrefs'));
  const [showModal, setShowModal] = useState(false);
  const [prefs, setPrefs] = useState(() => {
    const saved = localStorage.getItem('cookiesPrefs');
    return saved ? JSON.parse(saved) : defaultPrefs;
  });

  const handleAcceptAll = () => {
    const all = { essential: true, analytics: true, marketing: true };
    localStorage.setItem('cookiesPrefs', JSON.stringify(all));
    setPrefs(all);
    setVisible(false);
  };

  const handleAcceptEssentials = () => {
    localStorage.setItem('cookiesPrefs', JSON.stringify({ essential: true, analytics: false, marketing: false }));
    setPrefs({ essential: true, analytics: false, marketing: false });
    setVisible(false);
  };

  const handleSavePrefs = () => {
    localStorage.setItem('cookiesPrefs', JSON.stringify(prefs));
    setVisible(false);
    setShowModal(false);
  };

  const handleChange = (type) => {
    setPrefs((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  if (!visible) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 w-full z-50 bg-expressvpn-bg border-t border-expressvpn-accent px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4 animate-fade-in-up shadow-lg">
        <span className="text-sm text-expressvpn-text flex-1">
          {t('cookieBanner.message')}
          {' '}
          <a href="/privacy-policy" className="underline text-expressvpn-accent focus:outline-none focus:ring-2 focus:ring-expressvpn-accent ml-1">{t('cookieBanner.link')}</a>
        </span>
        <div className="flex flex-col md:flex-row gap-2">
          <button
            className="px-4 py-2 rounded bg-expressvpn-button text-white font-semibold shadow hover:bg-expressvpn-accent focus:outline-none focus:ring-2 focus:ring-expressvpn-accent"
            onClick={handleAcceptEssentials}
            aria-label={t('cookieBanner.acceptEssentials')}
          >
            {t('cookieBanner.acceptEssentials')}
          </button>
          <button
            className="px-4 py-2 rounded bg-expressvpn-accent text-white font-semibold shadow hover:bg-expressvpn-button focus:outline-none focus:ring-2 focus:ring-expressvpn-accent"
            onClick={handleAcceptAll}
            aria-label={t('cookieBanner.acceptAll')}
          >
            {t('cookieBanner.acceptAll')}
          </button>
          <button
            className="px-4 py-2 rounded border border-expressvpn-accent text-expressvpn-accent font-semibold bg-white hover:bg-expressvpn-bg focus:outline-none focus:ring-2 focus:ring-expressvpn-accent"
            onClick={() => setShowModal(true)}
            aria-label={t('cookieBanner.settings')}
          >
            {t('cookieBanner.settings')}
          </button>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 animate-fade-in-up">
            <h2 className="text-lg font-bold mb-4 text-expressvpn-button">{t('cookieBanner.settingsTitle')}</h2>
            <form>
              <div className="mb-3 flex items-center">
                <input type="checkbox" checked disabled className="mr-2" id="essential" />
                <label htmlFor="essential" className="text-sm font-semibold">{t('cookieBanner.essential')}</label>
              </div>
              <div className="mb-3 flex items-center">
                <input type="checkbox" id="analytics" checked={prefs.analytics} onChange={() => handleChange('analytics')} className="mr-2" />
                <label htmlFor="analytics" className="text-sm">{t('cookieBanner.analytics')}</label>
              </div>
              <div className="mb-3 flex items-center">
                <input type="checkbox" id="marketing" checked={prefs.marketing} onChange={() => handleChange('marketing')} className="mr-2" />
                <label htmlFor="marketing" className="text-sm">{t('cookieBanner.marketing')}</label>
              </div>
            </form>
            <div className="flex justify-end gap-2 mt-6">
              <button
                className="px-4 py-2 rounded bg-expressvpn-accent text-white font-semibold shadow hover:bg-expressvpn-button focus:outline-none focus:ring-2 focus:ring-expressvpn-accent"
                onClick={handleSavePrefs}
                aria-label={t('cookieBanner.save')}
              >
                {t('cookieBanner.save')}
              </button>
              <button
                className="px-4 py-2 rounded border border-expressvpn-accent text-expressvpn-accent font-semibold bg-white hover:bg-expressvpn-bg focus:outline-none focus:ring-2 focus:ring-expressvpn-accent"
                onClick={() => setShowModal(false)}
                aria-label={t('cookieBanner.cancel')}
              >
                {t('cookieBanner.cancel')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
import React, { useState, useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
