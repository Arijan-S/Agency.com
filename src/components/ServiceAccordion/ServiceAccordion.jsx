import { useState, useEffect, useRef } from "react";
import IMAGES from "../../constants/images";
import styles from "./ServiceAccordion.module.css";

const ServiceAccordion = ({ defaultOpenSection }) => {
  const [openSection, setOpenSection] = useState(
    defaultOpenSection || "design"
  );
  const accordionRefs = useRef({});

  useEffect(() => {
    if (defaultOpenSection) {
      setOpenSection(defaultOpenSection);
      setTimeout(() => {
        const element = accordionRefs.current[defaultOpenSection];
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    }
  }, [defaultOpenSection]);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const accordionData = [
    {
      id: "design",
      icon: IMAGES.designIcon,
      title: "Design",
      content: (
        <div className={styles.serviceAccordion}>
          <p className={styles.sectionTitle}>
            Agency is a business you hire to outsource your digital marketing
            efforts
          </p>
          <p className={styles.sectionDescription}>
            Business you hire to outsource your digital marketing efforts,
            instead of handling in-house. They can provide your business with a
            variety of digital solutions to promote your product or service
            online and help you.
          </p>
          <div className={styles.serviceCheckSection}>
            <div className={styles.checkItem}>
              <img src={IMAGES.checkIcon} alt="Checkmark Icon" />
              <p>Web Development</p>
            </div>
            <div className={styles.checkItem}>
              <img src={IMAGES.checkIcon} alt="Checkmark Icon" />
              <p>Brand Strategy</p>
            </div>
            <div className={styles.checkItem}>
              <img src={IMAGES.checkIcon} alt="Checkmark Icon" />
              <p>Art Direction</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "development",
      icon: IMAGES.developentIcon,
      title: "Development",
      content: (
        <div className={styles.serviceAccordion}>
          <p className={styles.sectionTitle}>
            Custom development solutions tailored to your business needs
          </p>
          <p className={styles.sectionDescription}>
            We build robust, scalable applications using modern technologies and
            best practices. Our development team creates custom solutions that
            drive business growth and provide exceptional user experiences
            across all platforms.
          </p>
          <div className={styles.serviceCheckSection}>
            <div className={styles.checkItem}>
              <img src={IMAGES.checkIcon} alt="Checkmark Icon" />
              <p>Web Development</p>
            </div>
            <div className={styles.checkItem}>
              <img src={IMAGES.checkIcon} alt="Checkmark Icon" />
              <p>Brand Strategy</p>
            </div>
            <div className={styles.checkItem}>
              <img src={IMAGES.checkIcon} alt="Checkmark Icon" />
              <p>Art Direction</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "marketing",
      icon: IMAGES.marketingIcon,
      title: "Marketing",
      content: (
        <div className={styles.serviceAccordion}>
          <p className={styles.sectionTitle}>
            Data-driven marketing strategies that deliver measurable results
          </p>
          <p className={styles.sectionDescription}>
            Our marketing experts create comprehensive campaigns that increase
            brand visibility, drive qualified traffic, and convert leads into
            customers. We focus on ROI and sustainable growth through proven
            digital marketing techniques.
          </p>
          <div>
            <div className={styles.serviceCheckSection}>
              <div className={styles.checkItem}>
                <img src={IMAGES.checkIcon} alt="Checkmark Icon" />
                <p>Web Development</p>
              </div>
              <div className={styles.checkItem}>
                <img src={IMAGES.checkIcon} alt="Checkmark Icon" />
                <p>Brand Strategy</p>
              </div>
              <div className={styles.checkItem}>
                <img src={IMAGES.checkIcon} alt="Checkmark Icon" />
                <p>Art Direction</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className={styles.serviceAccordionSection}>
      <div className={styles.accordionMenu}>
        {accordionData.map((item) => (
          <div
            key={item.id}
            className={styles.accordionItem}
            ref={(el) => (accordionRefs.current[item.id] = el)}
          >
            <div
              className={styles.accordionHeader}
              onClick={() => toggleSection(item.id)}
            >
              <img src={item.icon} alt={`${item.title} Icon`} />
              <h3>{item.title}</h3>
              <img
                src={
                  openSection === item.id
                    ? IMAGES.accordionUp
                    : IMAGES.accordionDown
                }
                alt={openSection === item.id ? "Collapse" : "Expand"}
                className={styles.toggleIcon}
              />
            </div>
            {openSection === item.id && (
              <div className={styles.accordionContent}>{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceAccordion;
