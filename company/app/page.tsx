import { HeroCentered } from "./components/HeroCentered";
import { ProductsSection } from "./components/ProductsSection";
import { ClientsSection } from "./components/ClientsSection";
import { CtaSection } from "./components/CtaSection";
import { ServicesSection } from "./components/ServicesSection";
import { HomeHashScroller } from "./components/HomeHashScroller";

export default function Home() {
  return (
    <>
      <HomeHashScroller />
      <section
        id="hero"
        className="bg-[#fcfcfc] flex min-h-screen scroll-mt-28 items-center"
        aria-label="Hero"
      >
        <div className="mx-auto w-full px-8 py-24 md:py-32">
          <HeroCentered />
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-0 px-4 sm:px-6">
        <div className="py-24"><ProductsSection /></div>
        <div className="py-24"><ServicesSection /></div>
        <div className="py-24"><ClientsSection /></div>
      </div>
      <div className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <CtaSection />
        </div>
      </div>
    </>
  );
}
