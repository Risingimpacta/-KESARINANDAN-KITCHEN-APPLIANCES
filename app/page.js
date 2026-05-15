import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Trust from "@/components/Trust";
import ProductSlider from "@/components/ProductSlider";
import KitchenShowcase from "@/components/KitchenShowcase";
import ContactForm from "@/components/ContactForm";
import CTA from "@/components/CTA";
import Map from "@/components/Map";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <Trust />
        <ProductSlider />
        <KitchenShowcase />
        <ContactForm />
        <CTA />
        <Map />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}