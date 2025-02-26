import "./productCard.css";
import { Link } from "react-router-dom";

export const ProductCard = ({
  title,
  price,
  description,
  imageUrl,
  image,
  id,
  stock,
}) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} />
      <img src={image} />
      <h4>{title}</h4>
      <p>{price} </p>
      <p>{description}</p>
      <p>{stock}</p>
      <Link to={`/product/${id}`}>
        <button>Ver detalles</button>
      </Link>
    </div>
  );
};
