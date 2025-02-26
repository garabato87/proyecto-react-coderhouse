import { useState, useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
const Checkout = () => {
  const [ticket, setTicket] = useState(null);
  const { cart, getTotalAmount, removeCart } = useContext(CartContext);
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });
  const comprar = (evento) => {
    evento.preventDefault();
    console.log(userInfo);
    //Creamos una orden de compra en firestore
    let total = getTotalAmount();
    let order = {
      buyer: userInfo,
      items: cart,
      total: total,
    };
    let ordersCollection = collection(db, "orders");
    const newOrder = addDoc(ordersCollection, order);
    newOrder.then((res) => {
      setTicket(res.id);
      removeCart();
    });
    //Modificar el stock del producto
    let productsCollection = collection(db, "products");

    order.items.forEach((item) => {
      let refDoc = doc(productsCollection, item.id);
      updateDoc(refDoc, { stock: item.stock - item.quantity });
    });
  };
  const capturarDatos = (evento) => {
    // console.log(evento.target.value);
    // console.log(evento.target.name);
    const { value, name } = evento.target;

    setUserInfo({ ...userInfo, [name]: value });
  };
  return (
    <div>
      <form onSubmit={comprar}>
        <input
          type="text"
          placeholder="nombre"
          name="nombre"
          onChange={capturarDatos}
        />
        <input
          type="text"
          placeholder="telefono"
          name="telefono"
          onChange={capturarDatos}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={capturarDatos}
        />
        <button>Comprar</button>
      </form>
    </div>
  );
};

export default Checkout;
