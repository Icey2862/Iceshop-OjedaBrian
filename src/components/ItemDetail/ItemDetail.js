import "./itemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/CartContext";

const ItemDetail = ({ Product }) => {
  const [count, setFinalCount] = useState(0);

  const [hasAddProduct, setHasAddProduct] = useState(false);


  const { addToCart } = useContext(cartContext);

  const onAdd = (product) => {
    if (count <= product.stock && product.stock !== 0 && count !== 0) {
      setHasAddProduct(true);
      product.stock = product.stock - count;
      addToCart(product, count);
    }
  };

  return (
    <div className="divDetail">
      <h1>{Product.titulo}</h1>
      <div className="divDetailTwo">
        <img width={"300px"} alt={Product.titulo} src={Product.img} />
        <div className="divDetailThree">
          <h2 className="productDetail"> ${Product.precio}</h2>
          <p className="descDetail">{Product.desc}</p>
          <h3>Stock disponible {Product.stock}</h3>
          {hasAddProduct ? (
            <Link to={"/cart"} style={{color:"#61dafb"}}>Ir al carrito</Link>
          ) : (
            <ItemCount
              stock={Product.stock}
              valorInicial={count}
              setCount={setFinalCount}
              funcion={onAdd}
              product={Product}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
