import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./OurBlog.module.css";
import BlogCard from "../BlogCard/BlogCard";
import IMAGES from "../../../constants/images";
import { CUSTOM_ROUTES } from "../../../constants/custom-routes";

const OurBlog = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");

  const blogPosts = [
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
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!/\S+@\S+\.\S+/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(data.message || "Successfully subscribed!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Network error. Please try again later.");
    }
  };

  return (
    <>
      <div className={styles.ourBlogSection}>
        <div className="container">
          <div className={styles.ourBlogContainer}>
            <p className={styles.subtitle}>OUR BLOG</p>
            <div className={styles.blogCTA}>
              <h3 className={styles.title}>
                Latest Blog <br />
                Articles
              </h3>
              <Link to={CUSTOM_ROUTES.BLOG}>
                <button>DISCOVER ALL</button>
              </Link>
            </div>

            <div className={styles.blogs}>
              {blogPosts.map((post) => (
                <Link key={post.id} to={`${CUSTOM_ROUTES.BLOG}/${post.id}`}>
                  <BlogCard
                    img={post.img}
                    subtitle={post.subtitle}
                    title={post.title}
                    date={post.date}
                  />
                </Link>
              ))}
            </div>

            <div className={styles.hrLine}></div>

            <div className={styles.newsletter}>
              <h4>Newsletter</h4>

              <form onSubmit={handleSubmit} className={styles.subscribe}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">SUBSCRIBE</button>

                {status === "success" && (
                  <p style={{ color: "green" }}>{message}</p>
                )}
                {status === "error" && (
                  <p style={{ color: "red" }}>{message}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurBlog;
