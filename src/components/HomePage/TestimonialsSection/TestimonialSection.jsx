import { Link } from "react-router-dom";
import IMAGES from "../../../constants/images";
import styles from "./TestimonialsSection.module.css";
import { CUSTOM_ROUTES } from "../../../constants/custom-routes";

const TestimonialSection = () => {
  return (
    <>
      <div className={styles.testimonialSection}>
        <div className="container">
          <div className={styles.testimonialContainer}>
            <p className={styles.subHeader}>TESTIMONIALS</p>
            <h3 className={styles.header}>What Our Clients Saying</h3>

            <div className={styles.testimonialReviewContainer}>
              <div className={styles.reviewCard}>
                <img src={IMAGES.testimonialReview} alt="review" />
                <p className={styles.description}>
                  A digital agency is a business you hire to outsource your
                  digital marketing efforts, instead of handling in-house. They
                  can provide your business with a variety of digital solutions
                  to promote your product or service online and help you.
                </p>
                <div className={styles.person}>
                  <img src={IMAGES.testimonial1} alt="testimonial-1" />
                  <div className={styles.personInfo}>
                    <h4>Alan Martí</h4>
                    <p>Meta Inc.</p>
                  </div>
                </div>
              </div>

              <div className={styles.reviewCard}>
                <img src={IMAGES.testimonialReview} alt="review" />
                <p className={styles.description}>
                  Provide your business with a variety of digital solutions to
                  promote your product or service online.
                </p>
                <div className={styles.person}>
                  <img src={IMAGES.testimonial2} alt="testimonial-2" />
                  <div className={styles.personInfo}>
                    <h4>Richardo Kann</h4>
                    <p>Photogram</p>
                  </div>
                </div>
              </div>

              <div className={styles.reviewCard}>
                <img src={IMAGES.testimonialReview} alt="review" />
                <p className={styles.description}>
                  Outsource your digital marketing efforts, instead of handling
                  in-house. They can provide your business with a variety.
                </p>
                <div className={styles.person}>
                  <img src={IMAGES.testimonial3} alt="testimonial-3" />
                  <div className={styles.personInfo}>
                    <h4>Graham Griffiths</h4>
                    <p>Twitor</p>
                  </div>
                </div>
              </div>

              <div className={styles.reviewCard}>
                <img src={IMAGES.testimonialReview} alt="review" />
                <p className={styles.description}>
                  Promote your product or service online and help you hit your
                  marketing goals and grow your business.
                </p>
                <div className={styles.person}>
                  <img src={IMAGES.testimonial4} alt="testimonial-4" />
                  <div className={styles.personInfo}>
                    <h4>Maria Trofimova</h4>
                    <p>Whochat</p>
                  </div>
                </div>
              </div>
            </div>

            <Link to={`${CUSTOM_ROUTES.ABOUT}#about-carousel`}>
              <button>SEE ALL</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;
