import IMAGES from "../../../constants/images";
import styles from "./EventSection.module.css";

const EventSection = () => {
  return (
    <>
      <div className={styles.eventSection}>
        <div className="container">
          <div className={styles.eventContainer}>
            <p className={styles.subheader}>EVENTS</p>
            <h3>Explore Future Conferences</h3>

            <div className={styles.eventCardContainer}>
              <div className={styles.eventCard}>
                <div className={styles.date}>
                  <h3>3</h3>
                  <p>November 2025</p>
                </div>

                <div className={styles.time}>
                  <img src={IMAGES.clockIcon} alt="clock-icon" />
                  <p>9:00 am - 3:00 pm</p>
                </div>

                <div className={styles.hrLine}></div>

                <h4>Design Weeks</h4>
                <p className={styles.description}>
                  Digital agency is a business you hire to outsource your
                  digital.
                </p>
              </div>

              <div className={styles.eventCard}>
                <div className={styles.date}>
                  <h3>15</h3>
                  <p>November 2025</p>
                </div>

                <div className={styles.time}>
                  <img src={IMAGES.clockIcon} alt="clock-icon" />
                  <p>1:00 pm - 8:00 pm</p>
                </div>

                <div className={styles.hrLine}></div>

                <h4>Interior Design</h4>
                <p className={styles.description}>
                  Marketing efforts, instead of handling in-house.
                </p>
              </div>

              <div className={styles.eventCard}>
                <div className={styles.date}>
                  <h3>2</h3>
                  <p>December 2025</p>
                </div>

                <div className={styles.time}>
                  <img src={IMAGES.clockIcon} alt="clock-icon" />
                  <p>10:00 am - 2:00 pm</p>
                </div>

                <div className={styles.hrLine}></div>

                <h4>The F design events</h4>
                <p className={styles.description}>
                  Provide your business with a variety of digital solutions to
                  promote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventSection;
