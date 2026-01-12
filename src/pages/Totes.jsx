import ProductCard from "../components/ProductCard";
import SidebarFilters from "../components/SidebarFilters";
import "./Totes.css";

export default function Totes() {
  const totes = [
    {
      id: 1,
      name: "MID NIGHT MAMA",
      price: 9800,
      originalPrice: 14000,
      image:
        "https://www.tigermarron.com/cdn/shop/files/MidNightMama.png?v=1750006655&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/products/093A1789.jpg?v=1750006655&width=1000",
    },
    {
      id: 2,
      name: "MID NIGHT YOUTH",
      price: 7700,
      originalPrice: 11000,
      image:
        "https://www.tigermarron.com/cdn/shop/files/MidNightYouth.png?v=1750006656&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/products/093A1788.jpg?v=1750006656&width=1000",
    },
    {
      id: 3,
      name: "MID NIGHT CUB",
      price: 8000,
      image:
        "https://www.tigermarron.com/cdn/shop/files/MidNightCub.png?v=1750006657&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/products/093A1793.jpg?v=1750006657&width=1000",
    },
    {
      id: 4,
      name: "CHOCOLATE FOREST MAMA",
      price: 9800,
      originalPrice: 14500,
      image:
        "https://www.tigermarron.com/cdn/shop/files/Chocolateforestmama.jpg?v=1750006650&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/files/TMWBG-245-2.jpg?v=1750006651&width=1000",
    },
    {
      id: 5,
      name: "SAGE TIGER MAMA",
      price: 9800,
      originalPrice: 14000,
      image:
        "https://www.tigermarron.com/cdn/shop/files/SageTigerMama.jpg?v=1750006646&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/files/TMWBG-251-1.jpg?v=1750006646&width=1000",
    },
    {
      id: 6,
      name: "CHOCOLATE FOREST YOUTH",
      price: 7800,
      originalPrice: 11000,
      image:
        "https://www.tigermarron.com/cdn/shop/files/TMWBG-244-2.jpg?v=1750006652&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/files/ChocolateforestYouth.jpg?v=1750006652&width=1000",
    },
    {
      id: 7,
      name: "SAGE TIGER YOUTH",
      price: 7800,
      originalPrice: 11000,
      image:
        "https://www.tigermarron.com/cdn/shop/files/TMWBG-250-2.jpg?v=1750006648&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/files/SageTigerYouth.jpg?v=1750006648&width=1000",
    },
    {
      id: 8,
      name: "SAGE TIGER CUB",
      price: 8000,
      image:
        "https://www.tigermarron.com/cdn/shop/files/SageTigerCub.jpg?v=1750006649&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/files/TMWBG-249-1.jpg?v=1750006649&width=1000",
    },
    {
      id: 9,
      name: "SAGE TIGER YOUTH",
      price: 7700,
      originalPrice: 10000,
      image:
        "https://www.tigermarron.com/cdn/shop/files/SageTigerYouth.jpg?v=1750006648&width=1000",
      hoverImage:
        "https://www.tigermarron.com/cdn/shop/files/TMWBG-250-2.jpg?v=1750006648&width=1000",
    },
  ];

  return (
    <>
      {/* 🔹 TOP BANNER */}
      <div className="totes-banner">
        <div className="breadcrumb">HOME / SHOP / TOTES</div>
        <h1 className="banner-title">TOTES</h1>
      </div>

      {/* 🔹 PAGE LAYOUT */}
      <div className="Totes-layout">
        {/* LEFT SIDEBAR */}
        <SidebarFilters />

        {/* RIGHT PRODUCTS */}
        <div className="Totes-page">
          <div className="product-grid">
            {totes.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
