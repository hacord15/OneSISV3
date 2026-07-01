import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AboutSection from "@/components/AboutSection";
import WhyChooseOneSIS from "@/components/WhyChooseOneSIS";
import WhatWeOffer from "@/components/WhatWeOffer";
import OneSISAdvantage from "@/components/OneSISAdvantage";
import Technology from "@/components/Technology";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <AboutSection />
      <WhyChooseOneSIS />
      <WhatWeOffer />
      <OneSISAdvantage />
      <Technology />
      <CTA />
      <Footer />
    </main>
  );
}
