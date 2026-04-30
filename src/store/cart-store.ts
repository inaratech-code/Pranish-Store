"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  qty: number;
  variant?: string;
};

type CartState = {
  isOpen: boolean;
  items: CartItem[];
  open: () => void;
  close: () => void;
  toggle: () => void;
  add: (item: Omit<CartItem, "qty">, qty?: number) => void;
  remove: (id: string, variant?: string) => void;
  setQty: (id: string, qty: number, variant?: string) => void;
  clear: () => void;
};

function keyOf(id: string, variant?: string) {
  return `${id}::${variant ?? ""}`;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      isOpen: false,
      items: [],
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      toggle: () => set({ isOpen: !get().isOpen }),
      add: (item, qty = 1) =>
        set((s) => {
          const k = keyOf(item.id, item.variant);
          const next = [...s.items];
          const idx = next.findIndex((it) => keyOf(it.id, it.variant) === k);
          if (idx >= 0) next[idx] = { ...next[idx]!, qty: next[idx]!.qty + qty };
          else next.push({ ...item, qty });
          return { items: next, isOpen: true };
        }),
      remove: (id, variant) =>
        set((s) => ({ items: s.items.filter((it) => keyOf(it.id, it.variant) !== keyOf(id, variant)) })),
      setQty: (id, qty, variant) =>
        set((s) => {
          const next = s.items
            .map((it) => (keyOf(it.id, it.variant) === keyOf(id, variant) ? { ...it, qty } : it))
            .filter((it) => it.qty > 0);
          return { items: next };
        }),
      clear: () => set({ items: [] }),
    }),
    {
      name: "pranish-cart-v1",
      partialize: (s) => ({ items: s.items }),
    },
  ),
);

export function cartTotals(items: CartItem[]) {
  const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);
  const qty = items.reduce((sum, it) => sum + it.qty, 0);
  return { subtotal, qty };
}

