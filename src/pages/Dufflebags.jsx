import ProductCard from "../components/ProductCard";
import SidebarFilters from "../components/SidebarFilters";
import "./Dufflebags.css";

export default function Dufflebags() {
  const duffleBags = [
    {
      id: 1,
      name: "CLASSY AF",
      price: 12400,
      originalPrice: 15000,
      image:
        "https://www.tigermarron.com/cdn/shop/products/Classy-AF-Black-1.jpg?v=1750006717&width=600",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/products/TMMBG-011-3.JPG?v=1750006716&width=600",
    },
    {
      id: 2,
      name: "HALTER DUFFLE",
      price: 1200,
      image:
        "https://www.tigermarron.com/cdn/shop/files/1_7947f371-9d60-49dc-b086-aa9b366ef5fe.jpg?v=1754133339&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/files/1a.png?v=1754133339&width=1000",
    },
  ];

  return (
    <>
      {/* 🔹 TOP BANNER */}
      <div className="travel-banner">
        <div className="breadcrumb">HOME / SHOP / Travel Duffle Bags</div>
        <h1 className="banner-title">Travel Duffle Bags</h1>
      </div>
    <div className="Dufflebags-layout">
      {/* LEFT SIDEBAR */}
      <SidebarFilters />

      {/* RIGHT CONTENT */}
      <div className="Dufflebags-page">
        <h1 className="page-title">Dufflebags</h1>

        <div className="product-grid">
          {duffleBags.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
