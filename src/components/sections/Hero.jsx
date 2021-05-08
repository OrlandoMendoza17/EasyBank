import React from 'react';
import mobileImage from '../../assets/images/image-mockups.png';

const Hero = () => {
  return (
    <section className="Hero">
      <div className="Hero__cover">
        {/* <img className="Hero__cover--image" src={mobileImage} alt="" /> */}
      </div>
      <div className="Hero__slogan">
        <h1 className="Hero__slogan--title">Next generation digital banking</h1>
        <p className="Hero__slogan--description">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
        <button className="Hero__slogan--call-to-action">
          Request Invite
        </button>
      </div>
    </section>
  )
}

export default Hero;
