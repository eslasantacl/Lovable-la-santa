import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Cookies = () => {
  const { lang } = useLanguage();

  const content = {
    es: {
      title: "Política de Cookies",
      sections: [
        {
          h: "¿Qué son las Cookies?",
          p: "Las cookies son pequeños archivos de texto que un sitio web instala en tu navegador para recordar información sobre tu visita. En La Santa utilizamos únicamente las estrictamente necesarias para el funcionamiento del sitio y para optimizar su presencia en buscadores.",
        },
        {
          h: "Cookies Técnicas de Netlify",
          p: "Nuestro hosting, Netlify (Netlify, Inc.), instala cookies estrictamente técnicas y esenciales que garantizan la seguridad del sitio, la correcta entrega de los recursos y el rendimiento general. Sin ellas el sitio no funcionaría correctamente.",
        },
        {
          h: "Google Search Console",
          p: "Empleamos Google Search Console (Google Ireland Limited) como herramienta de optimización y SEO. Nos permite monitorizar, analizar y mantener la presencia de La Santa en los resultados de búsqueda de Google. No instala cookies de seguimiento personal en tu navegador.",
        },
        {
          h: "Pagos y WhatsApp",
          p: "Al finalizar los pedidos a través del enlace externo de WhatsApp, no se almacena ningún dato de pago en nuestro servidor ni se instalan cookies asociadas al proceso de cobro.",
        },
        {
          h: "Gestión de tus Preferencias",
          p: "Al entrar por primera vez al sitio te mostramos un banner para que aceptes, rechaces o configures tus preferencias. Tu elección queda guardada en el almacenamiento local de tu navegador. Puedes modificarla en cualquier momento borrando los datos de navegación.",
        },
      ],
    },
    en: {
      title: "Cookie Policy",
      sections: [
        {
          h: "What Are Cookies?",
          p: "Cookies are small text files that a website installs in your browser to remember information about your visit. At La Santa we use only those strictly necessary for the site to function and to optimize its presence in search engines.",
        },
        {
          h: "Netlify Technical Cookies",
          p: "Our hosting provider, Netlify (Netlify, Inc.), installs strictly technical and essential cookies that ensure site security, proper asset delivery and overall performance. Without them, the site would not work correctly.",
        },
        {
          h: "Google Search Console",
          p: "We use Google Search Console (Google Ireland Limited) as an optimization and SEO tool. It allows us to monitor, analyze and maintain La Santa's presence in Google search results. It does not install personal tracking cookies in your browser.",
        },
        {
          h: "Payments & WhatsApp",
          p: "When orders are completed via the external WhatsApp link, no payment data is stored on our server, nor are any cookies installed related to the payment process.",
        },
        {
          h: "Managing Your Preferences",
          p: "When you first visit the site we show you a banner so you can accept, reject or configure your preferences. Your choice is saved in your browser's local storage. You may change it at any time by clearing your browsing data.",
        },
      ],
    },
  };

  const c = content[lang];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-20 max-w-3xl">
        <Link to="/" className="text-sm text-primary uppercase tracking-widest hover:underline">← {lang === "es" ? "Volver" : "Back"}</Link>
        <h1 className="font-serif text-5xl md:text-6xl text-primary mt-6 mb-12">{c.title}</h1>
        <div className="space-y-10">
          {c.sections.map((s, i) => (
            <section key={i}>
              <h2 className="font-serif text-2xl text-foreground mb-3">{s.h}</h2>
              <p className="text-muted-foreground leading-relaxed">{s.p}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;
