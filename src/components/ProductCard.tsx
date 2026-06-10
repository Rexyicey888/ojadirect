import { Icon } from "./Icon";

export type ProductStatus = "available" | "reserve" | "sos";

export interface Product {
  id: string;
  category: string;
  name: string;
  location: string;
  seller: string;
  price: string;
  unit: string;
  quantity: string;
  image: string;
  rating: string;
  status: ProductStatus;
  badge?: string;
  timeLeft?: string;
}

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <article className={`product-card product-card--${product.status}`}>
      <div className="product-card__image">
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.badge ? (
          <span className="product-card__badge">
            {product.status === "sos" && <Icon name="spark" size={15} />}
            {product.badge}
          </span>
        ) : null}
        {product.timeLeft ? (
          <span className="product-card__time">
            <Icon name="clock" size={14} />
            {product.timeLeft}
          </span>
        ) : null}
      </div>
      <div className="product-card__body">
        <div className="product-card__heading">
          <div>
            <span className="product-card__category">{product.category}</span>
            <h3>{product.name}</h3>
          </div>
          <span className="rating">★ {product.rating}</span>
        </div>
        <p className="meta">
          <Icon name="location" size={15} />
          {product.location}
        </p>
        <p className="seller">
          {product.seller}
          <span aria-label="Verified seller" title="Verified seller">
            <Icon name="check" size={16} />
          </span>
        </p>
        <div className="product-card__footer">
          <div>
            <strong>{product.price}</strong>
            <small>{product.unit}</small>
            <span>{product.quantity}</span>
          </div>
          <button className="button button--card" type="button" onClick={() => onSelect(product)}>
            {product.status === "reserve" ? "Reserve" : "Buy Now"}
          </button>
        </div>
      </div>
    </article>
  );
}
