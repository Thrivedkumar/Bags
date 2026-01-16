import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./ProductDetails.css";
import products from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);
  const [tagOption, setTagOption] = useState("NO");
  const [tagName, setTagName] = useState("");

  const product = products.find((p) => p.id === Number(id));
  if (!product) return <h2>Product not found</h2>;

  /* ✅ IMAGE STATE (AFTER product exists) */
  const [activeImage, setActiveImage] = useState(product.image);

  const tagPrice = tagOption === "NO" ? 0 : 300;
  const isTagInvalid = tagOption !== "NO" && tagName.trim() === "";

  /* ================= ADD TO CART ================= */
  const addToCart = () => {
    if (isTagInvalid) {
      alert("Please enter name for personalization");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find(
      (item) =>
        item.id === product.id &&
        item.tagOption === tagOption &&
        item.tagName === tagName
    );

    if (existingItem) {
      existingItem.qty += qty;
    } else {
      cart.push({
        ...product,
        qty,
        tagOption,
        tagName,
        extras: tagPrice,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart ✅");
  };

  /* ================= BUY NOW ================= */
  const buyNow = () => {
    if (isTagInvalid) {
      alert("Please enter name for personalization");
      return;
    }

    localStorage.setItem(
      "cart",
      JSON.stringify([
        { ...product, qty, tagOption, tagName, extras: tagPrice },
      ])
    );

    navigate("/cart");
  };

  return (
    <div className="details-page">
     {/* LEFT IMAGE SECTION */}
<div className="details-image">
  {/* MAIN IMAGE */}
  <div className="main-image">
    <img src={activeImage} alt={product.name} />
  </div>

  {/* THUMBNAILS BELOW */}
  <div className="thumbnail-row">
    {[product.image, ...(product.images || [])].map((img, index) => (
      <img
        key={index}
        src={img}
        alt="thumb"
        className={`thumb ${activeImage === img ? "active" : ""}`}
        onClick={() => setActiveImage(img)}
      />
    ))}
  </div>
</div>


      {/* RIGHT CONTENT */}
      <div className="details-info">
        <h1>{product.name}</h1>

        <p className="price">
          ₹ {product.price}
          {product.originalPrice && (
            <span className="old-price"> ₹ {product.originalPrice}</span>
          )}
        </p>

        <p className="tax">(Inclusive of all taxes)</p>

        {/* OFFERS */}
        <div className="offer-box">
          <h4>Best Price ₹9,310</h4>

          <div className="offer-row">
            <span>🏷️ Flat ₹200 Discount on Selected Products</span>
            <button className="offer-code">FLAT200 📋</button>
          </div>

          <div className="offer-row">
            <span>🏷️ Get 5% off on your first order</span>
            <button className="offer-code">SAVES 📋</button>
          </div>

          <div className="offer-note">
            🛒 Scroll Down and Add to Cart to Avail Above Offers
          </div>
        </div>

        {/* COLOR */}
        <div className="color-section">
          <p>Color : Black</p>
          <div className="color-options">
            <span className="color-dot black active"></span>
            <span className="color-dot charcoal"></span>
            <span className="color-dot cream"></span>
          </div>
        </div>

        {/* QUANTITY */}
        <div className="qty-container">
          <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
          <span>{qty}</span>
          <button onClick={() => setQty(qty + 1)}>+</button>
        </div>

        {/* PERSONALIZATION */}
        <div className="personalise-wrapper">
          <p className="personalise-desc">
            Personalise your favourite Tiger Marrón products with your initials.
          </p>

          <p className="tag-title">PERSONALIZE TAG NAME</p>

          <div className="tag-options">
            {["GOLD", "SILVER", "PLAIN", "NO"].map((opt) => (
              <label key={opt}>
                <input
                  type="radio"
                  name="tag"
                  value={opt}
                  checked={tagOption === opt}
                  onChange={(e) => {
                    setTagOption(e.target.value);
                    if (e.target.value === "NO") setTagName("");
                  }}
                />
                {opt} {opt !== "NO" && "₹ 300"}
              </label>
            ))}
          </div>

          {tagOption !== "NO" && (
            <>
              <div className="name-field">
                <label>NAME*</label>
                <input
                  type="text"
                  maxLength={10}
                  placeholder="Enter name"
                  value={tagName}
                  onChange={(e) => setTagName(e.target.value)}
                />
              </div>

              <div className="extras-box">
                Total Extras: <span>₹ {tagPrice}</span>
              </div>
            </>
          )}
        </div>

        {/* ACTION BUTTONS */}
        <button
          className="add-to-cart"
          onClick={addToCart}
          disabled={isTagInvalid}
        >
          ADD TO CART
        </button>

        <button
          className="buy-now"
          onClick={buyNow}
          disabled={isTagInvalid}
        >
          BUY NOW
        </button>
      </div>
    </div>
  );
}
