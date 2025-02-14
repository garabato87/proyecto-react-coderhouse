import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ItemDetail = () => {
  const [item, setItem] = useState({});
  const { id } = useParams(); // ⬅️ Extrae directamente el id como una variable
  console.log(id);

  // Simula un ID estático (puede venir de useParams)

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          console.log(data);
          let productSelected = data.find(
            (product) => product.id === Number(id)
          );
          setItem(productSelected); // Manejo de errores
        }, 1000);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []); // ✅ Eliminamos `id` de dependencias

  return (
    <div>
      {item ? (
        <>
          <h2>{item.title}</h2>
          <img src={item.imageUrl} alt={item.title} />
          <p>{item.price}</p>
          <p>{item.description}</p>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemDetail;
