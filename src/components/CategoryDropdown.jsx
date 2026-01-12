import { useNavigate } from "react-router-dom";
import "./CategoryDropdown.css";

export default function CategoryDropdown() {
  const navigate = useNavigate();

  const categories = [
    // { name: "HOME", path: "/" },
    { name: "TOTES", path: "/totes" },
    { name: "HANDBAGS", path: "/handbags" },
    { name: "CROSSBODY", path: "/crossbody" },
    { name: "MINI BAGS", path: "/mini-bags" },
    { name: "LAPTOP BAGS", path: "/laptop-bags" },
    { name: "BACKPACKS", path: "/backpacks" },
    { name: "DUFFLE BAGS", path: "/duffle-bags" },
    { name: "LUGGAGE BAGS", path: "/luggage-bags" },
  ];

  return (
    <div className="dropdown">
      {/* ✅ BAGS BUTTON → HOME */}
      <button
        className="dropdown-btn"
        onClick={() => navigate("/")}
      >
        BAGS
      </button>

      {/* DROPDOWN MENU */}
      <div className="dropdown-menu">
        {categories.map((item, index) => (
          <div
            key={index}
            className="dropdown-item"
            onClick={() => navigate(item.path)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
