import React , { useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import NewsCard from './NewsCard';
import { SyncLoader } from 'react-spinners';
import moment from 'moment';

function App() {

  const [listArticle, setArcticle] = useState(null)
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    await axios.get("https://www.mocky.io/v2/5daac2753100002d00becd9d")
      .then(res => {
        setArcticle(res.data.articles)
        setLoading(false)
      })
  }

  const handleReadMore = (url) => {
    let win = window.open(url, '_blank');
    win.focus();
  }

  useEffect(() => {
    getData()
  },[])

  return (
    <div className="app">
      <div className="app__header">
        <h2 className="header__title">
          <span className="app__logo">NEWS</span>
          PORTAL
        </h2>
      </div>
      <div className="app__body">
      { !loading && listArticle ?
          listArticle.map((val, index) => {
            const date = moment(val.publishedAt).format("DD MMM, YYYY")
            const time = moment(val.publishedAt).format("HH:MM")

            return(
              <NewsCard
                key={index}
                author={val.author}
                content={val.content}
                description={val.description}
                image={val.urlToImage}
                publishedAt={date}
                readMore={(url) => handleReadMore(url)}
                source={val.source.name}
                title={val.title}
                time={time}
                url={val.url}
              />
            )
          })
      : <SyncLoader loading={loading} />}
      </div>
      <div className="app__footer">
        <h2 className="header__title">
          <span className="app__logo">NEWS</span>
          PORTAL
        </h2>
        <p className="footer__text">this is just a dummy web created using React Hooks</p>
        <p className="footer__text">Made by Khainan</p>
      </div>
    </div>
  );
}

export default App;
