import { useNavigate } from "react-router-dom";
import OnSaleBadge from "../components/OnSaleBadge";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      className="card"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
    >
      <div className="img-box">
        {/* ✅ SAVE % BADGE */}
        <OnSaleBadge
          price={product.price}
          originalPrice={product.originalPrice}
        />

        <img
          src={product.image}
          alt={product.name}
          className="main-img"
        />

        <img
          src={product.hoverImage}
          alt={product.name}
          className="hover-img"
        />
      </div>

      <p className="name">{product.name}</p>

      <p className="price">
        ₹ {product.price}
        {product.originalPrice && (
          <span className="old-price">
            ₹ {product.originalPrice}
          </span>
        )}
      </p>
    </div>
  );
}
