import "./ItemCount.css"

const ItemCount = ({stock, valorInicial, setCount}) => {
    //Inicializamos el UseState

    const increase = () => { //Funcion encargada de aumentar el marcador
        if (valorInicial < stock){
            setCount(valorInicial + 1)
        } else {
            (alert("No queda mas stock del producto"))
        }
    }


    const decrease = () => { //Funcion encargada de reducir el marcador
        if(valorInicial === 0){
            return
        }
        setCount(valorInicial - 1)
    }

    const onAdd = () =>{
        valorInicial > 0
            ? alert("Usted agrego " + valorInicial + " elementos del producto al carrito")
            : alert("No se pueden agregar 0 productos al carrito")
    }
    return (
        <div>
            <div className="counter">
                <button className="button" onClick={increase}>+</button> {/* Boton para aumentar marcador */}
                <h3>{valorInicial}</h3> {/* Numero en el que se encuentra actualmente */}
                <button className="button" onClick={decrease}>-</button> {/* Boton para reducir el marcador */}
            </div>
            <button className="btnCart" onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount