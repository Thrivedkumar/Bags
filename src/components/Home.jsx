import { useState } from "react";
import "./Home.css";

import CategoryDropdown from "../components/CategoryDropdown";
import SidebarFilters from "../components/SidebarFilters";
import HeaderBanner from "./HeaderBanner";
import ProductCard from "../components/ProductCard";

import products from "../data/products"; // ✅ ONLY SOURCE

export default function Home() {
  const [minPrice, setMinPrice] = useState(500);
  const [maxPrice, setMaxPrice] = useState(20000);

  // ✅ PRICE FILTER
  const filteredProducts = products.filter(
    (p) => p.price >= minPrice && p.price <= maxPrice
  );

  return (
    <div className="home">
      <CategoryDropdown />
      <HeaderBanner />

      <div className="layout">
        {/* SIDEBAR */}
        <SidebarFilters
          minPrice={minPrice}
          maxPrice={maxPrice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
        />

        {/* PRODUCTS */}
        <div className="grid">
          {filteredProducts.length === 0 ? (
            <p>No products found</p>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
