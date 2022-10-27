import Form from "./components/Form";
import Header from "./components/Header";
import {useState, useEffect} from 'react'
import NewsList from "./components/NewsList";

function App() {

  const [category, setCategory] = useState('');
  const [news, setNews] = useState([]);

  useEffect(() => {
    const consultAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=co&category=${category}&apiKey=d95730ec2f3e4bb4a2edc6450efb86e5`;
      const response = await fetch(url);
      const news = await response.json();
      setNews(news.articles);
    }
    consultAPI();
  }, [category]);

  return (
    <>
      <Header title="News Finder" />

      <div className="container white">
        <Form setCategory={setCategory} />

        <NewsList news={news}/>
      </div>
    </>
  );
}

export default App;
