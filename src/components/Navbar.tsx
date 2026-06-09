import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { Menu, X, ShoppingBag } from "lucide-react";
import pecarLogo from "@/assets/la-santa-logo.png";

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const { totalItems, setIsOpen: openCart } = useCart();
  const [open, setOpen] = useState(false);

  const links = [
    { key: "nav.home", href: "#hero" },
    { key: "nav.menu", href: "#menu" },
    { key: "nav.about", href: "#about" },
    { key: "nav.howto", href: "#howto" },
    { key: "nav.faq", href: "#faq" },
    { key: "nav.contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#hero" className="flex items-center" aria-label="La Santa - Inicio">
          <img src={pecarLogo} alt={t("alt.logo")} className="h-8 md:h-10 w-auto" />
        </a>

        {/* Desktop */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.key}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
            >
              {t(l.key)}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <button
            onClick={() => openCart(true)}
            className="relative text-foreground hover:text-primary transition-colors"
          >
            <ShoppingBag size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-sans font-bold">
                {totalItems}
              </span>
            )}
          </button>
          <button
            onClick={() => openCart(true)}
            className="bg-primary text-primary-foreground px-6 py-2 text-sm font-semibold uppercase tracking-widest hover:brightness-110 transition-all"
          >
            {t("nav.order")}
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav aria-label="Mobile" className="md:hidden bg-background border-t border-primary/20 px-4 pb-6">
          {links.map((l) => (
            <a
              key={l.key}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
            >
              {t(l.key)}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-4">
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="text-sm text-muted-foreground hover:text-primary uppercase tracking-widest"
            >
              {lang === "es" ? "EN" : "ES"}
            </button>
            <button
              onClick={() => { setOpen(false); openCart(true); }}
              className="relative text-foreground hover:text-primary transition-colors"
            >
              <ShoppingBag size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-sans font-bold">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => { setOpen(false); openCart(true); }}
              className="bg-primary text-primary-foreground px-6 py-2 text-sm font-semibold uppercase tracking-widest"
            >
              {t("nav.order")}
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
