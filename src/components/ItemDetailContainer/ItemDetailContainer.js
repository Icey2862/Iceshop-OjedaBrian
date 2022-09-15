import { useEffect, useState } from "react"
import Data from "../mockData"
import ItemDetail from "../ItemDetail/ItemDetail"
/* import {useParams} from "react-router-dom" */

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const productID= 1
/*     const {id} = useParams() */

    useEffect(()=> {
        const getItem = new Promise ((resolve) =>{
            setTimeout(()=>{
                resolve(Data)
            },2000)
        })
        setIsLoading(true)
        
        getItem.then((res)=>{
            setItem(res.find((products)=>products.id === productID))
        }).finally(()=>setIsLoading(false))
    }, [productID])

    if (isLoading) {
        return <h1>Cargando detalle del producto ...</h1>;
    }

  return (
    <>
        <ItemDetail Product={item}/>
    </>
  )
}

export default ItemDetailContainer