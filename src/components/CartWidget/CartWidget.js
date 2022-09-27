import carrito from '../../carrito.png';
import { useContext } from 'react';
import { cartContext } from '../../context/CartContext';
import "./CartWidget.css"


const CartWidget = () => {
    const {totalItems} = useContext(cartContext)

    return (
        <>
        <img src={carrito} className="carroLogo" alt='Carrito-logo'/>  
        <p className='itemsInCart'>{totalItems() > 0 ? totalItems() : ""}</p>
        </>
    )
}

export default CartWidget