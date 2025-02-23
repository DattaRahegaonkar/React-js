import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function SearchBox({ updateInfo }) {
  const [city, setcity] = useState("");
  const [err, setErr] = useState(false);

  let API_URL = "https://api.openweathermap.org/data/2.5/weather";

  let API_KEY = "ded950bc4afcad09b7b4a90441260a20";

  let gatherWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
    let jsonResponse = await response.json();
    let result = {
      city: city,
      feelslike: jsonResponse.main.feels_like,
      humidity: jsonResponse.main.humidity,
      temp: jsonResponse.main.temp,
      temp_max: jsonResponse.main.temp_max,
      temp_min: jsonResponse.main.temp_min,
      weather: jsonResponse.weather[0].description,
    };
    return result;
    } catch (err) {
      throw err;      
    }
  };

  let handleChange = (event) => {
    setcity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
    setcity("");
    let newInfo = await gatherWeatherInfo();
    updateInfo(newInfo);
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        value={city}
        label="City"
        variant="outlined"
        onChange={handleChange}
      />
      <br />
      <br />
      <Button type="submit" variant="contained">
        Submit
      </Button>

      {err && <p style={{color: "red"}}>No such place is exits</p>}
    </form>
  );
}

export default SearchBox;
