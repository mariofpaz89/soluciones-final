
import React from "react";

const testimonials = [
  {
    name: "Juan Pérez",
    company: "Empresa X",
    text: "Soluciones Mike nos ayudó a automatizar procesos y mejorar la eficiencia. ¡Recomendados!"
  },
  {
    name: "Ana Gómez",
    company: "Startup Y",
    text: "El equipo de Soluciones Mike desarrolló nuestro sitio web y superó nuestras expectativas."
  }
];

function TestimonialsSection() {
  return (
    <section className="py-16 px-4 bg-expressvpn-bg animate-fade-in-up">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-expressvpn-button mb-10">Testimonios</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-expressvpn-section rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-expressvpn-border">
            <p className="text-lg italic mb-4 text-expressvpn-text">"{t.text}"</p>
            <span className="font-bold text-expressvpn-button">{t.name}</span>
            <span className="text-sm text-expressvpn-text">{t.company}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
