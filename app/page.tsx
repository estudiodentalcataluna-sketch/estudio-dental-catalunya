import Header from "./components/Header/Header";
import Hero from "./components/Hero";

import WhyChooseUs from "./components/home/WhyChooseUs";
import Treatments from "./components/Treatments";
import Team from "./components/home/Team";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Header />

      <Hero />

      <WhyChooseUs />

      

      <Treatments />

      <Team />

      <Reviews />

      <Contact />

      <Footer />

      <WhatsAppButton />
    </main>
  );
}