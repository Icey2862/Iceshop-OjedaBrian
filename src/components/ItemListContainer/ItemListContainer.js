import "./ItemListContainer.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = ({greeting}) =>{
    return (
        <div className="greeting">
            <h2>{greeting}</h2>
            <ItemCount/>
        </div>
    )
}

export default ItemListContainer