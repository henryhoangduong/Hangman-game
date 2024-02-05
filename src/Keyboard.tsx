import React from "react";
import styles from "./Keyboard.module.css";

const keys = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type keyboardprops = {
  addGuessedLetter: (letter: string) => void;
};

const Keyboard = ({ addGuessedLetter }:keyboardprops) => {
  return (
    <div className={styles["keyboard-container"]}>
      <div className={styles["keyboard-row"]}>
        {keys.slice(0, 9).map((letter) => (
          <p
            key={letter}
            onClick={(e) => {
              addGuessedLetter(e.target.innerText);
            }}
          >
            {letter}
          </p>
        ))}
      </div>
      <div className={styles["keyboard-row"]}>
        {keys.slice(9, 18).map((letter) => (
          <p
            key={letter}
            onClick={(e) => {
              addGuessedLetter(e.target.innerText);
            }}
          >
            {letter}
          </p>
        ))}
      </div>
      <div className={styles["keyboard-row"]}>
        {keys.slice(18).map((letter) => (
          <p
            key={letter}
            onClick={(e) => {
              addGuessedLetter(e.target.innerText);
            }}
          >
            {letter}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
