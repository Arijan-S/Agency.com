import { useState, useEffect } from "react";
import IMAGES from "../../constants/images";
import styles from "./ContactUs.module.css";
import CustomDropdown from "../CustomDropdown/CustomDropdown";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xanordpw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error("Email send error:", error);
    }
  };

  const subjectOptions = [
    { value: "", label: "Select Subject" },
    { value: "Web-Design", label: "Web Design" },
    { value: "Branding", label: "Branding" },
    { value: "Marketing", label: "Marketing" },
    { value: "Development", label: "Development" },
    { value: "Consulting", label: "Consulting" },
    { value: "Other", label: "Other" },
  ];

  return (
    <>
      <div className={styles.getInTouchSection}>
        <img src={IMAGES.map} alt="map" className={styles.mapBg} />
        <div className="container">
          <div className={styles.contactBox}>
            <h3>Get In Touch</h3>

            <form onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
              </div>

              <div className={styles.selectWrapper}>
                <CustomDropdown
                  options={subjectOptions}
                  value={formData.subject}
                  onChange={(value) =>
                    handleChange({ target: { name: "subject", value } })
                  }
                  placeholder="Select Subject"
                />
              </div>

              <div className={styles.inputGroup}>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Message"
                ></textarea>
              </div>

              <div className={styles.formCta}>
                <button type="submit">SUBMIT NOW</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div id="contactUsSection" className={styles.contactUsSection}>
        <div className="container">
          <div className={styles.contactContainer}>
            <div className={styles.contact}>
              <div className={styles.contactOption}>
                <img src={IMAGES.phoneIcon} alt="phone" />
                <p>PHONE</p>
              </div>

              <p>
                <a href="tel:+1 (234) 567-89-00">+1 (234) 567-89-00</a>
              </p>
            </div>

            <div className={styles.contact}>
              <div className={styles.contactOption}>
                <img src={IMAGES.emailIcon} alt="email" />
                <p>EMAIL</p>
              </div>

              <p>
                <a href="mailto:info@agency.com">info@agency.com</a>
              </p>
            </div>

            <div className={styles.contact}>
              <div className={styles.contactOption}>
                <img src={IMAGES.addressIcon} alt="address" />
                <p>ADDRESS</p>
              </div>

              <p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=2247+Lunetta+Street+TX+76301"
                  target="_blank"
                >
                  2247 Lunetta Street, TX 76301
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
