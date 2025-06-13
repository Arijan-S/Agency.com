import { useState, useEffect } from "react";
import IMAGES from "../../constants/images";
import styles from "./Contact.module.css";
import ContactUs from "../../components/ContactUs/ContactUs";

const Contact = () => {
  const [openIdx, setOpenIdx] = useState(0);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
      <div className={styles.contactDescription}>
        <div className="container">
          <h2>Contact</h2>
          <p>
            Agency provides a full service range including technical skills,
            design, <br />
            business understanding.
          </p>
        </div>
      </div>

      <div id="contactUsSection" className={styles.contactUsSection}>
        <ContactUs />
      </div>

      <div id="faqSection" className={styles.faqSection}>
        <div className="container">
          <div className={styles.faqContainer}>
            <div className={styles.faqDescription}>
              <p className={styles.subtitle}>FAQ</p>
              <h3>
                Frequently Asked <br />
                Questions
              </h3>
              <p className={styles.description}>
                A digital agency is a business you hire to outsource your <br />
                digital marketing efforts, instead of handling in-house.
              </p>

              <p className={styles.support}>Ask us anything</p>
            </div>

            <div className={styles.accordionMenu}>
              {[
                {
                  question: "A digital agency is a business",
                  answer:
                    "Digital marketing efforts. Instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.",
                },
                {
                  question: "Hire to outsource your digital",
                  answer:
                    "You can hire a digital agency to outsource your digital marketing, web development, branding, and more.",
                },
                {
                  question: "Marketing efforts",
                  answer:
                    "Marketing efforts can be managed by a digital agency to ensure professional results and save you time.",
                },
                {
                  question: "Can provide your business",
                  answer:
                    "A digital agency can provide your business with expertise, resources, and strategies to help you grow.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={
                    openIdx === idx
                      ? `${styles.accordionItem} ${styles.openItem}`
                      : styles.accordionItem
                  }
                >
                  <div
                    className={
                      openIdx === idx
                        ? `${styles.accordionHeader} ${styles.open}`
                        : styles.accordionHeader
                    }
                    onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  >
                    <span>{item.question}</span>
                    <img
                      src={
                        openIdx === idx
                          ? IMAGES.accordionUp
                          : IMAGES.accordionDown
                      }
                      alt={openIdx === idx ? "Collapse" : "Expand"}
                    />
                  </div>
                  {openIdx === idx && (
                    <div className={styles.accordionContent}>{item.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
