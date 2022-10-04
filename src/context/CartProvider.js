import { useState } from "react";
import { cartContext } from "./CartContext.js";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const addToCart = (item, count) => {
    if (isInCart(item.id)) {
      alert("ya esta en el carrito");
    } else {
      setCart([...cart, { ...item, count }]);
    }
  };


  const clear = () => {
    setCart([]);
  };

  const removeProduct=(productId) =>{
    let newArray=[]
        cart.forEach((product) =>{
            if (product.id === productId){
               console.log(product);
            }else{
                newArray.push(product)
            }
            setCart(newArray)
        })
    }
  const totalItems = () => {
    return cart.reduce((acc, cartItem) => acc + cartItem.count, 0);
  };

  return (
    <cartContext.Provider
      value={{ cart, addToCart, removeProduct, totalItems, clear}}
    >
      {children}
    </cartContext.Provider>
  );
};
