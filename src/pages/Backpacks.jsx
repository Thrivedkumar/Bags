import ProductCard from "../components/ProductCard";
import SidebarFilters from "../components/SidebarFilters";
import "./Backpacks.css";

export default function Backpacks() {
  const Crossbody = [
    {
      id: 1,
      name: "CAVALIER BACKPACK",
      price: 9600,
      originalPrice: 12000,
      image:
        "https://www.tigermarron.com/cdn/shop/files/1_d58370a7-bb26-448e-bf86-62349ef14ad1.jpg?v=1754133344&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/files/1a_94c7f8c2-054f-45b5-b41e-a09a92abe8d1.png?v=1754133344&width=1000",
    },
    {
      id: 2,
      name: "WRANGLER BACKPACK",
      price: 1200,
      image:
        "https://www.tigermarron.com/cdn/shop/files/1aa.jpg?v=1754133341&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/files/1bb.png?v=1754133341&width=1000",
    },
    {
      id: 3,
      name: "THE MULTITASKER",
      price: 1600,
      image:
        "https://www.tigermarron.com/cdn/shop/products/DSC08365webedit.jpg?v=1750006699&width=800",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/products/TMMBG-054-1.jpg?v=1750006699&width=600",
    },
  ];

  return (
      <>
      {/* 🔹 TOP BANNER */}
      <div className="backpacks-banner">
        <div className="breadcrumb">HOME / SHOP / Backpacks</div>
        <h1 className="banner-title">Backpacks</h1>
      </div>

    <div className="page-layout">
      {/* LEFT SIDEBAR */}
      <SidebarFilters />

      {/* RIGHT PRODUCTS */}
      <div className="product-section">
        <h1 className="page-title">Backpacks</h1>

        <div className="product-grid">
          {Crossbody.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
