import "./itemDetail.css"

const ItemDetail = ({Product}) => {

  return (
    <div className="divDetail">
        <h1>{Product.titulo}</h1>
        <div className="divDetailTwo">
            <img width={"300px"} alt="BUZO DE ITACHI NARUTO" src={Product.img}/>
            <div className="divDetailThree">
                <h2 className="productDetail">{Product.precio}</h2>
                <p className="descDetail">{Product.desc}</p>
                <button className="btnDetail">Añadir al Carrito</button>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail