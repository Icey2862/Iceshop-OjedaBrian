import { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({stock, valorInicial,}) => {
    const [initialState, setFinalState] = useState(valorInicial) //Inicializamos el UseState

    const increase = () => { //Funcion encargada de aumentar el marcador
        initialState < stock 
        ? (setFinalState(initialState +1))
        : (alert("No queda mas stock del producto"))
    }

    const decrease = () => { //Funcion encargada de reducir el marcador
        initialState > 0 
        ? (setFinalState(initialState -1))
        : (alert("No puedes descender mas alla del 0"))
    }

    const onAdd = () =>{
        initialState > 0
        ? alert("Usted agrego " + initialState + " elementos del producto al carrito")
        : alert("No se pueden agregar 0 productos al carrito")
    }
    return (
        <div>
            <div className="counter">
                <button className="button" onClick={increase}>+</button> {/* Boton para aumentar marcador */}
                <h3>{initialState}</h3> {/* Numero en el que se encuentra actualmente */}
                <button className="button" onClick={decrease}>-</button> {/* Boton para reducir el marcador */}
            </div>
            <button className="btnCart" onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount