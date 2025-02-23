import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherinfo] = useState({
    city: "pune",
    feelslike: 24.35,
    humidity: 23.44,
    temp: 34.55,
    temp_max: 45.23,
    temp_min: 20.34,
    weather: "clear sky",
  });

  let updateInfo = (result) => {
    setWeatherinfo(result);
  };
  return (
    <>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </>
  );
}
