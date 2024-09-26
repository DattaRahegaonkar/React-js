import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./App.css";

function App() {
  const [city, setcity] = useState("");

  let handleChange = (event) => {
    setcity(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    setcity("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Search the City Name</h3>
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
    </form>
  );
}

export default App;
