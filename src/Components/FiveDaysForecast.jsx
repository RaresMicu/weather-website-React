import React from "react";
import styles from "./app.module.css";
import { iconUrlFromCode } from "../Services/appService";

function FiveDaysForecast({ weather }) {
  console.log(weather);
  if (!weather) {
    return (
      <div>
        <div className={styles.fatherFiveDays}>
          {" "}
          <div className={styles.forecastFlex}>
            <div className={styles.textUnderlineFlex}>
              <p className={styles.fiveDaysText}>DAILY FORECAST</p>
              <hr className={styles.underline}></hr>
            </div>
          </div>
        </div>
        <div className={styles.fiveDayFlexCentering}>
          <div className={styles.fiveDayFlex}>
            <div className={styles.dayCardFlex}>
              <p className={styles.cardText}>Nan</p>
              <img src="" alt="" className={styles.cardImage}></img>
              <p className={styles.cardText2}>Nan</p>
            </div>
            <div className={styles.dayCardFlex}>
              <p className={styles.cardText}>Nan</p>
              <img src="" alt="" className={styles.cardImage}></img>
              <p className={styles.cardText2}>Nan</p>
            </div>
            <div className={styles.dayCardFlex}>
              <p className={styles.cardText}>Nan</p>
              <img src="" alt="" className={styles.cardImage}></img>
              <p className={styles.cardText2}>Nan</p>
            </div>
            <div className={styles.dayCardFlex}>
              <p className={styles.cardText}>Nan</p>
              <img src="" alt="" className={styles.cardImage}></img>
              <p className={styles.cardText2}>Nan</p>
            </div>
            <div className={styles.dayCardFlex}>
              <p className={styles.cardText}>Nan</p>
              <img src="" alt="" className={styles.cardImage}></img>
              <p className={styles.cardText2}>Nan</p>
            </div>
            <div className={styles.dayCardFlex}>
              <p className={styles.cardText}>Nan</p>
              <img src="" alt="" className={styles.cardImage}></img>
              <p className={styles.cardText2}>Nan</p>
            </div>
          </div>
        </div>
        <p>Inca nu au activat API-ul pentru Onecall</p>
        {alert(
          "API pentru onecall nu a fost activat, pentru a verifica daca s-a activat, va rog sa decomentati randurile din functia getFormattedData din fisierul appService.js. Aplicatia va da fetch la vremea zilei de azi dupa ce se inchid toate alert-urile."
        )}
        ;
      </div>
    );
  } else {
    return (
      <div>
        <div className={styles.fatherFiveDays}>
          {" "}
          <div className={styles.forecastFlex}>
            <div className={styles.textUnderlineFlex}>
              <p className={styles.fiveDaysText}>DAILY FORECAST</p>
              <hr className={styles.underline}></hr>
            </div>
          </div>
        </div>

        <div className={styles.fiveDayFlexCentering}>
          <div className={styles.fiveDayFlex}>
            {weather.map((item) => (
              <div className={styles.dayCardFlex}>
                <p className={styles.cardText}>
                  {item.title ? item.title : "Nan"}
                </p>
                <img
                  src={
                    iconUrlFromCode(item.icon)
                      ? iconUrlFromCode(item.icon)
                      : "Nan"
                  }
                  alt=""
                  className={styles.cardImage}
                ></img>
                <p className={styles.cardText2}>{`${
                  item.temp.toFixed() ? item.temp.toFixed() - 273 : "Nan"
                }°C`}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default FiveDaysForecast;
