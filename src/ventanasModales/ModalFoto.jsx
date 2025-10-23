import React, { useEffect, useState } from 'react'
import './modalfoto.scss'

export const ModalFoto = ({ isOpen, closeModal ,linkFoto}) => {
  






  if (!isOpen) return null;
  return (
    
  <div className="containerModalClientes">
      <div className="styleModalClientes stylemodalFoto">
        <button className="btn_close" onClick={closeModal}>
          x
        </button>





<img className='show_photo2' src={linkFoto==""?"./SinImagen.png":linkFoto} alt={"foto del trabajo"} />



        </div>
        </div>
    
  );
};
