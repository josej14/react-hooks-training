import './Home.scss';
import React, { useState } from 'react';
import HomeContainer from '../../components/Layout/HomeContainer';
import JsonInput from '../../components/Home/JsonInput';
import DiagramMaker from '../../components/Home/DiagramMaker';

const Home = () => {
  const [jsonObj, setJsonObj] = useState({});
  return (
    <HomeContainer>
      <div className='first-column'>
        <JsonInput data={jsonObj} setJsonObj={setJsonObj} />
      </div>
      <div className='second-column'>
        <DiagramMaker jsonObj={jsonObj} />
      </div>
    </HomeContainer>
  );
};

export default Home;
