import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import stylesCountries from "./CountriesComponent.module.css";

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
    <div className={`${stylesCountries.countriescomponent} ${darkMode ? stylesCountries.dark : ""}`}>
      <header>
        <h1>Where in the world?</h1>
        <div className={stylesCountries.modeScreen} onClick={handleDarkModeToggle}>
          <div className={stylesCountries.moonMood}></div>
          <h3 className={stylesCountries.tittleDarkMode}>Dark Mode</h3>
        </div>
      </header>

      <div className={stylesCountries.filters}>
        <div className={stylesCountries.search}>
          <div className={stylesCountries.inputModified}>
            <div className={stylesCountries.loupeImg}></div>
            <input
              type="text"
              placeholder="Search for a country..."
              value={searchCountrie}
              onChange={handleCountrieChange}
            />
          </div>
        </div>
        <div className={stylesCountries.filterRegions}>
          <select
            name="regions"
            className={stylesCountries.regions}
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

      <div className={stylesCountries.countriesList}>
        {filteredCountries.map((countrie) => (
          <div
            className={stylesCountries.cardCountries}
            key={countrie.name}
            onClick={() => handleCountrySelect(countrie)}
          >
            <div className={stylesCountries.imgCountrie}>
              <img src={countrie.flag} alt="" />
            </div>
            <div className={stylesCountries.infoCountrie}>
              <h4 className={stylesCountries.countrieTittle}>{countrie.name}</h4>
              <h4>
                <span className={stylesCountries.tittleBold}>Population: </span>
                {countrie.population.toLocaleString("de-DE")}
              </h4>
              <h4>
                <span className={stylesCountries.tittleBold}>Region:</span> {countrie.region}
              </h4>
              <h4>
                <span className={stylesCountries.tittleBold}>Capital:</span> {countrie.capital}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountriesComponent;
