 import { useState } from "react";
import ProductCard from "../components/ProductCard";
import SidebarFilters from "../components/SidebarFilters";
import "./Crossbody.css";

export default function Crossbody() {
  // ✅ PRICE STATE (REQUIRED)
  const [minPrice, setMinPrice] = useState(500);
  const [maxPrice, setMaxPrice] = useState(20000);

  const crossbodyItems = [
      {
  id: 18,
  category:"crossbody",
  name: "CANTLE SKY",
  price: 4200,
  originalPrice: 7000,
  image:
    "https://www.tigermarron.com/cdn/shop/files/1a_757ae3d5-8950-4d93-991c-3e48040cf4dd.jpg?v=1754133394&width=1000",
  hoverImage:
    "https://www.tigermarron.com/cdn/shop/files/2_1bd47ef2-6a59-4598-a6d3-89cfdf1bc493.png?v=1754133394&width=1000",
},
{
  id: 19,
  category:"crossbody",
  name: "CANTLE SAGE",
  price: 4200,
  originalPrice: 7000,
  image:
    "https://www.tigermarron.com/cdn/shop/files/1_787d701d-faf2-40b9-b363-abc6b2b95810.png?v=1754133392&width=1000",
  hoverImage:
    "https://www.tigermarron.com/cdn/shop/files/2_13.jpg?v=1754133392&width=1000",
},
{
  id: 20,
  category:"crossbody",
  name: "CANTLE RAVEN",
  price: 5600,
  originalPrice: 7000,
  image:
    "https://www.tigermarron.com/cdn/shop/files/1_f67fbed7-8ceb-4aac-b492-8533d755e2e1.jpg?v=1754133390&width=1000",
  hoverImage:
    "https://www.tigermarron.com/cdn/shop/files/2_7efd2531-e265-458a-8fd5-d47377f6c478.png?v=1754133390&width=1000",
},
{
  id: 21,
  category:"crossbody",
  name: "DERBY PEARL",
  price: 7000,
  image:
    "https://www.tigermarron.com/cdn/shop/files/1_1c225d9a-36f1-4633-92ea-73406c8da36e.jpg?v=1754133388&width=1000",
  hoverImage:
    "https://www.tigermarron.com/cdn/shop/files/1a_4.jpg?v=1754133388&width=1000",
},
{
  id: 22,
  category:"crossbody",
  name: "DERBY RAVEN",
  price: 9000,
  image:
    "https://www.tigermarron.com/cdn/shop/files/1_12_changed.jpg?v=1754133386&width=1000",
  hoverImage:
    "https://www.tigermarron.com/cdn/shop/files/1_12_changed_1.jpg?v=1754133386&width=1000",
},
{
  id: 23,
 category:"crossbody", 
  name: "DERBY AMBER",
  price: 5400,
  originalPrice: 9000,
  image:
    "https://www.tigermarron.com/cdn/shop/files/1_25.jpg?v=1754133384&width=1000",
  hoverImage:
    "https://www.tigermarron.com/cdn/shop/files/2_7.jpg?v=1754133384&width=1000",
},
{
  id: 24,
  category:"crossbody",
  name: "MUSTANG SADDLE FANNY",
  price: 7000,
  image:
    "https://www.tigermarron.com/cdn/shop/files/1a_cec51f40-eef6-4e90-9552-defb127a0fa2.jpg?v=1754133381&width=1000",
  hoverImage:
    "https://www.tigermarron.com/cdn/shop/files/1aa.png?v=1754133381&width=1000",
},
{
  id: 25,
 category:"crossbody",
  name: "GIRTH SAGE",
  price: 5400,
  originalPrice: 9000,
  image:
    "https://www.tigermarron.com/cdn/shop/files/1_6ac0c098-39b2-40c9-b3c2-ef4d6d4aff24.jpg?v=1754133337&width=1000",
  hoverImage:
    "https://www.tigermarron.com/cdn/shop/files/2_2e136d08-dffa-439f-9327-c4316556993f.jpg?v=1754133337&width=1000",
},
{
  id: 26,
  category:"crossbody",
  name: "GIRTH COCOA",
  price: 5400,
  originalPrice: 9000,
  image:
    "https://www.tigermarron.com/cdn/shop/files/6_a898a002-9056-42f6-bf94-db602452ad53.jpg?v=1754133335&width=1000",
  hoverImage:
    "https://www.tigermarron.com/cdn/shop/files/1a_5132f74c-6c96-4d4b-88c0-04fd2fc269d9.jpg?v=1754133334&width=1000",
},
{
  id: 27,
  category:"crossbody",
  name: "GIRTH AMBER",
  price: 5400,
  originalPrice: 9000,
  image:
    "https://www.tigermarron.com/cdn/shop/files/TMWBG-409_1.jpg?v=1754133332&width=1000",
  hoverImage:
    "https://www.tigermarron.com/cdn/shop/files/TMWBG-409_10.png?v=1754133332&width=1000",
}
  ];

  // ✅ FILTER LOGIC
  const filteredCrossbody = crossbodyItems.filter(
    (item) => item.price >= minPrice && item.price <= maxPrice
  );

  return (
    <>
      {/* 🔹 TOP BANNER */}
      <div className="cross-banner">
        <div className="breadcrumb">HOME / SHOP / Crossbody Bags</div>
        <h1 className="banner-title">Crossbody Bags</h1>
      </div>

      <div className="Crossbody-layout">
        {/* LEFT SIDEBAR */}
         <SidebarFilters
          minPrice={minPrice}
           maxPrice={maxPrice}
          setMinPrice={setMinPrice}
           setMaxPrice={setMaxPrice}
          />


        {/* RIGHT CONTENT */}
        <div className="Crossbody-page">
          <div className="product-grid">
            {filteredCrossbody.length === 0 ? (
              <p>No products found</p>
            ) : (
              filteredCrossbody.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
