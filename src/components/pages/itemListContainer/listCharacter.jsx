import { useState, useEffect } from "react";
import { ProductCard } from "../../common/productCard/productCard";

const ListContainer = () => {
  const [characters, setCharacters] = useState([]); // Inicializar como array vacío

  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCharacters(data.items); // Asignar los personajes
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <>
      <h1>Lista de personajes</h1>
      <div className="list-container">
        {characters.map((char) => (
          <ProductCard
            key={char.id}
            {...char} // Esto pasará todas las demás propiedades si las necesitas
          />
        ))}
      </div>
    </>
  );
};

export default ListContainer;
