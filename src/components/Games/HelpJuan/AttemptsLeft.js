import React from 'react';

import './AttemptsLeft.css';


const AttemptsLeft = ({ attempts }) => {
  return (
    <div className="AttemptsLeft">
      <span>Retries left: <span className="AttemptsLeft-Number">
          {attempts}
        </span>
      </span>
    </div>
  );
}

export default AttemptsLeft;
