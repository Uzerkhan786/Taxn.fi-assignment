
import Home from "./component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./component/Navbar";
import Login from "./component/Login";
import Cart from "./component/Cart";
import ProductCardDetails from "./component/ProductCardDetails";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Home />} />
          <Route path="/products/:id" element={<ProductCardDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
