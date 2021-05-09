import React from 'react';
import mobileImage from '../../assets/images/image-mockups.png';

const Hero = () => {
  return (
    <section className="Hero">
      <div className="Hero__cover">
        {/* <img className="Hero__image" src={mobileImage} alt="" /> */}
        <div className="Hero__image"></div>
      </div>
      <div className="Hero__content">
        <h1 className="Hero__title">Next generation digital banking</h1>
        <p className="Hero__description">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
        <button className="Hero__call-to-action">
          Request Invite
        </button>
      </div>
    </section>
  )
}

export default Hero;
