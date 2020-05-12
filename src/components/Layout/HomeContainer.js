import './HomeContainer.scss';
import React from 'react';
import Header from '../Header/Header';

const HomeContainer = ({ children }) => (
  <div>
    <Header />
    <div className='body-container'>
      {children}
    </div>
  </div>
);

export default HomeContainer;
