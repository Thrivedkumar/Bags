import CategoryDropdown from "./CategoryDropdown";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="top-bar">
        USE LEGEND10 CODE TO GET 10% OFF
      </div>

      <header className="main-header">
        <div className="logo">
          {/* LOGO */}
        </div>

        <nav className="nav-links">
          {/* BAGS DROPDOWN */}
          <CategoryDropdown />
        </nav>
      </header>
    </>
  );
}
