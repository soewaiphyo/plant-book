import React from "react";
import styles from "./car-components.module.css";

const Car = ({ label }) => {
  return <div className={styles.textColor}> My label is : {label} </div>;
};

export default Car;
