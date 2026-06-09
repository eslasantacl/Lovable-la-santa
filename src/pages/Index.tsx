import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import HowToOrderSection from "@/components/HowToOrderSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

const Index = () => {
  const { t, lang } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <html lang={lang} />
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
        <meta property="og:title" content={t("meta.title")} />
        <meta property="og:description" content={t("meta.description")} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={lang === "es" ? "es_CL" : "en_US"} />
        <link rel="canonical" href="/" />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <MenuSection />
        <AboutSection />
        <HowToOrderSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
