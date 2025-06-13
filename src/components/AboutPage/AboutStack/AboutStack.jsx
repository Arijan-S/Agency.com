import { useEffect } from "react";
import styles from "./AboutStack.module.css";
import AboutAccordionMenu from "../AboutAccordionMenu/AboutAccordionMenu";
import AboutPartnership from "../AboutPartnerships/AboutPartnership";
import TeamCarousel from "../../../components/TeamCarousel/TeamCarousel";
import AboutCarousel from "../AboutCarousel/AboutCarousel";
import FooterBanner from "../../FooterBanner/FooterBanner";

const AboutStack = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#about-carousel") {
      const element = document.getElementById("about-carousel");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
      <div className={styles.aboutStackContainer}>
        <div className="container">
          <TeamCarousel />
        </div>

        <div id="about-carousel">
          <AboutCarousel />
        </div>

        <div className="container">
          <AboutAccordionMenu />
          <AboutPartnership />
        </div>
      </div>
      <FooterBanner />
    </>
  );
};

export default AboutStack;
