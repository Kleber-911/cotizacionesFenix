import React, { useEffect, useState } from 'react'
import './costos.scss'
import { Costos_Hijo } from './Costos_Hijo'
import { Costos_Input } from './Costos_Input'
import { Costos_PSG } from './Costos_PSG'
import { Costos_Ganancia } from './Costos_Ganancia'
import { Costos_PVP } from './Costos_PVP'
export const Costos = ({info,listaFinalGastos,inputRef,elevarPVP,elevarPSG,pvpSuperior,tablaGastosFinal}) => {

// console.log(info)
// console.log(listaFinalGastos)

const[mostrarGastos,setmostrarGastos]=useState([])
const[tablaGodGastos,settablaGodGastos]=useState([])




useEffect(() => {
  if (listaFinalGastos[0] !== 0) {

    setmostrarGastos(listaFinalGastos[0]);
    console.log(listaFinalGastos[0]);
    settablaGodGastos(listaFinalGastos[0]);
  
  }
}, [listaFinalGastos]); 


// console.log(mostrarGastos[0])
// console.log(mostrarGastos[1])
// console.log(mostrarGastos[2])
  const [componentes, setComponentes] = useState([]);

const[sumaCostosFinales,setSumaCostosFinales]=useState(0)
const[costosFinales,setCostosFinales]=useState([])





useEffect(() => {




if (info === 0) return;

setComponentes([...componentes, { id: info }]);

console.log(componentes)

}, [info])



const[displayData,setDisplayData]=useState("")
const[IDdeComponentes,setIDdeComponentes]=useState(0)



useEffect(() => {
console.log(mostrarGastos)


if (displayData=="") return;
let a=displayData
setmostrarGastos([...mostrarGastos, {TrabajoID:listaFinalGastos[0][0].TrabajoID,Nombre: a ,id:IDdeComponentes }]);
 settablaGodGastos([...tablaGodGastos, {TrabajoID:listaFinalGastos[0][0].TrabajoID,Nombre: a ,id:IDdeComponentes }])//----






}, [displayData])




console.log(mostrarGastos)
console.log(tablaGodGastos)











function Info1(data){
  console.log(componentes)
  console.log(data[1]-1)
 setIDdeComponentes(data[1])
  setDisplayData(data[0])
 
 
  setComponentes(componentes.filter(comp => comp.id !== data[1]));
}









function eraseId(data1) {
  // 1) quitar el elemento por índice
  const nuevosGastos = mostrarGastos.filter((_, index) => index !== data1);
  const nuevosCostos = costosFinales.filter((_, index) => index !== data1);
  const tablaGodGastos1 = tablaGodGastos.filter((_, index) => index !== data1);

  // 2) actualizar estados básicos
  setmostrarGastos(nuevosGastos);
  setCostosFinales(nuevosCostos);

  // 3) recalcular total y suma (con 2 decimales)
  const total = parseFloat(
    nuevosCostos.reduce((a, b) => a + (Number(b) || 0), 0)
      .toFixed(2)
  );

  setSumaCostosFinales(total);

  const ganancia = isNaN(Number(inputGanacia)) ? 0 : parseFloat(Number(inputGanacia).toFixed(2));
  const suma = parseFloat((total + ganancia).toFixed(2));

  setvalorPVPMostrar(suma);

  // 4) actualizar PSG / PVP en tablaGodGastos (solo para el mismo TrabajoID si procede)
  const trabajoID = listaFinalGastos?.[0]?.[0]?.TrabajoID;

  const base = tablaGodGastos1.map(item => {
    // opcional: si quieres solo tocar elementos del mismo trabajo
    if (trabajoID && item.TrabajoID !== trabajoID) return item;

    if (item.Nombre === "PSG") {
      return { ...item, dinero: total };
    }
    if (item.Nombre === "PVP") {
      return { ...item, dinero: suma };
    }
    return item;
  });

  // 5) finalmente seteamos el estado con el array ya modificado
  settablaGodGastos(base);






  tablaGastosFinal(base)
}


//console.log(tablaGodGastos[0].TrabajoID)


const[valorGananciaMostrar,setvalorGananciaMostrar]=useState(0)
const[valorPVPMostrar,setvalorPVPMostrar]=useState(0)
const[inputGanacia,setinputGanacia]=useState(0)
const[inputpvp,setinputpvp]=useState(0)










function Info2(dinero) {
  // 1️⃣ Copiar y actualizar el array
  const nuevos = [...costosFinales];
  nuevos[dinero[1]] = parseFloat(Number(dinero[0]).toFixed(2));

  // 2️⃣ Recalcular total
  let total = nuevos.reduce((a, b) => a + (Number(b) || 0), 0);
  total = parseFloat(total.toFixed(2));

  // 3️⃣ Calcular suma con ganancia
  let ganancia = isNaN(inputGanacia) ? 0 : parseFloat(inputGanacia.toFixed(2));
  let suma = parseFloat((total + ganancia).toFixed(2));

  // 4️⃣ Actualizar estados simples
  setCostosFinales(nuevos);
  setSumaCostosFinales(total);
  setvalorPVPMostrar(suma);

  // 5️⃣ Actualizar tablaGodGastos en UNA sola llamada
  const trabajoID = listaFinalGastos?.[0]?.[0]?.TrabajoID;



  if (!trabajoID) return;

  settablaGodGastos(prev => {
    // 🔹 Filtramos para quitar PSG, Ganancia y PVP previos
    let base = prev.filter(item =>
      !["PSG", "Ganancia", "PVP"].includes(item.Nombre)
    );

    // 🔹 Actualizamos el item editado
    base = base.map((item, index) =>
      index === dinero[1]
        ? { ...item, dinero: parseFloat(Number(dinero[0]).toFixed(2)) }
        : item
    );

    // 🔹 Agregamos PSG, Ganancia y PVP al final
    base.push(
      { TrabajoID: trabajoID, Nombre: "PSG", dinero: total },
      { TrabajoID: trabajoID, Nombre: "Ganancia", dinero: ganancia },
      { TrabajoID: trabajoID, Nombre: "PVP", dinero: suma }
    );
tablaGastosFinal(base)
    return base;
  });
}






useEffect(() => {


elevarPVP(valorPVPMostrar)

}, [valorPVPMostrar])



useEffect(() => {


elevarPSG(sumaCostosFinales)

}, [sumaCostosFinales])



function InfoGanancia(valor){

setinputGanacia(valor[0])

   let suma=  sumaCostosFinales+ parseFloat(valor[0]) 

console.log(suma)
setvalorPVPMostrar(suma)
elevarPVP(suma)



 settablaGodGastos(prev => {

 
let base = tablaGodGastos

  
    base = base.map((item, index) =>
      item.Nombre ==="Ganancia"
        ? { ...item, dinero: parseFloat(Number(valor[0]).toFixed(2)) }
        : item

    
    );
  
    base = base.map((item, index) =>
      item.Nombre ==="PVP"
        ? { ...item, dinero: parseFloat(Number(suma).toFixed(2)) }
        : item

    
    );
  
tablaGastosFinal(base)

    return base;
  });










}





















function InfoPVP(valor){
 let valor0=  parseFloat(parseFloat( valor[0]).toFixed(2))
console.log(valor0)
setinputpvp(valor0)
   let resta=   valor0 -sumaCostosFinales
    resta=parseFloat(resta.toFixed(2))

console.log(resta)
setvalorGananciaMostrar(resta)
setinputGanacia(resta)

elevarPVP(valor0)






 settablaGodGastos(prev => {

 
let base = tablaGodGastos

  
    base = base.map((item, index) =>
      item.Nombre ==="Ganancia"
        ? { ...item, dinero: parseFloat(Number(resta).toFixed(2)) }
        : item

    
    );
  
    base = base.map((item, index) =>
      item.Nombre ==="PVP"
        ? { ...item, dinero: parseFloat(Number(valor[0]).toFixed(2)) }
        : item

    
    );
  
tablaGastosFinal(base)
    return base;
  });










}







  return (
    <div className='container_costos'>
 
          {mostrarGastos.map((comp,index) => (
           <Costos_Hijo handleId={eraseId} ttabindex={index} handleDolares={Info2} key={comp.Nombre} visual={comp.Nombre} id={index}> </Costos_Hijo>
        ))}





      {componentes.map((comp,index) => (
        // console.log(componentes)
           <Costos_Input ref={inputRef} idwork1={tablaGodGastos[0].TrabajoID}handleInfo={Info1} key={comp.id} id={comp.id} tabIndex1={index + 1}></Costos_Input>
        ))}


<hr className='line'></hr>

<Costos_PSG res={sumaCostosFinales}  ></Costos_PSG>
<Costos_Ganancia valorGananciaMostrar={valorGananciaMostrar} handleGanancia={InfoGanancia}></Costos_Ganancia>
<hr className='line'></hr>
<Costos_PVP  pvpSuperior1={pvpSuperior} valorPVPMostrar={valorPVPMostrar} handlePvp={InfoPVP}></Costos_PVP>
    </div>
  )
}
