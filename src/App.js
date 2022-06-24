import { Route, Routes } from "react-router-dom";
import FloatingCart from "./Components/FloatingCart/FloatingCart";

// import composants
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import ProductShowCase from "./Pages/ProductShowcase/ProductShowCase";
import Contact from "./Pages/Contact/Contact";
import ShoppingCart from "./Pages/ShopppingCart/ShoppingCart";


function App() {
  return (
    <div>
      <Navbar />
      <FloatingCart />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/produits" element={<Products />}/>
        <Route path="/produits/:id" element={<ProductShowCase />}/>
        <Route path="/panier" element={<ShoppingCart />}/>
      </Routes>
    </div>
  );
}

export default App;
