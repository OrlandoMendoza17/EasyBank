import React from 'react';
import facebookIcon from '../../assets/icons/icon-facebook.svg';
import youtubeIcon from '../../assets/icons/icon-youtube.svg';
import twitterIcon from '../../assets/icons/icon-twitter.svg';
import pinterestIcon from '../../assets/icons/icon-pinterest.svg';
import instramIcon from '../../assets/icons/icon-instagram.svg';
import brandLogo from '../../assets/icons/logo-light.svg';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__logo">
        <img className="Footer__logo-image" src={brandLogo} alt=""/>
      </div>
      
      <div className="Footer__social-medias">
        <a href="#?" className="Footer__social-media-links">
          <img src={facebookIcon} alt=""/>
        </a>
        <a href="#?" className="Footer__social-media-links">
          <img src={youtubeIcon} alt=""/>
        </a>
        <a href="#?" className="Footer__social-media-links">
          <img src={twitterIcon} alt=""/>
        </a>
        <a href="#?" className="Footer__social-media-links">
          <img src={pinterestIcon} alt=""/>
        </a>
        <a href="#?" className="Footer__social-media-links">
          <img src={instramIcon} alt=""/>
        </a>
      </div>
      
      <div className="Footer__links">
        <a className="Footer__link" href="#?">About Us</a>
        <a className="Footer__link" href="#?">Contact</a>
        <a className="Footer__link" href="#?">Blog</a>
        <a className="Footer__link" href="#?">Careers</a>
        <a className="Footer__link" href="#?">Support</a>
        <a className="Footer__link" href="#?">Privacy Policy</a>
      </div>
      
      <button className="Footer__call-to-action">
        Request Invite
      </button>
      
      <div className="Footer__copyright">
        <p>© Easybank. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer;
