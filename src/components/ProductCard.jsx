import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() => navigate(`/product/${product.id}`)}
      style={{ cursor: "pointer" }}
    >
      <div className="img-box">
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
          <span className="old-price"> ₹ {product.originalPrice}</span>
        )}
      </p>
    </div>
  );
}
