import React from "react";
import { UilSearch } from "@iconscout/react-unicons";
import styles from "./app.module.css";
import { useState, useEffect } from "react";
import getCities from "../Services/appService";

function Inputs({ setQuery }) {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      if (city !== "") setQuery({ q: city });
    }
  };

  return (
    <div className={styles.inputsFlex}>
      <div className={styles.searchBarFlex}>
        <label htmlFor="myCities"></label>
        <input
          list="cities"
          id="autocomplete"
          name="myCities"
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="Search..."
          className={styles.searchBar}
        ></input>
        <UilSearch
          size={36}
          className={styles.searchButton}
          onClick={handleSearchClick}
        />
      </div>
    </div>
  );
}

export default Inputs;
