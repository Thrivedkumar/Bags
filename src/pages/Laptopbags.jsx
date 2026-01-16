import { useState } from "react";
import ProductCard from "../components/ProductCard";
import SidebarFilters from "../components/SidebarFilters";
import "./Laptopbags.css";

export default function Laptopbags() {
  // ✅ PRICE FILTER STATE
  const [minPrice, setMinPrice] = useState(500);
  const [maxPrice, setMaxPrice] = useState(30000);

  const laptopbags = [
    {
  id: 34,
  category: "laptop",
  name: "THE MONEY MAKER",
  price: 10000,
  originalPrice: 12500,
  image:
    "https://www.tigermarron.com/cdn/shop/products/TMMBG-026-4.jpg?v=1750006713&width=1000",
  hoverImage:
    "https://www.tigermarron.com/cdn/shop/products/DSC09118webedit.jpg?v=1750006713&width=800",
},
{
  id: 35,
  category: "laptop",
  name: "DOWN TO BUSINESS",
  price: 12500,
  image:
    "https://www.tigermarron.com/cdn/shop/products/TMMBG-062-1.jpg?v=1750006690&width=600",
  hoverImage:
    "https://www.tigermarron.com/cdn/shop/products/DSC09024webedit.jpg?v=1750006690&width=800",
},
{
  id: 36,
  category: "laptop",
  name: "THE MULTITASKER",
  price: 16500,
  image:
    "https://www.tigermarron.com/cdn/shop/products/TMMBG-054-1.jpg?v=1750006699&width=600",
  hoverImage:
    "https://www.tigermarron.com/cdn/shop/products/DSC08365webedit.jpg?v=1750006699&width=800",
},
{
  id: 37,
  category: "laptop",
  name: "RANGER LAPTOP BAG",
  price: 8450,
  originalPrice: 10400,
  image:
    "https://www.tigermarron.com/cdn/shop/files/1a_536082aa-0b1a-4fba-aae5-79ec5db56130.png?v=1754133348&width=1000",
  hoverImage:
    "https://www.tigermarron.com/cdn/shop/files/1_c0621f4b-0b6f-45be-9195-c6eef0499696.jpg?v=1754133348&width=1000",
},

  ];

  // ✅ APPLY PRICE FILTER
  const filteredLaptopBags = laptopbags.filter(
    (item) => item.price >= minPrice && item.price <= maxPrice
  );

  return (
    <>
      {/* 🔹 TOP BANNER */}
      <div className="laptop-banner">
        <div className="breadcrumb">
          HOME / SHOP / Best Sellers - Laptop Bags
        </div>
        <h1 className="banner-title">Best Sellers - Laptop Bags</h1>
      </div>

      <div className="Laptopbags-layout">
        {/* LEFT SIDEBAR */}
           <SidebarFilters
          minPrice={minPrice}
          maxPrice={maxPrice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
        />

        {/* RIGHT CONTENT */}
        <div className="Laptopbags-page">
          <div className="product-grid">
            {filteredLaptopBags.length === 0 ? (
              <p>No products found</p>
            ) : (
              filteredLaptopBags.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
