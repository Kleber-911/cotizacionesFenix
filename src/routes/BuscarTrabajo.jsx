import React, { useState } from 'react'
import { BuscarTrabPage } from '../BuscarTrabPage'
import { ListWorkSearch } from '../ListWorkSearch'
import { MostrarInfo } from '../MostrarInfo'

export const BuscarTrabajo = () => {




const[infoFiltrada,setinfoFiltrada]=useState(0)
console.log(infoFiltrada)

function search1(value1){
console.log(value1==0)
setinfoFiltrada(value1)
}







  return (
    <>
    <BuscarTrabPage handleBussqueda={search1}></BuscarTrabPage>



{
// infoFiltrada ==0 ?'':

  <ListWorkSearch busquedaFinal={infoFiltrada} tituloTabla={"BUSQUEDA"}></ListWorkSearch>

}

   
    </>
  )
}
