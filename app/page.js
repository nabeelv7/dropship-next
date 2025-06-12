import SectionCTA from "@/components/SectionCTA";
import SectionDemo from "@/components/SectionDemo";
import SectionFAQ from "@/components/SectionFAQ";
import SectionFooter from "@/components/SectionFooter";
import SectionHero from "@/components/SectionHero";
import SectionProducts from "@/components/SectionProducts";
import SectionReviews from "@/components/SectionReviews";

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
    </>
  );
}
