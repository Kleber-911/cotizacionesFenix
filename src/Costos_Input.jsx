import React, { useEffect, useState } from 'react'
import './costos.scss'

export const Costos_Input = ({handleInfo,id,ref,tabIndex1,idwork1}) => {


const[textGastos,setTextGastos]=useState("")


function sendInfotoPadre(){
handleInfo([textGastos,id])
}


















function ingresoGastos(e){
    let valor=e.target.value



  if (valor.length > 0) {
    valor = valor.charAt(0).toUpperCase() + valor.slice(1);
  }
setTextGastos(valor)

}

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);




const fixErase = async (a) => {
  try {
    const response = await fetch(`http://localhost:3000/fixerasegastos/` + a, {
      method: "POST",
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ` + response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Hubo un problema con la petición:", error);
  }
};

// ✅ Luego la función que la usa
async function fijarEliminarCosto() {
  const confirmar = window.confirm(
    `¿Estás seguro que deseas ${textGastos && idwork1 ? "agregar o eliminar" : "modificar"} el gasto "${textGastos}" en el trabajo ${idwork1}?`
  );
  if (!confirmar) return;

  try {
    const trabajos = await fixErase([textGastos, idwork1]);

    if (trabajos?.action === "deleted") {
      alert(`🗑️ El gasto "${textGastos}" fue eliminado correctamente.`);
    } else if (trabajos?.action === "inserted") {
      alert(`✅ El gasto "${textGastos}" fue agregado correctamente.`);
    } else {
      alert("⚠️ No se pudo completar la operación.");
    }
  } catch (error) {
    console.error("Error al fijar/eliminar el costo:", error);
    alert("❌ Ocurrió un error al procesar la solicitud.");
  }
}








  return (
    <div className='containerCostosInput'>
        <input list="opciones" tabIndex={tabIndex1} ref={ref} onChange={ingresoGastos} value={textGastos} className='input_CostosInput'type="text" />
        <button onClick={sendInfotoPadre} className='btn_checkInput'>✅</button>
        <button  onClick={fijarEliminarCosto} title='Fijar / Eliminar permanentemente en este trabajo'  className='btn_checkInputPin'>📌</button>
      
        <datalist id="opciones">
  <option value="Transporte" />
  <option value="Trabajo" />
  <option value="Tractor" />
  <option value="Tránsito" />
</datalist>
    </div>
  )
}
