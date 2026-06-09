import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import heroAsset from "@/assets/origen.png.asset.json";
const heroImg = heroAsset.url;

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-0">
      <div className="grid md:grid-cols-2 min-h-[600px]">
        {/* Left column */}
        <div className="bg-background px-8 md:px-16 py-24 flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary text-sm uppercase tracking-[0.3em] mb-8"
          >
            02 — {t("about.label")}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight"
          >
            {t("about.heading")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 text-justify whitespace-pre-line"
          >
            {t("about.text")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="font-serif italic text-primary text-xl md:text-2xl"
          >
            {t("about.tagline")}
          </motion.p>
        </div>

        {/* Right column - image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative min-h-[400px] md:min-h-full"
        >
          <img
            src={heroImg}
            alt={t("alt.slice")}
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
