import { useState } from "react";

export default function Forms() {
  const [formData, setformData] = useState({
    FullName: "",
    Username: "",
    Password: "",
  });
  let handleInputFields = (event) => {
    setformData((currdata) => {
      return { ...currdata, [event.target.name]: [event.target.value] };
    });
  };
  let handlesubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    setformData({
      FullName: "",
      Username: "",
      Password: "",
    });
  };
  return (
    <form onSubmit={handlesubmit}>
      <label htmlFor="FullName">Full Name:</label> &nbsp;
      <input
        type="text"
        placeholder="Enter FullName"
        value={formData.FullName}
        onChange={handleInputFields}
        id="FullName"
        name="FullName"
      />
      <br />
      <br />
      <label htmlFor="Username">Username:</label> &nbsp;
      <input
        type="text"
        placeholder="Enter Username"
        value={formData.Username}
        onChange={handleInputFields}
        id="Username"
        name="Username"
      />
      <br />
      <br />
      <label htmlFor="Password">Password:</label> &nbsp;
      <input
        type="Password"
        placeholder="Enter Password"
        value={formData.Password}
        onChange={handleInputFields}
        id="Password"
        name="Password"
      />
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}
