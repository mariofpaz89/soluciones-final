/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        argon: {
          bg: '#F8F9FA', // Fondo general
          section: '#FFFFFF', // Fondo secciones
          card: '#F4F5F7', // Fondo cards
          primary: '#5E72E4', // Azul intenso
          accent: '#11CDEF', // Celeste claro
          text: '#32325D', // Texto principal
          button: '#5E72E4', // Botón principal
          buttonAccent: '#11CDEF', // Botón acento
        },
        themeBlue: {
          bg: '#F4F8FB', // Fondo general
          section: '#E3EAF2', // Fondo secciones
          primary: '#1E3A8A', // Azul principal
          accent: '#2563EB', // Azul acento
          text: '#1E293B', // Texto principal
          button: '#2563EB', // Botón
        },
        themeGreen: {
          bg: '#F4F6F4',
          section: '#E6F4EA',
          primary: '#14532D',
          accent: '#22C55E',
          text: '#1A2E05',
          button: '#22C55E',
        },
        themePurple: {
          bg: '#F6F4FB',
          section: '#ECE6F4',
          primary: '#6D28D9',
          accent: '#A78BFA',
          text: '#3B0764',
          button: '#A78BFA',
        },
        themeGray: {
          bg: '#F7F7F7',
          section: '#E5E7EB',
          primary: '#374151',
          accent: '#6B7280',
          text: '#111827',
          button: '#6B7280',
        },
        expressvpn: {
          bg: '#f9f8f2', // Fondo principal
          section: '#ffffff', // Fondo alterno/secciones
          border: '#F2F3F5', // Bordes y divisiones sutiles
          text: '#23272A', // Texto principal (gris oscuro)
          logo: '#D43A2A', // Rojo ExpressVPN (solo logo/acento)
          accent: '#0071B8', // Azul ExpressVPN (enlaces/acento)
          button: '#0f866c', // Botón principal (verde capturado)
          buttonSecondary: '#0071B8', // Botón secundario (azul)
          buttonText: '#FFFFFF', // Texto de botón (blanco)
          footer: '#001827', // Footer (gris muy oscuro capturado)
          shadow: 'rgba(0,0,0,0.08)', // Sombra sutil
          success: '#2DCB5D', // Verde éxito
          warning: '#FFB400', // Amarillo advertencia
          info: '#0071B8', // Azul info
        },
      },
      keyframes: {
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.7s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
        'slide-down': 'slide-down 0.5s ease-out forwards',
      }
    },
  },
  plugins: [],
}