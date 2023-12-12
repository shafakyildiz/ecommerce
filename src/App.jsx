import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./pages/ShopCategory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/men" element={<ShopCategory />}></Route>
          <Route path="/women" element={<ShopCategory />}></Route>
          <Route path="/kid" element={<ShopCategory />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
