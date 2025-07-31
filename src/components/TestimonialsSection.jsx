
import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const testimonialsData = {
  es: [
    {
      name: "Juan Pérez",
      company: "Empresa X",
      text: "Gracias a CRExA, logramos automatizar tareas repetitivas y conectar varias plataformas como Google Sheets, WhatsApp y nuestro CRM. ¡El cambio fue inmediato!",
      avatar: "/assets/avatar1.svg"
    },
    {
      name: "Ana Gómez",
      company: "Startup Y",
      text: "El equipo de CRExA nos asesoró en la integración de herramientas como Zapier y Make, optimizando nuestros flujos de trabajo y ahorrando horas cada semana.",
      avatar: "/assets/avatar2.svg"
    },
    {
      name: "Carlos Ruiz",
      company: "Comercio Z",
      text: "Automatizamos la gestión de pedidos y notificaciones usando diferentes soluciones, lo que mejoró la experiencia de nuestros clientes y la eficiencia interna.",
      avatar: "/assets/avatar3.svg"
    }
  ],
  en: [
    {
      name: "John Smith",
      company: "Company X",
      text: "Thanks to CRExA, we automated repetitive tasks and connected platforms like Google Sheets, WhatsApp, and our CRM. The change was immediate!",
      avatar: "/assets/avatar1.svg"
    },
    {
      name: "Anna Gomez",
      company: "Startup Y",
      text: "The CRExA team guided us in integrating tools like Zapier and Make, optimizing our workflows and saving hours every week.",
      avatar: "/assets/avatar2.svg"
    },
    {
      name: "Charles Ruiz",
      company: "Shop Z",
      text: "We automated order management and notifications using different solutions, which improved our customer experience and internal efficiency.",
      avatar: "/assets/avatar3.svg"
    }
  ]
};

function TestimonialsSection() {
  const { language, t } = useContext(LanguageContext);
  const testimonials = testimonialsData[language] || testimonialsData['es'];
  return (
    <section className="py-16 px-4 bg-expressvpn-bg animate-fade-in-up">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-center text-[#0f866c] drop-shadow-lg tracking-tight w-full">{language === 'en' ? 'Testimonials' : 'Testimonios'}</h2>
      <div className="flex flex-row gap-8 max-w-5xl mx-auto overflow-x-auto scrollbar-thin scrollbar-thumb-expressvpn-primary/40 scrollbar-track-transparent pb-4">
        {testimonials.map((t, idx) => (
          <div key={idx} className="min-w-[320px] max-w-xs bg-expressvpn-section rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-expressvpn-border flex-shrink-0">
            <img src={t.avatar} alt={t.name} className="w-16 h-16 md:w-20 md:h-20 rounded-full mb-3 border-4 border-white shadow-md object-cover" loading="lazy" />
            <p className="text-base md:text-lg italic mb-3 text-expressvpn-text">"{t.text}"</p>
            <span className="font-bold text-expressvpn-button">{t.name}</span>
            <span className="text-sm text-expressvpn-text">{t.company}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
