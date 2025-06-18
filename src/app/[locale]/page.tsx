import {
  Header,
  HeroSection,
  AboutUs,
  ListServices,
} from "@/components/organisms";

export default function Home() {
  return (
    <section className="space-y-10">
      <Header />
      <HeroSection />
      <AboutUs />
      <ListServices />
    </section>
  );
}
