import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CountriesComponent.css";

const CountriesComponent = () => {
  const [dataCountries, setDataCountries] = useState([]);
  const [uniqueRegions, setUniqueRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchCountrie, setSearchCountrie] = useState("");
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode !== null ? JSON.parse(savedDarkMode) : false;
  });

  const navigate = useNavigate();

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const handleCountrieChange = (event) => {
    setSearchCountrie(event.target.value);
  };

  const handleCountrySelect = (country) => {
    navigate(`/infoCountrie/${country.name}`);
  };

  const handleDarkModeToggle = () => {
    setDarkMode((prevDarkMode) => {
      const newDarkMode = !prevDarkMode;
      localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
      return newDarkMode;
    });
  };

  const filteredCountries = dataCountries.filter((countrie) => {
    return (
      (!selectedRegion || countrie.region === selectedRegion) &&
      countrie.name.toLowerCase().includes(searchCountrie.toLowerCase())
    );
  });

  useEffect(() => {
    const loadData = () => {
      fetch("/src/assets/CountriesComponent/data.json")
        .then((response) => response.json())
        .then((data) => {
          setDataCountries(data);
          const regions = [...new Set(data.map((countrie) => countrie.region))];
          setUniqueRegions(regions);
        });
    };

    loadData();
  }, []);

  return (
    <div className={`countriescomponent ${darkMode ? "dark" : ""}`}>
      <header>
        <h1>Where in the world?</h1>
        <div className="modeScreen" onClick={handleDarkModeToggle}>
          <div className="moonMood"></div>
          <h3 className="tittleDarkMode">Dark Mode</h3>
        </div>
      </header>

      <div className="filters">
        <div className="search">
          <div className="inputModified">
            <div className="loupeImg"></div>
            <input
              type="text"
              placeholder="Search for a country..."
              value={searchCountrie}
              onChange={handleCountrieChange}
            />
          </div>
        </div>
        <div className="filterRegions">
          <select
            name="regions"
            className="regions"
            onChange={handleRegionChange}
          >
            <option selected disabled value="0">
              Filter By Region
            </option>
            <option selected value="">
              Todas las regiones
            </option>
            {uniqueRegions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="countriesList">
        {filteredCountries.map((countrie) => (
          <div
            className="cardCountries"
            key={countrie.name}
            onClick={() => handleCountrySelect(countrie)}
          >
            <div className="imgCountrie">
              <img src={countrie.flag} alt="" />
            </div>
            <div className="infoCountrie">
              <h4 className="countrieTittle">{countrie.name}</h4>
              <h4>
                <span className="tittleBold">Population: </span>
                {countrie.population.toLocaleString("de-DE")}
              </h4>
              <h4>
                <span className="tittleBold">Region:</span> {countrie.region}
              </h4>
              <h4>
                <span className="tittleBold">Capital:</span> {countrie.capital}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountriesComponent;
