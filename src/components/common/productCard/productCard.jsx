import "./productCard.css";

export const ProductCard = ({ title, price, description, imageUrl }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} />
      <h4>{title}</h4>
      <p>{price} </p>
      <p>{description}</p>
    </div>
  );
};
