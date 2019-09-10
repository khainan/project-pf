import React from 'react';
import './news-card.css';

function NewsCard(props){
  return (
    <div className="card">
      <div className="card_image_container">
        <img src={props.image} alt={props.image} />
      </div>
      <div className="card_text_container">
        <h2 className="card__title">{props.title}</h2>
        <div className="card_author_container">
          <p className="card__text card_text_author">{props.author}</p>
          <p className="card__text card_text_date">{props.publishedAt}</p>
          <p className="card__text card_text_time">{props.time}</p>
        </div>
        <p className="card__text">{props.description}</p>
        <button className="button_read_more" onClick={() => props.readMore(props.url)}>Read more...</button>
      </div>
    </div>
  )
}

export default NewsCard