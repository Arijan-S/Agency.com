import { Link } from "react-router-dom";
import IMAGES from "../../constants/images";
import styles from "./AboutSection.module.css";
import { CUSTOM_ROUTES } from "../../../constants/custom-routes";

const AboutSection = () => {
  return (
    <>
      <div className={styles.aboutContainer}>
        <div className="container">
          <div className={styles.about}>
            <img src={IMAGES.image2} alt="image-2" />

            <div className={styles.aboutDescription}>
              <p className={styles.subheader}>ABOUT</p>
              <h2>An Experience Design Agency</h2>
              <p className={styles.subDescription}>
                Provides a full service range
              </p>
              <p className={styles.description}>
                Ability to put themselves in the merchant's shoes. It is meant
                to partner on the long run, and work as an extension of the
                merchant's team.
              </p>
              <Link to={CUSTOM_ROUTES.ABOUT}>
                <button>ABOUT US</button>
              </Link>
            </div>
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
      </div>
    </>
  );
};

export default AboutSection;
