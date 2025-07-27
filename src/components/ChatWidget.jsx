import React, { useState, useContext, useRef, useEffect } from "react";
import { LanguageContext } from "../contexts/LanguageContext";


// Icono SVG de chat (bocadillo)
const ChatIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

// Genera un ID único en formato MS-YYYYMMDD-XXX (mantener local, pero la persistencia será simulada)
function generateId() {
  const date = new Date();
  const ymd = date.toISOString().slice(0, 10).replace(/-/g, "");
  // Obtener el contador actual del día (simulado en localStorage)
  const key = `ms_counter_${ymd}`;
  let counter = parseInt(window.localStorage.getItem(key) || "0", 10) + 1;
  window.localStorage.setItem(key, counter);
  const padded = String(counter).padStart(3, "0");
  return `MS-${ymd}-${padded}`;
}

// Utilidad para validar email
function isValidEmail(email) {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
}



// Persistencia en localStorage como array de solicitudes
function getAllRequests() {
  return JSON.parse(localStorage.getItem("supportRequests") || "[]");
}

function saveAllRequests(requests) {
  localStorage.setItem("supportRequests", JSON.stringify(requests));
}

function saveRequest(request) {
  const all = getAllRequests();
  all.push(request);
  saveAllRequests(all);
}

function getRequestByIdAndEmail(id, email) {
  const all = getAllRequests();
  return all.find(r => r.id === id && r.userEmail === email) || null;
}

function addMessageToRequest(id, message) {
  const all = getAllRequests();
  const idx = all.findIndex(r => r.id === id);
  if (idx !== -1) {
    all[idx].messages.push(message);
    saveAllRequests(all);
    return all[idx];
  }
  return null;
}

export default function ChatWidget() {
  const { t, language } = useContext(LanguageContext);
  const [open, setOpen] = useState(false);
  const [view, setView] = useState("main"); // main | new | success | follow | chat
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [followEmail, setFollowEmail] = useState("");
  const [formError, setFormError] = useState({});
  const [successId, setSuccessId] = useState("");
  const [copied, setCopied] = useState(false);
  const [followId, setFollowId] = useState("");
  const [followError, setFollowError] = useState("");
  const [currentRequest, setCurrentRequest] = useState(null);
  const [chatInput, setChatInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Scroll automático al final del chat
  useEffect(() => {
    if (chatEndRef.current) chatEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [currentRequest]);

  // Reset al abrir/cerrar
  useEffect(() => {
    if (!open) {
      setView("main");
      setForm({ name: "", email: "", message: "" });
      setFormError({});
      setSuccessId("");
      setCopied(false);
      setFollowId("");
      setFollowError("");
      setCurrentRequest(null);
      setChatInput("");
      setChatLoading(false);
    }
  }, [open]);

  // Validación de formulario
  function validateForm() {
    const errors = {};
    if (!form.name.trim()) errors.name = t("chatWidget.validationName");
    if (!form.email.trim()) errors.email = t("chatWidget.validationEmail");
    else if (!isValidEmail(form.email.trim())) errors.email = t("chatWidget.invalidEmail");
    if (!form.message.trim()) errors.message = t("chatWidget.validationMessage");
    setFormError(errors);
    return Object.keys(errors).length === 0;
  }

  // Enviar nueva solicitud
  function handleNewRequest(e) {
    e.preventDefault();
    if (!validateForm()) return;
    const id = generateId();
    const now = new Date().toISOString();
    const request = {
      id,
      timestamp: now,
      status: "abierta",
      userName: form.name.trim(),
      userEmail: form.email.trim(),
      initialRequest: form.message.trim(),
      messages: [
        {
          sender: "user",
          timestamp: now,
          text: form.message.trim(),
        },
        {
          sender: "Mike Solutions",
          timestamp: now,
          text: t("chatWidget.simulatedReply"),
        },
      ],
    };
    saveRequest(request);
    setSuccessId(id);
    setView("success");
  }

  // Copiar ID
  function handleCopyId() {
    navigator.clipboard.writeText(successId);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  // Buscar solicitud por ID
  function handleFollowUp(e) {
    e.preventDefault();
    if (!followId.trim() || !followEmail.trim()) {
      setFollowError(t("chatWidget.requiredId"));
      return;
    }
    const req = getRequestByIdAndEmail(followId.trim().toUpperCase(), followEmail.trim());
    if (!req) {
      setFollowError(t("chatWidget.notFound"));
      return;
    }
    setCurrentRequest(req);
    setView("chat");
    setFollowError("");
  }

  // Enviar mensaje en seguimiento
  function handleSendChat(e) {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const now = new Date().toISOString();
    const msg = {
      sender: "user",
      timestamp: now,
      text: chatInput.trim(),
    };
    const updated = addMessageToRequest(currentRequest.id, msg);
    setCurrentRequest(updated);
    setChatInput("");
    setChatLoading(true);
    // Simular respuesta de soporte
    setTimeout(() => {
      const reply = {
        sender: "Mike Solutions",
        timestamp: new Date().toISOString(),
        text: t("chatWidget.simulatedReply"),
      };
      const updated2 = addMessageToRequest(currentRequest.id, reply);
      setCurrentRequest(updated2);
      setChatLoading(false);
    }, 1200);
  }

  // Renderizado de vistas
  function renderMain() {
    return (
      <div className="text-center text-expressvpn-text">
        <p className="mb-4">{t("chatWidget.howCanWeHelp")}</p>
        <button
          className="w-full mb-2 py-2 px-4 rounded-lg bg-[#0f866c] text-white font-semibold hover:bg-[#0d6b56] transition-all"
          onClick={() => setView("new")}
        >
          {t("chatWidget.newRequest")}
        </button>
        <button
          className="w-full py-2 px-4 rounded-lg bg-expressvpn-section text-[#0f866c] font-semibold hover:bg-[#0f866c]/20 transition-all"
          onClick={() => setView("follow")}
        >
          {t("chatWidget.followUp")}
        </button>
      </div>
    );
  }

  function renderNewRequest() {
    return (
      <form className="space-y-3" onSubmit={handleNewRequest} autoComplete="off">
        <div>
          <label className="block text-left text-sm font-semibold mb-1">{t("chatWidget.nameLabel")}</label>
          <input
            className={`w-full px-3 py-2 rounded border ${formError.name ? "border-red-500" : "border-gray-300"} focus:outline-none`}
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            autoFocus
          />
          {formError.name && <div className="text-xs text-red-600 mt-1">{formError.name}</div>}
        </div>
        <div>
          <label className="block text-left text-sm font-semibold mb-1">{t("chatWidget.emailLabel")}</label>
          <input
            className={`w-full px-3 py-2 rounded border ${formError.email ? "border-red-500" : "border-gray-300"} focus:outline-none`}
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            type="email"
          />
          {formError.email && <div className="text-xs text-red-600 mt-1">{formError.email}</div>}
        </div>
        <div>
          <label className="block text-left text-sm font-semibold mb-1">{t("chatWidget.messageLabel")}</label>
          <textarea
            className={`w-full px-3 py-2 rounded border ${formError.message ? "border-red-500" : "border-gray-300"} focus:outline-none`}
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            rows={3}
          />
          {formError.message && <div className="text-xs text-red-600 mt-1">{formError.message}</div>}
        </div>
        <div className="flex gap-2 mt-4">
          <button
            type="button"
            className="flex-1 py-2 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-all"
            onClick={() => setView("main")}
          >
            {t("chatWidget.backButton")}
          </button>
          <button
            type="submit"
            className="flex-1 py-2 rounded-lg bg-[#0f866c] text-white font-semibold hover:bg-[#0d6b56] transition-all"
          >
            {t("chatWidget.sendButton")}
          </button>
        </div>
      </form>
    );
  }

  function renderSuccess() {
    return (
      <div className="text-center">
        <h3 className="text-lg font-bold mb-2">{t("chatWidget.successTitle")}</h3>
        <p className="mb-2">{t("chatWidget.successMessage")}</p>
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="font-mono bg-gray-100 px-3 py-1 rounded text-sm">{successId}</span>
          <button
            className="text-xs px-2 py-1 rounded bg-[#0f866c] text-white hover:bg-[#0d6b56] transition-all"
            onClick={handleCopyId}
          >
            {copied ? t("chatWidget.copied") : t("chatWidget.copyId")}
          </button>
        </div>
        <button
          className="w-full mb-2 py-2 px-4 rounded-lg bg-[#0f866c] text-white font-semibold hover:bg-[#0d6b56] transition-all"
          onClick={() => setView("main")}
        >
          {t("chatWidget.startNew")}
        </button>
        <button
          className="w-full py-2 px-4 rounded-lg bg-expressvpn-section text-[#0f866c] font-semibold hover:bg-[#0f866c]/20 transition-all"
          onClick={() => setView("follow")}
        >
          {t("chatWidget.trackRequest")}
        </button>
      </div>
    );
  }

  function renderFollow() {
    return (
      <form className="space-y-3" onSubmit={handleFollowUp} autoComplete="off">
        <div>
          <label className="block text-left text-sm font-semibold mb-1">{t("chatWidget.idLabel")}</label>
          <input
            className={`w-full px-3 py-2 rounded border ${followError ? "border-red-500" : "border-gray-300"} focus:outline-none font-mono`}
            value={followId}
            onChange={e => setFollowId(e.target.value.toUpperCase())}
            placeholder={t("chatWidget.idPlaceholder")}
            autoFocus
          />
        </div>
        <div>
          <label className="block text-left text-sm font-semibold mb-1">{t("chatWidget.emailLabel")}</label>
          <input
            className={`w-full px-3 py-2 rounded border ${followError ? "border-red-500" : "border-gray-300"} focus:outline-none`}
            value={followEmail}
            onChange={e => setFollowEmail(e.target.value)}
            type="email"
            placeholder={t("chatWidget.emailLabel")}
          />
          {followError && <div className="text-xs text-red-600 mt-1">{followError}</div>}
        </div>
        <div className="flex gap-2 mt-4">
          <button
            type="button"
            className="flex-1 py-2 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-all"
            onClick={() => setView("main")}
          >
            {t("chatWidget.backButton")}
          </button>
          <button
            type="submit"
            className="flex-1 py-2 rounded-lg bg-[#0f866c] text-white font-semibold hover:bg-[#0d6b56] transition-all"
          >
            {t("chatWidget.continueButton")}
          </button>
        </div>
      </form>
    );
  }

  function renderChat() {
    return (
      <div className="flex flex-col h-full">
        <h3 className="text-lg font-bold mb-2 text-center">{t("chatWidget.historyTitle")}</h3>
        <div className="flex-1 overflow-y-auto bg-gray-50 rounded p-2 mb-2" style={{ maxHeight: 220 }}>
          {currentRequest.messages.map((msg, i) => (
            <div
              key={i}
              className={`mb-2 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`px-3 py-2 rounded-lg text-sm max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-[#0f866c] text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                <div className="mb-1 font-semibold">
                  {msg.sender === "user"
                    ? t("chatWidget.yourMessage")
                    : t("chatWidget.supportMessage")}
                </div>
                <div>{msg.text}</div>
                <div className="text-xs text-right mt-1 opacity-60">
                  {new Date(msg.timestamp).toLocaleString(language === "es" ? "es-ES" : "en-US")}
                </div>
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        <form className="flex gap-2" onSubmit={handleSendChat} autoComplete="off">
          <input
            className="flex-1 px-3 py-2 rounded border border-gray-300 focus:outline-none"
            value={chatInput}
            onChange={e => setChatInput(e.target.value)}
            placeholder={t("chatWidget.typeMessage")}
            disabled={chatLoading}
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-[#0f866c] text-white font-semibold hover:bg-[#0d6b56] transition-all disabled:opacity-60"
            disabled={chatLoading}
          >
            {chatLoading ? t("chatWidget.loading") : t("chatWidget.sendFollowUp")}
          </button>
        </form>
        <button
          className="w-full mt-2 py-2 px-4 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-all"
          onClick={() => setView("main")}
        >
          {t("chatWidget.backButton")}
        </button>
      </div>
    );
  }

  // Render principal
  return (
    <>
      {/* Icono flotante */}
      <button
        className="fixed z-50 bottom-6 right-6 bg-[#0f866c] text-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center hover:bg-[#0d6b56] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#0f866c]/30"
        aria-label="Abrir chat de soporte"
        onClick={() => setOpen(true)}
      >
        <ChatIcon />
      </button>

      {/* Modal/Ventana de chat */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-end md:justify-end pointer-events-none">
          {/* Fondo oscuro */}
          <div className="fixed inset-0 bg-black/30 pointer-events-auto" onClick={() => setOpen(false)} />
          {/* Ventana de chat */}
          <div className="relative w-full max-w-sm md:max-w-md bg-white rounded-t-2xl md:rounded-2xl shadow-2xl mx-auto mb-0 md:mb-8 mr-0 md:mr-8 p-0 flex flex-col pointer-events-auto animate-fade-in-up">
            {/* Header del chat */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-expressvpn-border bg-[#0f866c] rounded-t-2xl">
              <span className="font-bold text-lg text-white">{t("chatWidget.title")}</span>
              <div className="flex items-center gap-2">
                <button className="text-white hover:text-[#0d6b56] text-2xl font-bold" onClick={() => setOpen(false)} aria-label="Cerrar chat">×</button>
              </div>
            </div>
            {/* Contenido dinámico */}
            <div className="flex-1 px-6 py-4">
              {view === "main" && renderMain()}
              {view === "new" && renderNewRequest()}
              {view === "success" && renderSuccess()}
              {view === "follow" && renderFollow()}
              {view === "chat" && currentRequest && renderChat()}
            </div>
          </div>
        </div>
      )}
    </>
  );
}