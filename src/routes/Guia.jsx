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



<h2 className='title2'>Estandar de trabajos:</h2>

<h3 className='title2a'>Boletos Rifa:</h3>
<p className='parr2a'>Solo para rifas</p>
<br/>
<br/>



<h3 className='title2a'>Entradas:</h3>
<p className='parr2a'>Entradas para bailes y eventos en general (ligas de futbol o tickets de parqueadero)</p>
<br/><br/>



<h3 className='title2a'>Carpetas:</h3>
<p className='parr2a'>Todo lo que sirva para almacenar hojas </p>
<br/><br/>



<h3 className='title2a'>Etiquetas:</h3>
<p className='parr2a'>Etiquetas para poner en algun producto(que no sean adesivas), ej: tarjetas de cambio de aceite perforadas, </p>
<br/><br/>



<h3 className='title2a'>Etiquetas Adesivas:</h3>
<p className='parr2a'>Etiquetas para poner en algun producto , ya sean en vinil o adesivvo normal(con o sin troquelado)</p>
<br/><br/>



<h3 className='title2a'>Tripticos:</h3>
<p className='parr2a'></p>
<br/><br/>



<h3 className='title2a'>Flyers:</h3>
<p className='parr2a'></p>
<br/><br/>



<h3 className='title2a'>Cuadernos pasta dura o delgada:</h3>
<p className='parr2a'>Cuadernos o libretas pasta dura o delgada</p>
<br/><br/>



<h3 className='title2a'>Libros:</h3>
<p className='parr2a'>Impresion de hojas, puede ser encolado o anillado Ej: folletos, revistas, libros</p>
<br/><br/>



<h3 className='title2a'>Raspaditas:</h3>
<p className='parr2a'>todo lo que se pueda raspar</p>
<br/><br/>



<h3 className='title2a'>Tarjetas de presentacion:</h3>
<p className='parr2a'></p>
<br/><br/>



<h3 className='title2a'>Esferos:</h3>
<p className='parr2a'></p>
<br/><br/>



<h3 className='title2a'>Menus:</h3>
<p className='parr2a'>todo menu en carton o solo plastificado</p>
<br/><br/>



<h3 className='title2a'>Trofeos/Placas:</h3>
<p className='parr2a'>Incluye acrilicos con impresion UV/Dtf</p>
<br/><br/>



<h3 className='title2a'>Blocs:</h3>
<p className='parr2a'>Todo lo que es impreso y pegado como blocs (SIN NUMERAR)</p>
<br/><br/>



<h3 className='title2a'>Nota de venta:</h3>
<p className='parr2a'>Todo lo que es impreso, numerado y hecho bloc(encolado)</p>
<br/><br/>



<h3 className='title2a'>Impresion Offset:</h3>
<p className='parr2a'>Unicamente impresion y/o numerado PERO SIN PEGAR, ej: hojas cuadros, papel encerado para comidas</p>
<br/><br/>



<h3 className='title2a'>Recetarios:</h3>
<p className='parr2a'>Recetarios medicos con o sin numerar</p>
<br/><br/>



<h3 className='title2a'>Comandas:</h3>
<p className='parr2a'>Tacos de papel encolados, con o sin numerar , con o sin impresion </p>
<br/><br/>



<h3 className='title2a'>Calendarios:</h3>
<p className='parr2a'>Escritorio, de pared, de bolsillo</p>
<br/><br/>



<h3 className='title2a'>Toma todo:</h3>
<p className='parr2a'></p>
<br/><br/>



<h3 className='title2a'>Bolsas/Fundas:</h3>
<p className='parr2a'>Papel , cambrela , etc</p>
<br/><br/>



<h3 className='title2a'>Llaveros:</h3>
<p className='parr2a'>Madera, Acrilico, en resina , etc</p>
<br/><br/>



<h3 className='title2a'>Sobres:</h3>
<p className='parr2a'>con o sin impresion</p>
<br/><br/>



<h3 className='title2a'>Carnets/Credenciales:</h3>
<p className='parr2a'>Todo lo que tenga datos variables de nombres, etc, incluso diplomas</p>
<br/><br/>



<h3 className='title2a'>Tarjetas solidarias:</h3>
<p className='parr2a'>Chanchitos solidarios, con o sin numerar, sin pegar</p>
<br/><br/>



<h3 className='title2a'>Afiches</h3>
<p className='parr2a'>Tamaño grande , doble oficio o mas, un color o full color  </p>
<br/><br/>



<h3 className='title2a'>Recuerdos</h3>
<p className='parr2a'>Hechos por nosotros con corte laser, </p>
<br/><br/>

<h3 className='title2a'>Empaques & Cajas</h3>
<p className='parr2a'>Empaques de Comida, papel encerado, cajas de carton , empaque para hot dogs, todo lo que es cajas o empaques de comida </p>
<br/><br/>


    </div>
  )
}
