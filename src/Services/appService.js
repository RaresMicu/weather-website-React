import { DateTime } from "luxon";

const API_KEY = "key";
const weatherURL = "https://api.openweathermap.org/data/2.5/";
const getData = (info, searchParams) => {
  const url = new URL(weatherURL + info);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "key",
    "X-RapidAPI-Host": "host",
  },
};

const getCities = () => {
  return fetch(
    "https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions?limit=10",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

const formatData = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

const formatFiveDaysData = (data) => {
  let { list, timezone } = data;
  let List = [
    {
      title: "",
      temp: 0,
      icon: "",
    },
  ];
  for (let i = 0; i < 5; i++) {
    List[i] = list[(i + 1) * 7];
  }
  List = List.map((d) => {
    return {
      title: localTime(d.dt, timezone, "ccc"),
      temp: d.main.temp,
      icon: d.weather[0].icon,
    };
  });
  return { List };
};

const getFormattedData = async (searchParams) => {
  const formattedData = await getData("weather", searchParams).then(formatData);

  const { lat, lon } = formattedData;

  // const formattedFiveDaysData = await getData("onecall", {
  //   lat,
  //   lon,
  //   exclude: "current, minutely , alerts, hourly",
  //   units: "metric",
  // }).then(formatFiveDaysData);
  // return { ...formattedData };
  // return { ...formattedData, ...formattedFiveDaysData };

  // const { lat, lon } = formattedData;

  const formattedFiveDaysData = await getData("forecast", {
    lat,
    lon,
  }).then(formatFiveDaysData);

  return { ...formattedData, ...formattedFiveDaysData };
};

const localTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) =>
  `https://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedData;
export { localTime, iconUrlFromCode, getCities };
