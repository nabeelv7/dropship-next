import CardProduct from "./CardProduct";

export default function SectionProducts() {
  const products = [
    {
      id: 1,
      title: "Serenity Pro",
      description:
        "Deep-tissue massage technology with zero-gravity recline — designed for full-body relief and daily relaxation.",
      price: 1999,
    },
    {
      id: 2,
      title: "Harmony Luxe",
      description:
        "Advanced air compression and heat therapy in a sleek, modern design. Perfect for everyday stress relief.",
      price: 2499,
    },
    {
      id: 3,
      title: "Rejuvenate Max",
      description:
        "Premium features including reflexology foot rollers, spinal stretch, and smart body scanning. Total recovery, anytime.",
      price: 2999,
    },
  ];

  return (
    <section className="max-w-screen-lg mx-auto py-16 space-y-8" id="products">
      <div className="text-center space-y-2 px-5 text-balance">
        <h1 className="uppercase text-primary text-sm tracking-widest">
          Our Chairs
        </h1>
        <h2 className="text-3xl font-semibold">Choose Your Comfort</h2>
        <p className="text-base-content/80 max-w-xl mx-auto">
          Explore our curated collection of massage chairs built to relax,
          restore, and rejuvenate—right in your home.
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 px-3">
        {products.map((product) => (
          <CardProduct key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
