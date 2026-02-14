import React, { useEffect, useState } from 'react'
import './costos.scss'
import API_URL from "./api";
export const Costos_Input = ({handleInfo,id,ref,tabIndex1,idwork1,listaGastos}) => {


const[textGastos,setTextGastos]=useState("")


function sendInfotoPadre(){
handleInfo([textGastos,id])
}

















const[desabilitarBoton,setdesabilitarBoton]=useState(false)
function ingresoGastos(e) {
  let valor = e.target.value;

  // Capitaliza la primera letra
  if (valor.length > 0) {
    valor = valor.charAt(0).toUpperCase() + valor.slice(1);
  }
  setTextGastos(valor);

  // Obtiene todos los nombres actuales
  const nombres = listaGastos.map(item => item.Nombre);

  // Verifica si ya existe un gasto con ese nombre
const existe = nombres.some(item => item.toLowerCase() === valor.toLowerCase());

  // Si existe, deshabilita el botón
  setdesabilitarBoton(existe);

  // if (existe) {
  //   console.log("⚠️ Gasto repetido, botón deshabilitado");
  // }
}


  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);




const fixErase = async (a) => {
  try {
    const response = await fetch(`${API_URL}/fixerasegastos/` + a, {
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
        <input list="opciones" tabIndex={tabIndex1} ref={ref} onChange={ingresoGastos} value={textGastos} className={desabilitarBoton?'input_CostosInput input_desabilitado':"input_CostosInput"}type="text" />
        <button onClick={sendInfotoPadre} className='btn_checkInput' disabled={desabilitarBoton} >✅</button>
        <button  onClick={fijarEliminarCosto} title='Fijar / Eliminar permanentemente en este trabajo'  className='btn_checkInputPin'>📌</button>
      
        <datalist id="opciones">




 <option value="Papel"/>
 <option value="Placas+Impresión"/>
 <option value="Corte"/>
 <option value="UV"/>
 <option value="Perforación"/>
 <option value="Papel Adhesivo"/>
 <option value="Impresión Digital"/>
 <option value="Medio corte"/>
 <option value="Numerado"/>
 <option value="Compaginado+Pegado"/>
 <option value="Troquel"/>
 <option value="Troquelado"/>
 <option value="Pegado Bolsillo"/>
 <option value="Perforado"/>
 <option value="Terminados(Peg+Grap+Kraf)"/>
 <option value="Terminados(Peg+Kraf)"/>
 <option value="Doblado"/>
 <option value="Plastificado"/>
 <option value="Corte Laser"/>
 <option value="Placas+Impresón Hojas"/>
 <option value="Cartones"/>
 <option value="Adhesivo Guardas"/>
 <option value="Impresón Hojas"/>
 <option value="Laminado Pastas"/>
 <option value="Anillos"/>
 <option value="Mano Obra"/>
 <option value="Desgaste de Máquina"/>
 <option value="Impresión Hojas"/>
 <option value="Impresión Portada"/>
 <option value="Laminado"/>
 <option value="Grafado"/>
 <option value="Encolado"/>
 <option value="Madera"/>
 <option value="Argollas"/>









        </datalist>
    </div>
  )
}
