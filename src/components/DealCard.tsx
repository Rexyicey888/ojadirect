import { Icon } from "./Icon";

interface DealCardProps {
  discount: string;
  name: string;
  seller: string;
  location: string;
  timeLeft: string;
  price: string;
  oldPrice: string;
  onGrab: () => void;
}

export function DealCard({
  discount,
  name,
  seller,
  location,
  timeLeft,
  price,
  oldPrice,
  onGrab,
}: DealCardProps) {
  return (
    <article className="deal-card">
      <strong className="deal-card__discount">{discount}</strong>
      <div className="deal-card__content">
        <h3>
          {name} <span>• {seller}</span>
        </h3>
        <p>
          <span>
            <Icon name="location" size={14} />
            {location}
          </span>
          <span>
            <Icon name="clock" size={14} />
            {timeLeft}
          </span>
        </p>
        <div>
          <strong>{price}</strong>
          <s>{oldPrice}</s>
        </div>
      </div>
      <button className="button button--deal" type="button" onClick={onGrab}>
        Grab Deal
      </button>
    </article>
  );
}
