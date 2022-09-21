import "./Item.css"

const Item = ({titulo, precio, img}) => {
  return (
    <div className="container-fluid listContainer">
      <div className="row justify-content-center col-md-3">
          <h2 className="title">{titulo}</h2>
          <img className="img" src={img} alt={titulo}/>
          <h3 className="price">{precio}</h3>
      </div>
    </div>
  )
}

export default Item