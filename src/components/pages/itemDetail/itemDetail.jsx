import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ItemDetail = () => {
  const [item, setItem] = useState({});
  const x = useParams();
  console.log(x); // ✅ {id: "1"}

  // Simula un ID estático (puede venir de useParams)

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let productSelected = data.find(
          (product) => product.id === Number(x.id)
        );
        setItem(productSelected); // Manejo de errores
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, [x.id]); // ✅ Eliminamos `id` de dependencias

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
