import React, {useState} from 'react';
import BrandLogo from '../icons/BrandLogo';
import HamburgerButton from './HamburgerButton';

const Header = () => {
  const [navOpened, setNavOpened] = useState(false)
  return (
    <header className="Header">
      <div className="Header__logo">
        <BrandLogo className="Header__brand-logo"/>
      </div>
      
      <div className={`Header__overlay ${navOpened? 'Header__overlay--open' : ''}`}>
        <div className="Header__links">
          <a className="Header__link" href="#">Home</a>
          <a className="Header__link" href="#">About</a>
          <a className="Header__link" href="#">Contact</a>
          <a className="Header__link" href="#">Blog</a>
          <a className="Header__link" href="#">Careers</a>
        </div>
      </div>
      
      <button className="Header__call-to-action">
        Request Invite
      </button>
      
      <button 
        className="Header__hamburger"
        onClick={() => setNavOpened(!navOpened)}
      >
        <HamburgerButton 
          isOpen={navOpened} 
          className="Header__hamburger-icon"
        />
      </button>
    </header>
  )
}

export default Header;
