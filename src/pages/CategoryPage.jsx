import { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import SidebarFilters from "../components/SidebarFilters";

export default function CategoryPage() {
  const { category } = useParams();

  const [minPrice, setMinPrice] = useState(500);
  const [maxPrice, setMaxPrice] = useState(20000);

  const categoryProducts = products.filter(
    (item) => item.category === category
  );

  const filteredProducts = categoryProducts.filter(
    (item) =>
      item.price >= minPrice && item.price <= maxPrice
  );

  return (
    <div className="page-layout">
      <SidebarFilters
        minPrice={minPrice}
        maxPrice={maxPrice}
        onChange={(min, max) => {
          setMinPrice(min);
          setMaxPrice(max);
        }}
      />

      <div className="product-section">
        <div className="product-grid">
          {filteredProducts.length === 0 ? (
            <p>No products found</p>
          ) : (
            filteredProducts.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
