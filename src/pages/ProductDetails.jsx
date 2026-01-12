import { useParams } from "react-router-dom";
import "./ProductDetails.css";

// TEMP DATA (later you can move this to a shared file or API)
import products from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="details-page">
      {/* LEFT IMAGE */}
      <div className="details-image">
        <img src={product.image} alt={product.name} />
      </div>

      {/* RIGHT CONTENT */}
      <div className="details-info">
        <h1>{product.name}</h1>
        <p className="price">₹ {product.price}</p>
        <p className="tax">(Inclusive of all taxes)</p>

        <div className="offers">
          <h4>Best Price ₹5,700</h4>
          <p>Flat ₹200 Discount on Selected Products</p>
          <p>Get 5% off on your first order</p>
        </div>

        <div className="color">
          <p>Color: Black</p>
          <span className="color-dot"></span>
        </div>

        <div className="quantity">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>

        <button className="add-cart">ADD TO CART</button>
      </div>
    </div>
  );
}
