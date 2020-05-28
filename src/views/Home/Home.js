import './Home.scss';
import React, { useState } from 'react';
import HomeContainer from '../../components/Layout/HomeContainer';
import CountDown from '../../components/Home/CountDown';
import MultipleState from '../../components/Home/MultipleState';

const Home = () => {
  const [mount, setMount] = useState(false);
  const switchMount = () => setMount(!mount);
  return (
    <HomeContainer>
      <div className='first-column'>
        <MultipleState/>
      </div>
      <div className='second-column'>
        {mount &&
          <CountDown />
        }
        <button onClick={switchMount}>Mount/Dismount</button>
      </div>
    </HomeContainer>
  );
};

export default Home;
