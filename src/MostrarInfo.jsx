import React, { useEffect, useState } from 'react';
import './mostrarinfo.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { ModalFoto } from './ventanasModales/ModalFoto';
import API_URL from "./api";

export const MostrarInfo = () => {
  const [modalFotoWindow, setmodalFotoWindow] = useState(false);
  const [allGastos, setallGastos] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { datos } = location.state || {}; // 👈 datos del trabajo seleccionado
  
const [year, month, day] = datos.Fecha.split("-");
const fechaLocal = new Date(year, month - 1, day);
  const openPhoto = () => setmodalFotoWindow(true);

  // 🔹 Obtener gastos específicos
  const getAllGastosEspecificos = async (a1) => {
    try {
      const response = await fetch(`${API_URL}/gastosespecificos/${a1}`, {
        method: "GET"
      });

      if (!response.ok) throw new Error(`Error en la solicitud: ${response.status}`);
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      console.log("Hubo un problema con la petición:", error);
    }
  };

  useEffect(() => {
    if (!datos?.PedidoID) return;
console.log(datos.PedidoID)
    const fetchAllGastosEspecificos = async () => {
      const todos_Gastos = await getAllGastosEspecificos(datos.PedidoID);
      console.log(todos_Gastos)
      if (todos_Gastos) setallGastos(todos_Gastos);
    };
    fetchAllGastosEspecificos();
  }, [datos]);

  // 🔹 Componente para mostrar cada costo
  const ShowCostosFinales = ({ itemCosto, itemValor }) => (
    <>
      {(itemCosto === "PSG" || itemCosto === "PVP") && <hr className='line3' />}
      <div title={itemCosto} className="show-costos-finales">
        <div className="costo-item">{itemCosto}</div>
        <div className="valor-item">{itemValor} <span>$</span></div>
      </div>
    </>
  );

  // 🔹 Funciones para redirigir según la acción
  const handleEditar = () => {
    navigate(`/editar/${datos.PedidoID}`, { state: { datos, mode: "edit",costosEdit:allGastos } });
  };

  const handleDuplicar = () => {
    navigate(`/duplicar/${datos.PedidoID}`, { state: { datos, mode: "duplicar" ,costosEdit:allGastos} });
  };



  const handleEliminar = async () => {
    const confirmar = window.confirm(`¿Seguro que deseas eliminar el trabajo "${datos.TrabajoNombre}"?`);
    if (!confirmar) return;

    try {
      const response = await fetch(`${API_URL}/eliminarTrabajo/${datos.PedidoID}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Error al eliminar el trabajo");

      alert("✅ Trabajo eliminado correctamente");
      navigate("/"); // volver a Home o lista principal
    } catch (error) {
      console.error("Error al eliminar:", error);
      alert("❌ No se pudo eliminar el trabajo");
    }
  };






function showUnit(){
  let divUnit=datos.PVP/datos.Cantidad
  let redondeado = Math.round(divUnit * 100) / 100; // 3.14
  alert(`el costo unitario es: ` + redondeado )
}




  return (
    <div className='container-mostrarInfo'>
      <h2 className='mostrarInfo_title'>INFORMACIÓN DETALLADA</h2>
      <hr className='line1' />

      <div className='container-info'>
        <div className='containerCampo containerCampo_cliente'>
          <h4 className='subtituloH4'>CLIENTE:</h4>
          <p>{datos.ClienteNombre} | <span className='cliente_span'>id_Cliente={datos.ClienteID}</span></p>
        </div>

        <div className='containerCampo containerCampo_keywords'>
          <h4 className='subtituloH4'>KEYWORDS:</h4>
          <p>{datos.Keywords} | <span className='cliente_span'>id_Pedido={datos.PedidoID}</span></p>
        </div>

        <div className='containerCampo containerCampo_trabajo'>
          <h4 className='subtituloH4'>TRABAJO:</h4>
          <p>{datos.TrabajoNombre}</p>
        </div>

        <div className='containerCampo containerCampo_cantidad'>
          <h4 className='subtituloH4'>CANTIDAD:</h4>
          <p>{datos.Cantidad}</p>
        </div>

        <div className='containerCampo containerCampo_tamano'>
          <h4 className='subtituloH4'>TAMAÑO:</h4>
          <p className='p_tamano'>{datos.TamanoNombre} ({datos.TamanoMedida})</p>
        </div>

        <div className='containerCampo containerCampo_fecha'>
          <h4 className='subtituloH4'>FECHA:</h4>
          <p>
            {fechaLocal.toLocaleDateString("es-ES", {
  day: "2-digit",
  month: "short",
  year: "numeric",
})}
          </p>
        </div>

        <div className='containerCampo containerCampo_papel'>
          <h4 className='subtituloH4'>PAPEL:</h4>
          <p>{datos.MaterialNombre}</p>
        </div>

        <div className='containerCampo containerCampo_pvp'>
          <h4 className='subtituloH4'>PVP:</h4>
          <p onDoubleClick={showUnit}>{datos.PVP} $</p>
        </div>

        <div className='containerCampo containerCampo_estado'>
          <h4 className='subtituloH4'>ESTADO:</h4>
          <div className={datos.Estado === 'cotizacion' ? 'bolita bol_amar' : 'bolita bol_verd'}></div>
          <p className='estado_p'>{datos.Estado === 'cotizacion' ? 'Cotización' : 'Hecho'}</p>
        </div>

        <div className='containerCampo containerCampo_colores'>
          <h4 className='subtituloH4'>COLORES:</h4>
          <p>{datos.Colores}</p>
        </div>

        <div className='containerCampo containerCampo_observaciones'>
          <h4 className='subtituloH4'>OBSERVACIONES:</h4>
          <textarea
            value={datos.Observaciones || ""}
            readOnly
            className="mi-textarea"
          />
        </div>

        <div className='containerCampo containerCampo_costos'>
          <h4 className='subtituloH4'>COSTOS</h4>
          <div className='containerShowCostos'>
            {allGastos.map((item) => (
              <ShowCostosFinales
                key={item.GastoEspID}
                itemCosto={item.Nombre}
                itemValor={item.Costo}
              />
            ))}
          </div>
        </div>

        <div className='containerCampo containerCampo_foto'>
          <h4 className='subtituloH4'>FOTO</h4>
          <div onClick={openPhoto} className='container_photo'>
            <img
              className='show_photo'
              src={datos.Foto === "" ? "./SinImagen.png" : datos.Foto}
              alt={datos.TrabajoNombre}
            />
          </div>
        </div>
      </div>

      {/* 🔹 Botones de acción */}
      <div className='container_botones_accion'>
        <button className='btn_editar' onClick={handleEditar}>✏️ Editar</button>
        <button className='btn_duplicar' onClick={handleDuplicar}>📄 Duplicar</button>
        <button className='btn_duplicar' onClick={handleEliminar}>🗑️ Eliminar</button>
      </div>

      <ModalFoto
        linkFoto={datos.Foto}
        isOpen={modalFotoWindow}
        closeModal={() => setmodalFotoWindow(false)}
      />
    </div>
  );
};
