import { useEffect, useState } from "react";

export default function APIHanding() {
  const [Joke, setJoke] = useState({});
  const URL = "https://official-joke-api.appspot.com/random_joke";

  let getJoke = async () => {
    let result = await fetch(URL);
    let jsonResult = await result.json();
    console.log(jsonResult);
    setJoke({ setup: jsonResult.setup, punchline: jsonResult.punchline });
  };

  useEffect(() => {
    async function FirstJoke() {
      let result = await fetch(URL);
      let jsonResult = await result.json();
      console.log(jsonResult);
      setJoke({ setup: jsonResult.setup, punchline: jsonResult.punchline });
    }
    FirstJoke();
  }, []);

  return (
    <div>
      <h1>Joker!</h1>
      <h2>{Joke.setup}</h2>
      <h2>{Joke.punchline}</h2>
      <button onClick={getJoke}>New Joke</button>
    </div>
  );
}
