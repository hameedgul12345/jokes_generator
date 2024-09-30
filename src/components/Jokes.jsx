import React, { useState } from "react";

function Jokes() {
  const fethJoke = () => {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then((res) => res.json())
      .then((data) => setJoke(data.joke));
      
    //   .then((data)=>console.log(data))
  };
  const [joke, setJoke] = useState("Heeeheheh");
  return (
    <div className="joke">
      <h1>{joke}</h1>
      <button onClick={fethJoke}>Generate</button>
    </div>
  );
}

export default Jokes;
