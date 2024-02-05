import { useState } from "react";
import HangmanDrwaing from "./Hangmandrawing";
import Keyboard from "./Keyboard";

function App() {
  const [number, setnumber] = useState(0);
  const wordtoguess='what'
  const guessedletter = (letter: string) => {
    console.log(letter);
    setnumber(number+1);
  };

  return (
    <>
      <HangmanDrwaing numberOfGusses={number}></HangmanDrwaing>
      <Keyboard addGuessedLetter={guessedletter}></Keyboard>
    </>
  );
}

export default App;
