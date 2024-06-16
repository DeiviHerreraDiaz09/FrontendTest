import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import QrCode from "./assets/QrCode/QrCode.jsx";
import CardComponent from "./assets/CardComponent/CardComponent.jsx";
import OmeletteRecipe from "./assets/OmeletteRecipe/OmeletteRecipe.jsx";
import ExpensesComponent from "./assets/ExpensesComponent/ExpensesComponent.jsx";
import CountriesComponent from "./assets/CountriesComponent/CountriesComponent.jsx";
import InfoCountrieComponentfrom from "./assets/CountriesComponent/InfoCountrieComponent.jsx";
import MenuComponent from "./assets/MenuComponent/MenuComponent.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MenuComponent />} />
        <Route path="/Countries" element={<CountriesComponent />} />
        <Route path="/infoCountrie/:countryName" element={<InfoCountrieComponentfrom />} />
        <Route path="/card" element={<CardComponent />} />
        <Route path="/qr" element={<QrCode />} />
        <Route path="/omelette" element={<OmeletteRecipe />} />
        <Route path="/expenses" element={<ExpensesComponent />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
