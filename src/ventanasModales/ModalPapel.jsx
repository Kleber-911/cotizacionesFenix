import React, { useEffect, useState } from 'react'
import './modalpapel.scss'
import API_URL from "../api";
import API_URL from "../api";

export const ModalPapel = ({isOpen,closeModal,modalpapel2,trab2}) => {







  const [allMate, setAllMate] = useState([]);
  const [materialElegido, setmaterialElegido] = useState("");
  const [gramajeElegido, setgramajeElegido] = useState("");
  

//   const [allClientesname, setAllClientesname] = useState([]);


  const getAllMateriales = async () => {
    try {
      // console.log("holaaaaa")
      const response = await fetch(`${API_URL}/all1materiales`, {
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
    const fetchClientes = async () => {
      const todos_Materiales = await getAllMateriales();
      if ( todos_Materiales) {
        setAllMate( todos_Materiales);
      }
    };
    fetchClientes();
  },[isOpen]);





// console.log(allMate)



let arrayMaterialesSeparados=[]
allMate.map((item,index)=>{
  let text=  item.Nombre
 let textsplitted= text.split(" ")
  
  arrayMaterialesSeparados[index]=textsplitted
})

// console.log(arrayMaterialesSeparados)
let onlyMateriales=[]
let onlyGramajes=[]
arrayMaterialesSeparados.map((item,index)=>{
    
onlyMateriales[index]=item[0]
onlyGramajes[index]=item[1]


})

const sinRepetidosonlyMateriales = [...new Set(onlyMateriales)];
const sinRepetidosonlyGramajes = [...new Set(onlyGramajes)];


sinRepetidosonlyMateriales.sort()
sinRepetidosonlyGramajes.sort()




let limpio_sinRepetidosonlyGramajes = sinRepetidosonlyGramajes.filter(v => v !== undefined);
// console.log(limpio); // [1, 2, 3, 4]






// console.log(sinRepetidosonlyMateriales)
// console.log(limpio_sinRepetidosonlyGramajes)




 const [estadoRadioMaterial, setestadoRadioMaterial] = useState("No");



 const estadoTrabajoFuncMaterial = (e) => {
    setestadoRadioMaterial(e.target.value);

  };










const saveMaterial=async(med)=>{
    try {

        const response=await fetch (`${API_URL}/savematerial`,{
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
      // setNewTamanoId(respuesta.TamanoID); // 👈 guardar el ID nuevo
       return respuesta.MaterialID;   
    }

  
    } catch (error) {
        console.log('hubo un problema con la peticion:',error)
    }

}















function ponerMaterial(e){
  let valor1 = e.target.value;
    
setmaterialElegido(valor1)
}
function ponerGramaje(e){
  let valor2 = e.target.value;

setgramajeElegido(valor2)
}

function onInputMaterial(e){
    let value1 = e.target.value;

  // Si no está vacío → primera letra en mayúscula
  if (value1.length > 0) {
    value1 = value1.charAt(0).toUpperCase() + value1.slice(1);
    value1 = value1.replace(/ /g, "_");
  }
setmaterialElegido(value1)

}

function onInputGramaje(e){
setgramajeElegido(e.target.value)
}






let newMaterial=[]

let materialListoParaenviar

async function guardarMaterialNuevo(){


console.log(gramajeElegido)









newMaterial={

 "material1":materialElegido.trim(),
 "gramaje1":gramajeElegido.trim(),
  "guardarConMedida":estadoRadioMaterial,
 "trabajo2":trab2


}



// saveTamano(medidas)


 const nuevoId = await saveMaterial(newMaterial);


// console.log(nuevoId)
let hayNuevoMaterial="Si"

materialListoParaenviar=[materialElegido.trim()+" "+gramajeElegido.trim(),hayNuevoMaterial,nuevoId]

modalpapel2(materialListoParaenviar)

}





     if(!isOpen) return null;

  return (
            <div className='containerModalClientes '>
       <div className='styleModalClientes containerModalMaterial'>
               
          <button className='btn_close' onClick={closeModal}>x</button>
        <br></br>
    







  <h2 className='modalTrabajosh2'>MATERIAL:</h2> 
  <div className='containerPapel'>
  <input onChange={onInputMaterial} value={materialElegido} className='modalPapelInput' type='text'></input>➡
  <select   className='modalPapelInput' onChange={ponerMaterial}>
    <option  value="">Elige Papel</option>
    {
sinRepetidosonlyMateriales.map((item)=>{
 
  return <option key={item} value={item}>{item}</option> ;
  
})
}









  </select>
    </div>

  <h2 className='modalTrabajosh2'>GRAMAJE(gramos):</h2> 
  <p className='parrafo_gramaje'>**Poner unidades al final ["g"(gramos),"mm"(para madera),etc] </p>
  <div className='containerPapel'>

  <input onChange={onInputGramaje} value={gramajeElegido} className='modalPapelInput' type='text'></input>➡
  <select className='modalPapelInput' onChange={ponerGramaje}>
    <option  value="">Elige Gramaje</option>

{
limpio_sinRepetidosonlyGramajes.map((item)=>{


if (item==""){

}else{
  return <option key={item} value={item}>{item}</option> ;

}
  
  
})
}




  </select>
    </div>


          <h2 className='modalTrabajosh2'>Guardar Permanentemente en {trab2}:</h2> 
          
<div className='containerCampo_guardar_medida'>
    
    <input value="Si" checked={estadoRadioMaterial === "Si"} onChange={estadoTrabajoFuncMaterial} type='radio' name='agregMaterial1' id='radio-1s' className='radio_1M' selected/>
    <label htmlFor="radio-1s">Si</label>
    <br></br>
    <input value="No" checked={estadoRadioMaterial === "No"} onChange={estadoTrabajoFuncMaterial} type='radio' name='agregMaterial1'id='radio-2s' className='radio_2M'/>
    <label  htmlFor="radio-2s">No</label>



        

</div>




        <br></br>



          <button onClick={async()=>{await guardarMaterialNuevo();closeModal()} }  disabled={materialElegido==""?true:false}className='btn_GuardarNuevoCliente'>OK</button>
    </div>

    </div> 
  )
}
