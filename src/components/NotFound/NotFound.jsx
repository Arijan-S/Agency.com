import { Link } from "react-router-dom";
import { CUSTOM_ROUTES } from "../../constants/custom-routes";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <>
      <div className={styles.notFound}>
        <h3>
          Something went <br /> wrong
        </h3>

        <Link to={CUSTOM_ROUTES.HOME}>Back to home </Link>
      </div>
    </>
  );
};

export default NotFound;
