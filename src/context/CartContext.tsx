import React, { createContext, useState, ReactNode } from 'react';
import { Book } from '../types/book';

interface CartItem extends Book {
  quantity: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (book: Book, quantity?: number) => void;
  removeFromCart: (bookId: number) => void;
  updateQuantity: (bookId: number, quantity: number) => void;
  totalPrice: number;
  submitCart: () => void;
}

export const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  totalPrice: 0,
  submitCart: () => {},
});

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (book: Book, quantity: number = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === book.id);
      if (!existingItem) {
       
        if (quantity > book.stock) {
          alert(`Cannot add more than ${book.stock} items of ${book.title}.`);
          return prevItems;
        }
        return [...prevItems, { ...book, quantity }];
      } else {
        
        const newQuantity = existingItem.quantity + quantity;
        if (newQuantity > book.stock) {
          alert(`Cannot add more than ${book.stock} items of ${book.title}.`);
          return prevItems;
        }
        return prevItems.map((item) =>
          item.id === book.id ? { ...item, quantity: newQuantity } : item
        );
      }
    });
  };

  const removeFromCart = (bookId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== bookId));
  };

  const updateQuantity = (bookId: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === bookId
          ? { ...item, quantity: Math.min(quantity, item.stock) }
          : item
      )
    );
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const submitCart = () => {

    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalPrice,
        submitCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
