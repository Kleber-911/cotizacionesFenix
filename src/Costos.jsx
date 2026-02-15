import React, { useEffect, useState } from 'react'
import './costos.scss'
import { Costos_Hijo } from './Costos_Hijo'
import { Costos_Input } from './Costos_Input'
import { Costos_PSG } from './Costos_PSG'
import { Costos_Ganancia } from './Costos_Ganancia'
import { Costos_PVP } from './Costos_PVP'

export const Costos = ({
  info,
  listaFinalGastos,
  inputRef,
  elevarPVP,
  elevarPSG,
  pvpSuperior,
  tablaGastosFinal,
  costosParaEditar,
  modoCrEdDu
}) => {
  const [mostrarGastos, setmostrarGastos] = useState([])
  const [tablaGodGastos, settablaGodGastos] = useState([])
  const [componentes, setComponentes] = useState([])

  const [sumaCostosFinales, setSumaCostosFinales] = useState(0)
  const [costosFinales, setCostosFinales] = useState([])

  const [displayData, setDisplayData] = useState('')
  const [IDdeComponentes, setIDdeComponentes] = useState(0)

  const [valorGananciaMostrar, setvalorGananciaMostrar] = useState(0)
  const [valorPVPMostrar, setvalorPVPMostrar] = useState(0)
  const [inputGanacia, setinputGanacia] = useState(0)
  const [inputpvp, setinputpvp] = useState(0)

  

 

  // const [editPSG, seteditPSG] = useState(0)
  // const [editGANANCIA, seteditGANANCIA] = useState(0)
  // const [editPVP, seteditPVP] = useState(0)
  // useEffect(() => {
   
  // }, [listaFinalGastos])
  // ✅ Efecto inicial para cargar gastos cuando se edita/duplica
  useEffect(() => {
  console.log(`holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`)

// console.log(modoCrEdDu)
    if (modoCrEdDu=="edit"||modoCrEdDu=="duplicar") {
        console.log(listaFinalGastos[0])





settablaGodGastos(
  costosParaEditar.map(item => ({
    ...item,
    dinero: item.dinero ?? item.Costo
  }))
);



setmostrarGastos(
  costosParaEditar.filter(
    (item) =>
      item.Nombre !== "PVP" &&
      item.Nombre !== "PSG" &&
      item.Nombre !== "Ganancia"
  )
);

setSumaCostosFinales(costosParaEditar.find(item => item.Nombre === "PSG").Costo)
setvalorGananciaMostrar(costosParaEditar.find(item => item.Nombre === "Ganancia").Costo)
setvalorPVPMostrar(costosParaEditar.find(item => item.Nombre === "PVP").Costo)

const costosIndependientes = costosParaEditar
  .filter(item => !["PSG", "PVP", "Ganancia"].includes(item.Nombre))
  .map(item => item.Costo ?? item.dinero) // usa Costo si existe, si no dinero
  .filter(val => typeof val === "number" && !isNaN(val)); // quita valores vacíos o no numéricos
 setCostosFinales(costosIndependientes)










    }else{
      
       if (listaFinalGastos && listaFinalGastos[0] && listaFinalGastos[0] !== 0) {
        console.log(listaFinalGastos[0])
      setmostrarGastos(listaFinalGastos[0])
      settablaGodGastos(listaFinalGastos[0])
    }
    }
    console.log(tablaGodGastos)
  }, [listaFinalGastos])
// console.log(costosFinales)
//-----
// useEffect(() => {
//   console.log(`pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp`)
//   if (listaFinalGastos[0] !== 0) {

//     setmostrarGastos(listaFinalGastos[0]);
//     console.log(listaFinalGastos[0]);
//     settablaGodGastos(listaFinalGastos[0]);

//   }
// }, [listaFinalGastos]);
//--------
// useEffect(() => {
//   console.log("Modo actual:", modoCrEdDu);

//   if (modoCrEdDu === "edit" || modoCrEdDu === "duplicar") {
//     if (!costosParaEditar || costosParaEditar.length === 0) return;

//     setmostrarGastos(costosParaEditar);
//     settablaGodGastos(costosParaEditar);

//     const psg = costosParaEditar.find(item => item.Nombre === "PSG");
//     const ganancia = costosParaEditar.find(item => item.Nombre === "Ganancia");
//     const pvp = costosParaEditar.find(item => item.Nombre === "PVP");

//     setSumaCostosFinales(psg?.Costo || 0);
//     setvalorGananciaMostrar(ganancia?.Costo || 0);
//     setvalorPVPMostrar(pvp?.Costo || 0);
//   } 
//   else if(listaFinalGastos && listaFinalGastos[0] && listaFinalGastos[0] !== 0) {
//     setmostrarGastos(listaFinalGastos[0]);
//     settablaGodGastos(listaFinalGastos[0]);
//   }

// }, [modoCrEdDu, costosParaEditar, listaFinalGastos]);

  
  // ✅ Efecto seguro: comunica cambios de tabla al padre DESPUÉS del render
  useEffect(() => {
    if (tablaGodGastos && tablaGodGastos.length > 0) {
      tablaGastosFinal(tablaGodGastos)
    }
  }, [tablaGodGastos])

  // ✅ Agregar un nuevo componente cuando cambia `info`
  useEffect(() => {
    if (info === 0) return
    setComponentes(prev => [...prev, { id: info }])
  }, [info])

  // ✅ Agregar un nuevo gasto a la tabla cuando llega `displayData`
  useEffect(() => {
    console.log(`wiiiiiiiiiinnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn`)
    if (displayData === '') return
    const trabajoID = listaFinalGastos?.[0]?.[0]?.TrabajoID || 0
 
    const nuevoGasto = { TrabajoID: trabajoID, Nombre: displayData, id: IDdeComponentes }
    setmostrarGastos(prev => [...prev, nuevoGasto])



   settablaGodGastos(prev => {
  // 1️⃣ Agregar el nuevo gasto
  const nuevaLista = [...prev, nuevoGasto];

  // 2️⃣ Separar los elementos especiales ("PSG", "Ganancia", "PVP")
  const especiales = nuevaLista.filter(item =>
    ["PSG", "Ganancia", "PVP"].includes(item.Nombre)
  );

  // 3️⃣ Filtrar los demás (los normales)
  const normales = nuevaLista.filter(
    item => !["PSG", "Ganancia", "PVP"].includes(item.Nombre)
  );

  // 4️⃣ Reunirlos: primero normales, luego especiales
  return [...normales, ...especiales];
});





  }, [displayData])

  // ----------------- FUNCIONES PRINCIPALES -------------------

  function Info1(data) {
      // console.log(componentes)
  // console.log(data[1]-1)
    setIDdeComponentes(data[1])
    setDisplayData(data[0])
    setComponentes(componentes.filter(comp => comp.id !== data[1]))



  }

// function Info1(data){
//   console.log(componentes)
//   console.log(data[1]-1)
//  setIDdeComponentes(data[1])
//   setDisplayData(data[0])
 
 
//   setComponentes(componentes.filter(comp => comp.id !== data[1]));
// }







 function eraseId(index) {
  // 1️⃣ Filtrar los arrays eliminando el índice seleccionado
  const nuevosGastos = mostrarGastos.filter((_, i) => i !== index);
  const nuevosCostos = costosFinales.filter((_, i) => i !== index);
  const nuevaTabla = tablaGodGastos.filter((_, i) => i !== index);

  // 2️⃣ Calcular total solo con los costos válidos
  const total = parseFloat(
    nuevosCostos.reduce((a, b) => a + (Number(b.Costo || b) || 0), 0).toFixed(2)
  );
let total2=total
  // 3️⃣ Actualizar estados principales
  setmostrarGastos(nuevosGastos);
  setCostosFinales(nuevosCostos);
  setSumaCostosFinales(total);

  // 4️⃣ Calcular ganancia y PVP
  const ganancia = isNaN(Number(inputGanacia))
    ? 0
    : parseFloat(Number(inputGanacia).toFixed(2));

  const suma = parseFloat((total + ganancia).toFixed(2));
  setvalorPVPMostrar(suma);

  // 5️⃣ Actualizar tablaGodGastos (solo los campos PSG y PVP)


  const trabajoID = listaFinalGastos?.[0]?.[0]?.TrabajoID;
  const base = nuevaTabla.map((item) => {
    if (trabajoID && item.TrabajoID !== trabajoID) return item;

    if (item.Nombre === "PSG") return { ...item, dinero: total2 };
    if (item.Nombre === "Ganancia") return { ...item, dinero: ganancia };///add al final 
    if (item.Nombre === "PVP") return { ...item, dinero: suma };

    return item;
  });


settablaGodGastos(base);





    // settablaGodGastos(prev => {
    //   let base = prev.filter(item => !['PSG', 'Ganancia', 'PVP'].includes(item.Nombre))

    //   base = base.map((item, index) =>
    //     index === dinero[1]
    //       ? { ...item, dinero: parseFloat(Number(dinero[0]).toFixed(2)) }
    //       : item
    //   )

    //   base.push(
    //     { TrabajoID: trabajoID, Nombre: 'PSG', dinero: total },
    //     { TrabajoID: trabajoID, Nombre: 'Ganancia', dinero: ganancia },
    //     { TrabajoID: trabajoID, Nombre: 'PVP', dinero: suma }
    //   )

    //   return base
    // })




}



console.log(tablaGodGastos)






  function Info2(dinero) {
    
    const nuevos = [...costosFinales]
    nuevos[dinero[1]] = parseFloat(Number(dinero[0]).toFixed(2))

    const total = parseFloat(
      nuevos.reduce((a, b) => a + (Number(b) || 0), 0).toFixed(2)
    )
console.log(total)
    const ganancia = isNaN(inputGanacia) ? 0 : parseFloat(inputGanacia.toFixed(2))
    const suma = parseFloat((total + ganancia).toFixed(2))

    setCostosFinales(nuevos)
    setSumaCostosFinales(total)
    setvalorPVPMostrar(suma)

    const trabajoID = listaFinalGastos?.[0]?.[0]?.TrabajoID
    if (!trabajoID) return

    settablaGodGastos(prev => {
      let base = prev.filter(item => !['PSG', 'Ganancia', 'PVP'].includes(item.Nombre))

      base = base.map((item, index) =>
        index === dinero[1]
          ? { ...item, dinero: parseFloat(Number(dinero[0]).toFixed(2)) }
          : item
      )

      base.push(
        { TrabajoID: trabajoID, Nombre: 'PSG', dinero: total },
        { TrabajoID: trabajoID, Nombre: 'Ganancia', dinero: ganancia },
        { TrabajoID: trabajoID, Nombre: 'PVP', dinero: suma }
      )

      return base
    })
  }





  console.log(costosFinales)

















  function InfoGanancia(valor) {
    setinputGanacia(valor[0])
    const suma = parseFloat((sumaCostosFinales + parseFloat(valor[0])).toFixed(2))
    setvalorPVPMostrar(suma)
    elevarPVP(suma)

    settablaGodGastos(prev => {
      return prev.map(item => {
        if (item.Nombre === 'Ganancia') return { ...item, dinero: parseFloat(valor[0]) }
        if (item.Nombre === 'PVP') return { ...item, dinero: suma }
        return item
      })
    })
  }

  function InfoPVP(valor) {
    const valor0 = parseFloat(parseFloat(valor[0]).toFixed(2))
    setinputpvp(valor0)
    const resta = parseFloat((valor0 - sumaCostosFinales).toFixed(2))

    setvalorGananciaMostrar(resta)
    setinputGanacia(resta)
    elevarPVP(valor0)

    settablaGodGastos(prev => {
      return prev.map(item => {
        if (item.Nombre === 'Ganancia') return { ...item, dinero: resta }
        if (item.Nombre === 'PVP') return { ...item, dinero: valor0 }
        return item
      })
    })
  }

  // ----------------- EFECTOS PARA ELEVAR DATOS -------------------
  useEffect(() => {
    elevarPVP(valorPVPMostrar)
  }, [valorPVPMostrar])

  useEffect(() => {
    elevarPSG(sumaCostosFinales)
  }, [sumaCostosFinales])

console.log(listaFinalGastos)
console.log(tablaGodGastos)
console.log(mostrarGastos)
console.log(costosFinales)
let ultimoIndex = -1;
console.log(ultimoIndex)
  // ----------------- RENDER -------------------
  return (
    <div className='container_costos'>
     { 
     
   

mostrarGastos.map((comp, index) => {
  if (comp.Nombre === "PVP" || comp.Nombre === "PSG" || comp.Nombre === "Ganancia") {
    return null; // no renderiza nada para esos
  }

ultimoIndex = index; // 👈 solo asignas, NO setState
  return (
    <Costos_Hijo
      key={ index}
      handleId={eraseId}
      ttabindex={index}
      handleDolares={Info2}
      visual={comp.Nombre}
      id={index}
      valordinero={comp.Costo}
    />
  );
})

}





      {componentes.map((comp, index) => (
        <Costos_Input
          ref={inputRef}
          key={comp.id}
          idwork1={tablaGodGastos[0]?.TrabajoID}
          handleInfo={Info1}
          id={comp.id}
          tabIndex1={index + 1}
          listaGastos={mostrarGastos}
        />
      ))}





      <hr className='line' />
      <Costos_PSG res={sumaCostosFinales} />
      <Costos_Ganancia valorGananciaMostrar={valorGananciaMostrar} handleGanancia={InfoGanancia}  tabindex2={ultimoIndex+1}/>
      <hr className='line' />
      <Costos_PVP pvpSuperior1={pvpSuperior} valorPVPMostrar={valorPVPMostrar} handlePvp={InfoPVP} tabindex3={ultimoIndex+1}/>
    </div>
  )
}
