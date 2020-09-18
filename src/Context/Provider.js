import React, { useState } from 'react';
import { Texts } from '../Utils/Texts';
import { TriviaQuestions } from '../Utils/TriviaQuestions';

export const Context = React.createContext();

const AppContext = (props) => {
    const [state, changeState] = useState({
      texts: Texts,
      triviaQuestions: TriviaQuestions,
      language: 'spanish', // default language
      score: 0,
      countClicks:0,
      start: true
    });
  return (

    <Context.Provider value={{
      state,
      changeLanguage: (language) => changeState({
        ...state,
        language,
      }),
      addScore: (points) => changeState({
        ...state,
        score: state.score + points
      }),
      addClicks: () => changeState({
        ...state,
        countClicks: state.countClicks + 1
      }),
      changeFinish: () => changeState({
        ...state,
        start: false,
        countClicks: 0,
        score:0
      })
      
    }}

    >
      {props.children}
    </Context.Provider>


)}

export default AppContext;


