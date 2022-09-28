import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams, Link } from "react-router-dom";
import {getFirestore, doc, getDoc} from "firebase/firestore"

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const db = getFirestore()


  useEffect(() => {
    const getItem = () => {
      setTimeout(() => {
        const queryDoc = doc(db, "items", id)
        getDoc(queryDoc).then((res) => {
          setItem(res.data())
          setIsLoading(false)
        });
      }, 2000);
    };
    getItem()
  }, [id]);
  
  if (isLoading) {
    return <h2>Cargando detalle del producto ...</h2>;
  }
  
  return (
    <>
      <Link to="/" style={{ color: "#61dafb" }}>Volver a la lista de productos</Link>
      <ItemDetail Product={item} />
    </>
  );
};

export default ItemDetailContainer;
