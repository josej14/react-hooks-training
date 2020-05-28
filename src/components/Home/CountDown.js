import './CountDown.scss';
import React, { useState } from 'react';
import { useInterval } from '../../utils/customHooks';
import { formatCountDown } from '../../utils/helpers';
import _ from 'lodash';

const CountDown = () => {
  const [seconds, setSeconds] = useState(300);

  const decrementClock = () => setSeconds(seconds - 1);

  useInterval(() => {
    decrementClock();
    if (seconds === 0) {
      console.log("Finish Count Down");
      setSeconds(300);
    }
  }, 1000);

  
  const formatTimeLeft = formatCountDown(seconds);
  const reset = () => setSeconds(300);

  return (
    <div class='countdown-container'>
      <p>{formatTimeLeft}</p>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CountDown;
