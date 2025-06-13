import { useEffect } from "react";
import AboutStack from "../../components/AboutPage/AboutStack/AboutStack";
import PlanSection from "../../components/PlanSection/PlanSection";

import IMAGES from "../../constants/images";
import styles from "./About.module.css";

const About = () => {
  const planSectionDataAbout = {
    subheader: "FEATURES",
    description: "Long run, and work as an extension of the merchant's team.",
    subDescription:
      "Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension.",
    plan1: {
      icon: "featureIcon",
      altText: "plan con",
      title: "Professional",
      description: "Full service range including technical skills, design.",
    },
    plan2: {
      title: "Accessibility",
      description: "Business understanding, ability to put themselves.",
    },
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#features") {
      const element = document.getElementById("features-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (hash === "#about-description") {
      const element = document.getElementById("about-description");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
      <div className={styles.aboutPageDescription}>
        <div className="container">
          <h2>About</h2>

          <p>
            Agency provides a full service range including technical skills,
            design, <br />
            business understanding.
          </p>
        </div>
      </div>

      <div className={styles.aboutPage}>
        <div className="container">
          <div id="about-description" className={styles.aboutDescription}>
            <div className={styles.aboutHeader}>
              <p>ABOUT</p>

              <h3>An Experience Design Agency</h3>
            </div>

            <div className={styles.description}>
              Ability to put themselves in the merchant's shoes. It is meant to
              partner on the long run, and work as an extension of the
              merchant's team. <br /> <br /> A digital agency is a business you
              hire to outsource your digital marketing efforts, instead of
              handling in-house. They can provide your business with a variety
              of digital solutions to promote your product or service online and
              help you.
            </div>
          </div>

          <div className={styles.mediaShowcase}>
            <div className={styles.mediaVideo}>
              <img src={IMAGES.aboutVideo} alt="video" />
            </div>

            <div className={styles.mediaGallery}>
              <div className={styles.gallery}>
                <img src={IMAGES.image8} alt="image-8" />
              </div>

              <div className={styles.gallery}>
                <img src={IMAGES.image9} alt="image-9" />
              </div>

              <div className={styles.gallery}>
                <img src={IMAGES.image10} alt="image-10" />
              </div>

              <div className={styles.gallery}>
                <img src={IMAGES.image11} alt="image-11" />
              </div>
            </div>
          </div>

          <div id="features-section">
            <PlanSection {...planSectionDataAbout} />
          </div>

          <div className={styles.stat_cardContainer}>
            <div className={styles.statCard}>
              <p>42%</p>
              <p>Years of experience</p>
            </div>

            <div className={styles.statCard}>
              <p>73+</p>
              <p>Agency members</p>
            </div>

            <div className={styles.statCard}>
              <p>5.000</p>
              <p>Projects complete</p>
            </div>
          </div>
        </div>

        <AboutStack />
      </div>
    </>
  );
};

export default About;
