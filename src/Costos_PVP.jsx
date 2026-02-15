import React, { useEffect, useState } from 'react'
import './costos.scss'

export const Costos_PVP = ({handlePvp,valorPVPMostrar,pvpSuperior1,tabindex3}) => {
    const[valorInputPvp,setvalorInputPvp]=useState("")



    function escribirpvp(e){
         let valorPvp=   e.target.value



    valorPvp = valorPvp.replace(/,/g, ".");


    valorPvp = valorPvp.replace(/[^0-9.]/g, "");


  const partes = valorPvp.split(".");
    if (partes.length > 2) {
      valorPvp = partes[0] + "." + partes.slice(1).join("");
    }

  if (partes[1]) {
      partes[1] = partes[1].slice(0, 2);
      valorPvp = partes.join(".");
    }


         setvalorInputPvp(valorPvp)
         handlePvp([valorPvp])
console.log(valorPvp)




















        }








useEffect(() => {
 
 setvalorInputPvp(valorPVPMostrar)

}, [valorPVPMostrar])


useEffect(() => {
 
 setvalorInputPvp(pvpSuperior1)
handlePvp([pvpSuperior1])
}, [pvpSuperior1])




  return (
                <div title={""}className='costos_item costos_item_ganancia'> <p className='box_ganancia'>PVP</p>   <div className='containerDatos'>  
                <input tabIndex={tabindex3} value={ isNaN(valorInputPvp)  ?0:  valorInputPvp } onChange={escribirpvp}className='input_costos' type="text" /><span>$</span> </div></div>

  )
}
