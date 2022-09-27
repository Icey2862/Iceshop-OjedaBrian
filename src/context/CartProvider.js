import { useState } from "react";
import { cartContext } from "./CartContext.js";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (object, count) => {
    if (isInCart(object.id)) {
      alert("ya esta en el carrito");
    } else {
      setCart([...cart, { object, count }]);
      console.log("cart", [...cart, { object, count }]);
    }
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const clear = () => {
    setCart([]);
  };

  const removeItem = (productID) => {
    let i = cart.findIndex((item) => item.id === productID);
    cart.splice(i, 1);
    console.log(cart);
  };

  const totalItems = () => {
    return cart.reduce((acc, cartItem) => acc + cartItem.count, 0);
  };

  return (
    <cartContext.Provider
      value={{ cart, addToCart, removeItem, totalItems, clear}}
    >
      {children}
    </cartContext.Provider>
  );
};
