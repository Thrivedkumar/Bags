import { useState } from "react";
import "./Home.css";
import CategoryDropdown from "../components/CategoryDropdown";
import SidebarFilters from "../components/SidebarFilters";
import OnSaleBadge from "../components/OnSaleBadge";
import HeaderBanner from "./HeaderBanner";

export default function Home() {
  // ✅ PRICE STATE (CONNECTED TO SIDEBAR)
  const [minPrice, setMinPrice] = useState(500);
  const [maxPrice, setMaxPrice] = useState(12000);

  const products = [
    {
     id: 1,
      name: "MID NIGHT MAMA",
      price: 9800,
      image:
        "https://www.tigermarron.com/cdn/shop/files/MidNightMama.png?v=1750006655&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/products/093A1789.jpg?v=1750006655&width=1000",
    },
    {
      id: 2,
      name: "CANTLE SKY",
      price: 8500,
      image:
        "https://www.tigermarron.com/cdn/shop/files/1a_757ae3d5-8950-4d93-991c-3e48040cf4dd.jpg?v=1754133394&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/files/2_1bd47ef2-6a59-4598-a6d3-89cfdf1bc493.png?v=1754133394&width=1000",
    },
    {
      id: 3,
      name: "THE MONEY MAKER",
      price: 12000,
      image:
        "https://www.tigermarron.com/cdn/shop/products/TMMBG-026-4.jpg?v=1750006713&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/products/DSC09118webedit.jpg?v=1750006713&width=800",
    },
     {
      id: 3,
      name: "THE MONEY MAKER",
      image:
        "https://www.tigermarron.com/cdn/shop/products/TMMBG-026-4.jpg?v=1750006713&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/products/DSC09118webedit.jpg?v=1750006713&width=800",
    },
     {
       id: 4,
      name: "DERBY RAVEN",
      price: 9000,
      image:
        "https://www.tigermarron.com/cdn/shop/files/1_12_changed_1.jpg?v=1754133386&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/files/1_12_changed.jpg?v=1754133386&width=600",
    },
     {
      id: 5,
      name: "WRANGLER BACKPACK",
      price: 1200,
      image:
        "https://www.tigermarron.com/cdn/shop/files/1aa.jpg?v=1754133341&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/files/1bb.png?v=1754133341&width=1000",
    },
     {
      id: 6,
      name: "GIRTH COCOA",
      price: 5400,
      originalPrice: 9000,
      image:
        "https://www.tigermarron.com/cdn/shop/files/6_a898a002-9056-42f6-bf94-db602452ad53.jpg?v=1754133335&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/files/1a_5132f74c-6c96-4d4b-88c0-04fd2fc269d9.jpg?v=1754133334&width=1000",
    },
      {
      id: 7,
      name: "HALTER DUFFLE",
      price: 1200,
      image:
        "https://www.tigermarron.com/cdn/shop/files/1_7947f371-9d60-49dc-b086-aa9b366ef5fe.jpg?v=1754133339&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/files/1a.png?v=1754133339&width=1000",
    },
    {
      id: 8,
      name: "DERBY RAVEN",
      price: 9000,
      image:
        "https://www.tigermarron.com/cdn/shop/files/1_12_changed_1.jpg?v=1754133386&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/files/1_12_changed.jpg?v=1754133386&width=600",
    },
    {
      id: 9,
      name: "TAGGING ON LUGGAGE VEST",
      price: 6000,
      image:
        "https://www.tigermarron.com/cdn/shop/files/ELITENOMAD_2_3107aad4-4e11-4533-9d54-fc5be32fa4f3.jpg?v=1750230862&width=600",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/files/ELITENOMAD_10_89d00d74-84d8-4f87-a6fb-0b08760c4e71.jpg?v=1750230862&width=1000",
    },
    {
      id: 10,
      name: "SOUVENIR",
      price: 5200,
      originalPrice: 6500,
      image:
        "https://www.tigermarron.com/cdn/shop/files/Souvenir_gold.jpg?v=1750006615&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/files/1_c00b8a8c-7802-490f-bb52-310a78d87a1c.png?v=1750006615&width=1000",
    },
    {
      id:11,
      name: "CHOCOLATE FOREST YOUTH",
      price: 7800,
      originalPrice: 11000,
      image:
        "https://www.tigermarron.com/cdn/shop/files/TMWBG-244-2.jpg?v=1750006652&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/files/ChocolateforestYouth.jpg?v=1750006652&width=1000",
    },
     {
      id:12,
      name: "CLASSY AF",
      price: 12400,
      originalPrice: 15000,
      image:
        "https://www.tigermarron.com/cdn/shop/products/Classy-AF-Black-1.jpg?v=1750006717&width=600",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/products/TMMBG-011-3.JPG?v=1750006716&width=600",
    },
     {
      id:13,
      name: "THE MULTITASKER",
      price: 1600,
      image:
        "https://www.tigermarron.com/cdn/shop/products/DSC08365webedit.jpg?v=1750006699&width=800",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/products/TMMBG-054-1.jpg?v=1750006699&width=600",
    },
    {
      id:14,
      name: "LADIES LOVE IT",
      price: 6000,
      originalPrice: 8000,
      image:
        "https://www.tigermarron.com/cdn/shop/products/TMWBG-125-1.jpg?v=1750006697&width=600",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/products/TMWBG-125-2.jpg?v=1750006697&width=600",
    },
     {
      id:15,
      name: "SOUVENIR",
      price: 6000,
      originalPrice: 8000,
      image:
        "https://www.tigermarron.com/cdn/shop/files/souvenir_silver.jpg?v=1750006612&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/files/1_a990fb74-b7cc-4134-b573-19083b46de14.png?v=1750006612&width=600",
    },
    {
      id:16,
      name: "MID NIGHT MAMA",
      price: 9800,
      originalPrice: 14000,
      image:
        "https://www.tigermarron.com/cdn/shop/files/MidNightMama.png?v=1750006655&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/products/093A1789.jpg?v=1750006655&width=1000",
    },
     {
      id:17,
      name: "THE MULTITASKER",
      price: 16500,
      image:
        "https://www.tigermarron.com/cdn/shop/products/TMMBG-054-1.jpg?v=1750006699&width=600",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/products/DSC08365webedit.jpg?v=1750006699&width=800",
    },
    {
      id: 18,
      name: "MUSTANG SADDLE FANNY",
      price: 7000,
      image:
        "https://www.tigermarron.com/cdn/shop/files/1a_cec51f40-eef6-4e90-9552-defb127a0fa2.jpg?v=1754133381&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/files/1aa.png?v=1754133381&width=1000",
    },
    {
      id:19,
      name: "BIJOUX",
      price: 5250,
      originalPrice: 7000,
      image:
        "https://www.tigermarron.com/cdn/shop/files/Bijoux_copper.jpg?v=1750006602&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/files/1_a4670351-baa1-4b0d-b390-40a8806d589e.png?v=1750006602&width=600",
    },
     {
      id: 20,
      name: "CHOCOLATE FOREST MAMA",
      price: 9800,
      originalPrice: 14500,
      image:
        "https://www.tigermarron.com/cdn/shop/files/Chocolateforestmama.jpg?v=1750006650&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/files/TMWBG-245-2.jpg?v=1750006651&width=1000",
    },
  ];
  

  // ✅ FILTER PRODUCTS BY PRICE
  const filteredProducts = products.filter(
    (p) => p.price >= minPrice && p.price <= maxPrice
  );

  return (
    <div className="home">
      <CategoryDropdown />
      <HeaderBanner />

      <div className="layout">
        {/* ✅ SIDEBAR CONNECTED */}
        <SidebarFilters
          minPrice={minPrice}
          maxPrice={maxPrice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
        />

        {/* ✅ PRODUCTS GRID */}
        <div className="grid">
          {filteredProducts.length === 0 ? (
            <p>No products found</p>
          ) : (
            filteredProducts.map((p) => (
              <div className="card" key={p.id}>
                <div className="img-box">
                  <OnSaleBadge
                    price={p.price}
                    originalPrice={p.originalPrice}
                  />

                  <img
                    src={p.image}
                    className="main-img"
                    alt={p.name}
                  />

                  <img
                    src={p.hoverImage}
                    className="hover-img"
                    alt={p.name}
                  />
                </div>

                <p className="name">{p.name}</p>

                <p className="price">
                  ₹ {p.price}
                  {p.originalPrice && (
                    <span className="old-price">
                      ₹ {p.originalPrice}
                    </span>
                  )}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
