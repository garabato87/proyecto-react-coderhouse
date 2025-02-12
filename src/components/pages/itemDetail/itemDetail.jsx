import { useEffect, useState } from "react";

const ItemDetail = () => {
  const [item, setItem] = useState({});
  let id = "1"; // Simula un ID estático (puede venir de useParams)

  useEffect(() => {
    fetch("./products.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let productSelected = data.find((product) => product.id === Number(id));
        setItem(productSelected); // Manejo de errores
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, [id]); // ✅ Eliminamos `id` de dependencias

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
