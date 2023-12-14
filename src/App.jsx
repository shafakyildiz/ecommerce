import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import "./index.css";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="main-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />}></Route>
            <Route
              path="/men"
              element={<ShopCategory category="men" />}
            ></Route>
            <Route
              path="/women"
              element={<ShopCategory category="women" />}
            ></Route>
            <Route
              path="/kid"
              element={<ShopCategory category="kid" />}
            ></Route>
            <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />}></Route>
            </Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/login" element={<LoginSignup />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
