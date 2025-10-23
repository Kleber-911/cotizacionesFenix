import React, { useState } from 'react'
import './navbar.scss'
import { NavLink } from 'react-router-dom'

export const Buttons = () => {
const[posbuttons,setposbuttons]=useState(0)

function exemover(){

let var1=posbuttons
if (var1==0){
setposbuttons(1)
}else{
setposbuttons(0)

}




}









  return (
    <div className={posbuttons==0?"container-btn pos1":"container-btn pos2"}>
        <button onClick={exemover} className="btn-move"></button>

      <NavLink to="/buscartrabajo">
        <button className="btn-Buscar">Buscar</button>
      </NavLink>

      <NavLink to="/agregartrabajo">
        <button className="btn-Agregar_Trabajo">
          Agregar <br></br> Trabajo
        </button>
      </NavLink>
    </div>
  );
}
