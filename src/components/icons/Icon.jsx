import React from 'react';

function Icon(props){
  
  const {color, size, viewBox, className, style}  = props
  
  return(
    <svg
      fill={color}
      width={size}
      height={size}
      viewBox={viewBox}
      className={className}
      style={style}
    >
      {props.children}
    </svg>
  )
}

export default Icon;