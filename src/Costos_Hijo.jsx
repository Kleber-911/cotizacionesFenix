import React, { useState } from 'react'

import './costos.scss'


export const Costos_Hijo = ({visual,id,handleDolares,handleId,ttabindex,valordinero}) => {

if (valordinero === undefined) {
  valordinero = "";
}



const[valorGasto,setvalorGasto]=useState(valordinero)


  function escribir(e) {
     let tempValue = e.target.value;

    // Cambiar comas a puntos
    tempValue = tempValue.replace(/,/g, ".");

    // Eliminar caracteres no numéricos excepto punto
    tempValue = tempValue.replace(/[^0-9.]/g, "");

    // Asegurar solo un punto decimal
    const partes = tempValue.split(".");
    if (partes.length > 2) {
      tempValue = partes[0] + "." + partes.slice(1).join("");
    }

    // Limitar a 2 decimales
    if (partes[1]) {
      partes[1] = partes[1].slice(0, 2);
      tempValue = partes.join(".");
    }

    setvalorGasto(tempValue);
    handleDolares([tempValue, id]);
  }





function eraseWithId(){
    handleId(id)
   
}

  return (

            <div title={visual}className='costos_item'> <p>{visual}</p>   <div className='containerDatos'> 
             <input tabIndex={ttabindex+1} value={valorGasto} onChange={escribir}className='input_costos' type="text" /><span>$</span> </div>
             <button onClick={eraseWithId}className='btn_costos'>❌</button></div>

  )
}
