import ProductCard from "../components/ProductCard";
import SidebarFilters from "../components/SidebarFilters";
import "./Luggagebags.css";

export default function Luggagebags() {
  const luggagebags = [
    {
      id: 1,
      name: "TAGGING ON LUGGAGE VEST",
      price: 6000,
      image:
        "https://www.tigermarron.com/cdn/shop/files/ELITENOMAD_2_3107aad4-4e11-4533-9d54-fc5be32fa4f3.jpg?v=1750230862&width=600",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/files/ELITENOMAD_10_89d00d74-84d8-4f87-a6fb-0b08760c4e71.jpg?v=1750230862&width=1000",
    },
  ];

  return (
      <>
      {/* 🔹 TOP BANNER */}
      <div className="luggage-banner">
        <div className="breadcrumb">HOME / SHOP /  Luggage Bags</div>
        <h1 className="banner-title">Luggage Bags</h1>
      </div>
    <div className="Luggagebags-layout">
      {/* LEFT SIDEBAR */}
      <SidebarFilters />

      {/* RIGHT CONTENT */}
      <div className="Luggagebags-page">
        <h1 className="page-title">Luggage Bags</h1>

        <div className="product-grid">
          {luggagebags.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
