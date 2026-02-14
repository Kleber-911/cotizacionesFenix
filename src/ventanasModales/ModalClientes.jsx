import React, { useEffect, useState } from 'react'
import './modalclientes.scss'
import API_URL from "../api";

export const ModalClientes = ({ isOpen, closeModal,execFucionClientes }) => {
  
  const [allClientes, setAllClientes] = useState([]);
//   const [allClientesname, setAllClientesname] = useState([]);


  const getAllClientes = async () => {
    try {
      const response = await fetch(`${API_URL}/clientes`, {
        method: "GET"
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ` + response.status);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("hubo un problema con la peticion:", error);
    }
  };

  useEffect(() => {
   
    
    const fetchClientes = async () => {
      const todos_Clientes = await getAllClientes();
      if (todos_Clientes) {
        setAllClientes(todos_Clientes);
      }
    };
    fetchClientes();
  },[]);



  let clienteListoParaEnviar
function enviarCliente(e){


    console.log(e.target.value)


clienteListoParaEnviar=e.target.value
}




function enviarClientePadre(){
    console.log(clienteListoParaEnviar)
execFucionClientes(clienteListoParaEnviar)
}







  if (!isOpen) return null;
  return (
    
    <div className="containerModalClientes">
      <div className="styleModalClientes">
        <button className="btn_close" onClick={closeModal}>x</button>




<div className='containerFlex'>

<h2 className='modalTrabajosh2 '>Elige un cliente:</h2>

<select className='selectAllClientes' name="clientes" id="clientes" size="4" onChange={enviarCliente} >
  {allClientes.length > 0 ? (
    [...allClientes] // copiamos para no mutar el estado
      .sort((a, b) => a.Nombre.localeCompare(b.Nombre)) // orden lexicográfico
      .map((cliente, i) => (
        <option key={i} value={cliente.Nombre}>
          {cliente.Nombre}
        </option>
      ))
  ) : (
    <option disabled>Cargando clientes...</option>
  )}
</select>
</div>





        <button onClick={()=>{enviarClientePadre();closeModal()}} className="btn_GuardarNuevoCliente">
          Agregar Cliente
        </button>
      </div>
    </div>
    
  );
};
