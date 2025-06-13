import styles from "./BlogCard.module.css";

const BlogCard = (props) => {
  return (
    <>
      <div className={styles.card}>
        <img src={props.img} alt="/" />
        <p className={styles.subtitle}>{props.subtitle}</p>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.date}>{props.date}</p>
      </div>
    </>
  );
};

export default BlogCard;
