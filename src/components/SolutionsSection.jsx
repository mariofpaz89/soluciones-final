
import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export default function SolutionsSection() {
  const { t } = useContext(LanguageContext);
  const section = t("solutionsSection");
  const title = section?.title || "Nuestras Soluciones";
  const solutions = section?.items || [];

  return (
    <section className="w-full bg-expressvpn-section py-8 px-1 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-center text-[#0f866c] drop-shadow-lg tracking-tight w-full animate-fade-in-down">
          {title}
        </h2>
        <div className="flex flex-col gap-4 sm:gap-10 md:gap-16 px-1">
          {solutions.map((sol, idx) => (
            <div
              key={sol.title}
              className={`flex flex-col md:flex-row ${idx % 2 === 1 ? "md:flex-row-reverse" : ""} items-center gap-10 md:gap-16 bg-white/90 rounded-2xl shadow-lg p-6 md:p-12 animate-fade-in-up`}
            >
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={sol.image}
                  alt={sol.imageAlt}
                  className="rounded-xl shadow-md w-full max-w-md object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-4 text-expressvpn-text">
                <h3 className="text-2xl md:text-3xl font-bold text-expressvpn-primary mb-2">{sol.title}</h3>
                <p className="font-semibold text-expressvpn-accent">{sol.challengeLabel}</p>
                <p className="mb-2">{sol.challenge}</p>
                <p className="font-semibold text-expressvpn-accent">{sol.solutionLabel}</p>
                <p className="mb-2">{sol.solution}</p>
                <ul className="list-disc pl-5 mb-2">
                  {sol.results.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-2">
                  {sol.tech.map((t, i) => (
                    <span key={i} className="bg-expressvpn-accent/10 text-expressvpn-accent px-3 py-1 rounded-full text-xs font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
                <button className="mt-2 bg-expressvpn-button text-expressvpn-buttonText font-bold py-2 px-6 rounded-full shadow-md hover:bg-expressvpn-accent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-expressvpn-accent focus:ring-offset-2">
                  {sol.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
