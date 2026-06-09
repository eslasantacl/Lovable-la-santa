import { createContext, useContext, useState, ReactNode, useCallback } from "react";

export interface CartItem {
  id: string;
  name: string;
  nameEs: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (id: string, name: string, nameEs: string) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  totalItems: number;
  totalPrice: number;
  clearCart: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  buildWhatsAppUrl: () => string;
}

const CartContext = createContext<CartContextType | null>(null);

const ITEM_PRICE = 12990;
const PHONE = "56959607299";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((id: string, name: string, nameEs: string) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === id);
      if (existing) {
        return prev.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, { id, name, nameEs, price: ITEM_PRICE, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity + delta } : i))
        .filter((i) => i.quantity > 0)
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const buildWhatsAppUrl = useCallback(() => {
    const itemsList = items
      .map((i) => `• ${i.nameEs} x${i.quantity} — $${(i.price * i.quantity).toLocaleString("es-CL")} CLP`)
      .join("\n");
    const total = `$${totalPrice.toLocaleString("es-CL")} CLP`;
    const msg = `Hola La Santa, quiero confesar mi antojo.\n\nMi pedido es:\n${itemsList}\n\nTotal: ${total}\n\n¿Me dan la bendición?`;
    return `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
  }, [items, totalPrice]);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, totalItems, totalPrice, clearCart, isOpen, setIsOpen, buildWhatsAppUrl }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be inside CartProvider");
  return ctx;
};
