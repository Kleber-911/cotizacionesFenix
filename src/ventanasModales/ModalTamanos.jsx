import React, { useState } from 'react'
import './modaltamanos.scss'
import API_URL from "../api";

export const ModalTamanos = ({isOpen,closeModal,modaltam2,trab2}) => {
  const [estadoRadioMedida, setestadoRadioMedida] = useState("No");
  const[medida1,setmedida1]=useState("")
  const[medida2,setmedida2]=useState("")
  const[nombreMedida,setNombreMedida]=useState("")

  
  const estadoTrabajoFuncMedida = (e) => {
    setestadoRadioMedida(e.target.value);
    
  };
  
  
  
  
  
  const [newTamanoId, setNewTamanoId] = useState(null);
  if(!isOpen) return null;


const saveTamano=async(med)=>{
    try {

        const response=await fetch (`${API_URL}/savetamano`,{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(med)
        });
        if (!response.ok){
                throw new Error(`Error en la solicitud: `+response.status)
        }
     const respuesta = await response.json();
    console.log(respuesta)


   if (respuesta.success) {
      setNewTamanoId(respuesta.TamanoID); // 👈 guardar el ID nuevo
       return respuesta.TamanoID;   
    }

  
    } catch (error) {
        console.log('hubo un problema con la peticion:',error)
    }






}




console.log(trab2)


















let medidas=[]
let medidaListaParaenviar






async function nuevoMaterial(){


medidas={

 "medida1":medida1.trim(),
 "medida2":medida2.trim(),
 "nombreMedida":nombreMedida.trim(),
 "guardarConTamano":estadoRadioMedida,
 "trabajo1":trab2


}



// saveTamano(medidas)


 const nuevoId = await saveTamano(medidas);



let hayNuevoTamano='Si'

// console.log(nombreMedida+medida1+"x"+medida2+" cm")
// console.log(a)
medidaListaParaenviar= [nombreMedida.trim(),medida1.trim()+"x"+medida2.trim()+" cm",hayNuevoTamano,nuevoId]
// console.log(medidaListaParaenviar)
modaltam2(medidaListaParaenviar)



}













function fcnmedida1(e){
  
  
  let newValue = e.target.value;
  newValue = e.target.value.replace(/\./g, ",").replace(/[^0-9.,]/g, "").replace(/(,.*),/g, "$1");
  // reemplazar puntos por comas
  // newValue = newValue.replace(/\./g, ",");
  
  // setValue(newValue);
  
  setmedida1(newValue)


}
function fcnmedida2(e){
  
  
  let newValue = e.target.value;
  newValue = e.target.value.replace(/\./g, ",").replace(/[^0-9.,]/g, "").replace(/(,.*),/g, "$1");

  
  // reemplazar puntos por comas
  // newValue = newValue;
  
  // setValue(newValue);
  
  setmedida2(newValue)


}




// function enviarClientePadreTamano(){
//     console.log(clienteListoParaEnviar)

// }






  return (
            <div className='containerModalClientes'>
       <div className='styleModalClientes'>
               
          <button className='btn_close' onClick={closeModal}>x</button>
    
<br></br>

          <h2 className='modalTrabajosh2'>Nombre del Tamaño  (opcional)</h2>
           <input value={nombreMedida}   onChange={(e) => setNombreMedida(e.target.value)} className='modalTrabajosInput' type='text'></input>
          <br></br>

          <h2 className='modalTrabajosh2'>Medida:</h2> 
          
          <div className='tamano_medidas'>
          <input value={medida1}   onChange={(e) => fcnmedida1(e)} className='modalTrabajosInput' type='text' ></input>
          <span className='span_tamano_medidas'>cm</span>

          <span className='span_tamano_medidas'> ❌</span>



          <input value={medida2}   onChange={(e) => fcnmedida2(e)} className='modalTrabajosInput' type='text' ></input>
          <span className='span_tamano_medidas'>cm</span>




          </div>
          <h2 className='modalTrabajosh2'>Guardar Permanentemente en {trab2}:</h2> 
          
<div className='containerCampo_guardar_medida'>
    
    <input value="Si" checked={estadoRadioMedida === "Si"} onChange={estadoTrabajoFuncMedida} type='radio' name='agregMedida1' id='radio-1s' className='radio_1M' selected/>
    <label htmlFor="radio-1s">Si</label>
    <br></br>
    <input value="No" checked={estadoRadioMedida === "No"} onChange={estadoTrabajoFuncMedida} type='radio' name='agregMedida1'id='radio-2s' className='radio_2M'/>
    <label  htmlFor="radio-1s">No</label>



        

</div>







          <br></br>





          <button onClick={ async()=>{await nuevoMaterial();closeModal()}} disabled={medida1=="" ||medida2==""?true:false} className='btn_GuardarNuevoCliente'>OK</button>
    </div>

    </div> 
  )
}
