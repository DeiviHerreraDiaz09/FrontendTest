import { useState } from "react";
import "./CountriesComponent.css";
import { useEffect } from "react";

const CountriesComponent = ({}) => {
  const [dataCountries, setDataCountries] = useState([]);

  console.log(dataCountries);

  useEffect(() => {
    const loadData = () => {
      fetch('/src/assets/CountriesComponent/data.json')
        .then(response => response.json())
        .then(data => setDataCountries(data)); 
    };

    loadData();
  }, []);

  return (
    <div className="countriescomponent">
      <header>
        <h1>Where in the world?</h1>
        <div className="modeScreen">
          <div className="moonMood"></div>
          <h3>Dark Mode</h3>
        </div>
      </header>

      <div className="filters">
        <div className="search">
          <div className="inputModified">
            <div className="loupeImg"></div>
            <input type="text" placeholder="Search for a country..." />
          </div>
        </div>

        <div className="filterRegions">
          <select name="regions" className="regions">
            <option selected disabled value="0">
              Filter By Region
            </option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>

      <div className="countriesList">
        {dataCountries.map(countrie => (
          <div className="cardCountries" key={countrie.name}>
            <div className="imgCountrie">
              <img src={countrie.flag} alt="" />
            </div>
            <div className="infoCountrie">
              <h4 className="countrieTittle">{countrie.name}</h4>
              <h4>Population: {countrie.population}</h4>
              <h4>Region: {countrie.region}</h4>
              <h4>Capital: {countrie.capital}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountriesComponent;
