import "./ItemListContainer.css";
import Data from "../mockData";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getProducts.then((response) => {
      if (category) {
        setProducts(
          response.filter((productos) => productos.category === category)
        );
      } else {
        setProducts(response);
      }
    });
    getProducts.catch(() => {
      alert("El servidor no ha respondido exitosamente");
    });
  }, [category]);

  const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(Data);
    }, 2000);
  });

  return (
    <div className="greeting">
      <ItemList lista={products} />
    </div>
  );
};

export default ItemListContainer;
