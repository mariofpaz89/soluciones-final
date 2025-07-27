// utils/chatStorage.js
// Simulación de persistencia en archivo JSON para el chat
// Cuando tengas backend, reemplaza estas funciones por llamadas a tu API

const CHAT_FILE_PATH = require('../data/chatMessages.json');

export async function getAllRequests() {
  // Simula una llamada asíncrona
  return CHAT_FILE_PATH;
}

export async function saveRequest(request) {
  // Simula guardar una solicitud (en frontend real, esto no escribe el archivo)
  // Aquí solo retornamos el request para mantener la interfaz
  return request;
}

export async function getRequestByIdAndEmail(id, email) {
  const all = await getAllRequests();
  return all.find(r => r.id === id && r.userEmail === email) || null;
}

export async function addMessageToRequest(id, message) {
  // Simula agregar mensaje a una solicitud
  // En backend real, aquí harías la actualización
  return { id, message };
}
