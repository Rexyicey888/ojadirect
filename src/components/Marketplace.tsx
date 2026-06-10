import { useMemo, useState } from "react";
import { ProductCard, type Product, type ProductStatus } from "./ProductCard";

type Filter = "all" | ProductStatus;

const filters: Array<{ value: Filter; label: string }> = [
  { value: "all", label: "All" },
  { value: "available", label: "Available Now" },
  { value: "reserve", label: "Reserve Harvest" },
  { value: "sos", label: "Harvest SOS" },
];

const products: Product[] = [
  {
    id: "roma-tomatoes",
    category: "Vegetables",
    name: "Roma Tomatoes",
    location: "Kano State",
    seller: "Aisha Bello Farms",
    price: "₦18,000",
    unit: "per 50kg basket",
    quantity: "120 baskets available",
    image: "/assets/roma-tomatoes.png",
    rating: "4.9",
    status: "available",
  },
  {
    id: "mixed-bell-peppers",
    category: "Vegetables",
    name: "Mixed Bell Peppers",
    location: "Plateau State",
    seller: "Jos Highland Co-op",
    price: "₦15,325",
    unit: "per 25kg basket",
    quantity: "40 crates available",
    image: "/assets/bell-peppers.png",
    rating: "4.7",
    status: "sos",
    badge: "SOS -35%",
    timeLeft: "11h left",
  },
  {
    id: "fresh-ugu",
    category: "Leafy Greens",
    name: "Fresh Ugu & Spinach",
    location: "Enugu State",
    seller: "Green Valley Growers",
    price: "₦5,700",
    unit: "per bundle pack",
    quantity: "80 packs available",
    image: "/assets/ugu-spinach.png",
    rating: "4.9",
    status: "sos",
    badge: "SOS -40%",
    timeLeft: "6h left",
  },
  {
    id: "yellow-maize",
    category: "Grains",
    name: "Yellow Maize",
    location: "Kaduna State",
    seller: "Sambo Grain Estate",
    price: "₦32,000",
    unit: "per 100kg bag",
    quantity: "120 bags available",
    image: "/assets/yellow-maize.png",
    rating: "4.9",
    status: "available",
  },
  {
    id: "puna-yam",
    category: "Tubers",
    name: "Puna Yam Tubers",
    location: "Benue State",
    seller: "Makurdi Roots Ltd",
    price: "₦45,000",
    unit: "per 100 tubers",
    quantity: "Ready for Sept. 2026 harvest",
    image: "/assets/yam-tubers.png",
    rating: "4.7",
    status: "reserve",
    badge: "Reserve",
  },
  {
    id: "ripe-plantain",
    category: "Fruits",
    name: "Ripe Plantain",
    location: "Ondo State",
    seller: "Akure Plantain Hub",
    price: "₦15,500",
    unit: "per bunch crate",
    quantity: "60 crates available",
    image: "/assets/ripe-plantain.png",
    rating: "4.9",
    status: "available",
  },
  {
    id: "red-onions",
    category: "Vegetables",
    name: "Red Onions",
    location: "Sokoto State",
    seller: "Sokoto Bulb Farmers",
    price: "₦28,000",
    unit: "per 50kg bag",
    quantity: "95 bags available",
    image: "/assets/roma-tomatoes.png",
    rating: "4.9",
    status: "available",
  },
];

interface MarketplaceProps {
  onSelectProduct: (product: Product) => void;
}

export function Marketplace({ onSelectProduct }: MarketplaceProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const filteredProducts = useMemo(
    () => (filter === "all" ? products : products.filter((product) => product.status === filter)),
    [filter],
  );

  return (
    <section className="marketplace section container" id="marketplace">
      <div className="section-heading">
        <div>
          <span className="section-kicker">Verified farm inventory</span>
          <h2>Fresh from the marketplace</h2>
          <p>
            Buy available inventory or reserve future harvests directly from verified farmers
            across the country.
          </p>
        </div>
        <span className="listing-count">{filteredProducts.length} listings</span>
      </div>

      <div className="filters" aria-label="Filter marketplace listings">
        {filters.map((item) => (
          <button
            className={filter === item.value ? "filter filter--active" : "filter"}
            key={item.value}
            type="button"
            aria-pressed={filter === item.value}
            onClick={() => setFilter(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onSelect={onSelectProduct} />
        ))}
      </div>
    </section>
  );
}
