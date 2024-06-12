import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QrCode from "./assets/QrCode/QrCode.jsx"; // COMPONENT QR
import CardComponent from "./assets/CardComponent/CardComponent.jsx"; // COMPONENT CARD
import OmeletteRecipe from "./assets/OmeletteRecipe/OmeletteRecipe.jsx"; // COMPONENT RECIPE - OMELETTE
import ExpensesComponent from "./assets/ExpensesComponent/ExpensesComponent.jsx"; // COMPONENT EXPENSES
import CountriesComponent from "./assets/CountriesComponent/CountriesComponent.jsx"; // COMPONENT COUNTRIES
import InfoCountrieComponentfrom from "./assets/CountriesComponent/InfoCountrieComponent.jsx"; // COMPONENT COUNTRIES

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<CountriesComponent />} />
        <Route path="/qr" element={<QrCode />} />
        <Route path="/card" element={<CardComponent />} />
        <Route path="/omelette" element={<OmeletteRecipe />} />
        <Route path="/expenses" element={<ExpensesComponent />} />
        <Route path="/infoCountrie" element={<InfoCountrieComponentfrom />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
