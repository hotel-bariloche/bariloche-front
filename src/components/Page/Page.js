import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Context } from '../../Context/Provider';
import { capitalize } from '../../Utils/common'
const mainTitle = 'Grand Hotel Bariloche'

const Page = (props) => {
const { state } = React.useContext(Context);
  useEffect(() => {    
    const title = (props.title) ? capitalize(state.texts[state.language].home.navbar[props.title]) : null
    document.title = (title)? `${title} | ${mainTitle}` : mainTitle;
  });
  const { title, ...rest } = props;
  return <Route {...rest} />;
}

export default Page;