import React from 'react';

import { GAME_WON } from './game-states';

import './RestartButton.css';

const RestartButton = ({ onClick, gameState }) => {
  return (
    <div className="App-Restart">
      <button onClick={onClick}>
        {gameState === GAME_WON ? 'Start' : 'Start'}
      </button>
    </div>
  );  
}

export default RestartButton;
