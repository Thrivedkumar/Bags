import "./SidebarFilters.css";

export default function SidebarFilters({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
}) {
  const MIN = 500;
  const MAX = 50000;

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

      {/* RANGE SLIDER (controls MAX price) */}
      <input
        type="range"
        min={MIN}
        max={MAX}
        step={100}
        value={maxPrice}
        onChange={(e) => {
          const value = Number(e.target.value);
          setMaxPrice(value);
          if (value < minPrice) {
            setMinPrice(value);
          }
        }}
      />

      {/* INPUT BOXES */}
      <div className="price-box">
        {/* MIN */}
        <input
          type="number"
          min={MIN}
          max={maxPrice}
          value={minPrice}
          onChange={(e) => {
            const value = Number(e.target.value);
            if (value <= maxPrice && value >= MIN) {
              setMinPrice(value);
            }
          }}
        />

        <span>to</span>

        {/* MAX */}
        <input
          type="number"
          min={minPrice}
          max={MAX}
          value={maxPrice}
          onChange={(e) => {
            const value = Number(e.target.value);
            if (value >= minPrice && value <= MAX) {
              setMaxPrice(value);
            }
          }}
        />
      </div>

      <p className="price-label">
        ₹ {minPrice} – ₹ {maxPrice}
      </p>
    </aside>
  );
}
