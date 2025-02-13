import { Navbar } from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { Footer } from "./components/layouts/footer/Footer";
import { Counter } from "./components/common/counter/Counter";
import ListContainer from "./components/pages/itemListContainer/listCharacter";
import ItemDetail from "./components/pages/itemDetail/itemDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/pages/cart/Cart";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/product/:id" element={<ItemDetail />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
