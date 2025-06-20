import Image from "next/image";

export default function SectionCTA() {
  const avatars = [
    "/images/avatars/1.webp",
    "/images/avatars/2.webp",
    "/images/avatars/3.webp",
    "/images/avatars/4.webp",
  ];

  return (
    <section className="py-50 flex items-center justify-center px-4">
      <div className="rounded-xl shadow-xl p-10 max-w-xl w-full text-center space-y-6 border-6 border-base-200">
        <h1 className="text-3xl font-bold text-base-content">
          Turn Aches Into Ease
        </h1>
        <h2 className="text-base-content/80">
          Targeted relief, right from your massage chair.
        </h2>

        <button className="btn btn-primary btn-xl btn-wide THREED">
          Try it Today &rarr;
        </button>

        <div className="space-y-2 pt-4">
          <p className="text-sm text-base-content/60 w-60 mx-auto">
            Trusted by <span className="font-semibold">4,000+</span> people who
            were tired of hurting.
          </p>

          <div className="avatar-group -space-x-6 justify-center">
            {avatars.map((url, index) => (
              <div className="avatar" key={index}>
                <div className="w-12">
                  <Image
                    width={100}
                    height={100}
                    src={url}
                    alt={`User ${index + 1}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
