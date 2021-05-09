import React from 'react'
import Hamburger from '../icons/Hamburger';
import Close from '../icons/Close';

const HamburgerButton = ({className, isOpen}) => {
  return (
    <>
      {
        isOpen? 
          <Close className={className}/>
            : 
          <Hamburger className={className}/>
      }
    </>
  )
}

export default HamburgerButton;
