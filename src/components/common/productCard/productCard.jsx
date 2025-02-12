import "./productCard.css";

export const ProductCard = ({ title, price, description, imageUrl, image }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} />
      <img src={image} />
      <h4>{title}</h4>
      <p>{price} </p>
      <p>{description}</p>
      <button>Ver detalles</button>
    </div>
  );
};
