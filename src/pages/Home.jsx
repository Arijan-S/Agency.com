import Hero from "../components/HomePage/Hero/Hero";
import Partnerships from "../components/HomePage/Partnerships/Partnerships";
import AboutSection from "../components/AboutSection/AboutSection";
import HowWeWork from "../components/HomePage/HowWeWork/HowWeWork";
import Features from "../components/HomePage/Features/Features";
import ServiceSection from "../components/HomePage/ServiceSection/ServiceSection";
import PortfolioSection from "../components/HomePage/PortfolioSection/PortfolioSection";
import EventSection from "../components/HomePage/EventSection/EventSection";
import TeamSection from "../components/HomePage/TeamSection/TeamSection";
import TestimonialSection from "../components/HomePage/TestimonialsSection/TestimonialSection";
import PricingSection from "../components/HomePage/PricingSection/PricingSection";
import FaqSection from "../components/HomePage/FaqSection/FaqSection";
import OurAwards from "../components/HomePage/OurAwards/OurAwards";
import OurBlog from "../components/HomePage/OurBlog/OurBlog";
import ContactUs from "../components/ContactUs/ContactUs";
import FooterBanner from "../components/FooterBanner/FooterBanner";

const Home = () => {
  return (
    <>
      <Hero />
      <Partnerships />
      <div id="about">
        <AboutSection />
      </div>
      <HowWeWork />
      <Features />
      <ServiceSection />
      <PortfolioSection />
      <EventSection />
      <TeamSection />
      <TestimonialSection />
      <PricingSection />
      <FaqSection />
      <OurAwards />
      <OurBlog />
      <ContactUs />
      <FooterBanner />
    </>
  );
};

export default Home;
