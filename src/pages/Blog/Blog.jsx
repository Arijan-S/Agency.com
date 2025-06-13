import { Link } from "react-router-dom";
import { CUSTOM_ROUTES } from "../../constants/custom-routes";
import FooterBanner from "../../components/FooterBanner/FooterBanner";
import BlogCard from "../../components/HomePage/BlogCard/BlogCard";
import Newsletter from "../../components/Newsletter/Newsletter";
import IMAGES from "../../constants/images";
import styles from "./Blog.module.css";
import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    const lastViewedBlogId = sessionStorage.getItem("lastViewedBlogId");
    if (lastViewedBlogId) {
      // Find the blog card element
      const blogCard = document.querySelector(
        `[data-blog-id="${lastViewedBlogId}"]`
      );
      if (blogCard) {
        // Scroll the blog card into view with smooth behavior
        blogCard.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      // Clear the stored ID
      sessionStorage.removeItem("lastViewedBlogId");
    }
  }, []);

  const blogPosts = [
    {
      id: 1,
      img: IMAGES.headerBlog1,
      subtitle: "Stories",
      title: "Performance marketing agencies specialize",
      date: "7 Dec, 2025",
    },
    {
      id: 2,
      img: IMAGES.headerBlog2,
      subtitle: "Design",
      title: "Digital marketing channels",
      date: "23 Nov, 2025",
    },
    {
      id: 3,
      img: IMAGES.blogPage1,
      subtitle: "Stories",
      title: "Agency is a business you hire to outsource",
      date: "5 Nov, 2025",
    },
    {
      id: 4,
      img: IMAGES.blogPage2,
      subtitle: "Design",
      title: "Outsource your digital marketing efforts",
      date: "29 Oct, 2025",
    },
    {
      id: 5,
      img: IMAGES.blogPage3,
      subtitle: "Marketing",
      title: "Your business with a variety of digital",
      date: "21 Oct, 2025",
    },
    {
      id: 6,
      img: IMAGES.blogPage4,
      subtitle: "Design",
      title: "Analytics to track and report on results",
      date: "17 Nov, 2025",
    },
    {
      id: 7,
      img: IMAGES.blogPage5,
      subtitle: "Branding",
      title: "The most well known performance",
      date: "12 Oct, 2021",
    },
    {
      id: 8,
      img: IMAGES.blogPage6,
      subtitle: "Stories",
      title: "Marketing channels native advertising",
      date: "12 Oct, 2021",
    },
  ];

  return (
    <>
      <div className={styles.blogPageDescription}>
        <div className="container">
          <h2>Blog Articles</h2>
          <p>
            Agency provides a full service range including technical skills,
            design, <br />
            business understanding.
          </p>
        </div>
      </div>

      <div className={styles.blogContainer}>
        <div className="container">
          <div className={styles.headerBlogCards}>
            <div className={styles.headerCard}>
              <Link
                to={`${CUSTOM_ROUTES.BLOG}/${blogPosts[0].id}`}
                data-blog-id={blogPosts[0].id}
              >
                <BlogCard
                  img={blogPosts[0].img}
                  subtitle={blogPosts[0].subtitle}
                  title={blogPosts[0].title}
                  date={blogPosts[0].date}
                />
              </Link>

              <Link
                to={`${CUSTOM_ROUTES.BLOG}/${blogPosts[1].id}`}
                data-blog-id={blogPosts[1].id}
              >
                <BlogCard
                  img={blogPosts[1].img}
                  subtitle={blogPosts[1].subtitle}
                  title={blogPosts[1].title}
                  date={blogPosts[1].date}
                />
              </Link>
            </div>
            <div className={styles.hrLine}></div>
          </div>

          <div className={styles.cards}>
            {blogPosts.slice(2).map((post) => (
              <Link
                key={post.id}
                to={`${CUSTOM_ROUTES.BLOG}/${post.id}`}
                data-blog-id={post.id}
              >
                <BlogCard
                  img={post.img}
                  subtitle={post.subtitle}
                  title={post.title}
                  date={post.date}
                />
              </Link>
            ))}
          </div>

          <Newsletter />
        </div>
      </div>
      <FooterBanner />
    </>
  );
};

export default Blog;
