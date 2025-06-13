import { CUSTOM_ROUTES } from "../../../constants/custom-routes";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import styles from "./AboutStack.module.css";
import IMAGES from "../../../constants/images";
import AboutAccordionMenu from "../AboutAccordionMenu/AboutAccordionMenu";
import AboutPartnership from "../AboutPartnerships/AboutPartnership";
import TeamCarousel from "../../TeamCarousel/TeamCarousel";
import AboutCarousel from "../AboutCarousel/AboutCarousel";

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

          <div className={styles.bannerSection}>
            <div className={styles.banner}>
              <div className={styles.bannerDescription}>
                <h2>
                  We're Help <br /> To Build Your <br /> Dream Project
                </h2>

                <p>
                  A digital agency is a business you hire to outsource your
                  <br /> digital marketing efforts, instead of handling
                  in-house.
                </p>

                <Link to={CUSTOM_ROUTES.CONTACT}>
                  <button>CONTACT US</button>
                </Link>
              </div>

              <div className={styles.servicePageAccordion}>
                <div className="container">
                  <div className={styles.accordionMenu}></div>
                </div>
              </div>

              <img src={IMAGES.image7} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutStack;
