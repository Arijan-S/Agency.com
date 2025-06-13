import { Link, useNavigate } from "react-router-dom";
import IMAGES from "../../../constants/images";
import styles from "./ServiceSection.module.css";
import { CUSTOM_ROUTES } from "../../../constants/custom-routes";

const ServiceSection = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId) => {
    navigate(`${CUSTOM_ROUTES.SERVICES}?section=${serviceId}`);
  };

  return (
    <>
      <div className={styles.serviceSection}>
        <div className="container">
          <div className={styles.serviceDescriptionContainer}>
            <img
              src={IMAGES.image4}
              className={styles.fourthImage}
              alt="image-4"
            />

            <div className={styles.serviceDescription}>
              <p className={styles.subheader}>SERVICE</p>
              <h3 className={styles.title}>
                Making Complex <br /> Digital Products
              </h3>
              <p className={styles.description}>
                Agency provides a full service range including technical skills,
                design, business.
              </p>

              <div className={styles.serviceTestimonialContainer}>
                <div className={styles.serviceTestimonial}>
                  <img src={IMAGES.profile2} alt="profile-2" />
                  <div className={styles.testimonial}>
                    <p>
                      "Understanding, ability to put themselves in the
                      merchant's shoes. It is meant to partner."
                    </p>
                    <p>Jenny Murtaugh</p>
                  </div>
                </div>
              </div>

              <Link to={CUSTOM_ROUTES.SERVICES}>
                <button className={styles.testimonial_btn}>EXPLORE</button>
              </Link>
            </div>
          </div>

          <div className={styles.agencyServices}>
            <p className={styles.subheader}>SERVICE</p>
            <h3>How Our Agency Can Help</h3>

            <div className={styles.servicesGrid}>
              <div
                className={styles.serviceCard}
                onClick={() => handleServiceClick("design")}
              >
                <img src={IMAGES.serivceIcon1} alt="service-1" />
                <h4>Design</h4>
                <p>
                  Agency provides a full service range including technical
                  skills, design.
                </p>
                <Link>Learn More</Link>
              </div>

              <div
                className={styles.serviceCard}
                onClick={() => handleServiceClick("development")}
              >
                <img src={IMAGES.serivceIcon2} alt="service-1" />
                <h4>Development</h4>
                <p>
                  Full service range including technical skills, design,
                  business.
                </p>
                <Link>Discover More</Link>
              </div>

              <div
                className={styles.serviceCard}
                onClick={() => handleServiceClick("marketing")}
              >
                <img src={IMAGES.serviceIcon3} alt="service-1" />
                <h4>Marketing</h4>
                <p>
                  Technical skills, design, business understanding, ability.
                </p>
                <Link>Explore More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
