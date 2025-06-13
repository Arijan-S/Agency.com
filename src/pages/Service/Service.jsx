import { useSearchParams } from "react-router-dom";
import FooterBanner from "../../components/FooterBanner/FooterBanner";
import PricingSection from "../../components/HomePage/PricingSection/PricingSection";
import ServiceAccordion from "../../components/ServiceAccordion/ServiceAccordion";
import styles from "./Service.module.css";

const Service = () => {
  const [searchParams] = useSearchParams();
  const section = searchParams.get("section");

  return (
    <>
      <div className={styles.servicePageDescription}>
        <div className="container">
          <h2>Services</h2>
        </div>
      </div>

      <div className={styles.servicePage}>
        <div className="container">
          <div className={styles.servicePageContainer}>
            <div className={styles.servicePageHeader}>
              <p className={styles.subheader}>SERVICES</p>

              <h3>
                Digital agency is a <br />
                business you hire to <br />
                outscore your digital <br />
                marketing efforts
              </h3>
            </div>

            <p className={styles.serviceDescription}>
              Ability to put themselves in the merchant's shoes. It is meant to
              partner <br /> on the long run, and work as an extension of the
              merchant's team. <br />
              <br />A digital agency is a business you hire to outsource your
              digital <br /> marketing efforts, instead of handling in-house.
              They can provide your <br /> business with a variety of digital
              solutions to promote your product or <br />
              service online and help you.
            </p>
          </div>

          <ServiceAccordion defaultOpenSection={section} />
        </div>
      </div>

      <FooterBanner />
    </>
  );
};

export default Service;
