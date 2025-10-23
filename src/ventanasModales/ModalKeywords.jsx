

import React, { useEffect, useState } from 'react';
import './modalkeywords.scss';

export const ModalKeywords = ({ isOpen, closeModal, execModalKeyW, cliente1 }) => {
  const [allkeywords, setallkeywords] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllKeyWords = async (cliente) => {
    if (!cliente) return;

    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/allkeywords1/" + cliente, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ` + response.status);
      }

      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log("hubo un problema con la petición:", error);
      return [];
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isOpen || !cliente1) return; // solo si el modal se abre y hay cliente

    const fetchKeyword = async () => {
      const todos_key = await getAllKeyWords(cliente1);
      setallkeywords(todos_key || []); // asegura array vacío si no hay resultados
    };

    fetchKeyword();
  }, [isOpen]); // 👈 solo depende del estado del modal

  let keyListoParaEnviar = "";

  function enviarkey(e) {
    keyListoParaEnviar = e.target.value;
  }

  function enviarKeyPadre() {
    execModalKeyW(keyListoParaEnviar);
  }

  if (!isOpen) return null;

  return (
    <div className="containerModalClientes">
      <div className="styleModalClientes">
        <button className="btn_close" onClick={closeModal}>
          x
        </button>

        <div className="containerFlex">
          <h2 className="modalTrabajosh2">Elige Keywords:</h2>

          <select
            className="selectAllClientes"
            name="clientes"
            id="clientes"
            size="6"
            onChange={enviarkey}
          >
            {loading ? (
              <option disabled>Cargando keywords...</option>
            ) : allkeywords.length > 0 ? (
              [...allkeywords]
                .sort((a, b) => a.localeCompare(b))
                .map((keyword, i) => (
                  <option key={i} value={keyword}>
                    {keyword}
                  </option>
                ))
            ) : (
              <option disabled>No se encontraron keywords</option>
            )}
          </select>
        </div>

        <button
          onClick={() => {
            enviarKeyPadre();
            closeModal();
          }}
          className="btn_GuardarNuevoCliente"
        >
          Agregar Keyword
        </button>
      </div>
    </div>
  );
};