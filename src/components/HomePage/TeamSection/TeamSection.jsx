import styles from "./TeamSection.module.css";
import IMAGES from "../../../constants/images";
import TeamCarousel from "../../TeamCarousel/TeamCarousel";

const TeamSection = () => {
  return (
    <>
      <div className={styles.teamSection}>
        <div className="container">
          <TeamCarousel />
          <div className={styles.founderSection}>
            <img
              src={IMAGES.image6}
              className={styles.sixthImage}
              alt="image-6"
            />
            <div className={styles.founderDescription}>
              <p className={styles.founderSubheader}>FOUNDER WORDS</p>
              <img src={IMAGES.doublequotte} alt="double-quotte" />
              <h3>
                Digital agency is a business you hire to outsource your digital
                marketing efforts
              </h3>

              <p className={styles.founderName}>Ren Delan</p>
              <p className={styles.founderPosition}>Founder</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamSection;
