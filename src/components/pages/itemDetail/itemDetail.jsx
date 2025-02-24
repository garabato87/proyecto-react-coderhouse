import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Counter } from "../../common/counter/Counter";
import "./itemDetail.css"; // Importar los estilos
import { db } from "../../../firebaseConfig";
import { doc, collection, getDoc } from "firebase/firestore";

const ItemDetail = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    //Metodo con base de datos firebase
    let productsCollection = collection(db, "products");
    let productRef = doc(productsCollection, id);
    const getProducts = getDoc(productRef);
    getProducts
      .then((doc) => setItem({ ...doc.data(), id: doc.id }))
      .catch((error) => console.log(error));
    //Metodo con archivo json
    /*fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          let productSelected = data.find(
            (product) => product.id === Number(id)
          );
          setItem(productSelected);
        }, 500);
      })
      .catch((err) => console.error("Error fetching data:", err));*/
  }, [id]);

  return (
    <div className="item-detail-container">
      {item ? (
        <>
          <h2 className="item-title">{item.title}</h2>
          <img className="item-image" src={item.imageUrl} alt={item.title} />
          <p className="item-price">Precio: ${item.price}</p>
          <p className="item-description">{item.description}</p>
          <Counter item={item} />
        </>
      ) : (
        <p className="loading-text">Cargando...</p>
      )}
    </div>
  );
};

export default ItemDetail;
