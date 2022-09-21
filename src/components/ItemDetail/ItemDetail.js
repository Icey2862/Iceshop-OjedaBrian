import "./itemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState} from "react"
import { Link } from "react-router-dom"


const ItemDetail = ({Product}) => {

  const [count, setFinalCount] = useState(0)
  

  return (
    <div className="divDetail">
        <h1>{Product.titulo}</h1>
        <div className="divDetailTwo">
            <img width={"300px"} alt={Product.titulo} src={Product.img}/>
            <div className="divDetailThree">
                <h2 className="productDetail">{Product.precio}</h2>
                <p className="descDetail">{Product.desc}</p>
                <h3>Stock disponible {Product.stock}</h3>
                <ItemCount stock={Product.stock} valorInicial= {count} setCount={setFinalCount}/>
                <Link to={"/cart"}>Ir al carrito</Link>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail