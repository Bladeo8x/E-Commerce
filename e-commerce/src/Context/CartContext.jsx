import { useState, useEffect, createContext } from "react";

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  console.log(cart);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error("The product has been added");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  useEffect(() => {
    const calculateTotal = () => {
      const total = cart.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
      return total;
    };

    const updatedTotal = calculateTotal();
    setTotal(updatedTotal);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
