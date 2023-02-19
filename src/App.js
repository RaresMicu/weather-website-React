import styles from "./Components/app.module.css";
import DateLocation from "./Components/DateLocation";
import FiveDaysForecast from "./Components/FiveDaysForecast";
import Inputs from "./Components/Inputs";
import WeatherConditions from "./Components/WeatherConditions";
import getFormattedData, {
  getCities,
  getOnlyTheNameCity,
} from "./Services/appService";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState({ q: "Madrid" });
  const [weather, setWeather] = useState(null);
  const [cities, setCities] = useState([]);
  const [list, setList] = useState([]);
  const backgroundURL = "https://source.unsplash.com/1600x900/?" + query.q;

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedData({ ...query }).then((data) => {
        setWeather(data);
        setList(data.List);
      });
    };
    fetchWeather();
    setCities(getCities);
  }, [query]);

  return (
    <div
      className={styles.background}
      style={{
        backgroundImage: `url(${backgroundURL})`,
      }}
    >
      <div className={styles.backgroundFade}>
        <Inputs setQuery={setQuery} />

        {weather && (
          <div>
            <DateLocation weather={weather} />
            <WeatherConditions weather={weather} />
          </div>
        )}

        <FiveDaysForecast weather={list} />
      </div>
    </div>
  );
}

export default App;
