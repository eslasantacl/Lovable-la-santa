import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/56959607299?text=Quiero%20pedir%20una%20tortilla";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 px-4 border-t border-primary/10">
      <div className="container mx-auto max-w-xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans text-4xl md:text-5xl font-bold text-center text-foreground mb-12"
        >
          {t("contact.heading")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-gold-light transition-colors"
          >
            <MessageCircle size={20} />
            {t("contact.whatsapp")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
