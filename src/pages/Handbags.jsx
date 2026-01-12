import ProductCard from "../components/ProductCard";
import SidebarFilters from "../components/SidebarFilters";
import "./Handbags.css";

export default function Handbags() {
  
  const handbags = [
    {
      id: 1,
      name: "MIDAS FLOWER",
      price: 7500,
      originalPrice: 10000,
      image:
        "https://www.tigermarron.com/cdn/shop/files/Untitled_1000_x_1000_px.jpg?v=1750006609&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/files/1_10.jpg?v=1750006609&width=1000",
    },
    {
      id: 2,
      name: "SOUVENIR",
      price: 5200,
      originalPrice: 6500,
      image:
        "https://www.tigermarron.com/cdn/shop/files/Souvenir_gold.jpg?v=1750006615&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/files/1_c00b8a8c-7802-490f-bb52-310a78d87a1c.png?v=1750006615&width=1000",
    },
    {
      id: 3,
      name: "BOUNTY",
      price: 4875,
      originalPrice: 6500,
      image:
        "https://www.tigermarron.com/cdn/shop/files/Bounty_gold.jpg?v=1750006603&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/files/1_0e84dec9-a407-4f0c-b070-5eeb61c63fc5.png?v=1750006603&width=600",
    },
    {
      id: 4,
      name: "BIJOUX",
      price: 5250,
      originalPrice: 7000,
      image:
        "https://www.tigermarron.com/cdn/shop/files/Bijoux_copper.jpg?v=1750006602&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/files/1_a4670351-baa1-4b0d-b390-40a8806d589e.png?v=1750006602&width=600",
    },
    {
      id: 5,
      name: "LADIES LOVE IT",
      price: 6000,
      originalPrice: 8000,
      image:
        "https://www.tigermarron.com/cdn/shop/products/TMWBG-125-1.jpg?v=1750006697&width=600",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/products/TMWBG-125-2.jpg?v=1750006697&width=600",
    },
    {
      id: 6,
      name: "AEONIUM",
      price: 6000,
      originalPrice: 8000,
      image:
        "https://www.tigermarron.com/cdn/shop/files/Aeonium_gold.jpg?v=1750006604&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/files/1_588a9eae-bf3c-4fe4-a43d-92b4ef6f6459.png?v=1750006607&width=600",
    },
    {
      id: 7,
      name: "SOUVENIR",
      price: 6000,
      originalPrice: 8000,
      image:
        "https://www.tigermarron.com/cdn/shop/files/souvenir_silver.jpg?v=1750006612&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/files/1_a990fb74-b7cc-4134-b573-19083b46de14.png?v=1750006612&width=600",
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
  ];

  return (
     <>
      {/* 🔹 TOP BANNER */}
      <div className="totes-banner">
        <div className="breadcrumb">HOME / SHOP / Handbags</div>
        <h1 className="banner-title">Handbags</h1>
      </div>

    <div className="handbags-layout">
      <SidebarFilters />

      <div className="product-grid">
        {handbags.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
    </>
  );
}
