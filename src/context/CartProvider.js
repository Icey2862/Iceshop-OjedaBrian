import { useState } from "react" 
import  {cartContext}  from "./CartContext.js"


export const CartProvider = ({ children }) => {

    const[cart, setCart] = useState([])

    const addToCart = (object, count) => {
        if (isInCart(object.id)){
            alert("ya esta en el carrito")
        } else {
            setCart([...cart, { object, count}])
            console.log("cart", [...cart, { object, count}])
        }
    }
    
    const isInCart = (id) => {
        return cart.some( (item) => item.id === id)
    }

    const clear = () => {
        setCart([])
    }
    

    return (
        <cartContext.Provider value={{cart, addToCart}}>
            {children}
        </cartContext.Provider>
    )
}