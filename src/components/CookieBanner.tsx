import { useEffect, useState } from "react";
import { Settings } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const STORAGE_KEY = "lasanta_cookie_consent";

const CookieBanner = () => {
  const { lang } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) setVisible(true);
  }, []);

  const save = (choice: "accept" | "reject" | "preferences") => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ choice, date: new Date().toISOString() }),
    );
    setVisible(false);
  };

  if (!visible) return null;

  const text =
    lang === "es"
      ? 'Utilizamos cookies técnicas de Netlify para el correcto funcionamiento de nuestro altar digital y herramientas de Google Search Console para optimizar nuestra presencia en la web. Al hacer clic en "Aceptar", permites el uso de estas tecnologías para mejorar tu experiencia. Puedes configurar tus preferencias o rechazarlas.'
      : 'We use technical cookies from Netlify for the proper functioning of our digital altar and Google Search Console tools to optimize our presence on the web. By clicking "Accept", you allow the use of these technologies to enhance your experience. You can configure your preferences or reject them.';

  const labels =
    lang === "es"
      ? { prefs: "Preferencias", reject: "Rechazar", accept: "Aceptar", title: "Preferencias de Cookies", tech: "Cookies técnicas (Netlify)", techDesc: "Necesarias para el funcionamiento del sitio. Siempre activas.", seo: "Google Search Console", seoDesc: "Nos ayuda a optimizar nuestra presencia en buscadores.", save: "Guardar preferencias", close: "Cerrar" }
      : { prefs: "Preferences", reject: "Reject", accept: "Accept", title: "Cookie Preferences", tech: "Technical cookies (Netlify)", techDesc: "Required for the site to function. Always on.", seo: "Google Search Console", seoDesc: "Helps us optimize our presence in search engines.", save: "Save preferences", close: "Close" };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-background border-t border-primary/60 shadow-[0_-10px_40px_-10px_hsl(var(--primary)/0.3)]">
      {showPrefs ? (
        <div className="container mx-auto px-4 py-6 max-w-3xl">
          <h3 className="font-serif text-2xl text-primary mb-4">{labels.title}</h3>
          <div className="space-y-4 mb-6">
            <div className="border border-primary/20 p-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-foreground font-medium">{labels.tech}</span>
                <span className="text-xs text-primary uppercase tracking-widest">●</span>
              </div>
              <p className="text-sm text-muted-foreground">{labels.techDesc}</p>
            </div>
            <div className="border border-primary/20 p-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-foreground font-medium">{labels.seo}</span>
              </div>
              <p className="text-sm text-muted-foreground">{labels.seoDesc}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <button
              onClick={() => save("reject")}
              className="px-5 py-2 text-sm uppercase tracking-widest border border-primary/40 text-foreground hover:border-primary transition-colors"
            >
              {labels.reject}
            </button>
            <button
              onClick={() => save("preferences")}
              className="px-5 py-2 text-sm uppercase tracking-widest bg-primary text-primary-foreground hover:brightness-110 transition-all font-semibold"
            >
              {labels.save}
            </button>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-5 flex flex-col lg:flex-row items-start lg:items-center gap-4">
          <Settings className="text-primary shrink-0 hidden sm:block" size={28} />
          <p className="text-sm text-muted-foreground leading-relaxed flex-1">{text}</p>
          <div className="flex flex-wrap gap-2 shrink-0 w-full lg:w-auto">
            <button
              onClick={() => setShowPrefs(true)}
              className="px-4 py-2 text-xs uppercase tracking-widest border border-primary/40 text-foreground hover:border-primary transition-colors"
            >
              {labels.prefs}
            </button>
            <button
              onClick={() => save("reject")}
              className="px-4 py-2 text-xs uppercase tracking-widest border border-primary/40 text-foreground hover:border-primary transition-colors"
            >
              {labels.reject}
            </button>
            <button
              onClick={() => save("accept")}
              className="px-4 py-2 text-xs uppercase tracking-widest bg-primary text-primary-foreground hover:brightness-110 transition-all font-semibold"
            >
              {labels.accept}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookieBanner;
