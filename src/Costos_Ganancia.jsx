import React, { useEffect, useState } from 'react'
import './costos.scss'

export const Costos_Ganancia = ({handleGanancia,valorGananciaMostrar}) => {
    const[valorInputGanancia,setvalorInputGanancia]=useState("")




    function escribirGanacia(e){
         let valorGanancia=   e.target.value
  valorGanancia = valorGanancia.replace(/,/g, ".");

    // Eliminar caracteres no numéricos excepto punto
    valorGanancia = valorGanancia.replace(/[^0-9.]/g, "");

    const partes = valorGanancia.split(".");
    if (partes.length > 2) {
      valorGanancia = partes[0] + "." + partes.slice(1).join("");
    }

 if (partes[1]) {
      partes[1] = partes[1].slice(0, 2);
      valorGanancia = partes.join(".");
    }


         setvalorInputGanancia(valorGanancia)
         handleGanancia([valorGanancia])









//-------------
    //  let tempValue = e.target.value;

    // // Cambiar comas a puntos
    // tempValue = tempValue.replace(/,/g, ".");

    // // Eliminar caracteres no numéricos excepto punto
    // tempValue = tempValue.replace(/[^0-9.]/g, "");

    // // Asegurar solo un punto decimal
    // const partes = tempValue.split(".");
    // if (partes.length > 2) {
    //   tempValue = partes[0] + "." + partes.slice(1).join("");
    // }

    // // Limitar a 2 decimales
    // if (partes[1]) {
    //   partes[1] = partes[1].slice(0, 2);
    //   tempValue = partes.join(".");
    // }









        }


useEffect(() => {
 
 setvalorInputGanancia(valorGananciaMostrar)

}, [valorGananciaMostrar])


  
  return (
                <div title={""}className='costos_item costos_item_ganancia '> <p className='box_ganancia'>Ganancia</p>   <div className='containerDatos'>  
                <input value={ isNaN(valorInputGanancia)  ?0:  valorInputGanancia} onChange={escribirGanacia}className='input_costos' type="text" /><span>$</span> </div></div>

  )
}
