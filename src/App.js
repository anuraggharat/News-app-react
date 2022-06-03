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
  const [data, setData] = useState(null);
  const [selected, setSelected] = useState("breaking-news");
  const [language,setLanguage] = useState("en")
  const [country,setCountry] = useState("in")


  useEffect(() => {
     const fetchHeadlines = async () => {
       try {
         const res = await fetch(
           `https://gnews.io/api/v4/top-headlines?&topic=${selected}&lang=${language}&country=${country}&token=d591b0cad31fe5d15357f937fce46c89`
         );
         const response = await res.json();
         setData(response.articles);
       } catch (error) {
         alert(error);
       }
     };
    fetchHeadlines();
  }, [selected,language,country]);

  return (
    <div className=" w-100 min-vh-100 bg-light">
      <div className="container text-center pt-3 pb-3">
        <h1>Quick News</h1>
        <p>News in shorts</p>
      </div>
      <div className="container">
        <div className="flex flex-row">
          {categories.map((item, index) => (
            <button
              className={
                selected === item
                  ? "btn btn-primary me-2 mb-2"
                  : "btn btn-outline-primary me-2 mb-2"
              }
              key={index}
              onClick={() => setSelected(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="container mt-2 mb-3">
        <div className="row">
          <div className="col-lg-4">
            <div className="row mb-3">
              <label htmlFor="language" className="col-sm-3 col-form-label">
                Language
              </label>
              <div className="col-sm-9">
                <select
                  className="form-select"
                  defaultValue={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option value="en">English</option>
                  <option value="ar">Arabic</option>
                  <option value="de">German</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="hi">Hindi</option>
                  <option value="it">Italian</option>
                  <option value="mr">Marathi</option>
                  <option value="pt">Portugese</option>
                  <option value="no">Norwegian</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row mb-3">
              <label htmlFor="country" className="col-sm-3 col-form-label">
                Country
              </label>
              <div className="col-sm-9">
                <select
                  className="form-select"
                  defaultValue={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="au">Australia</option>
                  <option value="br">Brazil</option>
                  <option value="ca">Canada</option>
                  <option value="ch">Switzerland</option>
                  <option value="cn">China</option>
                  <option value="de">Germany</option>
                  <option value="fr">France</option>
                  <option value="gb">United Kingdom</option>
                  <option value="hk">Hong Kong</option>
                  <option value="in">India</option>
                  <option value="sg">Singapore</option>
                  <option value="us">United States</option>
                </select>
              </div>
            </div>
          </div>
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
