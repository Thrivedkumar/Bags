import { Routes, Route, } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Handbags from "./pages/Handbags";
import Totes from "./pages/Totes";
import Backpacks from "./pages/Backpacks";
import Crossbody from "./pages/Crossbody";
import Minibags from "./pages/Minibags";
import Laptopbags from "./pages/Laptopbags";
import Dufflebags from "./pages/Dufflebags";
import Luggagebags from "./pages/Luggagebags";
import ProductDetails from"./pages/ProductDetails";
import CategoryPage from "./pages/CategoryPage";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <>
     {/* <BrowserRouter> */}
      {/* ALWAYS VISIBLE */}
      <Header />

      {/* PAGE CONTENT */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/handbags" element={<Handbags />} />
        <Route path="/totes" element={<Totes />} />
        <Route path="/crossbody" element={<Crossbody />} />
        <Route path="/mini-bags" element={<Minibags />} />
        <Route path="/laptop-bags" element={<Laptopbags />} />
        <Route path="/backpacks" element={<Backpacks />} />
        <Route path="/duffle-bags" element={<Dufflebags />} />
        <Route path="/luggage-bags" element={<Luggagebags />} />
        <Route path="/shop/:category"element={<CategoryPage/>}/>
        <Route path="/product/:id"  element={<ProductDetails/>}/>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}
