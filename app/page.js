import SectionCTA from "@/components/SectionCTA";
import SectionDemo from "@/components/SectionDemo";
import SectionFAQ from "@/components/SectionFAQ";
import SectionFooter from "@/components/SectionFooter";
import SectionHero from "@/components/SectionHero";
import SectionProducts from "@/components/SectionProducts";
import SectionReviews from "@/components/SectionReviews";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionProducts />
      <SectionReviews />
      <SectionDemo />
      <SectionFAQ />
      <SectionCTA />
      <SectionFooter />
      <Script src="/analytics-script.js" strategy="afterInteractive" />
    </>
  );
}

export const metadata = {
  title: "RestNest",
  description:
    " Experience daily relief with our luxury massage chairs — engineered to melt away tension, ease chronic pain, and bring your body back to balance.",
};
