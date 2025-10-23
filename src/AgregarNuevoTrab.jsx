import React, { useEffect, useRef, useState } from 'react'
import './agregarnuevotrab.scss'
import { Costos } from './Costos'
import { ModalTrabajos } from './ventanasModales/ModalTrabajos'
import { ModalClientes } from './ventanasModales/ModalClientes'
import { ModalPapel } from './ventanasModales/ModalPapel'
import { ModalTamanos } from './ventanasModales/ModalTamanos'

export const AgregarNuevoTrab = () => {

const[optionTrabajos,setOptionTrabajos]=useState([])
//ventanas modales
const [modalTrabajos, setmodalTrabajos] = useState(false);
const [modalClientes, setmodalClientes] = useState(false);
const [modalTamano, setmodalTamano] = useState(false);
const [modalpapel1, setmodalPapel1] = useState(false);
// const [modalNewCosto, setmodalNewCosto] = useState(false);
  const inputRef = useRef(null);
const[elevarTamano,setElevarTamano]=useState("")


function ejecutarModalTrabajos(){
  setmodalTrabajos(true)
}

function ejecutarModalClientes(){
  setmodalClientes(true)
}
function ejecutarModalPapel(){
  setmodalPapel1(true)
}

function ejecutarModalTamano(){
  setmodalTamano(true)
}




//cargar datos iniciales








//Al cargar: agregar nuevo trabajo------

useEffect(() => {
  
(async()=>{
 const trabajos =await getTrabajos()
    // console.log(trabajos[1].Nombre)



    setOptionTrabajos(trabajos)
})()


}, [])



const getTrabajos=async()=>{
    try {
        const response=await fetch (`http://localhost:3000/trabajos`);
        if (!response.ok){
                throw new Error(`Error en la solicitud: `+response.status)
        }
        const data = await response.json();
        console.log(data)
        return data
        
    } catch (error) {
        console.log('hubo un problema con la peticion:',error)
    }
}




const[encerarAgregarTrab,setEncerarAgregarTrab]=useState("")
const[encerarAgregarTam,setEncerarAgregarTam]=useState("")
const[encerarAgregarPap,setEncerarAgregarPap]=useState("")
const[encerarElegirCol,setEncerarElegirCol]=useState("Full Color")
//click en select  encerarAgregarTrab  elegirTrabajo


//mostrar opciones de tamano y material segun trabajo elegido

const getMaterialesTamanos=async(a)=>{
    try {
        // console.log(`http://localhost:3000/trabajosMaterialPapel/`+a)
        const response=await fetch (`http://localhost:3000/trabajosMaterialPapel/`+a,{
            method:"get"
        });
        if (!response.ok){
                throw new Error(`Error en la solicitud: `+response.status)
        }
        const data = await response.json();
        
        // console.log(data[0])
        // console.log(data[1])
        return data
    } catch (error) {
        console.log('hubo un problema con la peticion:',error)
    }
}


const[optionMaterial,setOptionMaterial]=useState([])
const[optionTamano,setOptionTamano]=useState([])
const[listaGastos,setlistaGastos]=useState([0])




//para la lista de gastos segun el select trabajos 
const getGastos=async(a)=>{
    try {
        // console.log(`http://localhost:3000/trabajosMaterialPapel/`+a)
        const response=await fetch (`http://localhost:3000/getallgastos/`+a,{
            method:"get"
        });
        if (!response.ok){
                throw new Error(`Error en la solicitud: `+response.status)
        }
        const data = await response.json();
        
        console.log(data)
        // console.log(data[1])
        return data
    } catch (error) {
        console.log('hubo un problema con la peticion:',error)
    }
}



//----------------------------------------------------------------


function elegirTrabajo(e){
  let valor = e.target.value;
setEncerarAgregarTrab(e.target.value)
  

  console.log("Elegiste:", valor);
  

(async()=>{
 const TamanoYMaterial =await getMaterialesTamanos(valor)
    const listGastos =await getGastos(valor)

setOptionMaterial(TamanoYMaterial[0])
setOptionTamano(TamanoYMaterial[1])

    console.log(TamanoYMaterial[0])
    console.log(TamanoYMaterial[1])

 setlistaGastos(listGastos)






})()








  if (valor=="AgregaNuevo"){
        ejecutarModalTrabajos()
        valor=""
}

}











function elegirTamano(e){
  let valor = e.target.value;
setEncerarAgregarTam(e.target.value)
  
  console.log("Elegiste:", valor);
//   console.log(`hola`)
  
  if (valor=="AgregaNuevoT"){
        ejecutarModalTamano()
        valor=""
}

}



function elegirPapel(e){
  let valor = e.target.value;
setEncerarAgregarPap(e.target.value)
  
  console.log("Elegiste:", valor);
//   console.log(`hola`)
  
  if (valor=="AgregaNuevoP"){
        ejecutarModalPapel()
        valor=""
}


}
function elegirColores(e){
  let valor = e.target.value;
setEncerarElegirCol(e.target.value)
  
  console.log("Elegiste:", valor);
//   console.log(`hola`)
  


}





// const first = useRef("")
function encerarAgregarTrabajo(){
setEncerarAgregarTrab("")
}
function encerarAgregarPapel(){
setEncerarAgregarPap("")
}
function encerarAgregarTamano(){
setEncerarAgregarTam("")
}













//poner fecha de hoy 
  const hoy = new Date().toISOString().split("T")[0]
  const [fechaHoy, setFechaHoy] = useState(hoy);


const [estadoRadio, setEstadoRadio] = useState("cotizacion");

//obtencion radio input
  const estadoTrabajoFunc = (e) => {
    setEstadoRadio(e.target.value);

  };







//obtencion de todos los value de los campos para después enviarlo al backend 

 const [textoInputCLIENTE, setTextoInputCLIENTE] = useState("");
 const [textoInputKEYWORDS, setTextoInputKEYWORDS] = useState("");
 const [textoInputCANTIDAD, setTextoInputCANTIDAD] = useState("");
 const [textoInputPVP, setTextoInputPVP] = useState("");
  const [textoInputPSG, setTextoInputPSG] = useState("");
 const [textoInputObservaciones, setTextoInpuObservaciones] = useState("");

 






const enviarDatos = async () => {
  try {
    // 1️⃣ Subir imagen a Cloudinary primero
let imageUrl
if (fileToUpload==""){
imageUrl=""
}else{

    const formData = new FormData();
    formData.append("image", fileToUpload);

    const cloudResponse = await fetch("http://localhost:3000/sendcloud", {
      method: "POST",
      body: formData,
    });

    if (!cloudResponse.ok) {
      throw new Error("Error al subir imagen a Cloudinary");
    }

    const cloudData = await cloudResponse.json();
    imageUrl = cloudData.imageUrl; // 👈 Asegúrate que tu backend devuelva la URL
console.log(imageUrl)


}


    // 2️⃣ Preparar los datos del pedido con la URL incluida
    let trabajoValido =
      nuevoTrabajoCreado1.trim() !== ""
        ? nuevoTrabajoCreado1.trim()
        : encerarAgregarTrab.trim();

    const datos = {
      s_Cliente: textoInputCLIENTE.trim(),
      s_Keywords: textoInputKEYWORDS.trim(),
      s_Cantidad: textoInputCANTIDAD.trim(),
      s_PVP: textoInputPVP,
      s_Trabajo: trabajoValido,
      s_Tamano: encerarAgregarTam,
      s_Material: encerarAgregarPap,
      s_Fecha: fechaHoy,
      s_Colores: encerarElegirCol,
      s_Estado: estadoRadio,
      s_Observaciones: textoInputObservaciones,
      s_SeCreoNuevoTam: seCreoNuevoTamano,
      s_NuevoTamanoCreado: nuevoTamanoCreado1,
      s_SeCreoNuevoMat: seCreoNuevoMaterial,
      s_NuevoMaterialCreado: nuevoMaterialCreado1,
      s_TablaGastos: elevarTablaFinalGod,
      s_Foto: imageUrl,// 👈 incluimos la URL de Cloudinary
      s_PSG:textoInputPSG
    };

    console.log("Datos a enviar:", datos);

    // 3️⃣ Enviar todo al backend
    const res = await fetch("http://localhost:3000/trabajos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    });

    const respuesta = await res.json();

    if (res.ok) {
      alert("✅ Guardado con éxito");
      console.log("Respuesta del backend:", respuesta);
    } else {
      alert("❌ Error al guardar los datos");
    }
  } catch (error) {
    console.error("Error en enviarDatos:", error);
    alert("Ocurrió un error al guardar");
  }




};





//Aqui va lo que es para los costos 

const[addComponent,setaddComponent]=useState(0)

function Add_Nuevo_Costo(){

setaddComponent(addComponent+1)



}






const[clienteDesdeModal,setClienteDesdeModal]=useState("")

function getClienteDesdeModal(name){
        setClienteDesdeModal(name)
        console.log(name)

setTextoInputCLIENTE(name)

}








const[seCreoNuevoTamano,setseCreoNuevoTamano]=useState("No")
const[nuevoTamanoCreado1,setnuevoTamanoCreado1]=useState("No")

function valorDeModalTamano(tam1){
    setElevarTamano(tam1[0]+" "+tam1[1])
    setseCreoNuevoTamano(tam1[2])
    setnuevoTamanoCreado1(tam1[3])
    // setEncerarAgregarTam(tam1[0]+" "+tam1[1])
    console.log(tam1)
}

const[elevarMaterial,setElevarMaterial]=useState("")
const[seCreoNuevoMaterial,setseCreoNuevoMaterial]=useState("No")
const[nuevoMaterialCreado1,setnuevoMaterialCreado1]=useState("")
const[nuevoTrabajoCreado1,setnuevoTrabajoCreado1]=useState("")


function valorDeModalMaterial(pap1){
setElevarMaterial(pap1[0])
setseCreoNuevoMaterial(pap1[1])
setnuevoMaterialCreado1(pap1[2])

console.log(pap1)
}



function valorDeModalTrabajos(trab1){
let valorTrabajo=trab1[0]
setnuevoTrabajoCreado1(valorTrabajo);
// setEncerarAgregarTrab(valorTrabajo)

(async()=>{
 const TamanoYMaterial =await getMaterialesTamanos(trab1[0])
    

setOptionMaterial(TamanoYMaterial[0])
setOptionTamano(TamanoYMaterial[1])

    console.log(TamanoYMaterial[0])
    console.log(TamanoYMaterial[1])
})()






}




function fcnInputCantidad(e){
 let valorCantidad = e.target.value;
valorCantidad= e.target.value.replace(/\./g, ",").replace(/[^0-9]/g, "").replace(/(,.*),/g, "$1");


setTextoInputCANTIDAD(valorCantidad)
}




function fcnInputPVP(e){



 let valorPVP = e.target.value;
valorPVP= e.target.value.replace(/\./g, ",").replace(/[^0-9.,]/g, "").replace(/(,.*),/g, "$1");


setTextoInputPVP(valorPVP)



}

function fcnInputCliente(e){
  let nombreCliente=e.target.value;
  


  if (nombreCliente.length > 0) {
    nombreCliente = nombreCliente.charAt(0).toUpperCase() + nombreCliente.slice(1);
  }

  setTextoInputCLIENTE(nombreCliente)
}








function fcnPvpElevado(valorPVPE){
 
  setTextoInputPVP(valorPVPE)
}






function fcnPsgElevado(valorPSG){
 
  setTextoInputPSG(valorPSG)
}


const[elevarTablaFinalGod,setelevarTablaFinalGod]=useState([])


function tablaFinalGod(tabla){
setelevarTablaFinalGod(tabla)
}

console.log(elevarTablaFinalGod)














const divDrag=useRef(null)
const[dragging,setDragging]=useState(false);
const [fileToUpload, setFileToUpload] = useState("");
const [previewUrl, setPreviewUrl] = useState(null);//para mostrar imagen
const dragCounter=useRef(0);
//----------------------------------------------------------------------------
// 1) Cuando entramos al contenedor 
const handleDradIn=(e)=>{
  e.preventDefault();
  e.stopPropagation();
  dragCounter.current++;
  if (e.dataTransfer.items && e.dataTransfer.items.length>0 ){
    setDragging(true)

  }
}

//----------------------------------------------------------------------------
// 2) Cuando estemos sobre el contenedor
const handleDrag=(e)=>{
  e.preventDefault();
  e.stopPropagation();
}

//----------------------------------------------------------------------------
// 3) Cuando soltemos los archivos en el contenedor 
const handleDrop=(e)=>{
  e.preventDefault();
  e.stopPropagation();
  setDragging(false)
  dragCounter.current=0
  if (e.dataTransfer.items && e.dataTransfer.items.length>0 ){
    //Aqui realizas la operacion donde mandaras los archivos al backend o donde los mostraras
  console.log(`Archivos Arrastrados`,e.dataTransfer.items)
  console.log(e.dataTransfer.items[0])

//----------------------------------------------------------------------------
//Para mostrar las imagenes en el dom
  const items2 = e.dataTransfer.items;

  for (let i = 0; i < items2.length; i++) {
    if (items2[i].kind === 'file') {
      const file = items2[i].getAsFile();
      setFileToUpload(file);
      console.log(file); // Aquí ya tienes el archivo real
      if (file && file.type.startsWith('image/')) {
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
      }
    }
  }


  }


}

//----------------------------------------------------------------------------

// 4) Cuando salimos del contenedor
const handleDragOut=(e)=>{
  e.preventDefault();
  e.stopPropagation();
  dragCounter.current--;
  if (dragCounter.current===0){
    setDragging(false);
  }
} 

useEffect(() => {
  const div = divDrag.current;

  // ------------------ FUNCIONES ------------------

  const handlePaste = (e) => {
    e.preventDefault();
    const items = e.clipboardData?.items;
    if (!items) return;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.type.indexOf("image") !== -1) {
        const file = item.getAsFile();
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
        break; // si quieres permitir varias imágenes, elimina esta línea
      }
    }
  };

  // ------------------ ASIGNAR EVENTOS ------------------

  if (div) {
    div.addEventListener('dragenter', handleDradIn);
    div.addEventListener('dragover', handleDrag);
    div.addEventListener('drop', handleDrop);
    div.addEventListener('dragleave', handleDragOut);

    // 👇 Aquí agregamos el soporte para pegar
    div.addEventListener('paste', handlePaste);
  }

  // ------------------ LIMPIEZA ------------------
  return () => {
    if (div) {
      div.removeEventListener('dragenter', handleDradIn);
      div.removeEventListener('dragover', handleDrag);
      div.removeEventListener('drop', handleDrop);
      div.removeEventListener('dragleave', handleDragOut);
      div.removeEventListener('paste', handlePaste);
    }
  };
}, []);












useEffect(() => {
  if (nuevoTrabajoCreado1=="") return; // evita ejecutar si no hay trabajo nuevo

  const getCostosNewTrab = async () => {
    try {
      const listGastos = await getGastos(nuevoTrabajoCreado1);
      setlistaGastos(listGastos);
    } catch (error) {
      console.error("Error al obtener los costos:", error);
    }
  };

  getCostosNewTrab();
}, [nuevoTrabajoCreado1]);









  return (
    <div className='container-mostrarInfo'>



<h2 className='mostrarInfo_title'>AGREGA NUEVO TRABAJO</h2>
<hr className='line1'/>



<div className='container-info '>


  




  
 
<div className='containerCampo containerCampo_cliente'>
    <h4 className='subtituloH4'>CLIENTE:</h4>
    <input  value={textoInputCLIENTE} onChange={fcnInputCliente}  className='input_agregaNuevoTrabajo'></input>
    <button  onClick={()=>ejecutarModalClientes()} className='button_lupa_cliente'>🔍</button>
</div>

<div className='containerCampo containerCampo_keywords'>
    <h4 className='subtituloH4'>KEYWORDS:</h4>
      <input placeholder='Escribe keywords separado por ","' value={textoInputKEYWORDS} onChange={(e) => setTextoInputKEYWORDS(e.target.value)} className='input_agregaNuevoTrabajo'></input>

</div>

<div className='containerCampo containerCampo_trabajo'>
    <h4 className='subtituloH4'>TRABAJO:</h4>


      <select  value ={nuevoTrabajoCreado1!=""?nuevoTrabajoCreado1:encerarAgregarTrab} onChange={elegirTrabajo} 
      className={`input_agregaNuevoTrabajo_peq select_agregaNuevoTrabajo_peq ${encerarAgregarTrab?'opcionElegida':'' }`} >


<option value="">Elige una Opción</option>

{
optionTrabajos.map((item)=>{
    
  return <option key={item.Nombre} value={item.Nombre}>{item.Nombre}</option> ;
  
})
}
   { nuevoTrabajoCreado1 !=""    &&    <option key={nuevoTrabajoCreado1} value={nuevoTrabajoCreado1} > {nuevoTrabajoCreado1}</option>}
  <option  className='TrabAgregaNuevo' value="AgregaNuevo">Agrega Nuevo...</option>




 
      </select>

</div>

<div className='containerCampo containerCampo_cantidad'>
    <h4 className='subtituloH4'>CANTIDAD:</h4>
    <input value={textoInputCANTIDAD} onChange={(e) => fcnInputCantidad(e) } type='text' className='input_agregaNuevoTrabajo_peq'></input>

</div>





<div className='containerCampo containerCampo_tamano'>

    <h4 className='subtituloH4'>TAMAÑO:</h4>
      <select value ={elevarTamano !=""?elevarTamano:encerarAgregarTam} onChange={elegirTamano} className={`input_agregaNuevoTrabajo_peq select_agregaNuevoTrabajo_peq ${encerarAgregarTam?'opcionElegida':'' }`} >

            <option value="">Elige una Opción</option>


{
optionTamano.map((item)=>{
    
  return <option  key={item.TamanoID} value={item.TamanoID}>{item.Nombre+" "+item.Medida}</option> ;
  
})
}


   { elevarTamano !=""    &&    <option key={elevarTamano} value={elevarTamano} > {elevarTamano}</option>}
    
    
    <option className='TrabAgregaNuevo' value="AgregaNuevoT">Agrega Nuevo...</option>


      </select>

</div>












<div className='containerCampo containerCampo_fecha'>
    <h4 className='subtituloH4'>FECHA:</h4>
    <input value={fechaHoy} onChange={(e)=>setFechaHoy(e.target.value) } type='date' className='input_agregaNuevoTrabajo_peq select_agregaNuevoTrabajo_peq'></input>

</div>

<div className='containerCampo containerCampo_papel'>






    <h4 className='subtituloH4'>MATERIAL:</h4>
      <select value ={elevarMaterial !=""?elevarMaterial:encerarAgregarPap}  onChange={elegirPapel} className={`input_agregaNuevoTrabajo_peq select_agregaNuevoTrabajo_peq ${encerarAgregarPap?'opcionElegida':'' }`}>
            <option  className='options_agregaNuevoTrabajo' value="">Elige Material</option>


{
optionMaterial.map((item)=>{
    
  return <option key={item.MaterialesID} value={item.MaterialesID}>{item.Nombre}</option> ;
  
})
}


  { elevarMaterial !=""    &&    <option key={elevarMaterial} value={elevarMaterial} > {elevarMaterial}</option>}
            <option  className='TrabAgregaNuevo' value="AgregaNuevoP">Agrega Nuevo...</option>
      </select>

</div>

<div className='containerCampo containerCampo_pvp'>
    <h4 className='subtituloH4'>PVP:</h4>
      <input  value={textoInputPVP} onChange={(e) => fcnInputPVP(e)} type='text' className='input_agregaNuevoTrabajo_peq'></input>


</div>

<div className='containerCampo containerCampo_estado'>
    <h4 className='subtituloH4'>ESTADO:</h4>
    <input value="cotizacion" checked={estadoRadio === "cotizacion"} onChange={estadoTrabajoFunc} type='radio' name='estadoTrabajo' id='radio-1' className='radio_1' />
    <label htmlFor="radio-1">Cotización</label>
    <br></br>
    <input value="hecho" checked={estadoRadio === "hecho"} onChange={estadoTrabajoFunc} type='radio' name='estadoTrabajo'id='radio-2' className='radio_2'/>
    <label  htmlFor="radio-2">Hecho</label>


 
        

</div>
<div className='containerCampo containerCampo_colores'>
    <h4 className='subtituloH4'>COLORES:</h4>
      <select value ={encerarElegirCol}  onChange={elegirColores} className={`input_agregaNuevoTrabajo_peq select_agregaNuevoTrabajo_peq ${true?'opcionElegida':'' }`}>
            <option  className='options_agregaNuevoTrabajo' value="Full Color">Full Color</option>
            <option  className='options_agregaNuevoTrabajo' value="Un color">Un color</option>
            <option  className='options_agregaNuevoTrabajo' value="No aplica">No aplica</option>
            
      </select>


</div>


<div  className='containerCampo containerCampo_observaciones'>
    <h4 className='subtituloH4'>OBSERVACIONES:</h4>
    
    <textarea value={textoInputObservaciones} onChange={(e) => setTextoInpuObservaciones(e.target.value)} className='inputTextArea' name="" id=""  >
    </textarea>
    
</div>

<div className='containerCampo containerCampo_costos'>
    <div className='container_subtituloH4costos'>
    <h4 className='subtituloH4 subtituloH4costos'>COSTOS</h4> <button onClick={Add_Nuevo_Costo}  className='btn_nuevo_costo'>+</button>
    </div>


{
encerarAgregarTrab=="" && nuevoTrabajoCreado1==""?'':
  <Costos elevarPVP={fcnPvpElevado} elevarPSG={fcnPsgElevado} pvpSuperior={textoInputPVP} inputRef={inputRef} listaFinalGastos={listaGastos} info={addComponent} tablaGastosFinal={tablaFinalGod} ></Costos>


}




</div>

<div className='containerCampo containerCampo_foto'>
    <h4 className='subtituloH4'>FOTO</h4>









   <div className="drag_and_drop">
  <div className="inside_drag ">
    <div ref={divDrag} tabIndex={0} className={dragging ? "main dragging" : "main"}>
      {previewUrl ? (
        // 👇 Si ya hay imagen, la mostramos aquí en lugar del texto
        <img
          src={previewUrl}
          alt="preview"
          className="previewImagen"
        />
      ) : dragging ? (
        <div className="containerDragging" onDragOver={handleDrag}>
          <div className="divCenter">
            <img
              src="./8344917.png"
              width={50}
              height={50}
              alt="Logo Agregar Archivos"
            />
            <br></br>
            <div> Agregar Archivos</div>
            
          </div>
        </div>
      ) : (
        <div>Arrastra o pega imagen aquí...</div>
      )}
    </div>
  </div>
</div>








</div>


</div>




<button onClick={enviarDatos} className='btn_guardar' >GUARDAR</button>
{/* userCliente={clienteDesdeModal} */}
<ModalTrabajos modalTrabajo2={valorDeModalTrabajos} isOpen={modalTrabajos} closeModal={()=>{setmodalTrabajos(false) ;encerarAgregarTrabajo()}  }></ModalTrabajos>
<ModalClientes execFucionClientes={getClienteDesdeModal}  isOpen={modalClientes} closeModal={()=>{setmodalClientes(false) }  }></ModalClientes>
<ModalPapel modalpapel2={valorDeModalMaterial} trab2={nuevoTrabajoCreado1!=""?nuevoTrabajoCreado1:encerarAgregarTrab} isOpen={modalpapel1} closeModal={()=>{setmodalPapel1(false);encerarAgregarPapel() }}></ModalPapel>
<ModalTamanos modaltam2={valorDeModalTamano} isOpen={modalTamano} trab2={nuevoTrabajoCreado1!=""?nuevoTrabajoCreado1:encerarAgregarTrab} closeModal={()=>{setmodalTamano(false) ;encerarAgregarTamano()}}></ModalTamanos>

    </div>
  )
}
