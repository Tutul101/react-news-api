import "./App.css";
import request from "superagent";
import { useEffect, useState } from "react";
import { BigCard } from "./components/BigCard";
import { NewsTop } from "./components/NewsTop";
import { NewsTopCard } from "./components/NewsTopCard";
import { SmallCard } from "./components/SmallCard";
import loader from "./loading.gif";
function App() {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  const fetchData = async () => {
    const url = `https://www.thequint.com/api/v1/collections/home`;
    let rootResponse = await request.get(url).then((res) => res.body.items);
    let url_slug = rootResponse[0].slug;
    try {
      const newsurl = `https://www.thequint.com/api/v1/collections/${url_slug}`;

      let newsResponse = await request
        .get(newsurl)
        .then((res) => res.body.items);

      const ourData = newsResponse.filter((news, index) => index < 8);
      console.log(ourData);

      setNews(ourData);
      setLoading(false);
      console.log(news);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return (
      <div className="">
        <div className="loading-container">
          <img
            src={loader}
            style={{ width: "50%", height: "30%", margin: "0 auto" }}
            alt=""
          ></img>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container root-container">
        <div className="grid-col-1">
          <BigCard news={news[0]} />
          <div className="grid-col-row2">
            <div className="news-order">
              <NewsTop news={news[1]}></NewsTop>
              <NewsTop news={news[2]}></NewsTop>
              <NewsTopCard news={news[3]}></NewsTopCard>
            </div>
            <div className="grid-col-row2-right">
              <div className="news-order">
                <SmallCard news={news[4]}></SmallCard>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-col-2">
          <div className="add-wraper">
            <span className="add-heading">ADVERTISEMENT</span>
            <div className="add-box">
              <div className="add"></div>
            </div>
          </div>
          <div className="right-column-news">
            <NewsTop news={news[5]}></NewsTop>
            <NewsTop news={news[6]}></NewsTop>
            <NewsTopCard news={news[7]}></NewsTopCard>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
