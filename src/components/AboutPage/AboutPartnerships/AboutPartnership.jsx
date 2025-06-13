import IMAGES from "../../../constants/images";
import styles from "./AboutPartnerships.module.css";

const AboutPartnership = () => {
  return (
    <>
      <div className={styles.partnerships}>
        <img src={IMAGES.digisideDark} alt="Digitalside" />
        <img src={IMAGES.vortexDark} alt="Vortex" />
        <img src={IMAGES.travelDark} alt="Travel Explorer" />
        <img src={IMAGES.fuzionDark} alt="Fuzion" />
        <img src={IMAGES.mediaDark} alt="MediaFurry" />
      </div>
    </>
  );
};

export default AboutPartnership;
