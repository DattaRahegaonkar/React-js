import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  let inCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Count = {count}</h1>
      <button onClick={inCount}>Increase Count</button>
    </>
  );
}
