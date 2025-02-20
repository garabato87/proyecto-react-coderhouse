/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useState } from "react";

// crear el contexto
export const CartContext = createContext();
// crear el componente proveedor
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const removeCart = () => {
    setCart([]);
  };
  const removeById = (id) => {
    let newArray = cart.filter((item) => item.id !== id);
    setCart(newArray);
    console.log(id);
  };

  const getTotalAmount = () => {
    /*let acc = 0;
    for (let i=0 ; i<cart.length ; i++){
        acc += cart[i].price * cart[i].quantity;
        }*/
    //forma de hacerlo con un for
    //forma de hacerlo con un reduce
    let total = cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    return total;
  };

  const getTotalItems = () => {
    let total = cart.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
    return total;
  };

  let data = {
    cart,
    addToCart,
    removeCart,
    removeById,
    getTotalAmount,
    getTotalItems,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
