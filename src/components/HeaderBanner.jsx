import "./HeaderBanner.css";

export default function HeaderBanner() {
  return (
    <div className="bags-header">
      <div className="bags-bg">
        {/* SINGLE BACKGROUND IMAGE */}
        <img
          src="https://www.tigermarron.com/cdn/shop/files/View-All-Handbags.jpg"
          // alt="View All Handbags"
          className="bags-bg-img"
        />

        {/* TITLE */}
        <div className="bags-left">
          <h1>View All – Handbags</h1>
        </div>
      </div>
    </div>
  );
}
