import "./itemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
const ItemDetail = ({Product}) => {

  return (
    <div className="divDetail">
        <h1>{Product.titulo}</h1>
        <div className="divDetailTwo">
            <img width={"300px"} alt={Product.titulo} src={Product.img}/>
            <div className="divDetailThree">
                <h2 className="productDetail">{Product.precio}</h2>
                <p className="descDetail">{Product.desc}</p>
                <ItemCount stock="5" valorInicial= {0}/>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail