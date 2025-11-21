// API Service para manejar solicitudes de servicio técnico

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'

export interface ServiceRequestData {
  name: string
  phone: string
  email?: string
  address: string
  appliance: string
  brand?: string
  model?: string
  problem: string
  preferredDate?: string
  preferredTime?: string
}

/**
 * Envía la solicitud de servicio a la base de datos
 */
export async function submitServiceRequest(data: ServiceRequestData): Promise<any> {
  try {
    const response = await fetch(`${API_BASE_URL}/service-requests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        createdAt: new Date().toISOString(),
        status: 'pending',
      }),
    })

    if (!response.ok) {
      throw new Error(`Error al enviar solicitud: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    // Si no hay backend configurado, guardamos en localStorage como fallback
    console.warn('Backend no disponible, guardando en localStorage:', error)
    const requests = JSON.parse(localStorage.getItem('serviceRequests') || '[]')
    const newRequest = {
      id: Date.now().toString(),
      ...data,
      createdAt: new Date().toISOString(),
      status: 'pending',
    }
    requests.push(newRequest)
    localStorage.setItem('serviceRequests', JSON.stringify(requests))
    return newRequest
  }
}

/**
 * Formatea los datos para el mensaje de WhatsApp
 */
function formatWhatsAppMessage(data: ServiceRequestData): string {
  const lines = [
    '🔧 *Nueva Solicitud de Servicio Técnico*',
    '',
    '*Información de Contacto:*',
    `👤 Nombre: ${data.name}`,
    `📱 Teléfono: ${data.phone}`,
    data.email ? `📧 Email: ${data.email}` : '',
    `📍 Dirección: ${data.address}`,
    '',
    '*Información del Electrodoméstico:*',
    `🔧 Tipo: ${getApplianceName(data.appliance)}`,
    data.brand ? `🏷️ Marca: ${data.brand}` : '',
    data.model ? `📋 Modelo: ${data.model}` : '',
    '',
    '*Descripción del Problema:*',
    data.problem,
    '',
    '*Programación de Visita:*',
    data.preferredDate ? `📅 Fecha: ${formatDate(data.preferredDate)}` : 'No especificada',
    data.preferredTime ? `⏰ Hora: ${getTimeSlotName(data.preferredTime)}` : 'No especificada',
  ]

  return lines.filter(line => line !== '').join('\n')
}

/**
 * Obtiene el nombre legible del electrodoméstico
 */
function getApplianceName(value: string): string {
  const appliances: Record<string, string> = {
    neveras: 'Neveras-Nevecones',
    lavadora: 'Lavadoras-Secadoras',
    calentadores: 'Calentadores',
    estufa: 'Estufas-Hornos',
    microondas: 'Microondas',
    televisores: 'Televisores LCD',
    otro: 'Otro',
  }
  return appliances[value] || value
}

/**
 * Obtiene el nombre legible del horario
 */
function getTimeSlotName(value: string): string {
  const timeSlots: Record<string, string> = {
    'manana-temprano': 'Mañana Temprano (8:00 AM - 10:00 AM)',
    'manana-tarde': 'Mañana Tarde (10:00 AM - 12:00 PM)',
    'tarde-temprano': 'Tarde Temprano (12:00 PM - 3:00 PM)',
    'tarde-tarde': 'Tarde Tarde (3:00 PM - 6:00 PM)',
    noche: 'Noche (6:00 PM - 9:00 PM)',
    morning: 'Mañana (8:00 AM - 12:00 PM)',
    afternoon: 'Tarde (12:00 PM - 6:00 PM)',
    evening: 'Noche (6:00 PM - 9:00 PM)',
  }
  return timeSlots[value] || value
}

/**
 * Formatea la fecha para mostrar
 */
function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Envía la información a WhatsApp
 */
export async function sendWhatsAppMessage(data: ServiceRequestData): Promise<void> {
  const whatsappNumber = '3003094854'
  const message = formatWhatsAppMessage(data)
  
  // Codificar el mensaje para URL
  const encodedMessage = encodeURIComponent(message)
  
  // Crear el enlace de WhatsApp Web/App
  const whatsappUrl = `https://wa.me/57${whatsappNumber}?text=${encodedMessage}`
  
  // Abrir WhatsApp en una nueva ventana
  window.open(whatsappUrl, '_blank')
  
  // También intentamos enviar a través de la API si está disponible
  try {
    const response = await fetch(`${API_BASE_URL}/whatsapp/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: `57${whatsappNumber}`,
        message,
      }),
    })

    if (!response.ok) {
      console.warn('No se pudo enviar a través de la API de WhatsApp, usando enlace directo')
    }
  } catch (error) {
    // Si no hay API de WhatsApp, simplemente usamos el enlace directo
    console.log('Enviando a WhatsApp mediante enlace directo')
  }
}

