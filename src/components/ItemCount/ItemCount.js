import { useState } from "react"
import "./ItemCount.css"

const ItemCount = () => {
    const [initialState, setFinalState] = useState(0) //Inicializamos el UseState
    const stock = 5 // Stock Productos

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

    return (
        <div>
            <div className="counter">
                <button className="button" onClick={increase}>+</button> {/* Boton para aumentar marcador */}
                <h3>{initialState}</h3> {/* Numero en el que se encuentra actualmente */}
                <button className="button" onClick={decrease}>-</button> {/* Boton para reducir el marcador */}
            </div>
        </div>
    )
}

export default ItemCount