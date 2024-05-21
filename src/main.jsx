import React from 'react'
import ReactDOM from 'react-dom/client'
import QrCode from './assets/QrCode/QrCode.jsx' // COMPONENT QR
import CardComponent from './assets/CardComponent/CardComponent.jsx' // COMPONENT CARD
import OmeletteRecipe from './assets/OmeletteRecipe/OmeletteRecipe.jsx' // COMPONENT RECIPE - OMELETTE

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <QrCode /> */}
    {/* <CardComponent/> */}
    <OmeletteRecipe/>
    
  </React.StrictMode>,
)
