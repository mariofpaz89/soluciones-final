import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export default function MaintenanceBanner() {
  const { t } = useContext(LanguageContext);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#e0f7ef] via-[#b2f1e0] to-[#dbeafe] text-themeBlue-text">
      <div className="flex flex-col items-center p-8 rounded-2xl border-4 border-[#5E72E4] bg-white/90 shadow-2xl animate-fade-in-down max-w-lg w-full">
        <svg className="w-20 h-20 mb-4 text-[#0f866c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="2" y="7" width="20" height="10" rx="2" fill="#b2f1e0" stroke="#5E72E4" strokeWidth="2"/>
          <path d="M2 7l2 10m16-10l2 10" stroke="#0f866c" strokeWidth="2"/>
          <rect x="7" y="10" width="2" height="2" fill="#0f866c"/>
          <rect x="15" y="10" width="2" height="2" fill="#0f866c"/>
        </svg>
        <h1 className="text-3xl font-extrabold mb-2 text-center text-[#0f866c] drop-shadow">{t('maintenance.title')}</h1>
        <p className="text-lg text-center mb-4 text-themeBlue-text">{t('maintenance.message')}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="inline-block w-8 h-2 bg-[#5E72E4] rounded-full animate-pulse"></span>
          <span className="inline-block w-8 h-2 bg-[#0f866c] rounded-full animate-pulse delay-150"></span>
          <span className="inline-block w-8 h-2 bg-[#b2f1e0] rounded-full animate-pulse delay-300"></span>
        </div>
      </div>
    </div>
  );
}
