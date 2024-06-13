import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./InfoCountrieComponent.css";
import { useParams } from "react-router-dom";

const InfoCountrieComponent = () => {
  const { countryName } = useParams();
  const [countrie, setCountrie] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode !== null ? JSON.parse(savedDarkMode) : false;
  });
  const navigate = useNavigate();

  const handleRedirection = () => {
    navigate(`/Countries`);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(!isDarkMode));
  };

  useEffect(() => {
    const fetchCountry = () => {
      fetch("/src/assets/CountriesComponent/data.json")
        .then((response) => response.json())
        .then((data) => {
          const foundCountry = data.find(
            (countrie) => countrie.name === countryName
          );
          setCountrie(foundCountry);
        });
    };

    fetchCountry();
  }, []);

  return (
    <div className={`InfoCountrieComponent ${isDarkMode ? "dark" : ""}`}>
      <header>
        <h1>Where in the world?</h1>
        <div className="modeScreen" onClick={toggleDarkMode}>
          <div className="moonMood"></div>
          <h3 className="tittleDarkMode">Dark Mode</h3>
        </div>
      </header>

      <div className="backButton" onClick={handleRedirection}>
        <div className="arrowLeftImg"></div>
        <button>Back</button>
      </div>

      <div className="informationCountrie">
        <div className="flagCountrie">
          <img src={countrie.flag} alt="" />
        </div>
        <div className="information">
          <h1>{countrie.name}</h1>

          <section className="containerInformation">
            <div className="columnOne">
              <h3>
                <span className="tittleBold">Native Name:</span>{" "}
                {countrie.nativeName}
              </h3>
              <h3>
                <span className="tittleBold">Population:</span>{" "}
                {countrie.population}
              </h3>
              <h3>
                <span className="tittleBold">Region:</span> {countrie.region}
              </h3>
              <h3>
                <span className="tittleBold">Sub Region:</span>{" "}
                {countrie.subregion}
              </h3>
              <h3>
                <span className="tittleBold">Capital:</span> {countrie.capital}
              </h3>
            </div>

            <div className="columnTwo">
              <h3>
                <span className="tittleBold">Top Level Domain:</span>{" "}
                {countrie.topLevelDomain}
              </h3>
              <h3>
                <span className="tittleBold">Currencies:</span>{" "}
                {countrie.currencies?.map((currency) => currency.name)}
              </h3>
              <h3>
                <span className="tittleBold">Languages: </span>
                {countrie.languages
                  ?.map((language) => language.name)
                  .join(", ")}
              </h3>
            </div>
          </section>

          <section className="borderCountries">
            <h3>
              <span className="tittleBold">Border Countries: </span>
            </h3>

            {countrie.borders?.map((border) => (
              <div className="borderCou">
                <h3>{border}</h3>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default InfoCountrieComponent;
