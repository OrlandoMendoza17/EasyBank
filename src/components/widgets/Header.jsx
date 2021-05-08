import React from 'react';
import brandLogo from '../../assets/icons/logo.svg'
import Hambuger from '../icons/Hamburger';

const Header = () => {
  return (
    <header className="Header">
      <div className="Header__logo">
        <img className="Header__logo-image" src={brandLogo} alt="" />
      </div>
      <Hambuger className="Header__hamburger"/>
    </header>
  )
}

export default Header;
