import "./SidebarFilters.css";

export default function SidebarFilters({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
}) {
  return (
    <aside className="filters">
      {/* AVAILABILITY */}
      <h4>AVAILABILITY</h4>

      <label className="switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>

      <hr />

      {/* PRICE */}
      <h4>PRICE</h4>

      {/* PRICE SLIDER */}
      <input
        type="range"
        min="500"
        max="50000"
        step="100"
        value={maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
      />

      {/* PRICE INPUTS */}
      <div className="price-box">
        <input
          type="number"
          min="500"
          max={maxPrice}
          value={minPrice}
          onChange={(e) =>
            setMinPrice(Math.min(maxPrice, Math.max(500, Number(e.target.value))))
          }
        />

        <span>to</span>

        <input
          type="number"
          min={minPrice}
          max="50000"
          value={maxPrice}
          onChange={(e) =>
            setMaxPrice(Math.max(minPrice, Number(e.target.value)))
          }
        />
      </div>

      <p className="price-label">
        ₹ {minPrice} – ₹ {maxPrice}
      </p>
    </aside>
  );
}
