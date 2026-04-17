const PHONE = "5521995501269";

export const WHATSAPP_URL_INFO =
  `https://wa.me/${PHONE}?text=${encodeURIComponent("Olá! Gostaria de mais informações sobre o Grande Arraiá da Ilha.")}`;

export const WHATSAPP_URL_RESERVA =
  `https://wa.me/${PHONE}?text=${encodeURIComponent("Olá! Quero reservar uma mesa para o Grande Arraiá da Ilha. Pode me passar mais informações?")}`;

export const WHATSAPP_URL_ACAO =
  `https://wa.me/${PHONE}?text=${encodeURIComponent("Olá! Quero participar da ação entre amigos. Pode me passar mais informações?")}`;

// Backward-compat default (info)
export const WHATSAPP_URL = WHATSAPP_URL_INFO;
