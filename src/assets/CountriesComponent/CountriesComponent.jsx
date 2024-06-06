import "./CountriesComponent.css";

const CountriesComponent = ({}) => {
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

      <div className="countriesList"></div>


    </div>
  );
};


export default CountriesComponent;
