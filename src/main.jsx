import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import QrCode from './assets/QrCode/QrCode.jsx' // COMPONENT QR
import CardComponent from './assets/CardComponent/CardComponent.jsx' // COMPONENT CARD

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <QrCode /> QR CODE COMPONENT */}
    <CardComponent></CardComponent>
  </React.StrictMode>,
)
