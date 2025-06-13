import IMAGES from "../../../constants/images";
import styles from "./Partnerships.module.css";

const Partnerships = () => {
  return (
    <>
      <div className={styles.partnershipsContainer}>
        <div className="container">
          <div className={styles.partnerships}>
            <img src={IMAGES.partnership1} alt="partnership-1" />
            <img src={IMAGES.partnership2} alt="partnership-2" />
            <img src={IMAGES.partnership3} alt="partnership=3" />
            <img src={IMAGES.partnership4} alt="partnership-4" />
            <img src={IMAGES.partnership5} alt="partnership-5" />
          </div>
          <div className={styles.hrLine}></div>
        </div>
      </div>
    </>
  );
};

export default Partnerships;
