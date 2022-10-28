import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/CartContext";
import moment from "moment/moment";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const Cart = () => {
  const { cart, removeProduct } = useContext(cartContext); /* Contexto para traer la db */
  
  const [values, setValues] = useState({ /* State para crear los datos del comprador */
    name: "",
    phone: "",
    email: "",
    emailConfirm: "",
  });

  const [total, setTotal] = useState(0); /* State para calcular total */
  

  useEffect(() => {
    setTotal(cart.reduce((pastValue, currentValue) => pastValue + currentValue.precio * currentValue.count, 0));
  }, [cart]);

  const createOrder = () => { /* funcion encargada de crear la orden de compra */
    const db = getFirestore();
    const order = {
      buyer: {
        name: `${values.name}`,
        phone: `${values.phone}`,
        email: `${values.email}`
      },
      items: cart,
      total: total,
      date: moment().format(),
    };
    
    const query = collection(db, "orders");
    addDoc(query, order)
    .then((res) => alert("Felicidades por tu compra"))
    .catch(() => alert("Tu compra no pudo ser completada"));
  };

    const submitOrder = () =>{ /* Validacion para saber si los campos de datos estan correctamente rellenos */
      if (!values.name || !values.email || !values.phone){
        alert("Faltan completar campos de datos")
      } else {
        createOrder()
      }
    }

    const handleChange = (e) =>{ /* funcion encargada de modificar el state con los values del input */
      const { target } = e;
      const { name, value } = target;
      const newValues = {...values, [name]: value,};
      setValues(newValues);
  }

  /* HTML SITE */
  if (cart.length !== 0) {
    return (
      <>
        <div className="col-md-12">
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                direction: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <img width={"300px"} src={item.img} alt={item.titulo}></img>
              <h3>Nombre: {item.titulo}</h3>
              <p>Precio : ${item.precio}</p>
              <p>Cantidad: {item.count}</p>
              
              <button onClick={() => removeProduct(item.id)}>
                Eliminar Producto
              </button>
            </div>
          ))}
          <p>TOTAL DE LA ORDEN: {total}</p>
        </div>

        <div className="col-md-12 w-100 d-flex justify-content-center flex-column align-items-center">
          <h3>Order</h3>
          <form onSubmit={ev => {
            ev.preventDefault();
            submitOrder()
          }}>

          <div className="form-group">
            <label htmlFor="name" className="form-label">Nombre </label>
            <input
              id="name"
              name="name"
              className="form-control"
              type="name"
              value={values.name}
              onChange={handleChange}
              ></input>
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">Telefono </label>
            <input
              id="phone"
              name="phone"
              className="form-control"
              type="number"
              value={values.phone}
              onChange={handleChange}
              ></input>
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">E-mail </label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-control"
              value={values.email}
              onChange={handleChange}
              ></input>
          </div>
          <button type="submit">Crear orden</button>
        </form>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h2>No tienes productos en tu carrito</h2>
        <Link to="/" style={{ color: "#61dafb" }}>
          toca para ir a la lista de productos
        </Link>
      </>
    );
  }
};

export default Cart;
