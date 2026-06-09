import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Hand, Truck, UtensilsCrossed } from "lucide-react";

const HowToOrderSection = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: Hand, title: "howto.step1.title", desc: "howto.step1.desc" },
    { icon: Truck, title: "howto.step2.title", desc: "howto.step2.desc" },
    { icon: UtensilsCrossed, title: "howto.step3.title", desc: "howto.step3.desc" },
  ];

  return (
    <section id="howto" className="py-24 px-4 md:px-16">
      <div className="container mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-primary text-sm uppercase tracking-[0.3em] mb-4"
        >
          03 — {t("howto.label")}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-24 leading-[0.95]"
        >
          {t("howto.heading")}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-16 max-w-5xl">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-center"
            >
              <div className="mb-6 text-left mx-[130px]">
                <step.icon className="w-10 h-10 text-primary text-center" strokeWidth={1.5} />
              </div>
              <h3 className="font-sans text-xl font-bold text-foreground mb-2">{t(step.title)}</h3>
              <p className="text-muted-foreground text-sm">{t(step.desc)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToOrderSection;
