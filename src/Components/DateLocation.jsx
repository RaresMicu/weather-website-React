import React from "react";
import styles from "./app.module.css";
import { localTime } from "../Services/appService";

function DateLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <div>
      <div className={styles.dateFlex}>
        <p className={styles.date}>{localTime(dt, timezone)}</p>
      </div>
      <div className={styles.locationFlex}>
        <p className={styles.location}>{`${name}, ${country}`}</p>
      </div>
    </div>
  );
}

export default DateLocation;
