import React, { useContext, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import translations from "../data/translations.json";

function FAQAccordion() {
  const { language } = useContext(LanguageContext);
  const [openIndex, setOpenIndex] = useState(null);

  const faq = translations[language].faq;
  const grouped = { about: [], automation: [], web: [] };
  faq.questions.forEach((item) => {
    grouped[item.section].push(item);
  });
  return (
    <section className="w-full flex flex-col items-center justify-center my-16 px-2 md:px-0">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-expressvpn-primary drop-shadow-lg tracking-tight w-full">
        <span className="inline-block bg-white/90 px-8 py-3 rounded-2xl shadow-md border" style={{ borderColor: '#0f866c' }}>
          {faq.title}
        </span>
      </h2>
      <div className="w-full max-w-3xl flex flex-col items-center gap-6">
        {["about", "automation", "web"].map((section) => (
          <div key={section} className="w-full flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4 text-expressvpn-primary flex items-center gap-2 justify-center">
              <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: '#0f866c' }}></span>
              {faq[section]}
            </h3>
            <div className="w-full flex flex-col items-center gap-4">
              {grouped[section].map((item, idx) => {
                const index = `${section}-${idx}`;
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className={`w-full transition-all duration-300 rounded-2xl bg-white/95 shadow-md overflow-hidden border border-gray-200 ${isOpen ? "ring-2 ring-[color:#0f866c]" : "hover:border-[color:#0f866c] hover:shadow-lg"}`}
                  >
                    <button
                      className="w-full flex justify-between items-center px-8 py-5 text-left focus:outline-none group"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                    >
                      <span className="font-semibold text-expressvpn-primary text-lg group-hover:text-[color:#0f866c] transition-colors">
                        {item.q}
                      </span>
                      <svg
                        className={`w-6 h-6 ml-2 transition-transform duration-300"`} style={{ color: isOpen ? '#0f866c' : undefined }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      style={{
                        maxHeight: isOpen ? 500 : 0,
                        opacity: isOpen ? 1 : 0,
                        transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
                        pointerEvents: isOpen ? 'auto' : 'none',
                        overflow: 'hidden',
                        willChange: 'max-height, opacity',
                      }}
                      className={
                        `px-8 pb-6 pt-0 text-gray-700 text-base bg-white/95 text-center ` +
                        (isOpen ? 'animate-fade-in-down' : '')
                      }
                    >
                      {item.a}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQAccordion;