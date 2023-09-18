import { useState } from "react";
import "../styles/GameLogic.css";
import Avatar from "./Avatar";
const GameLogic = ({ image, name }) => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const choices = ["rock", "paper", "scissors"];

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult("Tie");
    } else if (
      (user === "rock" && computer === "scissors") ||
      (user === "paper" && computer === "rock") ||
      (user === "scissors" && computer === "paper")
    ) {
      setResult("YOU WON!");
    } else {
      setResult("YOU LOST! ");
    }
  };

  const handleClick = (choice) => {
    const computerRandomChoice =
      choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(computerRandomChoice);
    determineWinner(choice, computerRandomChoice);
  };

  return (
    <div className="container">
      <h1>ROCK PAPER SCISSORS</h1>
      <div className="avatar-presentation">
        <div className="presentation">
          <Avatar image={image} />
          <p>{name}</p>
          <p id="iVs">VS</p>
          <Avatar
            image={
              "https://st3.depositphotos.com/10325516/18841/i/450/depositphotos_188414228-stock-photo-humanoid-robot-face.jpg"
            }
          />
          <p>IA</p>
        </div>
      </div>
      <div className="buttons-container">
        <button className="buttons" onClick={() => handleClick("rock")}>
          🪨
        </button>
        <button className="buttons" onClick={() => handleClick("paper")}>
          🗒️
        </button>
        <button className="buttons" onClick={() => handleClick("scissors")}>
          ✂️
        </button>
      </div>
      {playerChoice && computerChoice && (
        <div className="avatar-container">
          <div className="avatars">
            <Avatar image={image} />
            <p>
              ➡️{name}:{playerChoice}
            </p>
          </div>
          <div className="avatars">
            <Avatar
              image={
                "https://st3.depositphotos.com/10325516/18841/i/450/depositphotos_188414228-stock-photo-humanoid-robot-face.jpg"
              }
            />
            <p>➡️IA: {computerChoice}</p>
          </div>
          <div className="result">RESULT➡️{result}</div>
        </div>
      )}
    </div>
  );
};

export default GameLogic;
