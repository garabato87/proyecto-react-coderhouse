import { useState, useEffect } from "react";
import { ProductCard } from "../../common/productCard/productCard";
import { useParams } from "react-router-dom";
import "./itemListContainer.css";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { name } = useParams();
  console.log(name);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let productsCollection = collection(db, "products");
        let consulta = productsCollection;

        if (name) {
          consulta = query(
            productsCollection,
            where("category", "==", name.toLocaleUpperCase())
          );
        }

        const getProducts = await getDocs(consulta);
        const array = getProducts.docs.map((elem) => ({
          ...elem.data(),
          id: elem.id,
        }));

        setItems(array);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, [name]);

  // fetch("/products.json")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //     if (!name) {
  //       setItems(data); // Asignar los personajes
  //     } else {
  //       let productsFiltered = data.filter(
  //         (elem) => elem.category.toLowerCase() === name
  //       );
  //       setItems(productsFiltered);
  //       console.log(productsFiltered);
  //     }
  //   })
  //  .catch((err) => console.error("Error fetching data:", err));

  // Funcion para agregar los productos del .json a la base de datos de firebase
  /*const agregarProductos = () => {
    let produtcsCollection = collection(db, "products");
    items.forEach(async (item) => {
      await addDoc(produtcsCollection, item);
    });*/
  //if con return temprano
  // if (items.length === 0) {
  //   return <h1>Cargando...</h1>;
  // }

  return (
    <>
      {/*<button onClick={agregarProductos}>Agregar productos al data base</button>*/}
      <h3>Item List Container</h3>

      {items.length === 0 ? (
        <h1>Cargando...</h1>
      ) : (
        <div className="list-container">
          {items.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              {...item}
              /* image={item.imageUrl}
          title={item.title}
          price={item.price}
          description={item.description} */
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
