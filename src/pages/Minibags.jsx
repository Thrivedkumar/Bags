import ProductCard from "../components/ProductCard";
import SidebarFilters from "../components/SidebarFilters";
import "./Minibags.css";

export default function Minibags() {
  const minibags = [
    {
      id: 1,
      name: "SOUVENIR",
      price: 5200,
      originalPrice: 6500,
      image:
        "https://www.tigermarron.com/cdn/shop/files/Souvenir_gold.jpg?v=1750006615&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/files/1_c00b8a8c-7802-490f-bb52-310a78d87a1c.png?v=1750006615&width=1000",
    },
    {
      id: 2,
      name: "SOUVENIR",
      price: 6000,
      originalPrice: 8000,
      image:
        "https://www.tigermarron.com/cdn/shop/files/souvenir_silver.jpg?v=1750006612&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/files/1_a990fb74-b7cc-4134-b573-19083b46de14.png?v=1750006612&width=600",
    },
    {
      id: 3,
      name: "LARIAT PEARL MINI",
      price: 4200,
      originalPrice: 7000,
      image:
        "https://www.tigermarron.com/cdn/shop/files/70.jpg?v=1754133376&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/files/3_6bb14f65-b844-44ff-8eb8-31da0348d7f5.png?v=1754133375&width=1000",
    },
    {
      id: 4,
      name: "LARIAT RAVEN MINI",
      price: 4200,
      originalPrice: 7000,
      image:
        "https://www.tigermarron.com/cdn/shop/files/1_cfc3727d-a095-4ed3-9a4a-31da4188f9dd.jpg?v=1754133373&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/files/1a_9d2f29e4-da94-4c69-8986-fab1f3297b64.jpg?v=1754133373&width=1000",
    },
  ];

  return (
     <>
      {/* 🔹 TOP BANNER */}
      <div className="mini-banner">
        <div className="breadcrumb">HOME / SHOP / Mini bags</div>
        <h1 className="banner-title">Mini bags</h1>
      </div>
    <div className="Minibags-layout">
      {/* LEFT SIDEBAR */}
      <SidebarFilters />

      {/* RIGHT CONTENT */}
      <div className="Minibags-page">
        <h1 className="page-title">Mini Bags</h1>

        <div className="product-grid">
          {minibags.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
