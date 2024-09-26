import { useState } from "react";

export default function Counter() {
  const [Isliked, setIsliked] = useState(false);
  let toggleLike = () => {
    setIsliked(!Isliked);
  };
  return (
    <>
      <h1>Like</h1>
      <h2>
        <p onClick={toggleLike}>
          {Isliked ? (
            <i style={{ color: "red" }} className="fa-solid fa-heart"></i>
          ) : (
            <i className="fa-regular fa-heart"></i>
          )}
        </p>
      </h2>
    </>
  );
}
