import React from 'react';

const ArticlesItem = ({title, description, author, imageCover}) => {
  return (
    <article className="ArticlesItem">
      <figure className="ArticlesItem__cover">
        <div className="ArticlesItem__image-container">
          <img className="ArticlesItem__image" src={imageCover} alt="" />
        </div>
        <figcaption className="ArticlesItem__author">
          <small>{author}</small>
        </figcaption>
      </figure>
      <div className="ArticlesItem__content">
        <h3 className="ArticlesItem__title">{title}</h3>
        <p className="ArticlesItem__description">{description}</p>
      </div>
    </article>
  )
}

export default ArticlesItem;