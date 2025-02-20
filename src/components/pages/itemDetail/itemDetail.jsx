import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Counter } from "../../common/counter/Counter";
import "./itemDetail.css"; // Importar los estilos

const ItemDetail = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          let productSelected = data.find(
            (product) => product.id === Number(id)
          );
          setItem(productSelected);
        }, 500);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

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
