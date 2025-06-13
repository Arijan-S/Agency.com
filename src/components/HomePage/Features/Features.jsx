import { Link, useNavigate } from "react-router-dom";
import IMAGES from "../../../constants/images";
import styles from "./Features.module.css";
import PlanSection from "../../PlanSection/PlanSection";
import { CUSTOM_ROUTES } from "../../../constants/custom-routes";

const Features = () => {
  const navigate = useNavigate();

  const handleAboutClick = (e) => {
    e.preventDefault();
    navigate(`${CUSTOM_ROUTES.ABOUT}#features`);
  };

  const planSectionData = {
    subheader: "FEATURES",
    description: "Long run, and work as an extension of the merchant's team.",
    linkText: "Read more",
    linkTo: `${CUSTOM_ROUTES.ABOUT}#features`,
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

  return (
    <div className={styles.featuresContainer}>
      <div className="container">
        <div className={styles.featureSection}>
          <div className={styles.featureDescriptionContainer}>
            <p className={styles.featureSubheader}>Features</p>
            <h2 className={styles.featureHeader}>Give Your Site A New Look</h2>
            <p className={styles.featureDescription}>
              Service range including technical skills, design, business
              understanding.
            </p>

            <div className={styles.feature_container}>
              <div className={styles.feature}>
                <img src={IMAGES.check1} alt="check" />
                <p>Range including technical skills</p>
              </div>

              <div className={styles.feature}>
                <img src={IMAGES.check1} alt="check" />
                <p>Business understanding</p>
              </div>

              <div className={styles.feature}>
                <img src={IMAGES.check1} alt="check" />
                <p>Partner on the long run</p>
              </div>
            </div>
          </div>
          <img
            src={IMAGES.image3}
            className={styles.thirdImage}
            alt="image-3"
          />
        </div>

        <PlanSection {...planSectionData} />
      </div>
    </div>
  );
};

export default Features;
