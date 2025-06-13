import styles from "./HowWeWork.module.css";
import IMAGES from "../../../constants/images";

const HowWeWork = () => {
  return (
    <>
      <div className={styles.howWeWorkContainer}>
        <div className="container">
          <div id="howWeWork" className={styles.howWeWork}>
            <div className={styles.howWeWorkDescription}>
              <p className={styles.subheader}>HOW WE WORK</p>
              <h2 className={styles.header}>
                Making Your Projects Look Awesome
              </h2>
              <p className={styles.description}>
                Technical skills, design, business understanding, ability to put
                themselves in the merchant's shoes.
              </p>
              <p className={styles.detail}>
                We combine creativity with technical expertise to deliver
                exceptional results. Our team works closely with clients to
                understand their vision and transform it into reality, ensuring
                every project exceeds expectations.
              </p>
            </div>

            <div className={styles.howWeWorkServices}>
              <div className={styles.service}>
                <p>1</p>
                <p>Full service range including</p>
              </div>

              <div className={styles.service}>
                <p>2</p>
                <p>Technical skills, design, business</p>
              </div>
              <div className={styles.service}>
                <p>3</p>
                <p>Themselves in the merchant's</p>
              </div>
            </div>
          </div>

          <div className={styles.hrLine}></div>

          <div className={styles.videoSection}>
            <img src={IMAGES.video} alt="video" />

            <div className={styles.video_reel_section}>
              <p className={styles.videoSubheader}>Video Reel</p>
              <h2 className={styles.videoHeader}>
                Unlock The Greatest Value Possible
              </h2>
              <p className={styles.videoDescription}>
                Design, business understanding, ability to put themselves in the
                merchant's shoes meant to partner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowWeWork;
