import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, removeItem} = useContext(cartContext);

  return (
    <div>
      {cart.length === 0 ? (
        <>
          <h2>No tienes productos en tu carrito</h2>
          <Link to="/" style={{ color: "#61dafb" }}>
            toca para ir a la lista de productos
          </Link>
        </>
      ) : (
        cart.map((product) => (
          <div
            key={product.object.id}
            style={{
              display: "flex",
              direction: "column",
              alignItems: "center",
            }}
          >
            <img
              width={"300px"}
              src={product.object.img}
              alt={product.object.titulo}
            ></img>
            <h3>Nombre: {product.object.titulo}</h3>
            <p>Precio : ${product.object.precio}</p>
            <p>Cantidad: {product.count}</p>
            <button onClick={() => removeItem(product.object.id)}>
              Eliminar Producto
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
