import './App.css';
import {useState} from "react"

const api = {
  key : '8511b0c213b5ed2f1d25d0ebd4db55ec',
  base: "https://api.openweathermap.org/data/2.5/",
};


function App() {

  const [search , setSearch] = useState("");
  const [weather,setWeather] = useState({});


  const searchPressed = () => {
     fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
     .then((res) => res.json())
     .then((result) => {
      setWeather(result);
     });
  }

  return (
    <div className="App">
      <header className="App-header">

       {/* HEADER */}
       <h1>Weather App</h1>

       {/* Search Box */}
       <div>
       <input type ="text" placeholder = "Enter city/town ..."
       onChange={(e) => setSearch(e.target.value)}

       />
       <button onClick={searchPressed}>Search</button>
       </div>

       {typeof weather.main !== 'undefined'? (
        <div>
       {/* Location */}
       <p>{weather.name}</p>

       {/* Temprecher F/C */}
       <p>{weather.main.temp}°C</p>

       {/* Condition (Sunny) */}
       <p>{weather.weather[0].main}</p>
       <p>({weather.weather[0].description})</p>
        </div>
       ) : (
        ""
       )}

      </header>
    </div>
  );
}

export default App;
