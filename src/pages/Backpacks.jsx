import { useState } from "react";
import ProductCard from "../components/ProductCard";
import SidebarFilters from "../components/SidebarFilters";
import "./Backpacks.css";

export default function Backpacks() {
  // ✅ PRICE FILTER STATE
  const [minPrice, setMinPrice] = useState(500);
  const [maxPrice, setMaxPrice] = useState(20000);

  const backpacks = [
    {
  id: 38,
  category: "backpack",
  name: "CAVALIER BACKPACK",
  price: 9600,
  originalPrice: 12000,
  image:
    "https://www.tigermarron.com/cdn/shop/files/1_d58370a7-bb26-448e-bf86-62349ef14ad1.jpg?v=1754133344&width=1000",
  hoverImage:
    "https://www.tigermarron.com/cdn/shop/files/1a_94c7f8c2-054f-45b5-b41e-a09a92abe8d1.png?v=1754133344&width=1000",
},
{
  id: 39,
  category: "backpack",
  name: "WRANGLER BACKPACK",
  price: 1200,
  image:
    "https://www.tigermarron.com/cdn/shop/files/1aa.jpg?v=1754133341&width=1000",
  hoverImage:
    "https://www.tigermarron.com/cdn/shop/files/1bb.png?v=1754133341&width=1000",
},
{
  id: 40,
  category: "backpack",
  name: "THE MULTITASKER",
  price: 1600,
  image:
    "https://www.tigermarron.com/cdn/shop/products/DSC08365webedit.jpg?v=1750006699&width=800",
  hoverImage:
    "https://www.tigermarron.com/cdn/shop/products/TMMBG-054-1.jpg?v=1750006699&width=600",
},

  ];

  // ✅ APPLY PRICE FILTER
  const filteredBackpacks = backpacks.filter(
    (item) => item.price >= minPrice && item.price <= maxPrice
  );

  return (
    <>
      {/* 🔹 TOP BANNER */}
      <div className="backpacks-banner">
        <div className="breadcrumb">HOME / SHOP / Backpacks</div>
        <h1 className="banner-title">Backpacks</h1>
      </div>

      <div className="page-layout">
        {/* LEFT SIDEBAR */}
       {/* SIDEBAR */}
               <SidebarFilters
                 minPrice={minPrice}
                 maxPrice={maxPrice}
                 setMinPrice={setMinPrice}
                 setMaxPrice={setMaxPrice}
               />
      

        {/* RIGHT PRODUCTS */}
        <div className="product-section">
          <div className="product-grid">
            {filteredBackpacks.length === 0 ? (
              <p>No products found</p>
            ) : (
              filteredBackpacks.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
