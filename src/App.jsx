import {Navigate,Route,Routes} from 'react-router-dom'
import React from 'react'
import { Home } from './routes/Home'
import { Tarjetas } from './routes/Tarjetas'
import { Etiquetas } from './routes/Etiquetas'
import { EtiquetasAdesivas } from './routes/EtiquetasAdesivas'
import { NotasDeVenta } from './routes/NotasDeVenta'
import { AgregarTrabajo } from './routes/AgregarTrabajo'
import { BuscarTrabajo } from './routes/BuscarTrabajo'
import { Encabezado } from './Encabezado'
import { NavBar } from './NavBar'
import { Flyers } from './routes/Flyers'

import { Buttons } from './Buttons'
import { MostrarInfo } from './MostrarInfo'
import { Guia } from './routes/Guia'
import { AgregarNuevoTrab } from './AgregarNuevoTrab'


export const App = () => {
  return (
    <>
    <Encabezado></Encabezado>
    <NavBar></NavBar>
    <Buttons></Buttons>
        <Routes>

            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/tarjetas' element={<Tarjetas></Tarjetas>}></Route>
            <Route path='/flyers' element={<Flyers></Flyers>}></Route>
            <Route path='/etiquetas' element={<Etiquetas></Etiquetas>}></Route>
            <Route path='/etiquetasadesivas' element={<EtiquetasAdesivas></EtiquetasAdesivas>}></Route>
            <Route path='/notasdeventa' element={<NotasDeVenta></NotasDeVenta>}></Route>
          
            <Route path='/buscartrabajo' element={<BuscarTrabajo></BuscarTrabajo>}></Route>
            <Route path='/mostrartrabajo' element={ <MostrarInfo></MostrarInfo>}></Route>
            <Route path='/guia' element={<Guia></Guia>}></Route>
          
              <Route path="/agregartrabajo" element={<AgregarNuevoTrab mode="create" />} />
  <Route path="/editar/:id" element={<AgregarNuevoTrab mode="edit" />} />
  <Route path="/duplicar/:id" element={<AgregarNuevoTrab mode="duplicar" />} />
            <Route path='/*' element={<Navigate to='/'/>}></Route>



        </Routes>
       
    
    
    
    </>
  )
}
