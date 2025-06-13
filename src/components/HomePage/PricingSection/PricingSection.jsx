import { Link } from "react-router-dom";
import IMAGES from "../../../constants/images";
import styles from "./PricingSection.module.css";
import { CUSTOM_ROUTES } from "../../../constants/custom-routes";

const PricingSection = () => {
  return (
    <>
      <div className={styles.pricingSection}>
        <div className="container">
          <div className={styles.pricingContainer}>
            <p className={styles.subHeader}>PRICING</p>
            <h3>Check Our Pricing Plans</h3>

            <div className={styles.offers}>
              <div className={styles.offerCard1}>
                <p className={styles.cardSubHeader}>CONSULTATION</p>
                <h4>Free</h4>
                <p className={styles.cardDescription}>
                  Your digital marketing efforts, instead of handling in-house.
                </p>

                <div className={styles.offer}>
                  <img src={IMAGES.offerPlus} alt="plus" />
                  <p>Brand Design</p>
                </div>

                <div className={styles.offer}>
                  <img src={IMAGES.offerMinus} alt="minus" />
                  <p>Market Analysis</p>
                </div>

                <div className={styles.offer}>
                  <img src={IMAGES.offerMinus} alt="minus" />
                  <p>Production</p>
                </div>

                <Link to={`${CUSTOM_ROUTES.CONTACT}#contactUsSection`}>
                  <button>CONTACT US</button>
                </Link>
              </div>

              <div className={styles.offerCard2}>
                <p className={styles.tag}>Popular</p>
                <p className={styles.cardSubHeader}>CONSULTATION</p>
                <h4>$1500</h4>
                <p className={styles.cardDescription}>
                  Provide your business with a variety of digital solutions to
                  promote.
                </p>

                <div className={styles.offer}>
                  <img src={IMAGES.offerPlus} alt="plus" />
                  <p>Brand Design</p>
                </div>

                <div className={styles.offer}>
                  <img src={IMAGES.offerPlus} alt="plus" />
                  <p>Market Analysis</p>
                </div>

                <div className={styles.offer}>
                  <img src={IMAGES.offerMinus} alt="minus" />
                  <p>Production</p>
                </div>

                <Link to={`${CUSTOM_ROUTES.CONTACT}#contactUsSection`}>
                  <button>CONTACT US</button>
                </Link>
              </div>

              <div className={styles.offerCard3}>
                <p className={styles.cardSubHeader}>Design+Code</p>
                <h4>$2900</h4>
                <p className={styles.cardDescription}>
                  Help you hit your marketing goals and grow your business.
                </p>

                <div className={styles.offer}>
                  <img src={IMAGES.offerPlus} alt="plus" />
                  <p>Brand Design</p>
                </div>

                <div className={styles.offer}>
                  <img src={IMAGES.offerPlus} alt="plus" />
                  <p>Market Analysis</p>
                </div>

                <div className={styles.offer}>
                  <img src={IMAGES.offerPlus} alt="plus" />
                  <p>Production</p>
                </div>

                <Link to={`${CUSTOM_ROUTES.CONTACT}#contactUsSection`}>
                  <button>CONTACT US</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingSection;
