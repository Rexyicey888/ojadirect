import { DealCard } from "./DealCard";
import { Icon, type IconName } from "./Icon";

const benefits: Array<{ icon: IconName; title: string; text: string }> = [
  { icon: "bell", title: "Instant Alerts", text: "Nearby buyers notified in seconds" },
  { icon: "location", title: "Location-aware", text: "Matched to buyers closest to the farm" },
  { icon: "clock", title: "Time Limited", text: "Auto discounts until the deal expires" },
];

interface HarvestSosProps {
  onDeal: (name: string) => void;
  onRaiseSos: () => void;
}

export function HarvestSos({ onDeal, onRaiseSos }: HarvestSosProps) {
  return (
    <section className="sos-section" id="harvest-sos">
      <div className="container sos-section__grid">
        <div className="sos-section__copy">
          <span className="sos-label">Harvest SOS</span>
          <h2>Beat spoilage. Sell perishables fast.</h2>
          <p>
            When produce must move urgently, farmers raise a Harvest SOS. AgriLink instantly alerts
            nearby buyers with a time-limited discount, so good food gets sold, not wasted.
          </p>
          <div className="benefit-grid">
            {benefits.map((benefit) => (
              <article key={benefit.title}>
                <Icon name={benefit.icon} />
                <strong>{benefit.title}</strong>
                <span>{benefit.text}</span>
              </article>
            ))}
          </div>
          <button className="button button--yellow" type="button" onClick={onRaiseSos}>
            Raise a Harvest SOS
          </button>
        </div>

        <div className="live-deals">
          <div className="live-deals__header">
            <span>
              <i />
              Live Urgent Deals
            </span>
            <small>2 active near Lagos</small>
          </div>
          <DealCard
            discount="-35%"
            name="Mixed Bell Peppers"
            seller="Jos Highland Co-op"
            location="Plateau State"
            timeLeft="11h left"
            price="₦15,925"
            oldPrice="₦24,500"
            onGrab={() => onDeal("Mixed Bell Peppers")}
          />
          <DealCard
            discount="-40%"
            name="Fresh Ugu & Spinach"
            seller="Green Valley Growers"
            location="Enugu State"
            timeLeft="6h left"
            price="₦5,700"
            oldPrice="₦9,500"
            onGrab={() => onDeal("Fresh Ugu & Spinach")}
          />
        </div>
      </div>
    </section>
  );
}
