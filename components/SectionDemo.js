import SectionDemoVideo from "./SectionDemoVideo";

export default function SectionDemo() {
  return (
    <section className="max-w-screen-lg mx-auto md:pb-20 pb-10">
      <SectionDemoIntro />
      <SectionDemoVideo />
    </section>
  );
}

export function SectionDemoIntro() {
  return (
    <div className="space-y-2 px-5 text-balance text-center md:py-17 py-10">
      <h1 className="uppercase text-primary text-sm tracking-widest">
        Our Chairs
      </h1>
      <p className="text-base-content/80 max-w-md mx-auto">
        Tension, stress, and sore muscles? Watch how our massage chairs deliver
        real relief — right where you need it most.
      </p>
    </div>
  );
}
