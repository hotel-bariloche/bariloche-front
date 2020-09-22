import React, { useCallback, useContext, useState } from "react";
import Chrono from "./Chrono";
import { Context } from "../../../Context/Provider";
import gameFactory from "./game-state-factory";
import { GAME_WON, GAME_STARTED, GAME_OVER } from "./game-states";
import GameContainer from "./GameContainer";
import Popup from "../Modal/Popup";
import {Link} from 'react-router-dom';
import confetti from '../../../confetti';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

import "./HelpJuan.scss";

const HelpJuan = () => {
  const [state, setState] = useState(gameFactory.newGame());
  const [timerOn, setTimerOn] = useState(false);
  const [hits, setHits] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const context = useContext(Context);
  const {
    state: { language },
  } = context;

  const onLetterClick = useCallback((letter, e) => {
    e.preventDefault();

    const firstIndex = state.word.indexOf(letter);
    if (firstIndex !== -1) {
      const letters = state.letters.map((letterObject) => {
        if (letterObject.value === letter) {
          return Object.assign({}, letterObject, {
            guessed: true,
          });
        }

        return letterObject;
      });

      // Check if the game has been won
      const gameWon = letters.reduce((winState, currentObject) => {
        return winState && currentObject.guessed;
      }, true);

      setState((prevState) => {
        return {
          ...prevState,
          letters,
          pastGuesses: [letter].concat(prevState.pastGuesses),
          gameState: gameWon ? GAME_WON : GAME_STARTED,
        };
      });
    } else {
      setState((prevState) => {
        // Update number of attempts left
        const guessesLeft = prevState.guesses - 1;
        let stateUpdate = {
          guesses: guessesLeft,
        };

        // Kill the game if needed
        if (guessesLeft === 0) {
          onRestartClick(e)
        }

        // Update the letters already tried
        stateUpdate.pastGuesses = [letter].concat(prevState.pastGuesses);

        return { ...prevState, ...stateUpdate };
      });
    }
  });

  React.useEffect(() => {
    console.log(state);
    if (state.gameState === GAME_WON) {
      setHits(hits + 1);
      setState(gameFactory.newGame());
    } else {
      if (!state.guesses) {
        setTimerOn(false);
      }
    }
  }, [state]);

  const onRestartClick = (e) => {
    e.preventDefault();
    setState(gameFactory.newGame());
    setTimerOn(true);
    setHits(0);
  };

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <div className="HelpJuan">
      <div className="header-buttons">
        <div>
          <span     
            className="questionMark" 
            onClick={toggleModal}      
            style={{ color: "#E5423A", fontSize: "2em" }}
          >
            <FontAwesomeIcon icon={faQuestionCircle} />
          </span>
        </div>
        <div>
          <Link to="/games">
            <span style={{ color: "#E5423A", fontSize: "2em" }}>
              <FontAwesomeIcon icon={faTimesCircle} />
            </span>
          </Link>
        </div>
      </div>
      <div className="row timeAndActualNumber">
        <div className="col-12 col-md-6 justifyCenter">
          <p className="chronoText">
            {timerOn === false ? (
              "00:00:00"
            ) : (
              <Chrono setTimerOn={setTimerOn} />
            )}
          </p>
        </div>
        <div className="col-12 col-md-6 justifyCenter">
          <p>
            Aciertos: &nbsp;&nbsp;&nbsp;{" "}
            <span style={{ fontWeight: "bold", fontSize: "x-large" }}>
              {hits}
            </span>
          </p>
        </div>
      </div>
      <GameContainer
        timerOn={timerOn}
        onLetterClick={onLetterClick}
        onRestartClick={onRestartClick}
        {...state}
      />
      <Popup
        className="generalModalTitle generalModalTitle-orange"
        description={context.state.texts[language].memoryGame.popup_description}
        instruction1={context.state.texts[language].memoryGame.instruction1}
        instruction2={context.state.texts[language].memoryGame.instruction2}
        instruction3={context.state.texts[language].memoryGame.instruction3}
        instruction4={context.state.texts[language].memoryGame.instruction4}
        show={showModal}
        setShow={setShowModal}
      />
    </div>
  );
};

export default HelpJuan;
