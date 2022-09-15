import Item from "../Item/Item"
import { Link} from "react-router-dom"

const ItemList = ({lista}) => {
    return (
        <div>
            {lista.map((product)=> (
                <Link 
                key={product.id}
                to={"/item/"+ product.id}
                style = {{ textDecoration: 'none', color:"white"}}>
                    <Item
                    titulo={product.titulo} 
                    precio={product.precio} 
                    img={product.img} /> 
                </Link>
                    ))}
        </div>
    )
}

export default ItemList