import React from 'react'
import './guia.scss'
export const Guia = () => {
  return (
    <div>

<h1 className='title1'>Guia Para el uso del software</h1>


<h2 className='title2'>Ventana: Agregar Trabajo</h2>

<ul>
<li>
Para agregar un nuevo Cliente que no esta en la base de datos escribo en el input el nuevo cliente, la lupa de buscar cliente, 
solo va a encontrar clientes en la base de datos (Cliente puede ser nombre del local Comercial si tiene uno, sino será el nombre de la persona )
</li>
<li>
Guardar Permanentemente Tamaño: sirve para que la medida creada se ligue al trabajo actual, por ejemplo siempre nos saldrá esa medida que elijamos flyers
</li>
<li>
El programa esta pensado para trabajar con "." aunque el usuario ingrese ","
</li>
<li>
El valor PVP ingresarlo desde el menú COSTOS, no desde el input en la parte superior 
</li>
<li>
Al agregar un nuevo costo, el "📌" sirve para anclar un costo a un trabajo de manera Fija , si el trabajo ya esta fijo, sirve para eliminarlo.
</li>
<li>
Al agregar nuevo Trabajo, se debe poner las unidades al final del gramaje.
</li>
<li>
Para buscar por fechas, debe haber las dos fechas , sino no considerará fechas para la busqueda.
</li>
<li>
Las keywords deben estar separadas por comas,
</li>
<li>
Tamaño = La notación "8eI","4eI" significa 8 en Inen A4, 4 en Inen A4, etc, para saber cuantos entran en Inen
</li>
<li>
Tamaño = La notación "8eM","4eM" significa 8 en Mega(48x33cm), 4 en Mega(48x33cm), etc, para saber cuantos entran en Mega
</li>
<li>
En Esferos y Toma Todo el tamaño es el tamaño de la impresión sobre el esfero o Toma Todo
</li>
<li>
En Sobres El tamaño es el tamaño de sobre cerrado, en observaciones especificar tamaño sobre abierto(sin pegar)
</li>
<li>
En Libros o Cuadernos El Material, es el material de las hojas, el de la pasta especificar en observaciones 
</li>
</ul>






<h2 className='title2'>Ventana: BUSCAR</h2>

<ul>
  <li>
Para buscar por ID de pedido, en el campo CLIENTE ESCRIBIR "id=5" o "ID=10"  o "Id=10" paea buscar un trabajo especificamente por id 
</li>
  <li>
Las keywords se habilitan después de que se haya elegido "cliente"
</li>
<li>
En la lista de busqueda , al dar doble click en el trabajo (flyers, etiquetas, etc) aparecera una ventana de alert con el tamaño de ese trabajo.
</li>
<li>
Si no se ingresa ningún campo de busqueda me devolverá todos los trabajos existentes en la base de datos 
</li>


</ul>


<h2 className='title2'>Ventana: Informacion Detallada</h2>

<ul>
  <li>
Si damos doble-click en el PVP, nos va a salir una ventana con el precio unitario (PVP/Cantidad)
</li>



</ul>



    </div>
  )
}
