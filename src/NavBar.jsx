import React from 'react'
import './navbar.scss'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className='navBar1'>
      <NavLink 
        to="/" 
        className={({ isActive }) => `nav-text home1 ${isActive ? 'active' : ''}`}
      >
        Home
      </NavLink>

      <NavLink 
        to="/flyers" 
        className={({ isActive }) => `nav-text flyers1 ${isActive ? 'active' : ''}`}
      >
        Flyers
      </NavLink>

      <NavLink 
        to="/tarjetas" 
        className={({ isActive }) => `nav-text tarjetas1 ${isActive ? 'active' : ''}`}
      >
        Tarjetas Pres.
      </NavLink>

      <NavLink 
        to="/etiquetas" 
        className={({ isActive }) => `nav-text etiquetas1 ${isActive ? 'active' : ''}`}
      >
        Etiquetas
      </NavLink>

      <NavLink 
        to="/etiquetasadesivas" 
        className={({ isActive }) => `nav-text etiquetas_adesivas1 ${isActive ? 'active' : ''}`}
      >
        Etiquetas Adesivas
      </NavLink>

      <NavLink 
        to="/guia" 
        className={({ isActive }) => `nav-text afiches1 ${isActive ? 'active' : ''}`}
      >
        Guía
      </NavLink>
    </nav>
  )
}

