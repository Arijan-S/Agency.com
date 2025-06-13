import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import styles from "./TeamCarousel.module.css";
import IMAGES from "../../constants/images";

const TeamCarousel = () => {
  const teamMembers = [
    {
      name: "Azah Anyeni",
      role: "Designer",
      image: IMAGES.team1,
    },

    {
      name: "Roelof Bekkenenks",
      role: "React Developer",
      image: IMAGES.team2,
    },

    {
      name: "Leonardo Oliveira",
      role: "Illustrator",
      image: IMAGES.team3,
    },

    {
      name: "Izabella Tabakova",
      role: "Product Designer",
      image: IMAGES.team4,
    },

    {
      name: "Elon Musk",
      role: "Astronaut",
      initials: "EM",
      hasBorder: true,
    },

    {
      name: "Donald Trump",
      role: "President",
      initials: "DP",
      hasBorder: true,
    },

    {
      name: "Kanye West",
      role: "Him",
      initials: "YE",
      hasBorder: true,
    },

    {
      name: "Jeff Bezos",
      role: "Lex Luthor",
      initials: "JB",
      hasBorder: true,
    },

    {
      name: "Robert Downey Jr",
      role: "Blacksmith",
      initials: "RD",
      hasBorder: true,
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [membersPerPage, setMembersPerPage] = useState(4);
  const totalPages = Math.ceil(teamMembers.length / membersPerPage);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setMembersPerPage(1);
      } else {
        setMembersPerPage(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const startIndex = currentPage * membersPerPage;
  const visibleMembers = teamMembers.slice(
    startIndex,
    startIndex + membersPerPage
  );

  return (
    <>
      <div className={styles.teamContainer}>
        <p className={styles.subtitle}>OUR TEAM</p>
        <h2>
          Team of Designers <br /> and Developers
        </h2>

        <div className={styles.arrowContainer}>
          <img
            src={IMAGES.arrowLeft}
            alt="previous"
            className={styles.arrowIcon}
            onClick={handlePrev}
          />
          <img
            src={IMAGES.arrowRight}
            alt="next"
            className={styles.arrowIcon}
            onClick={handleNext}
          />
        </div>

        <div className={styles.team} {...swipeHandlers}>
          {visibleMembers.map((member, index) => (
            <div key={index} className={styles.teamCard}>
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className={styles.avatar}
                />
              ) : (
                <div
                  className={styles.avatar}
                  style={{
                    border: "1px solid #3A3C56",
                    borderRadius: "7px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "transparent",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    width: "270px",
                    height: "272px",
                    color: "#EF6D58",
                  }}
                >
                  {member.initials}
                </div>
              )}
              <h3>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
            </div>
          ))}
        </div>

        <div className={styles.sliderDots}>
          {Array.from({ length: totalPages }).map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                index === currentPage ? styles.dotActive : ""
              }`}
              onClick={() => setCurrentPage(index)}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamCarousel;
