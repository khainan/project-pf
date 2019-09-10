import React , { useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import NewsCard from './NewsCard';
import { SyncLoader } from 'react-spinners';

function App() {

  const [listArticle, setArcticle] = useState(null)
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    await axios.get("https://newsapi.org/v2/everything?q=apple&from=2019-09-09&to=2019-09-09&sortBy=popularity&apiKey=4dd0dfded0a44440a08855202e3835e9")
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
        <h2 className="header__title"><span style={{color: "#3a8ff3"}}>PAY</span><span style={{color:"#26be6b"}}>FAZZ</span> NEWS</h2>
      </div>
      <div className="app__body">
      { !loading && listArticle ?
          listArticle.map((val, index) => {
            const date = val.publishedAt.slice(0, 10)
            const time = val.publishedAt.slice(11, 16)

            return(
              <NewsCard
                key={index}
                author={val.author}
                content={val.content}
                description={val.description}
                image={val.urlToImage}
                publishedAt={date}
                readMore={(url) => handleReadMore(url)}
                title={val.title}
                time={time}
                url={val.url}
              />
            )
          })
      : <SyncLoader loading={loading} />}
      </div>
    </div>
  );
}

export default App;
