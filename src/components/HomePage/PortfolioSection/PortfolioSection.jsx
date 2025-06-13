import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./PortfolioSection.module.css";
import IMAGES from "../../../constants/images";
import { CUSTOM_ROUTES } from "../../../constants/custom-routes";

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <>
      <div className={styles.portfolioSection}>
        <div className="container">
          <div className={styles.portfolioContainer}>
            <p>PORTFOLIO</p>
            <h2>Latest Work</h2>

            <div className={styles.workContainer}>
              <Link to={`${CUSTOM_ROUTES.PORTFOLIO}/1`} className={styles.work}>
                <img src={IMAGES.sofaDesign} alt="sofa-design" />
              </Link>

              <Link to={`${CUSTOM_ROUTES.PORTFOLIO}/2`} className={styles.work}>
                <img src={IMAGES.keyBoard} alt="keyboard-branding" />
              </Link>

              <Link to={`${CUSTOM_ROUTES.PORTFOLIO}/3`} className={styles.work}>
                <img src={IMAGES.workMedia} alt="workmedia-illustration" />
              </Link>

              <Link to={`${CUSTOM_ROUTES.PORTFOLIO}/4`} className={styles.work}>
                <img src={IMAGES.ddDone} alt="dddone-motion" />
              </Link>
            </div>

            <Link to={CUSTOM_ROUTES.PORTFOLIO}>
              <button>EXPLORE MORE</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioSection;
