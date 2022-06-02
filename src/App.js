import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';
import {useEffect, useState} from 'react'
import Loader from './Components/Loader';

const categories = [
  "breaking-news",
  "world",
  "nation",
  "business",
  "technology",
  "entertainment", 
  "sports", 
  "science",
  "health",
];


function App() {

  const[data,setData]=useState(null)
  const [selected, setSelected] = useState("breaking-news");

  const fetchHeadlines=async()=>{
    const res = await fetch(
      `https://gnews.io/api/v4/top-headlines?&topic=${selected}&lang=en&country=in&token=d591b0cad31fe5d15357f937fce46c89`
    );
    const response =await res.json();
    setData(response.articles)
  }

 
  useEffect(()=>{
    fetchHeadlines()
  },[selected])


  return (
    <div className=" w-100 min-vh-100 bg-light">
      <div className="container text-center pt-5 pb-5">
        <h1>News App</h1>
      </div>
      <div className="container mb-5">
        <div className="flex flex-row">
          {categories.map((item, index) => (
            <button
              className={
                selected == item
                  ? "btn btn-primary me-2 mb-2"
                  : "btn btn-outline-primary me-2 mb-2"
              }
              key={index}
              onClick={()=>setSelected(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      {data == null ? (
        <Loader />
      ) : (
        <div className="container">
          {data.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
