import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import QrCode from './assets/QrCode/QrCode.jsx' // COMPONENTE QR

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QrCode />
  </React.StrictMode>,
)
