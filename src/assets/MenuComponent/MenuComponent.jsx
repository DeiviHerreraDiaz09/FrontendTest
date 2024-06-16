import React from 'react'
import stylesMenu from "./MenuComponent.module.css"
import { useNavigate } from "react-router-dom"

const MenuComponent = () => {

  const navigate = useNavigate()

  const handleNavigation = (path) => {
    navigate(path)
  }

  return (
    <div className={stylesMenu.menucomponent}>
      <div className={stylesMenu.cards}>
        <div className={`${stylesMenu.card} ${stylesMenu.red}`} onClick={() => handleNavigation('/card')} >
          <p className={stylesMenu.tip}>Card Component</p>
          <p className={stylesMenu.secondText}>Pruebas con maquetación de Cards</p>
        </div>
        <div className={`${stylesMenu.card} ${stylesMenu.blue}`} onClick={() => handleNavigation('/qr')} >
          <p className={stylesMenu.tip}>Qr Component</p>
          <p className={stylesMenu.secondText}>Pruebas con maquetación de Cards 2</p>
        </div>
        <div className={`${stylesMenu.card} ${stylesMenu.green}`} onClick={() => handleNavigation('/omelette')} >
          <p className={stylesMenu.tip}>Omelette Recipe Component</p>
          <p className={stylesMenu.secondText}>Maquetación receta de Omelette</p>
        </div>
        <div className={`${stylesMenu.card} ${stylesMenu.yellow}`} onClick={() => handleNavigation('/expenses')} >
          <p className={stylesMenu.tip}>Expenses Component</p>
          <p className={stylesMenu.secondText}>Grafica + consumo de contenido JSON</p>
        </div>
        <div className={`${stylesMenu.card} ${stylesMenu.pink}`} onClick={() => handleNavigation('/countries')} >
          <p className={stylesMenu.tip}>Countries Component</p>
          <p className={stylesMenu.secondText}>Consumo API de paises + información</p>
        </div>

      </div>
    </div>
  )
}

export default MenuComponent
