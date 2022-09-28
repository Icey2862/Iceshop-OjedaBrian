import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getProducts();
  }, [category]);

  const getProducts = () => {
    const db = getFirestore();
    const queryDocs = collection(db, "items");
    if (category) {
      const queryFilter = query(
        queryDocs, 
        where('category', '==', category)
      );
      getDocs(queryFilter).then((res) => {
        const data = res.docs.map((document) => {
          return { id: document.id, ...document.data() };
        });
        setProducts(data);
      });
    } else {
      getDocs(queryDocs)
        .then((res) => {
          const data = res.docs.map((document) => {
            return { id: document.id, ...document.data() };
          });
          setProducts(data);
        })
        .catch(() => alert("El servidor no ha respondido exitosamente"));
    }
  };

  return (
    <div className="greeting">
      <ItemList lista={products} />
    </div>
  );
};

export default ItemListContainer;
