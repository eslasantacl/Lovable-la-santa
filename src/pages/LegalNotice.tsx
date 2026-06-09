import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const LegalNotice = () => {
  const { lang } = useLanguage();

  const content = {
    es: {
      title: "Aviso Legal",
      sections: [
        {
          h: "Titular del Sitio",
          p: "Este sitio web es operado por La Santa, un proyecto artesanal dedicado a la elaboración y entrega de tortilla de patata premium en Santiago de Chile. Toda la información publicada tiene carácter informativo y comercial.",
        },
        {
          h: "Hosting",
          p: "El alojamiento de este sitio es proporcionado por Netlify, Inc. con sede en San Francisco, California. Netlify utiliza exclusivamente cookies técnicas y esenciales destinadas a garantizar la seguridad, la entrega eficiente de los recursos del sitio y el correcto rendimiento del servicio.",
        },
        {
          h: "Propiedad Intelectual",
          p: "Todos los textos, fotografías, recetas, marcas e identidad visual presentes en este sitio son propiedad exclusiva de La Santa. Queda prohibida su reproducción total o parcial sin autorización expresa.",
        },
        {
          h: "Pedidos y Pagos",
          p: "Los pedidos se finalizan a través de WhatsApp mediante un enlace externo. No almacenamos datos de pago en este servidor. Las transferencias bancarias se confirman directamente con el cliente.",
        },
        {
          h: "Legislación Aplicable",
          p: "Este aviso legal se rige por la legislación vigente en la República de Chile. Cualquier controversia será resuelta en los tribunales competentes de Santiago.",
        },
      ],
    },
    en: {
      title: "Legal Notice",
      sections: [
        {
          h: "Site Owner",
          p: "This website is operated by La Santa, an artisanal project dedicated to crafting and delivering premium Spanish potato tortilla in Santiago, Chile. All published information is for informational and commercial purposes.",
        },
        {
          h: "Hosting",
          p: "This site is hosted by Netlify, Inc., headquartered in San Francisco, California. Netlify uses strictly technical and essential cookies intended to ensure security, efficient asset delivery, and proper site performance.",
        },
        {
          h: "Intellectual Property",
          p: "All texts, photographs, recipes, trademarks and visual identity on this site are the exclusive property of La Santa. Total or partial reproduction without express authorization is prohibited.",
        },
        {
          h: "Orders and Payments",
          p: "Orders are completed via WhatsApp through an external link. We do not store payment data on this server. Bank transfers are confirmed directly with the customer.",
        },
        {
          h: "Applicable Law",
          p: "This legal notice is governed by the laws of the Republic of Chile. Any dispute shall be resolved in the competent courts of Santiago.",
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

export default LegalNotice;
