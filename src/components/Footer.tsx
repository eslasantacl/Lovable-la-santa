import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { Instagram, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t, lang } = useLanguage();
  const { setIsOpen, totalItems } = useCart();

  const legalLinks = [
    { to: "/aviso-legal", label: lang === "es" ? "Aviso Legal" : "Legal Notice" },
    { to: "/privacidad", label: lang === "es" ? "Política de Privacidad" : "Privacy Policy" },
    { to: "/cookies", label: lang === "es" ? "Política de Cookies" : "Cookie Policy" },
  ];

  return (
    <>
      <footer className="border-t border-primary/10 py-12 px-4">
        <div className="container mx-auto text-center">
          <p className="italic text-primary mb-6 font-serif text-3xl text-center">{t("footer.text")}</p>
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://www.instagram.com/lasantatortilla.cl?igsh=MWExcWJ0cHA5aGtjdQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={32} />
            </a>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4 text-xs uppercase tracking-widest">
            {legalLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-[#C8B273]/80 hover:text-[#C8B273] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <p className="text-sm text-muted-foreground">© 2026 La Santa. Bendita tortilla.</p>
        </div>
      </footer>

      {/* Floating Cart */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-gold-light transition-colors"
        aria-label="Open cart"
      >
        <ShoppingBag size={24} />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>
    </>
  );
};

export default Footer;
