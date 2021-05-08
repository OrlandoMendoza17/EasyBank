import React from 'react'

const Feature = ({title, description, icon}) => {
  return (
    <div className="Feature">
      <div className="Feature__icon">
        <img className="Feature__icon--image" src={icon} alt={`${title} feature-icon`} />
      </div>
      <h3 className="Feature__title">{title}</h3>
      <p className="Feature__description">{description}</p>
    </div>
  )
}

export default Feature;
