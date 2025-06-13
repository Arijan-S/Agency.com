import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Newsletter.module.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");

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

          {status === "success" && <p style={{ color: "green" }}>{message}</p>}
          {status === "error" && <p style={{ color: "red" }}>{message}</p>}
        </form>
      </div>

      <div className={styles.hrLine}></div>
    </>
  );
};

export default Newsletter;
