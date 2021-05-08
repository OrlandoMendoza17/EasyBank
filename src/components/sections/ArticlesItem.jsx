import React from 'react';

const ArticlesItem = ({title, description, author, imageCover}) => {
  return (
    <article className="ArticlesItem">
      <figure className="ArticlesItem__cover">
        <img className="ArticlesItem__cover--image" src={imageCover} alt="" />
        <figcaption className="ArticlesItem__cover--author">
          <small>{author}</small>
        </figcaption>
      </figure>
      <div className="ArticlesItem__content">
        <h3 className="ArticlesItem__content--title">{title}</h3>
        <p className="ArticlesItem__content--description">{description}</p>
      </div>
    </article>
  )
}

export default ArticlesItem;