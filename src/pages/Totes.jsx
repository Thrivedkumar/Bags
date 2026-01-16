import { useState } from "react";
import ProductCard from "../components/ProductCard";
import SidebarFilters from "../components/SidebarFilters";
import products from "../data/products";
import "./Totes.css";

export default function Totes() {
  const [minPrice, setMinPrice] = useState(500);
  const [maxPrice, setMaxPrice] = useState(20000);

  // ✅ FILTER FROM SHARED DATA
  const filteredTotes = products.filter(
    (item) =>
      item.category === "totes" &&
      item.price >= minPrice &&
      item.price <= maxPrice
  );

  return (
    <>
      <div className="totes-banner">
        <div className="breadcrumb">HOME / SHOP / TOTES</div>
        <h1 className="banner-title">TOTES</h1>
      </div>

      <div className="Totes-layout">
       <SidebarFilters
        minPrice={minPrice}
        maxPrice={maxPrice}
        setMinPrice={setMinPrice}
         setMaxPrice={setMaxPrice}
/>


        <div className="Totes-page">
          <div className="product-grid">
            {filteredTotes.length === 0 ? (
              <p>No products found</p>
            ) : (
              filteredTotes.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
