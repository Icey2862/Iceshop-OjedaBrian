import "./Item.css"
import ItemCount from "../ItemCount/ItemCount"

const Item = ({titulo, precio, img}) => {
  return (
    <div className="listContainer">
        <h2 className="title">{titulo}</h2>
        <img className="img" src={img} alt={titulo}/>
        <h3 className="price">{precio}</h3>
        <ItemCount stock="5" valorInicial= {0}/>
    </div>
  )
}

export default Item