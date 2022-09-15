import { useEffect, useState } from "react"
import Data from "../mockData"
import ItemDetail from "../ItemDetail/ItemDetail"
import {useParams} from "react-router-dom"

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams()

    useEffect(()=> {
        const getItem = new Promise ((resolve) =>{
            setTimeout(()=>{
                resolve(Data)
            },2000)
        })
        setIsLoading(true)
        
        getItem.then((response)=>{
            setItem(response.find((products)=>products.id === id))
        }).finally(()=>setIsLoading(false))
    }, [id])

    if (isLoading) {
        return <h2>Cargando detalle del producto ...</h2>;
    }

    return (
    <>
        <ItemDetail Product={item}/>
    </>
    )
}

export default ItemDetailContainer
