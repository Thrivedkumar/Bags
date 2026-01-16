import { useState } from "react";
import ProductCard from "../components/ProductCard";
import SidebarFilters from "../components/SidebarFilters";
import "./Minibags.css";

export default function Minibags() {
  // ✅ PRICE STATE
  const [minPrice, setMinPrice] = useState(500);
  const [maxPrice, setMaxPrice] = useState(20000);

  const minibags = [
    {
    id: 28,
    name: "SOUVENIR GOLD",
    category: "mini",
    price: 5200,
    originalPrice: 6500,
    image:
      "https://www.tigermarron.com/cdn/shop/files/Souvenir_gold.jpg?v=1750006615&width=1000",
    hoverImage:
      "https://www.tigermarron.com/cdn/shop/files/1_c00b8a8c-7802-490f-bb52-310a78d87a1c.png?v=1750006615&width=1000",
  },
  {
    id: 29,
    name: "SOUVENIR SILVER",
    category: "mini",
    price: 6000,
    originalPrice: 8000,
    image:
      "https://www.tigermarron.com/cdn/shop/files/souvenir_silver.jpg?v=1750006612&width=1000",
    hoverImage:
      "https://www.tigermarron.com/cdn/shop/files/1_a990fb74-b7cc-4134-b573-19083b46de14.png?v=1750006612&width=600",
  },
  {
    id: 30,
    name: "LARIAT PEARL MINI",
    category: "mini",
    price: 4200,
    originalPrice: 7000,
    image:
      "https://www.tigermarron.com/cdn/shop/files/70.jpg?v=1754133376&width=1000",
    hoverImage:
      "https://www.tigermarron.com/cdn/shop/files/3_6bb14f65-b844-44ff-8eb8-31da0348d7f5.png?v=1754133375&width=1000",
  },
  {
    id: 31,
    name: "LARIAT RAVEN MINI",
    category: "mini",
    price: 4200,
    originalPrice: 7000,
    image:
      "https://www.tigermarron.com/cdn/shop/files/1_cfc3727d-a095-4ed3-9a4a-31da4188f9dd.jpg?v=1754133373&width=1000",
    hoverImage:
      "https://www.tigermarron.com/cdn/shop/files/1a_9d2f29e4-da94-4c69-8986-fab1f3297b64.jpg?v=1754133373&width=1000",
  },
  ];

  // ✅ FILTER LOGIC
  const filteredMinibags = minibags.filter(
    (item) => item.price >= minPrice && item.price <= maxPrice
  );

  return (
    <>
      {/* 🔹 TOP BANNER */}
      <div className="mini-banner">
        <div className="breadcrumb">HOME / SHOP / Mini Bags</div>
        <h1 className="banner-title">Mini Bags</h1>
      </div>

      <div className="Minibags-layout">
        {/* LEFT SIDEBAR */}
        <SidebarFilters
  minPrice={minPrice}
  maxPrice={maxPrice}
  setMinPrice={setMinPrice}
  setMaxPrice={setMaxPrice}
/>


        {/* RIGHT CONTENT */}
        <div className="Minibags-page">
          <div className="product-grid">
            {filteredMinibags.length === 0 ? (
              <p>No products found</p>
            ) : (
              filteredMinibags.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
