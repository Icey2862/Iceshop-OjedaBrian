import "./Item.css"

const Item = ({titulo, precio, img}) => {
  return (
    <div className="listContainer">
        <h2 className="title">{titulo}</h2>
        <img className="img" src={img} alt={titulo}/>
        <h3 className="price">{precio}</h3>
    </div>
  )
}

export default Item