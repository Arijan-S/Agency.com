import { useParams, useNavigate } from "react-router-dom";
import IMAGES from "../../constants/images";
import { CUSTOM_ROUTES } from "../../constants/custom-routes";
import styles from "./PortfolioDetails.module.css";

const portfolioPosts = {
  1: {
    link: "BACK TO PORTFOLIO",
    title: "Sofa Project",
    detail:
      "Agency provides a full service range including technical skills, design, business understanding.",
    description:
      "Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
    category: [
      "Art Direction",
      "User Interface",
      "Branding Strategy",
      "Print Design",
      "3D Render",
    ],
    client: "Vortex",
    client_logo: IMAGES.partnership1,
    date: "Dec 2025",
    image: IMAGES.sofaPortfolio,
  },

  2: {
    link: "BACK TO PORTFOLIO",
    title: "KeyBoard",
    detail:
      "Agency provides a full service range including technical skills, design, business understanding.",
    description:
      "Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
    category: [
      "Art Direction",
      "User Interface",
      "Branding Strategy",
      "Print Design",
      "3D Render",
    ],
    client: "Vortex",
    client_logo: IMAGES.partnership2,
    date: "Feb 2025",
    image: IMAGES.keyboardPortfolio,
  },
  3: {
    link: "BACK TO PORTFOLIO",
    title: "Work Media",
    detail:
      "Agency provides a full service range including technical skills, design, business understanding.",
    description:
      "Outsource your digital marketing efforts, instead of handling in-house.",
    category: [
      "Art Direction",
      "User Interface",
      "Branding Strategy",
      "Print Design",
      "3D Render",
    ],
    client: "Client Name",
    client_logo: IMAGES.partnership3,
    date: "June 2025",
    image: IMAGES.workmediaPortfilio,
  },
  4: {
    link: "BACK TO PORTFOLIO",
    title: "DD Done",
    detail:
      "Agency provides a full service range including technical skills, design, business understanding.",
    description:
      "Outsource your digital marketing efforts, instead of handling in-house.",
    category: [
      "Art Direction",
      "User Interface",
      "Branding Strategy",
      "Print Design",
      "3D Render",
    ],
    client: "Client Name",
    client_logo: IMAGES.partnership3,
    date: "July 2025",
    image: IMAGES.dddonePortfolio,
  },
  5: {
    link: "BACK TO PORTFOLIO",
    title: "Abstract Design",
    detail:
      "Agency provides a full service range including technical skills, design, business understanding.",
    description:
      "Outsource your digital marketing efforts, instead of handling in-house.",
    category: [
      "Art Direction",
      "User Interface",
      "Branding Strategy",
      "Print Design",
      "3D Render",
    ],
    client: "Client Name",
    client_logo: IMAGES.partnership4,
    date: "Jan 2025",
    image: IMAGES.abstractPortfolio,
  },
  6: {
    link: "BACK TO PORTFOLIO",
    title: "Hand P",
    detail:
      "Agency provides a full service range including technical skills, design, business understanding.",
    description:
      "Outsource your digital marketing efforts, instead of handling in-house.",
    category: [
      "Art Direction",
      "User Interface",
      "Branding Strategy",
      "Print Design",
      "3D Render",
    ],
    client: "Client Name",
    client_logo: IMAGES.partnership5,
    date: "Sep 2025",
    image: IMAGES.handpPortfolio,
  },
  7: {
    link: "BACK TO PORTFOLIO",
    title: "Architect",
    detail:
      "Agency provides a full service range including technical skills, design, business understanding.",
    description:
      "Outsource your digital marketing efforts, instead of handling in-house.",
    category: [
      "Art Direction",
      "User Interface",
      "Branding Strategy",
      "Print Design",
      "3D Render",
    ],
    client: "Client Name",
    client_logo: IMAGES.partnership1,
    date: "Nov 2025",
    image: IMAGES.architectPortfolio,
  },
  8: {
    link: "BACK TO PORTFOLIO",
    title: "Calculator",
    detail:
      "Agency provides a full service range including technical skills, design, business understanding.",
    description:
      "Outsource your digital marketing efforts, instead of handling in-house.",
    category: [
      "Art Direction",
      "User Interface",
      "Branding Strategy",
      "Print Design",
      "3D Render",
    ],
    client: "Client Name",
    client_logo: IMAGES.partnership2,
    date: "Date",
    image: IMAGES.calcPortfolio,
  },
  9: {
    link: "BACK TO PORTFOLIO",
    title: "Sport",
    detail:
      "Agency provides a full service range including technical skills, design, business understanding.",
    description:
      "Outsource your digital marketing efforts, instead of handling in-house.",
    category: [
      "Art Direction",
      "User Interface",
      "Branding Strategy",
      "Print Design",
      "3D Render",
    ],
    client: "Client Name",
    client_logo: IMAGES.partnership3,
    date: "Feb 2025",
    image: IMAGES.sportPortfolio,
  },
};

const PortfolioDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = portfolioPosts[id];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <div className={styles.portfolioDetails}>
        <div className="container">
          <div className={styles.portfolioDetailsContainers}>
            <span
              onClick={() =>
                navigate(`${CUSTOM_ROUTES.PORTFOLIO}#portfolio-${id}`)
              }
              className={styles.backLink}
              style={{ cursor: "pointer" }}
            >
              ← Back to Portfolio
            </span>

            <div className={styles.header}>
              <h1 className={styles.projectTitle}>{project.title}</h1>
              <p className={styles.projectDetail}>{project.detail}</p>
              <p className={styles.projectDescription}>
                Outsource your digital marketing efforts, instead of handling
                in-house. They can provide your business with a variety of
                digital solutions to promote your product or service online and
                help you.
              </p>

              <div className={styles.projectMeta}>
                <div className={styles.metaItem}>
                  <h4>CATEGORY</h4>
                  <ul>
                    {project.category.map((cat, index) => (
                      <li key={index}>{cat}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.metaItemContainer}>
                  <div className={styles.metaItem}>
                    <h4>CLIENT</h4>
                    <img
                      src={project.client_logo}
                      alt={project.client}
                      className={styles.clientLogo}
                    />
                  </div>

                  <div className={styles.metaItemDate}>
                    <h4>DATE</h4>
                    <p>{project.date}</p>
                  </div>
                </div>
              </div>

              <div className={styles.mainImageContainer}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.mainImage}
                />
              </div>
            </div>

            <div className={styles.problemSolutionSection}>
              <h3>Problem</h3>
              <p className={styles.problem}>
                Ability to put themselves in the merchant's shoes. It is meant
                to partner on the long run, and work as an extension of the
                merchant's team. <br /> <br /> A digital agency is a business
                you hire to outsource your digital marketing efforts, instead of
                handling in-house. They can provide your business with a variety
                of digital solutions to promote your product or service online
                and help you.
              </p>
            </div>

            <div className={styles.showcaseContainer}>
              <div className={styles.video}>
                <img src={IMAGES.detailsVideo} alt="video" />
              </div>

              <div className={styles.images}>
                <img src={IMAGES.detailsImage1} alt="/" />
                <img src={IMAGES.detailsImage2} alt="/" />
                <img src={IMAGES.detailsImage3} alt="/" />
                <img src={IMAGES.detailsImage4} alt="/" />
              </div>
            </div>

            <div className={styles.problemSolutionSection}>
              <h3>Solution</h3>
              <p className={styles.solution}>
                Put themselves in the merchant's shoes. It is meant to partner
                on the long run, and work as an extension of the merchant's
                team. <br /> <br /> Agency is a business you hire to outsource
                your digital marketing efforts, instead of handling in-house.
                They can provide your business with a variety of digital
                solutions to promote your product or service online and help
                you.
              </p>
            </div>

            <div className={styles.socialSection}>
              <p>SHARE ON</p>
              <div className={styles.socials}>
                <a href="https://www.facebook.com/" target="_blank">
                  <img src={IMAGES.facebookIcon} alt="facebook" />
                </a>

                <a href="https://x.com/" target="_blank">
                  <img src={IMAGES.twitterIcon} alt="twitter" />
                </a>

                <a href="https://www.pinterest.com/.com" target="_blank">
                  <img src={IMAGES.pinterestIcon} alt="pinterest" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioDetails;
