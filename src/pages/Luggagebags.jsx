import { useState } from "react";
import ProductCard from "../components/ProductCard";
import SidebarFilters from "../components/SidebarFilters";
import "./Luggagebags.css";

export default function Luggagebags() {
  // ✅ STATE
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(20000);

  const luggagebags = [
   {
  id: 43,
  category: "luggage",
  name: "TAGGING ON LUGGAGE VEST",
  price: 6000,
  image:
    "https://www.tigermarron.com/cdn/shop/files/ELITENOMAD_2_3107aad4-4e11-4533-9d54-fc5be32fa4f3.jpg?v=1750230862&width=600",
  hoverImage:
    "https://www.tigermarron.com/cdn/shop/files/ELITENOMAD_10_89d00d74-84d8-4f87-a6fb-0b08760c4e71.jpg?v=1750230862&width=1000",
},

  ];

  // ✅ FILTER LOGIC
  const filteredProducts = luggagebags.filter(
    (item) => item.price >= minPrice && item.price <= maxPrice
  );

  return (
    <>
      {/* TOP BANNER */}
      <div className="luggage-banner">
        <div className="breadcrumb">HOME / SHOP / Luggage Bags</div>
        <h1 className="banner-title">Luggage Bags</h1>
      </div>

      <div className="page-layout">
        {/* SIDEBAR */}
        <SidebarFilters
  minPrice={minPrice}
  maxPrice={maxPrice}
  setMinPrice={setMinPrice}
  setMaxPrice={setMaxPrice}
/>


        {/* PRODUCTS */}
        <div className="product-section">
          <div className="product-grid">
            {filteredProducts.length === 0 ? (
              <p>No products found</p>
            ) : (
              filteredProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
