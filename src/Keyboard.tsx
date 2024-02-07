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

type KeyboardProps = {

  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

const Keyboard = ({ activeLetters, inactiveLetters, addGuessedLetter }: KeyboardProps) => {
  
  return (
    <div className={styles["keyboard-container"]}>
      <div className={styles["keyboard-row"]}>
        {keys.slice(0, 9).map((letter) => {
          const isActive = activeLetters.includes(letter);
          const isInactive = inactiveLetters.includes(letter);
          return (
            <button
              className={`${styles.btn} ${isActive ? styles.active : ""} ${
                isInactive ? styles.inactive : ""
              }`}
              key={letter}
              onClick={(e) => {
                addGuessedLetter(e.target.innerText);
              }}
            >
              {letter}
            </button>
          ); })}
      </div>
      <div className={styles["keyboard-row"]}>
        {keys.slice(9, 18).map((letter) => {
          const isActive = activeLetters.includes(letter);
          const isInactive = inactiveLetters.includes(letter);          
          return (
            <button
              className={`${styles.btn} ${isActive ? styles.active : ""} ${
                isInactive ? styles.inactive : ""
              }`}
              key={letter}
              onClick={(e) => {
                addGuessedLetter(e.target.innerText);
              }}
            >
              {letter}
            </button>
          );
          
        })}
      </div>
      <div className={styles["keyboard-row"]}>
        {keys.slice(18).map((letter) => {
          const isActive = activeLetters.includes(letter);
          const isInactive = inactiveLetters.includes(letter);          
          return (
            <button
            className={`${styles.btn} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : ""
              }`}
            key={letter}
            onClick={(e) => {
              addGuessedLetter(e.target.innerText);
            }}
          >
            {letter}
          </button>
          )
          
        })}
      </div>
    </div>
  );
};

export default Keyboard;
