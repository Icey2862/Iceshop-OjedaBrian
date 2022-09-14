import { useEffect, useState } from "react"
import Data from "../mockData"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])

    useEffect(()=> {
        getItem.then((res)=>{
            setItem(res)
        })
    }, [])

    const getItem = new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            resolve(Data[2])
        },2000)
    })


  return (
    <>
        <ItemDetail Product={item}/>
    </>
  )
}

export default ItemDetailContainer