import React from 'react';
import Facebook from '../../components/icons/Facebook';
import Youtube from '../../components/icons/Youtube';
import Twitter from '../../components/icons/Twitter';
import Pinterest from '../../components/icons/Pinterest';
import Instagram from '../../components/icons/Instagram';
import brandLogo from '../../assets/icons/logo-light.svg';

const Footer = () => {
  return (
    <footer className="Footer">
       
      <div className="Footer__section Footer__section--start">
        <img className="Footer__logo" src={brandLogo} alt=""/>
        <div className="Footer__social-medias">
          <a href="#?" className="Footer__social-media-links">
            <Facebook className="Footer__icon"/>
          </a>
          <a href="#?" className="Footer__social-media-links">
            <Youtube className="Footer__icon"/>
          </a>
          <a href="#?" className="Footer__social-media-links">
            <Twitter className="Footer__icon"/>
          </a>
          <a href="#?" className="Footer__social-media-links">
            <Pinterest className="Footer__icon"/>
          </a>
          <a href="#?" className="Footer__social-media-links">
            <Instagram className="Footer__icon"/>
          </a>
        </div>
      </div>
      
      <div className="Footer__section Footer__links">
        <a className="Footer__link" href="#?">About Us</a>
        <a className="Footer__link" href="#?">Contact</a>
        <a className="Footer__link" href="#?">Blog</a>
        <a className="Footer__link" href="#?">Careers</a>
        <a className="Footer__link" href="#?">Support</a>
        <a className="Footer__link" href="#?">Privacy Policy</a>
      </div>
      
      <div className="Footer__section Footer__section--end">
        <button className="Footer__call-to-action">
          Request Invite
        </button>
        
        <div className="Footer__copyright">
          <p>© Easybank. All Rights Reserved</p>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer;
