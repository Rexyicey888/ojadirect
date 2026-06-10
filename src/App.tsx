import { useEffect, useState } from "react";
import { HarvestSos } from "./components/HarvestSos";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Marketplace } from "./components/Marketplace";
import { Payments } from "./components/Payments";
import type { Product } from "./components/ProductCard";
import { Toast } from "./components/Toast";

export function App() {
  const [notification, setNotification] = useState("");

  useEffect(() => {
    if (!notification) {
      return;
    }

    const timer = window.setTimeout(() => setNotification(""), 4200);
    return () => window.clearTimeout(timer);
  }, [notification]);

  const handleProduct = (product: Product) => {
    const action = product.status === "reserve" ? "Reservation" : "Order";
    setNotification(`${action} started for ${product.name}. Your payment will be protected by OPay escrow.`);
  };

  return (
    <>
      <Header />
      <main>
        <Hero onSell={() => setNotification("Farmer onboarding opened. Add your harvest details to create a listing.")} />
        <Marketplace onSelectProduct={handleProduct} />
        <HarvestSos
          onDeal={(name) => setNotification(`${name} deal added to your buyer dashboard.`)}
          onRaiseSos={() => setNotification("Harvest SOS form opened. Nearby buyers will be alerted after review.")}
        />
        <Payments />
      </main>
      <footer>
        <div className="container footer__inner">
          <strong>AgriLink</strong>
          <span>Farm-to-business trade, protected by OPay escrow.</span>
          <span>Demo concept • 2026</span>
        </div>
      </footer>
      {notification ? <Toast message={notification} onClose={() => setNotification("")} /> : null}
    </>
  );
}
