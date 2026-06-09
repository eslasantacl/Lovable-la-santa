import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Lang = "es" | "en";

interface Translations {
  [key: string]: { es: string; en: string };
}

const translations: Translations = {
  // Navbar
  "nav.home": { es: "Inicio", en: "Home" },
  "nav.menu": { es: "Carta", en: "Menu" },
  "nav.about": { es: "Origen", en: "Origin" },
  "nav.howto": { es: "Cómo Pedir", en: "How to Order" },
  "nav.faq": { es: "FAQ´s", en: "FAQ´s" },
  "nav.contact": { es: "Contacto", en: "Contact" },
  "nav.order": { es: "PEDIR AHORA", en: "ORDER NOW" },

  // Hero
  "hero.title": { es: "La Santa", en: "La Santa" },
  "hero.subtitle": { es: "Bendita tortilla", en: "Bendita tortilla" },
  "hero.delivery": { es: "TORTILLA DE PATATA • DELIVERY", en: "SPANISH POTATO TORTILLA • DELIVERY" },

  // Menu
  "menu.heading": { es: "Nuestras Tentaciones", en: "Our Temptations" },
  "menu.label": { es: "CARTA", en: "MENU" },
  "menu.classic": { es: "La Clásica", en: "La Clásica" },
  "menu.onion": { es: "Sin Cebolla", en: "Sin Cebolla" },
  "menu.classic.desc": {
    es: "Patata, huevo, aceite de oliva virgen extra y cebolla bien pochada. La de siempre… pero mejor.",
    en: "Potato, egg, extra virgin olive oil and slowly caramelized onion. The classic one… only better.",
  },
  "menu.onion.desc": {
    es: "La Herejía. Para los que no creen en la cebolla. Mismo respeto por la tradición.\n",
    en: "The Heresy. For those who don't believe in onion. Same respect for tradition.\n",
  },
  "menu.add": { es: "Añadir", en: "Add" },

  // About
  "about.label": { es: "ORIGEN", en: "ORIGIN" },
  "about.heading": { es: "Tradición española que cruza fronteras", en: "Spanish tradition that crosses borders" },
  "about.text": {
    es: "La Santa nace lejos de casa, pero con todo el sabor de siempre. Españolas en Santiago con una obsesión simple: hacer la tortilla perfecta.                                      \n                                                       \nSin atajos.\nSin inventos.\nLo de toda la vida. \n                                                              \nNo hacemos tortillas. Creamos un pecado que no querrás confesar. Cada bocado es un viaje que te lleva de vuelta a España. Porque hay cosas que no se negocian. Y la tortilla es una de ellas.",
    en: "La Santa is born far from home, but with all the flavor of always. Spanish women in Santiago with one simple obsession: making the perfect tortilla.                                      \n                                                       \nNo shortcuts.\nNo inventions.\nThe real deal. \n                                                              \nWe don't make tortillas. We create a sin you won't want to confess. Every bite is a journey back to Spain. Because there are things that aren't up for debate. And the tortilla is one of them.",
  },
  "about.tagline": { es: "De España a Chile", en: "From Spain to Chile" },

  // How to Order
  "howto.label": { es: "DELIVERY", en: "DELIVERY" },
  "howto.heading": { es: "Así de fácil.", en: "That easy." },
  "howto.step1.title": { es: "Elige", en: "Choose" },
  "howto.step1.desc": { es: "Tu tortilla favorita.", en: "Your favorite tortilla." },
  "howto.step2.title": { es: "Pide", en: "Order" },
  "howto.step2.desc": { es: "Por Whatsapp. Nos ocupamos.", en: "Via WhatsApp. We take care of it." },
  "howto.step3.title": { es: "Disfruta", en: "Enjoy" },
  "howto.step3.desc": { es: "En tu puerta, lista.", en: "At your door, ready." },

  // FAQ
  "faq.heading": { es: "Preguntas Frecuentes", en: "Frequently Asked Questions" },
  "faq.q1": { es: "¿A dónde enviamos La Santa?", en: "Where do we deliver La Santa?" },
  "faq.a1": {
    es: "Entregamos en Providencia, Las Condes y Vitacura.\nSeguiremos ampliando.",
    en: "We deliver to Providencia, Las Condes and Vitacura.\nWe'll keep expanding.",
  },
  "faq.q2": { es: "¿Cómo pago?", en: "How do I pay?" },
  "faq.a2": {
    es: "​Transferencia al confirmar el pedido.",
    en: "Bank transfer when confirming the order.",
  },
  "faq.q3": { es: "¿Cuánto tarda el pedido?", en: "How long does the order take?" },
  "faq.a3": {
    es: "Entre 25 y 40 minutos, según la zona y la demanda del momento. Aunque, puedes pedir con antelación.",
    en: "Between 25 and 40 minutes, depending on the area and demand. You can also order in advance.",
  },
  "faq.q4": { es: "​\n¿Las tortillas se hacen al momento?", en: "\nAre the tortillas made fresh?" },
  "faq.a4": {
    es: "​Sí. Trabajamos con producción diaria para asegurar calidad y consistencia en cada pedido.",
    en: "Yes. We work with daily production to ensure quality and consistency in every order.",
  },
  "faq.q5": { es: "\n¿Qué tamaño tienen las tortillas?", en: "\nWhat size are the tortillas?" },
  "faq.a5": {
    es: "Aproximadamente 20cm. Pensadas para compartir… o no.\n\n",
    en: "Approximately 20cm. Designed to share… or not.\n\n",
  },

  // Contact
  "contact.heading": { es: "Confiésanos tu antojo", en: "Confess your craving" },
  "contact.name": { es: "Nombre", en: "Name" },
  "contact.email": { es: "Correo", en: "Email" },
  "contact.message": { es: "Tu confesión", en: "Your confession" },
  "contact.send": { es: "Confesar", en: "Confess" },
  "contact.whatsapp": { es: "Escríbenos por WhatsApp", en: "Message us on WhatsApp" },

  // Footer
  "footer.text": {
    es: "Sabíamos que pasaría.                        \nBienvenido al pecado. Bienvenido a La Santa.",
    en: "We knew it would happen.                        \nWelcome to sin. Welcome to La Santa.",
  },

  // Image alt texts
  "alt.hero": {
    es: "Tortilla de patata española premium servida sobre fondo oscuro - La Santa Delivery Santiago",
    en: "Premium Spanish potato tortilla served on a dark background - La Santa Delivery Santiago",
  },
  "alt.logo": {
    es: "La Santa - Bendita Tortilla, delivery de tortilla de patata en Santiago",
    en: "La Santa - Blessed Tortilla, Spanish potato tortilla delivery in Santiago",
  },
  "alt.bite": {
    es: "Primer plano de una boca mordiendo una jugosa tortilla española - La Santa Delivery",
    en: "Close-up of a mouth biting into a juicy Spanish tortilla - La Santa Delivery",
  },
  "alt.slice": {
    es: "Porción artesanal de tortilla de patata La Santa sobre pizarra negra",
    en: "Artisanal slice of La Santa Spanish potato tortilla on black slate",
  },

  // SEO Meta
  "meta.title": {
    es: "La Santa | Bendita Tortilla - Delivery de Tortilla Española en Santiago",
    en: "La Santa | Blessed Tortilla - Premium Spanish Tortilla Delivery in Santiago",
  },
  "meta.description": {
    es: "Tortilla de patata española artesanal con delivery en Providencia, Las Condes y Vitacura. Receta tradicional, ingredientes premium. Pide por WhatsApp.",
    en: "Artisanal Spanish potato tortilla delivered in Providencia, Las Condes and Vitacura, Santiago. Traditional recipe, premium ingredients. Order via WhatsApp.",
  },
};

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("es");
  const t = (key: string) => translations[key]?.[lang] || key;

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be inside LanguageProvider");
  return ctx;
};
