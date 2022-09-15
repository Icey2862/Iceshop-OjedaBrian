import "./ItemListContainer.css"
import Data from "../mockData"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () =>{
    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts.then((response)=>{
            setProducts(response)
        })
        getProducts.catch(() =>{
            alert("El servidor no ha respondido exitosamente")
        })
    }, [])

const getProducts  = new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(Data)
        }, 2000)
    })

    return (
        <div className="greeting">
            <ItemList lista={products}/>
        </div>
    )
}

export default ItemListContainer