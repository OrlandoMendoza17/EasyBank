import React, {useState} from 'react';
import ArticlesItem from './ArticlesItem';
import initialState from '../../initialState';

const Articles = () => {
  const [articles, setArticles] = useState(initialState.articles)
  return (
    <section className="Articles">
      <h2 className="Articles__title">Latest Articles</h2>
      <div className="Articles__items">
        {articles.map(item =>(
          <ArticlesItem {...item} key={item.id}/>
        ))}
      </div>
    </section>
  )
}

export default Articles;