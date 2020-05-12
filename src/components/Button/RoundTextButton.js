import './RoundTextButton.scss';
import React from 'react';
import { Button } from 'react-bootstrap';

const RoundTextButton = ({ text, onClick, className = '' }) => (
  <Button 
    className={`round-text-button ${className}`}
    onClick={onClick}
  >
    {text}
  </Button>
);

export default RoundTextButton;
