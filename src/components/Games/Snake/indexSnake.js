import React, { Component } from "react";
import Snake from "./snake";
import Food from "./food";
import { Link } from "react-router-dom";
import "./snake.scss";
import SnakeInstructionGames from "./SnakeInstructionGames";
import Popup from "../Modal/Popup";
import FinalPopup from "./finalPopUp";
import { Context } from "../../../Context/Provider";
import confetti from "../../../confetti";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import cazanievesTitleEs from "../../img/games/cazanievesTitle-es_10.png";
import cazanievesTitleEn from "../../img/games/cazanievesTitle-en_10.png";

const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y];
};
const initialState = {
  gameStarted: false,
  gameEnded: true,
  ranking: false,
  food: getRandomCoordinates(),
  points: 0,
  speed: 200,
  direction: "RIGHT",
  code: "",
  description: "",
  snakeDots: [
    [0, 0],
    [2, 0],
  ],
};

const intervalFunction = (move, speed) => {
  return setInterval(move, speed);
};

class IndexSnake extends Component {
  static contextType = Context;

  state = initialState;

  onClickStart = (e) => {
    //If everything is false do the set Interval + count + 1. Else stop the game + alert with counter
    this.setState({
      ...initialState,
      food: getRandomCoordinates(),
      gameStarted: true,
      gameEnded: false,
      interval: intervalFunction(this.moveSnake, this.state.speed),
    });
  };
  checkIfGameOver = () => {
    // WHEN WE CLICK ON THE FLAG, COUNTER IS INCREASED, THE FLAG DISAPPEARS FROM THAT SQUARE, A NEW RANDOM SQUARE IS CHOSEN
    this.checkIfOutOfBorders();
    this.checkIfCollapsed();
    this.checkIfEat();
  };
  checkButtonsDirections = (e) => {
    if (e.target.value) {
      switch (e.target.value) {
        case "UP":
          this.setState({ direction: "UP" });
          break;
        case "DOWN":
          this.setState({ direction: "DOWN" });
          break;
        case "LEFT":
          this.setState({ direction: "LEFT" });
          break;
        case "RIGHT":
          this.setState({ direction: "RIGHT" });
          break;
      }
    }
  };
  onKeyDown = (e) => {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        this.setState({ direction: "UP" });
        break;
      case 40:
        this.setState({ direction: "DOWN" });
        break;
      case 37:
        this.setState({ direction: "LEFT" });
        break;
      case 39:
        this.setState({ direction: "RIGHT" });
        break;
    }
    e.preventDefault();
    e.stopPropagation();
  };
  moveSnake = () => {
    if (this.state.gameStarted) {
      let dots = [...this.state.snakeDots];
      let head = dots[dots.length - 1];
      switch (this.state.direction) {
        case "RIGHT":
          head = [head[0] + 2, head[1]];
          break;
        case "LEFT":
          head = [head[0] - 2, head[1]];
          break;
        case "DOWN":
          head = [head[0], head[1] + 2];
          break;
        case "UP":
          head = [head[0], head[1] - 2];
          break;
      }
      //    console.log('you just passed the moveSnake function')
      dots.push(head);
      dots.shift();
      this.setState({
        snakeDots: dots,
      });
      this.checkIfGameOver();
      document.onkeydown = this.onKeyDown;
    }
  };
  checkIfOutOfBorders() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if (head[0] >= 97 || head[1] >= 96 || head[0] < 0 || head[1] < 0) {
      this.onGameOver();
    }
  }
  checkIfCollapsed() {
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach((dot) => {
      if (head[0] == dot[0] && head[1] == dot[1]) {
        this.onGameOver();
      }
    });
  }
  checkIfEat = () => {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let food = this.state.food;
    if (head[0] == food[0] && head[1] == food[1]) {
      if (this.state.speed > 5) {
        console.log(this.state.speed, this.state.interval);
        clearInterval(this.state.interval);
        this.setState({
          speed: this.state.speed - 20,
          food: getRandomCoordinates(),
          interval: intervalFunction(this.moveSnake, this.state.speed),
          points: this.state.points + 1,
        });
      }
      this.enlargeSnake();
      //this.increaseSpeed();
    }
  };

  enlargeSnake() {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([]);
    this.setState({
      snakeDots: newSnake,
    });
  }
  /*  increaseSpeed() {
     if (this.state.speed > 10) {
       this.setState({
         speed: this.state.speed - 10
       })
     }
   }  */

  ranking() {
    const context = this.context;
    const language = context.state.language;


    if (this.state.points >= 16) {
      this.setState({
        code: 'GANOCONGBH3',
      });
    } else if (this.state.points >= 10) {
      this.setState({
        code: 'GANOCONCGH2',
      });
    } else if (this.state.points >= 5) {
      this.setState({
        code: 'GANOCONGBH1',
      });
    } else {
      console.log("Hola");
      this.setState({
        code: 'GANOCONGBH1',
      });
    }
  }

  onGameOver() {
    clearInterval(this.state.interval);

    this.ranking();
    this.setState({
      gameStarted: false,
      gameEnded: true,
      ranking: true,
      food: getRandomCoordinates(),
      speed: 200,
      direction: "RIGHT",
      snakeDots: [
        [0, 0],
        [2, 0],
      ],
    });

    confetti.start();
    setTimeout(() => {
      confetti.stop();
    }, 2000);
  }

  render() {
    const context = this.context;
    const language = context.state.language;
    const closeButton = <FontAwesomeIcon icon={faTimesCircle} />;
    
    return (
      <div id="snakePageContainer">
        <Popup
          className1='all-modal all-modal-blue'
          className="generalModalTitle generalModalTitle-blue"
          description={context.state.texts[language].snake.popup_description}
          instruction1={context.state.texts[language].snake.instruction1}
          instruction2={context.state.texts[language].snake.instruction2}
          instruction3={context.state.texts[language].snake.instruction3}
          instruction4={context.state.texts[language].snake.instruction4}
        />
        <img src={language === 'spanish' ? cazanievesTitleEs : cazanievesTitleEn} />
        <div className="header-buttons">
          <SnakeInstructionGames
            instructionText={context.state.texts[language].snake.instruction}
          />
          <div className="bigCloseButtonSnake">
            <Link to="/games">
              <span style={{ color: "#29ABE2", fontSize: "2em" }}>
                {closeButton}
              </span>
            </Link>
          </div>
        </div>
        <div className="snakeGameContainer">
        <p className="points">
          {context.state.texts[language].snake.points}
          {this.state.points}
        </p>
          {this.state.ranking && (
            <FinalPopup
              title={context.state.texts[language].snake.title_final}
              points={this.state.points}
              description={this.state.description}
              code={this.state.code}
            />
          )}
          {this.state.gameStarted != true ? (
            <div id="buttonContainer">
              <button id="startSnakeButton" onClick={this.onClickStart}>
                {context.state.texts[language].snake.buttonStart}
              </button>
            </div>
          ) : null}
          <div className="game-area">
            <Snake snakeDots={this.state.snakeDots} />
            <Food dot={this.state.food} />
          </div>
          <div className="SnakeDirectionsMobilePad">
            <button
              className="padButton"
              value="UP"
              onClick={this.checkButtonsDirections}
            >
              U
            </button>
            <div id="sidesArrowsRow">
              <button
                className="padButton"
                value="LEFT"
                onClick={this.checkButtonsDirections}
              >
                L
              </button>
              <button
                className="padButton"
                value="RIGHT"
                onClick={this.checkButtonsDirections}
              >
                R
              </button>
            </div>
            <button
              id="downButton"
              className="padButton"
              value="DOWN"
              onClick={this.checkButtonsDirections}
            >
              D
            </button>
          </div>       
        </div>
      </div>
    );
  }
}
export default IndexSnake;
