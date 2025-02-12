import { Navbar } from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { Footer } from "./components/layouts/footer/Footer";
import { Counter } from "./components/common/counter/Counter";
import ListContainer from "./components/pages/itemListContainer/listCharacter";
import ItemDetail from "./components/pages/itemDetail/itemDetail";
function App() {
  return (
    <>
      <Navbar />
      <Counter />
      {/*<ItemListContainer />*/}
      {/*<ListContainer />*/}
      <ItemDetail />
      <Footer />
    </>
  );
}

export default App;
