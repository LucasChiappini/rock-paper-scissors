import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "../styles/Game.css";
import CardProfile from "../components/CardProfile";
import GameLogic from "../components/gameLogic";

const Game = () => {
  const [playerName, setPlayerName] = useState("");
  const [playerImage, setPlayerImage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    ShowSweetAlert();
  }, []);

  const ShowSweetAlert = async () => {
    // SweetAlert of PlayerName
    const { value: playerName } = await Swal.fire({
      title: "Player Name👤",
      input: "text",
      inputLabel: "You should write at least one letter",
      inputPlaceholder: "Type your name here...",
      width: 700,
      padding: "3em",
      color: "black",
      background: "#fff",
      backdrop: `
        url("https://miro.medium.com/v2/resize:fit:1000/1*aZYAQMfiaSiJVucrbiyKqA.gif")
        center
        repeat
      `,
      confirmButtonText: "Ready👍",
      confirmButtonColor: "black",
    });

    if (playerName) {
      const { value: file } = await Swal.fire({
        title: "Player Photo👤",
        inputLabel: "This is optional",
        input: "file",
        inputAttributes: {
          accept: "image/*",
          "aria-label": "Upload your profile picture",
        },
      });

      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          Swal.fire({
            title: "Welcome " + playerName + "\n 👋🏼👋🏼👋🏼",
            imageUrl: e.target.result,
            imageAlt: "The uploaded picture",
            imageWidth: "200px",
            imageHeight: "200px",
          });
          setPlayerImage(e.target.result);
        };
        reader.readAsDataURL(file);
        setPlayerName(playerName);
      } else if (!file) {
        Swal.fire({
          title: "Welcome " + playerName + "\n 👋🏼👋🏼👋🏼",
          imageUrl: "src/assets/images/avatar.png",
          imageAlt: "The uploaded picture",
          imageWidth: "200px",
          imageHeight: "200px",
        });
        setPlayerImage("src/assets/images/avatar.png");
        setPlayerName(playerName);
      }
      navigate("/Game");
    } else if (playerName === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!\n You must fill in the field",
        footer: "It is a pity.",
      });
      navigate("/");
    }
  };

  return (
    <>
      <div className="container-game">
        <div className="card-player">
          <CardProfile image={playerImage} name={playerName} />
        </div>

        <GameLogic image={playerImage} name={playerName} />
        <button className="button" onClick={() => navigate("/")}>
          Go back 🔙{" "}
        </button>
      </div>
    </>
  );
};

export default Game;
