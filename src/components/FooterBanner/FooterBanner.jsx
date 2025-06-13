import { Link } from "react-router-dom";
import styles from "./FooterBanner.module.css";
import IMAGES from "../../constants/images";
import { CUSTOM_ROUTES } from "../../constants/custom-routes";

const FooterBanner = () => {
  return (
    <>
      <div className={styles.bannerSection}>
        <div className="container">
          <div className={styles.banner}>
            <div className={styles.bannerDescription}>
              <h2>
                We're Help <br /> To Build Your <br /> Dream Project
              </h2>

              <p>
                A digital agency is a business you hire to outsource your <br />{" "}
                digital marketing efforts, instead of handling in-house.
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

            <img src={IMAGES.image7} alt="" className={styles.bannerImg} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBanner;
