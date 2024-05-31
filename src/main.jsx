import React from "react";
import ReactDOM from "react-dom/client";
import QrCode from "./assets/QrCode/QrCode.jsx"; // COMPONENT QR
import CardComponent from "./assets/CardComponent/CardComponent.jsx"; // COMPONENT CARD
import OmeletteRecipe from "./assets/OmeletteRecipe/OmeletteRecipe.jsx"; // COMPONENT RECIPE - OMELETTE
import ExpensesComponent from "./assets/ExpensesComponent/ExpensesComponent.jsx"; // COMPONENT EXPENSES
import CountriesComponent from "./assets/CountriesComponent/CountriesComponent.jsx" // COMPONENT COUNTRIES

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <QrCode /> */}
    {/* <CardComponent/> */}
    {/* <OmeletteRecipe/> */}
    {/* <ExpensesComponent/> */}
    <CountriesComponent/>
  </React.StrictMode>
);
