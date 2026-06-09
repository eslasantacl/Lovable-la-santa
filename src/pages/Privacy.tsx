import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Privacy = () => {
  const { lang } = useLanguage();

  const content = {
    es: {
      title: "Política de Privacidad",
      sections: [
        {
          h: "Información que Recopilamos",
          p: "Recopilamos únicamente los datos necesarios para procesar tu pedido: nombre, dirección de entrega y número de contacto. Esta información se comunica directamente a través de WhatsApp y se utiliza exclusivamente para la gestión del envío.",
        },
        {
          h: "Hosting y Cookies Técnicas",
          p: "Nuestro sitio está alojado en Netlify (Netlify, Inc.), que emplea cookies estrictamente técnicas y esenciales para garantizar la seguridad, la entrega de recursos estáticos y el rendimiento del sitio. Estas cookies no rastrean tu actividad personal.",
        },
        {
          h: "Optimización y SEO",
          p: "Utilizamos Google Search Console, proporcionado por Google Ireland Limited, para monitorizar, analizar y mantener la presencia de nuestro sitio en los resultados de búsqueda de Google. Esta herramienta nos ofrece datos agregados y anónimos sobre el rendimiento del sitio.",
        },
        {
          h: "Pedidos y WhatsApp",
          p: "No almacenamos datos de pago en nuestro servidor. Los pedidos se finalizan directamente a través del enlace externo a la API de WhatsApp. La conversación queda registrada en tu propio dispositivo y en los servidores de WhatsApp bajo su propia política de privacidad.",
        },
        {
          h: "Tus Derechos",
          p: "Puedes solicitar el acceso, rectificación o eliminación de tus datos personales en cualquier momento escribiéndonos por WhatsApp. Atenderemos tu solicitud en el menor tiempo posible.",
        },
      ],
    },
    en: {
      title: "Privacy Policy",
      sections: [
        {
          h: "Information We Collect",
          p: "We collect only the data needed to process your order: name, delivery address and contact number. This information is communicated directly via WhatsApp and used exclusively for delivery management.",
        },
        {
          h: "Hosting & Technical Cookies",
          p: "Our site is hosted on Netlify (Netlify, Inc.), which uses strictly technical and essential cookies to ensure security, static asset delivery and site performance. These cookies do not track your personal activity.",
        },
        {
          h: "Optimization & SEO",
          p: "We use Google Search Console, provided by Google Ireland Limited, to monitor, analyze and maintain our site's presence in Google search results. This tool provides aggregated, anonymous data about site performance.",
        },
        {
          h: "Orders & WhatsApp",
          p: "We do not store payment data on our server. Orders are completed directly via the external WhatsApp API link. The conversation is recorded on your own device and on WhatsApp's servers under their own privacy policy.",
        },
        {
          h: "Your Rights",
          p: "You may request access, correction or deletion of your personal data at any time by messaging us on WhatsApp. We will address your request as quickly as possible.",
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

export default Privacy;
