import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CUSTOM_ROUTES } from "../../constants/custom-routes";
import FooterBanner from "../../components/FooterBanner/FooterBanner";
import styles from "./Portfolio.module.css";
import IMAGES from "../../constants/images";

const portfolioItems = [
  {
    id: 1,
    image: IMAGES.sofaPortfolio,
    category: "design",
    title: "Sofa Design",
  },
  {
    id: 2,
    image: IMAGES.keyboardPortfolio,
    category: "branding",
    title: "Keyboard Branding",
  },
  {
    id: 3,
    image: IMAGES.workmediaPortfilio,
    category: "illustration",
    title: "Work Media",
  },
  {
    id: 4,
    image: IMAGES.dddonePortfolio,
    category: "motion",
    title: "DD Done",
  },
  {
    id: 5,
    image: IMAGES.abstractPortfolio,
    category: "design",
    title: "Abstract Design",
  },
  {
    id: 6,
    image: IMAGES.handpPortfolio,
    category: "branding",
    title: "Hand P",
  },
  {
    id: 7,
    image: IMAGES.architectPortfolio,
    category: "illustration",
    title: "Architect",
  },
  {
    id: 8,
    image: IMAGES.calcPortfolio,
    category: "design",
    title: "Calculator",
  },
  { id: 9, image: IMAGES.sportPortfolio, category: "motion", title: "Sport" },
];

const categories = [
  { label: "Show All", value: "all" },
  { label: "Design", value: "design" },
  { label: "Branding", value: "branding" },
  { label: "Illustration", value: "illustration" },
  { label: "Motion", value: "motion" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const portfolioId = hash.split("-")[1];
      const element = document.getElementById(`portfolio-${portfolioId}`);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }
    }
  }, []);

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <div className={styles.portfolioPageDescription}>
        <div className="container">
          <h2>Portfolio</h2>
          <p>
            Agency provides a full service range including technical skills,
            design, <br />
            business understanding.
          </p>
        </div>
      </div>

      <div className={styles.portfolioSection}>
        <div className="container">
          <div className={styles.portfolioContainer}>
            {/* Desktop category links */}
            <div className={styles.linkContainer + " " + styles.desktopLinks}>
              <ul>
                <div className={styles.links}>
                  <span>{portfolioItems.length}</span>
                  <Link
                    className={activeCategory === "all" ? styles.active : ""}
                    onClick={() => setActiveCategory("all")}
                  >
                    Show All
                  </Link>
                </div>
                <div className={styles.links}>
                  <span>
                    {
                      portfolioItems.filter(
                        (item) => item.category === "design"
                      ).length
                    }
                  </span>
                  <Link
                    className={activeCategory === "design" ? styles.active : ""}
                    onClick={() => setActiveCategory("design")}
                  >
                    Design
                  </Link>
                </div>
                <div className={styles.links}>
                  <span>
                    {
                      portfolioItems.filter(
                        (item) => item.category === "branding"
                      ).length
                    }
                  </span>
                  <Link
                    className={
                      activeCategory === "branding" ? styles.active : ""
                    }
                    onClick={() => setActiveCategory("branding")}
                  >
                    Branding
                  </Link>
                </div>
                <div className={styles.links}>
                  <span>
                    {
                      portfolioItems.filter(
                        (item) => item.category === "illustration"
                      ).length
                    }
                  </span>
                  <Link
                    className={
                      activeCategory === "illustration" ? styles.active : ""
                    }
                    onClick={() => setActiveCategory("illustration")}
                  >
                    Illustration
                  </Link>
                </div>
                <div className={styles.links}>
                  <span>
                    {
                      portfolioItems.filter(
                        (item) => item.category === "motion"
                      ).length
                    }
                  </span>
                  <Link
                    className={activeCategory === "motion" ? styles.active : ""}
                    onClick={() => setActiveCategory("motion")}
                  >
                    Motion
                  </Link>
                </div>
              </ul>
            </div>
            {/* Mobile dropdown */}
            <div
              className={styles.dropdownContainer + " " + styles.mobileDropdown}
            >
              <select
                className={styles.dropdown}
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.portfolioDisplay}>
              {filteredItems.map((item) => (
                <Link
                  to={`${CUSTOM_ROUTES.PORTFOLIO}/${item.id}`}
                  key={item.id}
                  className={styles.display}
                  id={`portfolio-${item.id}`}
                >
                  <img src={item.image} alt={item.title} />
                  <div className={styles.overlay}>
                    <h3>{item.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FooterBanner />
    </>
  );
};

export default Portfolio;
