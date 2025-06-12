export default function SectionDemoVideo() {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <video
        className="w-full md:rounded-md shadow-lg rounded-none"
        controls
        width="640px"
        height="360px"
        preload="none"
        playsInline
        poster="/images/massage-chair-demo-thumbnail.webp"
      >
        <source src="/videos/massage-chair-demo.mp4" type="video/mp4" />
        <source src="/videos/massage-chair-demo.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
