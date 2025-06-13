import { Link, useNavigate } from "react-router-dom";
import IMAGES from "../../constants/images";
import styles from "./Footer.module.css";
import { CUSTOM_ROUTES } from "../../constants/custom-routes";

const Footer = () => {
  const navigate = useNavigate();

  const handleServiceClick = (e, serviceId) => {
    e.preventDefault();
    navigate(`${CUSTOM_ROUTES.SERVICES}?section=${serviceId}`);
  };

  return (
    <>
      <div className={styles.footerSection}>
        <div className="container">
          <footer className={styles.footer}>
            <div className={styles.footerLinks}>
              <h2>Agency</h2>

              <div className={styles.menu}>
                <h3>MENU</h3>

                <Link to={CUSTOM_ROUTES.ABOUT}>About</Link>
                <Link to={CUSTOM_ROUTES.PORTFOLIO}>Portfolio</Link>
                <Link to={CUSTOM_ROUTES.SERVICES}>Services</Link>
                <Link to={CUSTOM_ROUTES.BLOG}>Blog</Link>
                <Link to={CUSTOM_ROUTES.CONTACT}>Contact</Link>
              </div>

              <div className={styles.menu}>
                <h3>SERVICE</h3>

                <Link
                  to={CUSTOM_ROUTES.SERVICES}
                  onClick={(e) => handleServiceClick(e, "design")}
                >
                  Design
                </Link>
                <Link
                  to={CUSTOM_ROUTES.SERVICES}
                  onClick={(e) => handleServiceClick(e, "development")}
                >
                  Development
                </Link>
                <Link
                  to={CUSTOM_ROUTES.SERVICES}
                  onClick={(e) => handleServiceClick(e, "marketing")}
                >
                  Marketing
                </Link>
              </div>
            </div>

            <div className={styles.socials}>
              <a href="https://www.facebook.com/" target="_blank">
                <img src={IMAGES.facebookIcon} alt="facebook-icon" />
              </a>

              <a href="https://x.com/" target="_blank">
                <img src={IMAGES.twitterIcon} alt="twitter-icon" />
              </a>

              <a href="https://www.instagram.com/?hl=en" target="_blank">
                <img src={IMAGES.instaIcon} alt="isntagram-icon" />
              </a>
            </div>
          </footer>

          <footer className={styles.lowerFooter}>
            <div className={styles.hrLine}></div>

            <div className={styles.lowerFooterDescription}>
              <p>Copyright © 2025 AsDeveloped. All Rights Reserved.</p>

              <div className={styles.legalLinks}>
                <a href="/">Terms of Use</a>
                <a href="/">Privacy Policy</a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
