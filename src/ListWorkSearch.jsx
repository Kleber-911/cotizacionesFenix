import React, { useEffect, useState } from "react";
import "./listWorkSearch.scss";
import { NavLink } from 'react-router-dom'
export const ListWorkSearch = ({ busquedaFinal ,tituloTabla}) => {
        // console.log(busquedaFinal)
  const [infoFiltrada, setInfoFiltrada] = useState([]);
 

  useEffect(() => {
    if (!busquedaFinal || busquedaFinal.length === 0) {
      setInfoFiltrada([]);
    } else {
      setInfoFiltrada(busquedaFinal);
    }
  }, [busquedaFinal]);


function showSize(siz1,siz2){
  console.log(siz1)
  console.log(siz2)
  if (siz2==""){
    alert(` => `+siz1)

  }else{
    alert(siz2+` = `+siz1)

  }
}


  const ListaTrabajosC = ({ cli, fe, tra, est, cant, psg, pvp,siz1,siz2, arrayTrabajo }) => (

    <div className="wl-container-info">
      <div className="wl-info">{cli}</div>
      <div className="wl-info">{fe}</div>
      <div className="wl-info infoTrabajo1" onDoubleClick={()=>showSize(siz1,siz2)}>{tra}</div>
      <div className="wl-info">  <div className={est=='cotizacion'?" circleInside circle-yellow":"circleInside circle-green"} > </div>  </div>
      <div className="wl-info">{cant}</div>
      <div className="wl-info">{psg}</div>
      <div className="wl-info">{pvp}</div>
      <div className="wl-info">

      <NavLink to="/mostrartrabajo" state={{ datos: arrayTrabajo }}>
       Ir
      </NavLink>







      </div>
    </div>
  );





  const Tituloswl = () => (
    <div className="wl-container-titulos">
      <div className="wl-encabezado">CLIENTE</div>
      <div className="wl-encabezado">
        FECHA<br />
        <span>aaaa/mm/dd</span>
      </div>
      <div className="wl-encabezado">TRABAJO</div>
      <div className="wl-encabezado">ESTADO</div>
      <div className="wl-encabezado">CANT.</div>
      <div className="wl-encabezado">PSG</div>
      <div className="wl-encabezado">PVP</div>
      <div className="wl-encabezado">VER MÁS</div>
    </div>
  );





  return (
    <div className="wl-container">
      <h2 className="wl-title">{tituloTabla}</h2>
      <hr className="line1" />
      <div className="wl-container-informacion">
        <Tituloswl />

        {infoFiltrada && infoFiltrada.length > 0 ? (
          infoFiltrada.map((item) => (
            <ListaTrabajosC
              key={item.PedidoID}
              cli={item.ClienteNombre}
              fe={item.Fecha}
              tra={item.TrabajoNombre}
              est={item.Estado}
              cant={item.Cantidad}
              psg={item.PSG}
              pvp={item.PVP}
              arrayTrabajo={item}
              siz1={item.TamanoMedida}
              siz2={item.TamanoNombre}
            />
          ))
        ) : (
          <p style={{ textAlign: "center", marginTop: "1rem" }}>
            No se encontraron resultados
          </p>
        )}
      </div>
      <hr />
    <p className='totalEncontrados'>Total Encontrados={infoFiltrada.length}</p>  
    </div>
  );
};
