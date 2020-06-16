import React, { useState } from 'react';
import { Texts } from '../Utils/Texts';


export const Context = React.createContext();

const AppContext = (props) => {
    const [state, changeState] = useState({
      texts: Texts,
      language: 'english', // default language
    });
  return (

    <Context.Provider value={{
      state,
      changeLanguage: (language) => changeState({
        ...state,
        language,
      }),
    }}
    >
      {props.children}
    </Context.Provider>


)}

export default AppContext;


