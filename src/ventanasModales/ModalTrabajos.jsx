import React, { useEffect, useState } from 'react'
import './modalTrabajos.scss'
import API_URL from "../api";


export const ModalTrabajos = ({isOpen,closeModal,modalTrabajo2}) => {

  const [seeAllMate, setseeAllMate] = useState([]);
  const [seeAllTam, setseeAllTam] = useState([]);







  const getAllMaterialesYPapeles = async () => {
    try {
     
      const response = await fetch(`${API_URL}/all1MaterialesYPapeles`, {
        method: "GET"
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ` + response.status);
      }
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      console.log("hubo un problema con la peticion:", error);
    }
  };











  useEffect(() => {
   
    if (!isOpen) return
    const fetchPapelesYTamanos = async () => {
      const todos_MaterialesYpapeles = await getAllMaterialesYPapeles();
      if ( todos_MaterialesYpapeles) {

            setseeAllMate(todos_MaterialesYpapeles.finalMateriales)
            setseeAllTam(todos_MaterialesYpapeles.finalTamanos)


      }
    };
    fetchPapelesYTamanos();
  },[isOpen]);


// console.log(seeAllMate)
// console.log(seeAllTam)







const[valuePapelesComunes,setvaluePapelesComunes]=useState([])
const[valueTamanosComunes,setvalueTamanosComunes]=useState([])
const[inputTrabajo,setinputTrabajo]=useState("")
const[idNuevoTrabajo,setidNuevoTrabajo]=useState("")



function fcnPapelesComunes(e){
    const values1 = Array.from(e.target.selectedOptions, option => option.value);
    setvaluePapelesComunes(values1);

    // 👇 Aquí haces lo que quieras cada vez que cambia
    console.log("Nueva selección:", values1);


}
function fcnTamanosComunes(e){
    const values2 = Array.from(e.target.selectedOptions, option => option.value);
    setvalueTamanosComunes(values2);

    // 👇 Aquí haces lo que quieras cada vez que cambia
    console.log("Nueva selección:", values2);


}



function fcninputTrabajo(e){
let valor3=e.target.value
  if (valor3.length > 0) {
    valor3 = valor3.charAt(0).toUpperCase() + valor3.slice(1);
  }
setinputTrabajo(valor3)


}



















const saveTrabajo=async(med)=>{
    try {

        const response=await fetch (`${API_URL}/savenewtrabajo`,{
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
      setidNuevoTrabajo(respuesta.TamanoID); // 👈 guardar el ID nuevo
       return respuesta.TamanoID;   
    }

  
    } catch (error) {
        console.log('hubo un problema con la peticion:',error)
    }


}












let papelesYtamanosComunes=[]



async function saveNewTrabajo(){



papelesYtamanosComunes={

 "papeles":valuePapelesComunes.map(Number),
 "tamanos":valueTamanosComunes.map(Number),
 "nombreTrabajo":inputTrabajo.trim(),



}



// saveTamano(medidas)

console.log(papelesYtamanosComunes)

 const nuevoIdTrabajo = await saveTrabajo(papelesYtamanosComunes);

console.log(nuevoIdTrabajo)

// console.log(nombreMedida+medida1+"x"+medida2+" cm")
// medidaListaParaenviar= [nombreMedida.trim(),medida1.trim()+"x"+medida2.trim()+" cm",hayNuevoTamano,nuevoId]
// console.log(medidaListaParaenviar)
// modaltam2(medidaListaParaenviar)


modalTrabajo2([papelesYtamanosComunes.nombreTrabajo,nuevoIdTrabajo])

}














    if(!isOpen) return null;



  return (

    <div className='containerModalTrabajos'>
       <div className='styleModalTrabajos'>
               
          <button className='btn_close' onClick={closeModal}>x</button>
          <br></br>
          <h2 className='modalTrabajosh2'>Trabajo:</h2>
          <input onChange={fcninputTrabajo} value={inputTrabajo}   className='modalTrabajosInput' type='text'></input>
        <br></br>
          

<div className='containerSelectPapelesComunes'>
<div className='selectPapelesComunes'>









          <h3 className='modalTrabajosh2'>Materiales Comunes:</h3>

<select value={valuePapelesComunes} onChange={fcnPapelesComunes} multiple className='selectAllAgregarTrabajo' name="clientes" id="clientes" size="4"  >

{
seeAllMate.map((item,index)=>{
// {console.log(item.MaterialesID)}
return <option key={item.MaterialesID} value={item.MaterialesID} >  {item.Nombre}   </option>
})

}
      

</select>





</div>

<div className='selectPapelesComunes'>







           <h3 className='modalTrabajosh2'>Tamaños Comunes:</h3>
<select value={valueTamanosComunes} onChange={fcnTamanosComunes} multiple className='selectAllAgregarTrabajo' name="clientes" id="clientes" size="4" >
       
{
seeAllTam.map((item,index)=>{
// {console.log(item.MaterialesID)}
return <option key={item.TamanoID} value={item.TamanoID} >  {item.Nombre} = {item.Medida} </option>
})

}
  







      
</select>



</div>
         

</div>
<p className='informacionModalTrabajos'>*Selecciona multiples Papeles y Tamaños con <span>"ctrl + click"</span></p>

         
       




          <button onClick={async()=>{await saveNewTrabajo();closeModal()}} disabled={inputTrabajo==""?true:false}  className='btn_GuardarTrabajoNuevo'>Guardar Trabajo</button>
    </div>

    </div> 
  )
}
