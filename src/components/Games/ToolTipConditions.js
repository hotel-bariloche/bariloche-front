import React, { useState } from 'react';
import { Context } from '../../Context/Provider';
import { Tooltip } from 'reactstrap';

const ToolTipConditions = (props) => {
  const { state } = React.useContext(Context);  

  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <div>
      <p><span style={{textDecoration: "none", color:"black"}} href="#" id="DisabledAutoHideExample">
        {state.texts[state.language].games.popupConditions}
      </span></p>
      <Tooltip style={{fontFamily: "Roboto, sans-serif" }}
         placement="top" isOpen={tooltipOpen} autohide={false} target="DisabledAutoHideExample" toggle={toggle}>
        {state.texts[state.language].games.popupConditionsText}
      </Tooltip>
    </div>
  );
}

export default ToolTipConditions;