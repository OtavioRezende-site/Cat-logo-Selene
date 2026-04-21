import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../data/products';

export interface BagItem {
  product: Product;
  quantity: number;
}

interface BagContextType {
  items: BagItem[];
  addToBag: (product: Product) => void;
  removeFromBag: (productId: string) => void;
  updateQuantity: (productId: string, delta: number) => void;
  itemsCount: number;
  totalPrice: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const BagContext = createContext<BagContextType | undefined>(undefined);

export function BagProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<BagItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToBag = (product: Product) => {
    setItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        // Only increment if quantity < stock
        if (existing.quantity >= product.stock) return prev;
        
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // If not in bag, check if stock > 0
      if (product.stock <= 0) return prev;
      return [...prev, { product, quantity: 1 }];
    });
    setIsOpen(true);
  };

  const removeFromBag = (productId: string) => {
    setItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, delta: number) => {
    setItems(prev => prev.map(item => {
      if (item.product.id === productId) {
        const newQuantity = Math.max(1, Math.min(item.product.stock, item.quantity + delta));
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const itemsCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

  return (
    <BagContext.Provider value={{ 
      items, 
      addToBag, 
      removeFromBag, 
      updateQuantity, 
      itemsCount, 
      totalPrice,
      isOpen,
      setIsOpen
    }}>
      {children}
    </BagContext.Provider>
  );
}

export function useBag() {
  const context = useContext(BagContext);
  if (context === undefined) {
    throw new Error('useBag must be used within a BagProvider');
  }
  return context;
}
