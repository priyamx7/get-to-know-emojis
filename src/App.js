import React, { useState } from "react";
import "./styles.css";

const priyam = "https://devpriyam.netlify.app";

const myEmojis = {
  "😊": "Smiling",
  "😳": "Disbelief",
  "😔": "Sad",
  "🤩": "Star-Struck",
  "❤️": "Love",
  "😑": "Annoyance"
  // "": "This is '' emoji. It is used when",
};

const emojisWeHave = Object.keys(myEmojis);

export default function App() {
  const [emojis, setEmojis] = useState("");
  const [displayEmoji, setDisplayEmoji] = useState("");

  function emojiInputHandler(event) {
    let userInput = event.target.value;
    let meaning = myEmojis[userInput];
    //console.log(meaning);

    if (meaning === undefined) {
      meaning = "We don't have this in our database.";
    }
    setDisplayEmoji(userInput);
    setEmojis(meaning);
  }

  function emojiClickHandler(emoji) {
    let meaning = myEmojis[emoji];
    setDisplayEmoji(emoji);
    setEmojis(meaning);
  }
  return (
    <div className="App">
      <h1 className="heading">Get to know emojis</h1>
      <input
        placeholder="Enter emoji here or pick one from below"
        onChange={emojiInputHandler}
      ></input>

      <div className="emojiContainer">
        {emojisWeHave.map(function (emoji) {
          return (
            <span onClick={() => emojiClickHandler(emoji)} key={emoji}>
              {emoji}
            </span>
          );
        })}
      </div>

      <div className="result">
        <h2>{displayEmoji} means:</h2>
        <span>{emojis}</span>
      </div>
      <footer>
        <p>More emojis coming soon...</p>
        <p>
          Made with ❤️ by <a href={priyam}>Priyam</a>
        </p>
      </footer>
    </div>
  );
}
