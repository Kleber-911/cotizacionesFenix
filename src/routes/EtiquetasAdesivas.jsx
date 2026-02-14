
import React, { useEffect, useState } from 'react'
import { ListWorkSearch } from '../ListWorkSearch'
import API_URL from "../api";

export const EtiquetasAdesivas = () => {
const[busquedaTrabajos1,setbusquedaTrabajos1]=useState(0)

const enviarDatosBusqueda = async () => {
  try {
  
    // 2️⃣ Preparar los datos del pedido con la URL incluida
 

    const datos = {
      s_Trabajo:'Etiquetas Adesivas' ,
       s_Limitar:true
     
    };

    console.log("Datos a enviar:", datos);

    // 3️⃣ Enviar todo al backend
    const res = await fetch(`${API_URL}/searchtrabajos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    });

    const respuesta = await res.json();

    if (res.ok) {
      // alert("✅ Guardado con éxito");
      setbusquedaTrabajos1(respuesta)
     
      console.log("Respuesta del backend:", respuesta);
    } else {
      // alert("❌ Error al guardar los datos");
    }
  } catch (error) {
    console.error("Error en enviarDatos:", error);
    alert("Ocurrió un error al guardar");
  }




};



useEffect  (() => {
  enviarDatosBusqueda();

}, [])












  return (
    <>
   <ListWorkSearch busquedaFinal={busquedaTrabajos1} tituloTabla={"ULTIMAS ETIQUETAS ADHESIVAS AGREGADAS"}></ListWorkSearch>
 
    </>
  )
}


