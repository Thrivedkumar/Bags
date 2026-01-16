import "./OnSaleBadge.css";

export default function OnSaleBadge({ price, originalPrice }) {
  if (!originalPrice || originalPrice <= price) return null;

  const discount = Math.round(
    ((originalPrice - price) / originalPrice) * 100
  );

  return (
    <div className="sale-badge">
      SAVE {discount}%
    </div>
  );
}
