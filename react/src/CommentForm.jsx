import { useState } from "react";

export default function CommentForm() {
  const [FormData, setFormData] = useState({
    Username: "",
    Remark: "",
    Rating: "",
  });
  const [add, setadd] = useState();

  let handleinput = (event) => {
    setFormData((currdata) => {
      return { ...currdata, [event.target.name]: event.target.value };
    });
  };

  let handleSubmitButton = (event) => {
    event.preventDefault();
    console.log(FormData);

    setFormData({
      Username: "",
      Remark: "",
      Rating: "",
    });
  };
  return (
    <div>
      <h3>Give a Comment</h3>
      <form onSubmit={handleSubmitButton}>
        <label htmlFor="Username">Username: </label>
        <input
          type="text"
          onChange={handleinput}
          value={FormData.Username}
          placeholder="Enter Username"
          name="Username"
          id="Username"
        />
        <br />
        <br />
        <label htmlFor="Remark">Remark: </label>
        <textarea
          type="text"
          onChange={handleinput}
          value={FormData.Remark}
          placeholder="Enter Remark"
          name="Remark"
          id="Remark"
        ></textarea>
        <br />
        <br />
        <label htmlFor="Rating">Rating: </label>
        <input
          type="number"
          onChange={handleinput}
          value={FormData.Rating}
          placeholder="Enter Rating"
          name="Rating"
          id="Rating"
        />
        <br />
        <br />
        <button>Add Comment</button>
      </form>
    </div>
  );
}
