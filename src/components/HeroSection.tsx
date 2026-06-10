import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import heroAsset from "@/assets/hero-tortilla.png";
import logoWhite from "@/assets/logo-white.png";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroAsset}
        alt={t("alt.hero")}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center scale-110 blur-2xl opacity-80 md:hidden"
              />
      <img
        src={heroAsset}
        alt={t("alt.hero")}
        className="absolute inset-0 w-full h-full object-cover md:object-cover object-center scale-95 md:scale-100"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-background/70" />

      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        <motion.h1
          className="w-80 md:w-[500px] lg:w-[600px] mb-6 m-0 p-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={logoWhite} alt={t("alt.logo")} className="w-full h-auto" />
          <span className="sr-only">La Santa — {t("hero.subtitle")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-serif italic text-primary text-2xl md:text-4xl mt-2"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-foreground text-sm md:text-base uppercase tracking-[0.3em] mt-8"
        >
          {t("hero.delivery")}
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
