import { useState } from "react";
import ProductCard from "../components/ProductCard";
import SidebarFilters from "../components/SidebarFilters";
import "./Dufflebags.css";

export default function Dufflebags() {
  // PRICE STATE
  const [minPrice, setMinPrice] = useState(500);
  const [maxPrice, setMaxPrice] = useState(20000);

  const duffleBags = [
    {
  id: 41,
  category: "duffle",
  name: "CLASSY AF",
  price: 12400,
  image:
    "https://www.tigermarron.com/cdn/shop/products/Classy-AF-Black-1.jpg",
  hoverImage:
    "https://www.tigermarron.com/cdn/shop/products/TMMBG-011-3.JPG",
},
{
  id: 42,
  category: "duffle",
  name: "HALTER DUFFLE",
  price: 12000,
  image:
    "https://www.tigermarron.com/cdn/shop/files/1_7947f371-9d60-49dc-b086-aa9b366ef5fe.jpg?v=1754133339&width=1000",
  hoverImage:
    "https://www.tigermarron.com/cdn/shop/files/2_3d8d9b8f-5945-46bc-8696-6f60413744d5.png?v=1754133339&width=1000",
},

  ];

  // FILTER LOGIC
  const filteredProducts = duffleBags.filter(
    (item) => item.price >= minPrice && item.price <= maxPrice
  );

  return (
    <>
      {/* TOP BANNER */}
      <div className="travel-banner">
        <h1 className="banner-title">Travel Duffle Bags</h1>
      </div>

      <div className="Dufflebags-layout">
        {/* SIDEBAR */}
        <SidebarFilters
          minPrice={minPrice}
          maxPrice={maxPrice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
        />

        {/* PRODUCTS */}
        <div className="Dufflebags-page">
          <div className="product-grid">
            {filteredProducts.length === 0 ? (
              <p>No products in this price range</p>
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
