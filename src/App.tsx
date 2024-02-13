import { useEffect, useState, useMemo } from "react";
import HangmanDrwaing from "./Hangmandrawing";
import Keyboard from "./Keyboard";
import { useCallback } from "react";
import Todos from "./Todo";
import words from "./word.json";

function genRandom() {
  const random = Math.floor(Math.random() * (words.length - 0) + 0);
  return random;
}

function App() {
  const [number, setnumber] = useState(0);
  const [activeLetters, setactiveLetters] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const randomNum = useMemo(
    () => genRandom(),
    [
      /* dependency to trigger computing new random value */
    ]
  );
  console.log("randomNum: ", randomNum);
  const wordtoguess = words[randomNum];
  console.log("wordtoguess: ",wordtoguess);
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordtoguess.includes(letter)
  );
  const correctLetters = guessedLetters.filter((letter) =>
    wordtoguess.includes(letter)
  );

  const guessedletter = (letter: string) => {
    setnumber(number + 1);
    setGuessedLetters((currentLetters) => [...currentLetters, letter]);
  };

  return (
    <>
      <HangmanDrwaing numberOfGusses={incorrectLetters.length}></HangmanDrwaing>
      <Keyboard
        activeLetters={correctLetters}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={guessedletter}
      ></Keyboard>
    </>
  );
}

export default App;
