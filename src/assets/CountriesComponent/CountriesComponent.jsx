"use client";
import React from "react";
import "./CountriesComponent.css";
import PropTypes from "prop-types";

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
          <div className="loupeImg"></div>
          <input type="text" placeholder="Search for a country..." />
        </div>

        <select name="regions" className="regions">
          <option selected disabled value="0">Filter By Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

CountriesComponent.propTypes = {};

export default CountriesComponent;
