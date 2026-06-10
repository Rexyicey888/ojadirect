import { Icon } from "./Icon";

interface HeroProps {
  onSell: () => void;
}

export function Hero({ onSell }: HeroProps) {
  return (
    <section className="hero container" id="top">
      <div className="hero__copy">
        <div className="eyebrow">
          <span className="eyebrow__dot" />
          Secured by OPay Escrow
        </div>
        <h1>
          From the farm, <span>straight to your</span> business
        </h1>
        <p className="hero__intro">
          AgriLink connects farmers directly with buyers. List produce, reserve future harvests,
          get paid securely, and track delivery with verified transporters, all in one place.
        </p>
        <div className="hero__actions">
          <a className="button" href="#marketplace">
            Browse Marketplace
            <Icon name="arrow" size={18} />
          </a>
          <button className="button button--outline" type="button" onClick={onSell}>
            Sell my Harvest
          </button>
        </div>
        <div className="trust-row">
          <span>
            <Icon name="shield" size={20} />
            Escrow Protected
          </span>
          <span>
            <Icon name="truck" size={22} />
            Verified Delivery
          </span>
        </div>
      </div>

      <div className="hero__visual">
        <img src="/assets/hero-farmer.png" alt="A farmer standing between rows of tomato plants" />
        <div className="floating-card floating-card--payment">
          <span className="floating-card__icon">
            <Icon name="shield" size={20} />
          </span>
          <span>
            <small>Payment held</small>
            <strong>₦30,000</strong>
          </span>
        </div>
        <div className="floating-card floating-card--sos">
          <span className="floating-card__icon floating-card__icon--orange">
            <Icon name="spark" size={20} />
          </span>
          <span>
            <small>Harvest SOS</small>
            <strong>40% OFF</strong>
          </span>
        </div>
      </div>
    </section>
  );
}
