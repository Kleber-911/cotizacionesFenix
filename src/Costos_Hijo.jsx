import React from 'react'
import './costos.scss'

export const Costos_Hijo = ({
  visual,
  id,
  handleDolares,
  handleId,
  ttabindex,
  valordinero
}) => {

  // Si viene undefined (modo crear), lo convertimos en string vacío
  const valorSeguro = valordinero ?? "";
function escribir(e) {
  let tempValue = e.target.value;

  // 1️⃣ Cambiar comas por puntos
  tempValue = tempValue.replace(/,/g, ".");

  // 2️⃣ Eliminar todo lo que no sea número o punto
  tempValue = tempValue.replace(/[^0-9.]/g, "");

  // 3️⃣ Permitir solo un punto
  const primerPunto = tempValue.indexOf(".");
  if (primerPunto !== -1) {
    // Mantener solo el primer punto
    tempValue =
      tempValue.substring(0, primerPunto + 1) +
      tempValue.substring(primerPunto + 1).replace(/\./g, "");
  }

  // 4️⃣ Limitar a 2 decimales
  const partes = tempValue.split(".");
  if (partes[1]) {
    partes[1] = partes[1].slice(0, 2);
    tempValue = partes.join(".");
  }

  // 5️⃣ Enviar al padre
  handleDolares([tempValue, id]);
}


  function eraseWithId() {
    handleId(id);
  }

  return (
    <div title={visual} className='costos_item'>
      <p>{visual}</p>

      <div className='containerDatos'>
        <input
          tabIndex={ttabindex + 1}
          value={valorSeguro}
          onChange={escribir}
          className='input_costos'
          type="text"
        />
        <span>$</span>
      </div>

      <button onClick={eraseWithId} className='btn_costos'>
        ❌
      </button>
    </div>
  );
};
