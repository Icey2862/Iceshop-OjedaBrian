import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/CartContext";
import  moment from "moment/moment";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const Cart = () => {
  const { cart, removeProduct} = useContext(cartContext);
  console.log(cart)
  const createOrder = () =>{
    const db = getFirestore()
    const order = {
      buyer: {
        name : "brian",
        phone: "1120548790",
        email: "brian@test.com"
      },
      items : cart,
      total : cart.reduce((pastValue, currentValue)=> pastValue + (currentValue.precio * currentValue.count), 0),
      date: moment().format()
    }
    const query = collection(db, "orders")
    addDoc(query, order)
      .then((res) => alert("Felicidades por tu compra"))
      .catch(() => alert("Tu compra no pudo ser completada")) 
  }
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
        cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              direction: "row",
              alignItems: "center",
            }}
          >
            <img
              width={"300px"}
              src={item.img}
              alt={item.titulo}
            ></img>
            <h3>Nombre: {item.titulo}</h3>
            <p>Precio : ${item.precio}</p>
            <p>Cantidad: {item.count}</p>
            <p>total: {item.precio * item.count}</p>
            <button onClick={() => removeProduct(item.id)}>
              Eliminar Producto
            </button>
          </div>
        ))
        )}
      <div>
        <p></p>
        <button className="btn btn-success" onClick={createOrder}>Agregar orden</button>
      </div>
    </div>
  );
};

export default Cart;
