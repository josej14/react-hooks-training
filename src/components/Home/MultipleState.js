import './MultipleState.scss';
import React, { useState } from 'react';
import texts from '../../config/texts';

const MultipleState = () => {
  const [countCow, setCountCow] = useState(0);
  const [countPig, setCountPig] = useState(0);
  const [countSheep, setCountSheep] = useState(0);

  const addCow = () => setCountCow(countCow + 1);
  const addPig = () => setCountPig(countPig + 1);
  const addSheep = () => setCountSheep(countSheep + 1);
  const reset = () => {
    setCountCow(0);
    setCountPig(0);
    setCountSheep(0);
  }
  
  return (
    <div className='form-container'>
      <div>
        <p>{`${texts.HOME.ANIMALS.cow}: ${countCow}`}</p>
        <button onClick={addCow}>Add Cow</button>
      </div>
      <div>
        <p>{`${texts.HOME.ANIMALS.pig}: ${countPig}`}</p>
        <button onClick={addPig}>Add Pig</button>
      </div>
      <div>
        <p>{`${texts.HOME.ANIMALS.sheep}: ${countSheep}`}</p>
        <button onClick={addSheep}>Add Sheep</button>
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  )
};

export default MultipleState;
