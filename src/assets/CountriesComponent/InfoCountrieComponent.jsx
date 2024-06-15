import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import stylesCountries from "./CountriesComponent.module.css";
import stylesCountriesTwo from "./InfoCountrieComponent.module.css"
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
    <div className={`${stylesCountriesTwo.InfoCountrieComponent} ${isDarkMode ? stylesCountriesTwo.dark : ""}`}>
      <header>
        <h1>Where in the world?</h1>
        <div className={stylesCountriesTwo.modeScreen} onClick={toggleDarkMode}>
          <div className={stylesCountriesTwo.moonMood}></div>
          <h3 className={stylesCountries.tittleDarkMode}>Dark Mode</h3>
        </div>
      </header>

      <div className={stylesCountriesTwo.backButton} onClick={handleRedirection}>
        <div className={stylesCountriesTwo.arrowLeftImg}></div>
        <button>Back</button>
      </div>

      <div className={stylesCountriesTwo.informationCountrie}>
        <div className={stylesCountriesTwo.flagCountrie}>
          <img src={countrie.flag} alt="" />
        </div>
        <div className={stylesCountriesTwo.information}>
          <h1>{countrie.name}</h1>

          <section className={stylesCountriesTwo.containerInformation}>
            <div className={stylesCountriesTwo.columnOne}>
              <h3>
                <span className={stylesCountriesTwo.tittleBold}>Native Name:</span>{" "}
                {countrie.nativeName}
              </h3>
              <h3>
                <span className={stylesCountriesTwo.tittleBold}>Population:</span>{" "}
                {countrie.population}
              </h3>
              <h3>
                <span className={stylesCountriesTwo.tittleBold}>Region:</span> {countrie.region}
              </h3>
              <h3>
                <span className={stylesCountriesTwo.tittleBold}>Sub Region:</span>{" "}
                {countrie.subregion}
              </h3>
              <h3>
                <span className={stylesCountriesTwo.tittleBold}>Capital:</span> {countrie.capital}
              </h3>
            </div>

            <div className={stylesCountriesTwo.columnTwo}>
              <h3>
                <span className={stylesCountriesTwo.tittleBold}>Top Level Domain:</span>{" "}
                {countrie.topLevelDomain}
              </h3>
              <h3>
                <span className={stylesCountriesTwo.tittleBold}>Currencies:</span>{" "}
                {countrie.currencies?.map((currency) => currency.name)}
              </h3>
              <h3>
                <span cclassName={stylesCountriesTwo.tittleBold}>Languages: </span>
                {countrie.languages
                  ?.map((language) => language.name)
                  .join(", ")}
              </h3>
            </div>
          </section>

          <section className={stylesCountriesTwo.borderCountries}>
            <h3>
              <span className={stylesCountriesTwo.tittleBold}>Border Countries: </span>
            </h3>

            {countrie.borders?.map((border) => (
              <div className={stylesCountriesTwo.borderCou}>
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
