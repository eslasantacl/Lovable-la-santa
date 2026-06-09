import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import { toast } from "sonner";
import biteAsset from "@/assets/tortilla-bite.png.asset.json";

const biteImg = biteAsset.url;

const MenuSection = () => {
  const { t, lang } = useLanguage();
  const { addItem } = useCart();

  const items = [
    { id: "clasica", name: "menu.classic", nameEn: "The Classic", nameEs: "La Clásica", desc: "menu.classic.desc", price: "$12.990 CLP" },
    { id: "cebolla", name: "menu.onion", nameEn: "With Onion", nameEs: "Sin Cebolla", desc: "menu.onion.desc", price: "$12.990 CLP" },
  ];

  const handleAdd = (item: typeof items[0]) => {
    addItem(item.id, item.nameEn, item.nameEs);
    toast.success(lang === "es" ? `${item.nameEs} añadida al carrito` : `${item.nameEn} added to cart`);
  };

  return (
    <section id="menu" className="py-24 md:px-4">
      <div className="md:container md:mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-primary text-sm uppercase tracking-[0.3em] text-center mb-4 px-4"
        >
          01 — {t("menu.label")}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans text-4xl md:text-6xl font-bold text-center text-foreground mb-16 px-4"
        >
          {t("menu.heading")}
        </motion.h2>

        {/* Unified grid: squares on mobile and desktop, image at the end */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto items-center px-4 md:px-0">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="border border-primary/30 bg-card flex flex-col overflow-hidden aspect-square"
            >
              <div className="p-6 md:p-8 flex flex-col flex-1 justify-center text-center md:text-left items-center md:items-stretch">
                <h3 className="font-sans text-2xl font-bold text-foreground mb-2">{t(item.name)}</h3>
                <p className="text-primary text-xl font-semibold mb-4">{item.price}</p>
                <p className="text-muted-foreground text-sm mb-8 flex-1 whitespace-pre-line">{t(item.desc)}</p>
                <button
                  onClick={() => handleAdd(item)}
                  className="border border-primary text-primary px-6 py-3 text-sm uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors mx-auto md:self-center"
                >
                  {t("menu.add")}
                </button>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative overflow-hidden aspect-square md:scale-110"
          >
            <img
              src={biteImg}
              alt={t("alt.bite")}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              width={1200}
              height={1200}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
