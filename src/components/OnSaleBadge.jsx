export default function OnSaleBadge({ price, originalPrice }) {
  if (!originalPrice || originalPrice <= price) return null;

  const discount = Math.round(
    ((originalPrice - price) / originalPrice) * 100
  );

  return <span className="badge">Save {discount}%</span>;
}
