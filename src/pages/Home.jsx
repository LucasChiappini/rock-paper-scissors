import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <img
          src="https://media1.giphy.com/media/ZNo3OCM9CoEVz71ilQ/giphy.gif?cid=ecf05e47m0osjhmhbbdewqsb36emqhr5u71hkbbfke1cb98t&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          id="iImage"
          alt="Rock Paper Scissors GIF"
        ></img>
        <div className="container-consigna">
          <h3>Consigna:</h3>
          <p className="text-consigna">
            <div className="texts-consigna">
              Paso 1: Configuración inicial Crea un nuevo proyecto de React o
              utiliza una plantilla de inicio.Divide la aplicación en
              componentes: uno para el juego en sí y otros para mostrar el
              resultado y los botones de elección.Establece el estado inicial
              del juego con variables para el resultado, elección del jugador y
              elección de la computadora.
            </div>
            <div className="texts-consigna">
              Paso 2: Lógica del juego Implementa la lógica del juego en una
              función que determine quién gana o si es un empate. La lógica del
              juego es simple: piedra vence a tijeras, tijeras vence a papel y
              papel vence a piedra.
            </div>{" "}
            <div className="texts-consigna">
              {" "}
              Paso 3: Interacción del usuario Crea botones para que el jugador
              elija entre piedra, papel o tijeras.Al hacer clic en uno de los
              botones, actualiza el estado del juego con la elección del jugador
              y genere una elección aleatoria para la computadora.
            </div>{" "}
            <div className="texts-consigna">
              Paso 4: Mostrar resultados Muestra las elecciones del jugador y de
              la computadora en la pantalla.Muestra el resultado del juego
              (ganador, perdedor o empate) en función de la lógica implementada.
            </div>
            <div className="texts-consigna">
              {" "}
              Paso 5: Estilización y mejora Agrega estilos CSS para que la
              aplicación se vea atractiva y amigable para el usuario.Mejora la
              presentación de los resultados, como mostrar imágenes de las
              opciones en lugar de solo el texto.
            </div>{" "}
            <div className="texts-consigna">
              {" "}
              Paso 6: Funcionalidad adicional (opcional) Si deseas agregar
              funcionalidad adicional, puedes llevar un registro de las
              puntuaciones del jugador y permitir que el jugador juegue varias
              rondas antes de mostrar un puntaje final. Recuerda guiar a tus
              estudiantes a través de estos pasos y fomentar la resolución de
              problemas y la experimentación. Este ejercicio no solo les ayudará
              a comprender los conceptos básicos de React, como el estado y los
              eventos, sino que también les permitirá practicar la lógica de
              programación y la interacción con el usuario.
            </div>
          </p>
        </div>
        <button className="button" onClick={() => navigate("/Game")}>
          Play 🪨🗒️✂️{" "}
        </button>
      </div>
    </>
  );
};

export default Home;
