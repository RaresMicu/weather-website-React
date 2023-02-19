import React from "react";
import styles from "./app.module.css";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { iconUrlFromCode, localTime } from "../Services/appService";

function WeatherConditions({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div>
      <div className={styles.conditionFlex}>
        <p>{details}</p>
      </div>
      <div className={styles.weatherFatherFlex}>
        <div className={styles.weatherConditionsFlex}>
          <img
            src={iconUrlFromCode(icon)}
            alt=""
            className={styles.weatherImage}
          ></img>
          <p className={styles.textCelsiusFlex}>
            {(temp - 273.15).toFixed()}°C
          </p>
          <div className={styles.differentConditionsFlex}>
            <div className={styles.realFeelFlex}>
              <UilTemperature size={18} className={styles.realFeel} />
              Real feel:{" "}
              <span className={styles.realFeelText}>
                {(feels_like - 273.15).toFixed()}°C
              </span>
            </div>
            <div className={styles.realFeelFlex}>
              <UilTear size={18} className={styles.realFeel} />
              Humidity:{" "}
              <span className={styles.realFeelText}>{humidity.toFixed()}%</span>
            </div>
            <div className={styles.realFeelFlex}>
              <UilWind size={18} className={styles.realFeel} />
              Wind:{" "}
              <span className={styles.realFeelText}>{speed.toFixed()}km/h</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.moreFlex}>
        <div className={styles.moreWeatherFlex}>
          <UilSun />
          <p className={styles.riseText}>
            Rise:{" "}
            <span className={styles.riseTextMore}>
              {localTime(sunrise, timezone, "hh:mm a")}
            </span>
            <span className={styles.aLine}>|</span>
          </p>
        </div>
        <div className={styles.moreWeatherFlex}>
          <UilSunset />
          <p className={styles.riseText}>
            Set:{" "}
            <span className={styles.riseTextMore}>
              {localTime(sunset, timezone, "hh:mm a")}
            </span>
            <span className={styles.aLine}>|</span>
          </p>
        </div>
        <div className={styles.moreWeatherFlex}>
          <p className={styles.riseText}>
            High:{" "}
            <span className={styles.riseTextMore}>
              {" "}
              {(temp_max - 273.15).toFixed()}°C
            </span>
            <span className={styles.aLine}>|</span>
          </p>
        </div>
        <div className={styles.moreWeatherFlex}>
          <p className={styles.riseText}>
            Low:{" "}
            <span className={styles.riseTextMore}>
              {(temp_min - 273.15).toFixed()}°C
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherConditions;
