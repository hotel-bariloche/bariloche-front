import React, { useState } from 'react';
import { Texts } from '../Utils/Texts';
import { TriviaQuestions } from '../Utils/TriviaQuestions';

export const Context = React.createContext();

const AppContext = (props) => {
    const [state, changeState] = useState({
      texts: Texts,
      triviaQuestions: TriviaQuestions,
      language: 'spanish', // default language
      score: 0
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
      })
    }}

    >
      {props.children}
    </Context.Provider>


)}

export default AppContext;


