import "./Header.scss"
import React from "react"
import {
  Nav,
  Navbar,
} from "react-bootstrap"
import RoundTextButton from '../Button/RoundTextButton';
import texts from '../../config/texts';

const Header = () => {
  const testClick = () => console.log('Clicked');

  return (
    <>
      <Navbar className="header">
        <Navbar.Brand> {texts.GLOBAL.headerTitle} </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="justify-content-end nav-container">
            <RoundTextButton
              className="FAQ-button"
              text={texts.GLOBAL.faq}
              onClick={testClick}
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header;
