import React from 'react';
import './article.css';

const Article = ({imgUrl, date, title}) => {
  return (
    <div className='gem__blog-container_article'>
      <dir className='gem__blog-container_article-image'>
        <img src={imgUrl} alt='blog' />
      </dir>
      <div className='gem__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article
