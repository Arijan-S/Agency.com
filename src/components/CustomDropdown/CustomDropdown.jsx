import React, { useState, useRef, useEffect } from "react";
import styles from "./CustomDropdown.module.css";
import IMAGES from "../../constants/images";

const CustomDropdown = ({ options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const selectedOptionLabel =
    options.find((option) => option.value === value)?.label || placeholder;

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      <div className={styles.selectedItem} onClick={() => setIsOpen(!isOpen)}>
        {selectedOptionLabel}
        <img src={IMAGES.triangleInput} alt="/" />
      </div>
      {isOpen && (
        <ul className={styles.optionsList}>
          {options.map((option) => (
            <li
              key={option.value}
              className={`${styles.optionItem} ${
                option.value === value ? styles.selected : ""
              }`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
