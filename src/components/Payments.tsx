import { WorkflowCard } from "./WorkflowCard";
import type { IconName } from "./Icon";

const steps: Array<{ number: string; icon: IconName; title: string; text: string }> = [
  {
    number: "01",
    icon: "package",
    title: "Order or Reserve",
    text: "Buy available produce or reserve a future harvest from a verified farmer.",
  },
  {
    number: "02",
    icon: "wallet",
    title: "Pay into OPay escrow",
    text: "Your payment is held securely. The farmer ships knowing they will be paid.",
  },
  {
    number: "03",
    icon: "truck",
    title: "Verified Delivery",
    text: "A vetted transporter picks up and moves your produce with live tracking.",
  },
  {
    number: "04",
    icon: "check",
    title: "Confirm & release",
    text: "Confirm the delivery and OPay releases the secured funds to the farmer.",
  },
];

export function Payments() {
  return (
    <section className="payments section" id="how-it-works">
      <div className="container">
        <div className="payments__heading">
          <div className="eyebrow">
            <span className="eyebrow__dot" />
            Secured by OPay Escrow
          </div>
          <h2>Safe Payments, every harvest</h2>
          <p>
            Money is only released when produce is delivered, protecting both farmers and buyers
            from fraud.
          </p>
        </div>
        <div className="workflow-grid">
          {steps.map((step) => (
            <WorkflowCard key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
