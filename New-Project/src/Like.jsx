import { useState } from "react";

export default function Like() {
  let [isLiked, setisLiked] = useState(false);

  let changeclick = () => {
    setisLiked(!isLiked);
  };

  let styles = {
    color: "red"
  }
  return (
    <>
      <h2>Like</h2>
      <p onClick={changeclick} style={styles}>
        {isLiked ? (
          <i className="fa-solid fa-heart"></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </>
  );
}
