import React from "react";
import { Link } from "react-router-dom";
import styles from "./PlanSection.module.css";
import IMAGES from "../../constants/images"; // Assuming IMAGES is needed for the icon

const PlanSection = ({
  subheader,
  description,
  linkText,
  linkTo,
  subDescription,
  plan1,
  plan2,
}) => {
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.featuresPlanContainer}>
      <div className={styles.featurePlanDescription}>
        <p className={styles.planSubheader}>{subheader}</p>
        <p className={styles.planDescription}>{description}</p>
        {subDescription ? (
          <p className={styles.plansubdescription}>{subDescription}</p>
        ) : linkTo ? (
          <Link to={linkTo}>{linkText}</Link>
        ) : null}
      </div>

      <div className={styles.plansCardContainer}>
        <div className={styles.planCard_1}>
          <img src={IMAGES[plan1.icon]} alt={plan1.altText} />
          <h3>{plan1.title}</h3>
          <p>{plan1.description}</p>
        </div>

        <div className={styles.planCard_2}>
          <h3>{plan2.title}</h3>
          <p>{plan2.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PlanSection;
