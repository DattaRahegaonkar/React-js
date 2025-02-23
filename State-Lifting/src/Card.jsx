import React from "react";

const Card = (props) => {
  const handleChange = (event) => {
    props.setName(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <p>
        This is the {props.title} Card compenet : {props.name}
      </p>
    </div>
  );
};

export default Card;
