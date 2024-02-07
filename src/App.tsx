import { useEffect, useState } from "react";
import HangmanDrwaing from "./Hangmandrawing";
import Keyboard from "./Keyboard";
import { useCallback } from "react";
import Todos from "./Todo";
import words from './word.json'



function App() {
  const [number, setnumber] = useState(0);
  const [activeLetters, setactiveLetters] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
const wordtoguess = words[0];
  
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordtoguess.includes(letter)

  );
    const correctLetters = guessedLetters.filter(
      (letter) => wordtoguess.includes(letter)
    );
  useEffect(() => {
    console.log(correctLetters)
  },[correctLetters])

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
