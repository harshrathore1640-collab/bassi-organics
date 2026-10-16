import { Header, Hero, SideRail } from "./components/Header";
import { About, HowTo, Ingredients, Products, WhyUs } from "./components/Sections1";
import { Videos } from "./components/Videos";
import { Faq, Founder, Gallery, Reviews } from "./components/Sections2";
import { Contact, Footer, Order } from "./components/Sections3";

export default function App() {
  return (
    <div className="grain min-h-screen bg-cream">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[90] focus:bg-forest focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>

      <SideRail />
      <Header />

      <div className="pt-16 lg:pl-16 lg:pt-20">
        <main>
          <Hero />
          <About />
          <Products />
          <Ingredients />
          <WhyUs />
          <Videos />
          <HowTo />
          <Founder />
          <Gallery />
          <Reviews />
          <Faq />
          <Order />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
