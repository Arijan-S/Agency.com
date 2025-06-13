import { Link } from "react-router-dom";
import { CUSTOM_ROUTES } from "../../../constants/custom-routes";
import IMAGES from "../../../constants/images";
import styles from "./Hero.module.css";

const Hero = () => {
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className={styles.heroContainer}>
        <div className="container">
          <div className={styles.hero}>
            <div className={styles.heroContent}>
              <p className={styles.subHeader}>MODERN STUDIO</p>

              <div className={styles.headerContainer}>
                <img src={IMAGES.heroStar} alt="icon-1" />

                <h1>
                  We're Help <br /> To Build Your Dream Project
                </h1>
              </div>

              <p className={styles.description}>
                Agency provides a full service range including technical skills,
                design, business understanding.
              </p>

              <div className={styles.heroCTA}>
                <a href="#howWeWork" onClick={handleSmoothScroll}>
                  <button>HOW WE WORK</button>
                </a>

                <Link
                  to={`${CUSTOM_ROUTES.CONTACT}#contactUsSection`}
                  className={styles.contactLink}
                >
                  Contact Us
                </Link>
              </div>

              <div className={styles.heroTestimonial}>
                <img src={IMAGES.firstProfile} alt="profile-1" />

                <div className={styles.testimonial}>
                  <p>"Put themselves in the merchant's shoes"</p>

                  <p>Meta Inc.</p>
                </div>
              </div>
            </div>

            <img className={styles.heroImage} src={IMAGES.heroImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
