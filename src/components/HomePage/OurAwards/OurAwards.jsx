import { Link } from "react-router-dom";
import IMAGES from "../../../constants/images";
import styles from "./OurAwards.module.css";

const OurAwards = () => {
  return (
    <>
      <div className={styles.ourAwardsSection}>
        <div className="container">
          <div className={styles.ourAwardsContainer}>
            <h3>Our Awards</h3>

            <div className={styles.awardsList}>
              <div className={styles.hrLine}></div>
              <div className={styles.awardRow}>
                <div className={styles.awardInfo}>
                  <img
                    src={IMAGES.sofaAward}
                    className={styles.awardImage}
                    alt="sofa-award"
                  />
                  <span className={styles.awardTitle}>SOFA</span>
                </div>
                <div className={styles.awardDate}>25 Oct, 2025</div>
                <div className={styles.awardOrg}>
                  <span>Awwwards</span>
                  <img
                    src={IMAGES.awardsLogo}
                    className={styles.awardImage}
                    alt="awards-logo"
                  />
                </div>
              </div>

              <div className={styles.hrLine}></div>
              <div className={styles.awardRow}>
                <div className={styles.awardInfo}>
                  <img
                    src={IMAGES.keyboardAward}
                    className={styles.awardImage}
                    alt="keyboard-award"
                  />
                  <span className={styles.awardTitle}>KeyBoard</span>
                </div>
                <div className={styles.awardDate}>19 Oct, 2025</div>
                <div className={styles.awardOrg}>
                  <span className={styles.cssDesign}>CSS Design Awards</span>
                  <img src={IMAGES.designawardsLogo} alt="design-logo" />
                </div>
              </div>

              <div className={styles.hrLine}></div>
              <div className={styles.awardRow}>
                <div className={styles.awardInfo}>
                  <img
                    src={IMAGES.workmediaAward}
                    className={styles.awardImage}
                    alt="work-media-award"
                  />
                  <span className={styles.awardTitle}>Work Media</span>
                </div>
                <div className={styles.awardDate}>7 Oct, 2025</div>
                <div className={styles.awardOrg}>
                  <span>The FWA</span>
                  <img
                    src={IMAGES.fwaLogo}
                    className={styles.awardImage}
                    alt="fwa-logo"
                  />
                </div>
              </div>

              <div className={styles.hrLine}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurAwards;
