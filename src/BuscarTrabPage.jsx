import React, { useEffect, useState } from 'react'
import './buscarTrabPage.scss'
import { ModalClientes } from './ventanasModales/ModalClientes'
import { ModalKeywords } from './ventanasModales/ModalKeywords';
import API_URL from "./api";


export const BuscarTrabPage = ({handleBussqueda}) => {


const datosGuardados = JSON.parse(sessionStorage.getItem("busquedaTrabajos") || "{}");


const [textoInputCLIENTE, setTextoInputCLIENTE] = useState(datosGuardados.s_Cliente || "");
const [textoInputKEYW, setTextoInputKEYW] = useState(datosGuardados.s_Keywords || "");



const[clienteDesdeModal,setClienteDesdeModal]=useState("")
const [modalClientes, setmodalClientes] = useState(false);
const [modalKeyW, setmodalKeyW] = useState(false);
const[keyDesdeModal,setkeyDesdeModal]=useState("")
const[optionTrabajos,setOptionTrabajos]=useState([])
const[optionMaterial,setoptionMaterial]=useState([])
const[optionTamano,setoptionTamano]=useState([])











useEffect(() => {

  // limpiar si la página se recarga
  const limpiarBusqueda = () => {
    sessionStorage.removeItem("filtrosBusqueda")
    sessionStorage.removeItem("resultadosBusqueda")
    sessionStorage.removeItem("scrollBusqueda")
  }

  window.addEventListener("beforeunload", limpiarBusqueda)

  // cargar combos
  ;(async () => {

    const trabajos = await getTrabajos()
    const tamanos = await gettamanos()
    const materiales = await getmateriales()

    setOptionTrabajos(trabajos)
    setoptionMaterial(materiales)
    setoptionTamano(tamanos)

  })()

  // restaurar filtros
  const filtrosGuardados = JSON.parse(
    sessionStorage.getItem("filtrosBusqueda") || "null"
  )

  if (filtrosGuardados) {

    setTextoInputCLIENTE(filtrosGuardados.s_Cliente || "")
    setTextoInputKEYW(filtrosGuardados.s_Keywords || "")
    settextoInputCANTIDAD(filtrosGuardados.s_Cantidad || "")
    settextoInputPVP(filtrosGuardados.s_PVP || "")
    settextoInputTrabajo(filtrosGuardados.s_Trabajo || "")
    settextoInputTamano(filtrosGuardados.s_Tamano || "")
    settextoInputMaterial(filtrosGuardados.s_Material || "")
    setfechaAnterior(filtrosGuardados.s_FechaAnterior || "")
    setFechaHoy(filtrosGuardados.s_Fecha || hoy)
    setEncerarElegirCol(filtrosGuardados.s_Colores || "All")
    setEstadoRadio(filtrosGuardados.s_Estado || "")

  }

  // restaurar resultados
  const resultadosGuardados = JSON.parse(
    sessionStorage.getItem("resultadosBusqueda") || "null"
  )

  if (resultadosGuardados) {

    setbusquedaTrabajos(resultadosGuardados)
    handleBussqueda(resultadosGuardados)

  }

  // restaurar scroll
  const scrollGuardado = sessionStorage.getItem("scrollBusqueda")

  if (scrollGuardado) {

    setTimeout(() => {
      window.scrollTo(0, Number(scrollGuardado))
    }, 100)

  }

  return () => {
    window.removeEventListener("beforeunload", limpiarBusqueda)
  }

}, [])

const getTrabajos=async()=>{
    try {
        const response=await fetch (`${API_URL}/trabajos`);
        if (!response.ok){
                throw new Error(`Error en la solicitud: `+response.status)
        }
        const data = await response.json();
   

    const dataOrdenada = data.sort((a, b) =>
      a.Nombre.localeCompare(b.Nombre, 'es')
    );

    console.log(dataOrdenada);

    return dataOrdenada;

        
        
    } catch (error) {
        console.log('hubo un problema con la peticion:',error)
    }
}


const gettamanos=async()=>{
    try {
        const response=await fetch (`${API_URL}/alltamanos12`);
        if (!response.ok){
                throw new Error(`Error en la solicitud: `+response.status)
        }
        const data = await response.json();
     
        return data
        
    } catch (error) {
        console.log('hubo un problema con la peticion:',error)
    }
}


const getmateriales=async()=>{
    try {
        const response=await fetch (`${API_URL}/allmateriales12`);
        if (!response.ok){
                throw new Error(`Error en la solicitud: `+response.status)
        }
        const data = await response.json();
      
        return data
        
    } catch (error) {
        console.log('hubo un problema con la peticion:',error)
    }
}










function getClienteDesdeModal(name){
        setClienteDesdeModal(name)
        console.log(name)

setTextoInputCLIENTE(name)

}
function getKeyDesdeModal(name){
        setkeyDesdeModal(name)
        console.log(name)

setTextoInputKEYW(name)

}

function ejecutarModalClientes(){
  setmodalClientes(true)
}

function ejecutarModalKeyW(){
  setmodalKeyW(true)
}




function fcnInputCliente(e){
  let nombreCliente=e.target.value;
  


  if (nombreCliente.length > 0) {
    nombreCliente = nombreCliente.charAt(0).toUpperCase() + nombreCliente.slice(1);
  }

  setTextoInputCLIENTE(nombreCliente)
}



function fcnInputKeywords(e){
  let nombreKey=e.target.value;
  


  if (nombreKey.length > 0) {
    nombreKey = nombreKey.charAt(0).toUpperCase() + nombreKey.slice(1);
  }

  setTextoInputKEYW(nombreKey)
}




//poner fecha de hoy 
  const hoy = new Date().toISOString().split("T")[0]
  const [fechaHoy, setFechaHoy] = useState(hoy);







//poner fecha anterior 

  const [fechaAnterior, setfechaAnterior] = useState( "");

function executeFechaAnterior(e){

  setfechaAnterior(e.target.value)
  console.log(e.target.value)
  console.log(fechaHoy)
}



//obtencion radio input
const [estadoRadio, setEstadoRadio] = useState(datosGuardados.s_Estado || "");
  const estadoTrabajoFunc = (e) => {
    setEstadoRadio(e.target.value);

  };


//enviar datos del front al back para filtrar trabajos








const[busquedaTrabajos,setbusquedaTrabajos]=useState([])





const [textoInputCANTIDAD, settextoInputCANTIDAD] = useState(datosGuardados.s_Cantidad || "");
const [textoInputPVP, settextoInputPVP] = useState(datosGuardados.s_PVP || "");
const [textoInputTrabajo, settextoInputTrabajo] = useState(datosGuardados.s_Trabajo || "");
const [textoInputTamano, settextoInputTamano] = useState(datosGuardados.s_Tamano || "");
const [textoInputMaterial, settextoInputMaterial] = useState(datosGuardados.s_Material || "");
const [encerarElegirCol, setEncerarElegirCol] = useState(datosGuardados.s_Colores || "All");













const enviarDatosBusqueda = async (datosExternos = null) => {
  try {
  
    // 2️⃣ Preparar los datos del pedido con la URL incluida
 

    const datos = {
      s_Cliente: textoInputCLIENTE.trim(),
      s_Keywords: textoInputKEYW.trim(),
      s_Cantidad: textoInputCANTIDAD.trim(),
      s_PVP: textoInputPVP,
      s_Trabajo:textoInputTrabajo ,
      s_Tamano: textoInputTamano,
      s_Material: textoInputMaterial,
      s_Fecha: fechaHoy,
      s_FechaAnterior: fechaAnterior,
      s_Colores: encerarElegirCol,
      s_Estado: estadoRadio
     
    };

    console.log("Datos a enviar:", datos);
sessionStorage.setItem("busquedaTrabajos", JSON.stringify(datos));

    // 3️⃣ Enviar todo al backend
    const res = await fetch(`${API_URL}/searchtrabajos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    });

    const respuesta = await res.json();

    if (res.ok) {
      // alert("✅ Guardado con éxito");
      setbusquedaTrabajos(respuesta)
      handleBussqueda(respuesta)
      console.log("Respuesta del backend:", respuesta);
        // guardar resultados
  sessionStorage.setItem("resultadosBusqueda", JSON.stringify(respuesta))

  // guardar filtros actuales
  sessionStorage.setItem("filtrosBusqueda", JSON.stringify(datos))
    } else {
      // alert("❌ Error al guardar los datos");
    }
  } catch (error) {
    console.error("Error en enviarDatos:", error);
    alert("Ocurrió un error al guardar");
  }




};


function ponerTrabajo(e){
  let valor = e.target.value;
settextoInputTrabajo(valor)
}
function ponerTamano(e){
  let valor = e.target.value;
  console.log(valor)
settextoInputTamano(valor)
}
function ponerMaterial(e){
  let valor = e.target.value;
settextoInputMaterial(valor)
}



function elegirColores(e){
  let valor1 = e.target.value;
setEncerarElegirCol(valor1)
  
  console.log("Elegiste:", valor1);
//   console.log(`hola`)
  


}




  return (
    <div className='container-mostrarInfo'>



<h2 className='mostrarInfo_title'>BUSCAR</h2>
<hr className='line1'/>


<div className=' container-info-buscar'>


<div className='containerCampo containerCampo_cliente'>
    <h4 className='subtituloH4'>CLIENTE:</h4>
    <input placeholder='Buscar por Id del Trabajo (Id=5)' value={textoInputCLIENTE} onChange={fcnInputCliente}  className='input_agregaNuevoTrabajo'></input>
    <button  onClick={()=>ejecutarModalClientes()} className='button_lupa_cliente'>🔍</button>
</div>











<div className='containerCampo containerCampo_keywords'>
    <h4 className='subtituloH4'>KEYWORDS:</h4>
      <input disabled={textoInputCLIENTE==""?true:false} value={textoInputKEYW} onChange={fcnInputKeywords} className='input_agregaNuevoTrabajo'></input>
<button disabled={textoInputCLIENTE==""?true:false} onClick={()=>ejecutarModalKeyW()} className='button_lupa_cliente'>🔍</button>
</div>



{/* 
optionMaterial
optionTamano */}



<div className='containerCampo containerCampo_trabajo'>
    <h4 className='subtituloH4'>TRABAJO:</h4>
      <select value={textoInputTrabajo} className='input_agregaNuevoTrabajo_peq select_agregaNuevoTrabajo_peq' onChange={ponerTrabajo}>
            <option value="">Elige una Opción</option>

            {
            optionTrabajos.map((item)=>{
                
              return <option key={item.Nombre} value={item.Nombre}>{item.Nombre}</option> ;
              
            })
            }
      </select>

</div>








<div className='containerCampo containerCampo_cantidad'>
    <h4 className='subtituloH4'>CANTIDAD:</h4>
    <input value={textoInputCANTIDAD} type='number' className='input_agregaNuevoTrabajo_peq' onChange={(e)=>settextoInputCANTIDAD(e.target.value)}></input>

</div>

<div className='containerCampo containerCampo_tamano'>
    <h4 className='subtituloH4'>TAMAÑO:</h4>
      <select value={textoInputTamano}className='input_agregaNuevoTrabajo_peq select_agregaNuevoTrabajo_peq' onChange={ponerTamano}>
            <option value="">Elige Tamaño</option>
   
        {
            optionTamano.map((item)=>{
                
              return <option key={item} value={item}>{item}</option> ;
              
            })
            }




      </select>

</div>

<div className='containerCampo containerCampo_fecha'>
    <h4 className='subtituloH4'>FECHA:</h4>
    <input value={fechaAnterior} onChange={(e)=>executeFechaAnterior(e) } type='date' className='input_agregaNuevoTrabajo_peq select_agregaNuevoTrabajo_peq fechaBuscar'></input>
    al
    <input value={fechaHoy} onChange={(e)=>setFechaHoy(e.target.value) } type='date' className='input_agregaNuevoTrabajo_peq select_agregaNuevoTrabajo_peq fechaBuscar' ></input>

</div>

<div className='containerCampo containerCampo_papel'>
    <h4 className='subtituloH4'>MATERIAL:</h4>
      <select value={textoInputMaterial} className='input_agregaNuevoTrabajo_peq select_agregaNuevoTrabajo_peq' onChange={ponerMaterial}>
            <option  className='options_agregaNuevoTrabajo' value="">Elige Material</option>
           {
            optionMaterial.map((item)=>{
                
              return <option key={item} value={item}>{item}</option> ;
              
            })
            }
      </select>

</div>

<div className='containerCampo containerCampo_pvp'>
    <h4 className='subtituloH4'>PVP:</h4>
      <input value={textoInputPVP} type='number' className='input_agregaNuevoTrabajo_peq' onChange={(e)=>settextoInputPVP(e.target.value)}></input>


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
      <select value ={encerarElegirCol}onChange={elegirColores} className='input_agregaNuevoTrabajo_peq select_agregaNuevoTrabajo_peq'>
            <option  className='options_agregaNuevoTrabajo' value="All">All</option>
            <option  className='options_agregaNuevoTrabajo' value="Full Color">Full Color</option>
            <option  className='options_agregaNuevoTrabajo' value="Un color">Un color</option>
            <option  className='options_agregaNuevoTrabajo' value="No aplica">No aplica</option>
      </select>


</div>


</div>



<button className='btn_guardar' onClick={enviarDatosBusqueda}>BUSCAR</button>

<ModalClientes execFucionClientes={getClienteDesdeModal}  isOpen={modalClientes} closeModal={()=>{setmodalClientes(false) }  }></ModalClientes>
<ModalKeywords cliente1={textoInputCLIENTE}execModalKeyW={getKeyDesdeModal}  isOpen={modalKeyW} closeModal={()=>{setmodalKeyW(false) }  }></ModalKeywords>
    </div>
  )
}
