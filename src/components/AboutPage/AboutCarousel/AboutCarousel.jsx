import React, { useState, useEffect, useRef } from "react";
import styles from "./AboutCarousel.module.css";
import IMAGES from "../../../constants/images";

const AboutCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const testimonials = [
    {
      id: 1,
      rating: IMAGES.testimonialReview,
      text: "A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
      author: "Alan Marti",
      company: "Meta Inc",
      avatar: IMAGES.testimonial1,
    },
    {
      id: 2,
      rating: IMAGES.testimonialReview,
      text: "Provide your business with a variety of digital solutions to promote your product or service online.",
      author: "Ricardo Kann",
      company: "Photogram",
      avatar: IMAGES.testimonial2,
    },
    {
      id: 3,
      rating: IMAGES.testimonialReview,
      text: "Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety.",
      author: "Graham Griffiths",
      company: "Twitor",
      avatar: IMAGES.testimonial3,
    },

    {
      id: 4,
      rating: IMAGES.testimonialReview,
      text: "Working with this digital agency has transformed our online presence. Their strategic approach and creative solutions helped us reach new audiences and achieve remarkable growth in our digital marketing campaigns.",
      author: "Sarah Chen",
      company: "TechFlow Solutions",
      avatar: "SC",
    },

    {
      id: 5,
      rating: IMAGES.testimonialReview,
      text: "The team's expertise in digital marketing is exceptional. They helped us navigate the complex world of online advertising and delivered results that exceeded our expectations. A true partner in our digital journey.",
      author: "Marcus Rodriguez",
      company: "InnovateX",
      avatar: "MR",
    },

    {
      id: 6,
      rating: IMAGES.testimonialReview,
      text: "Their data-driven approach and creative solutions have been instrumental in our success. The team's dedication to understanding our business goals and delivering tailored strategies has made all the difference.",
      author: "Priya Patel",
      company: "Global Dynamics",
      avatar: "PP",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  // Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const distance = touchStartX.current - touchEndX.current;
      if (distance > 50) {
        nextSlide(); // swipe left
      } else if (distance < -50) {
        prevSlide(); // swipe right
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carouselContainer}>
        <button className={styles.navArrow} onClick={prevSlide}>
          ‹
        </button>

        <div
          className={styles.carousel}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={styles.carouselTrack}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={styles.testimonialCard}>
                <img src={testimonial.rating} alt="Rating" />
                <p className={styles.testimonialText}>{testimonial.text}</p>
                <div className={styles.author}>
                  <div className={styles.authorAvatar}>
                    {typeof testimonial.avatar === "string" &&
                    testimonial.avatar.length <= 2 ? (
                      testimonial.avatar
                    ) : (
                      <img
                        src={testimonial.avatar}
                        alt={`${testimonial.author}'s avatar`}
                      />
                    )}
                  </div>
                  <div className={styles.authorInfo}>
                    <h3>{testimonial.author}</h3>
                    <p>{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className={styles.navArrow} onClick={nextSlide}>
          ›
        </button>

        <div className={styles.mobileNav}>
          <button className={styles.navArrow} onClick={prevSlide}>
            ‹
          </button>
          <button className={styles.navArrow} onClick={nextSlide}>
            ›
          </button>
        </div>

        <div className={styles.carouselDots}>
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                index === currentIndex ? styles.active : ""
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCarousel;
