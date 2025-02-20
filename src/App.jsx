import { Navbar } from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { Footer } from "./components/layouts/footer/Footer";
// import { Counter } from "./components/common/counter/Counter";
// import ListContainer from "./components/pages/itemListContainer/listCharacter";
import ItemDetail from "./components/pages/itemDetail/itemDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/pages/cart/cart";
import Checkout from "./components/pages/checkout/Checkout";
import { CartContextProvider } from "./context/CartContext";
function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/product/:id" element={<ItemDetail />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
