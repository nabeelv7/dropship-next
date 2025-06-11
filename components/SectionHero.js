export default function SectionHero() {
  return (
    <main className="max-w-screen-lg mx-auto py-20 text-center max-md:px-5 space-y-3">
      <h1
        className="md:text-6xl text-4xl font-bold"
        style={{ lineHeight: 1, letterSpacing: -0.4 }}
      >
        Feel Like{" "}
        <span className="underline decoration-dashed decoration-primary md:underline-offset-8">
          Yourself
        </span>{" "}
        Again — <br />
        Without the Aches
      </h1>
      <p className="text-base-content/80 max-w-md mx-auto">
        Experience daily relief with our luxury massage chairs — engineered to
        melt away tension, ease chronic pain, and bring your body back to
        balance.
      </p>
      <a href="#products" className="btn btn-primary btn-lg mt-3 THREED">
        Shop Massage Chairs
      </a>
    </main>
  );
}
