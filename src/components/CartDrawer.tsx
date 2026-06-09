import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Minus, Plus, Trash2 } from "lucide-react";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, totalPrice, buildWhatsAppUrl } = useCart();
  const { lang } = useLanguage();

  const formatPrice = (n: number) => `$${n.toLocaleString("es-CL")}`;

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="bg-background border-l border-primary/30 flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-semibold text-2xl text-foreground font-sans">
            {lang === "es" ? "Tu Pecado" : "Your Sin"}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-muted-foreground font-sans text-sm">
              {lang === "es" ? "Tu carrito está vacío" : "Your cart is empty"}
            </p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto mt-6 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="border border-primary/20 p-4 flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg text-foreground font-sans">{lang === "es" ? item.nameEs : item.name}</h4>
                      <p className="text-primary font-sans text-sm">{formatPrice(item.price)} CLP</p>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-destructive transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-8 h-8 border border-primary/30 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="font-sans text-foreground w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-8 h-8 border border-primary/30 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                    <span className="ml-auto text-primary font-sans font-semibold">
                      {formatPrice(item.price * item.quantity)} CLP
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-primary/30 pt-4 mt-4 space-y-4">
              <div className="flex justify-between font-sans text-foreground">
                <span className="uppercase tracking-widest text-sm">{lang === "es" ? "Total" : "Total"}</span>
                <span className="text-primary text-xl font-bold">{formatPrice(totalPrice)} CLP</span>
              </div>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-primary text-primary-foreground py-4 text-center font-sans text-sm font-semibold uppercase tracking-widest hover:brightness-110 transition-all"
              >
                {lang === "es" ? "PEDIR AHORA" : "ORDER NOW"}
              </a>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
