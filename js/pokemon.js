
// Forma correcta de escribir JS
function Pokemon( nombre, vida, ataque ) {
	this .nombre = nombre;
	this .ruta = 'images/' + nombre .toLowerCase() + '.png';
	this .vida = vida;
	this .ataque = ataque;
	this .grito = 'Pika!';
	this .gritar = function() {
		alert( this .grito );
	}
}

function inicio() {

	var rattata = new Pokemon( 'Rattata', 40, 2 );		// Instanció y creo el objeto.
	rattata .vida -= 13;								// Modifico el valor inicial.
	rattata .grito = 'Rattataaa taaa!!';				// Modifico el valor inicial.

	// Insertamos el nombre del Pokemón en el elemento <h2> con el ID indicado.
	document .getElementById( 'nombrePokemon' ) .textContent = rattata .nombre; 

    // Imagen del Pokemón.
	var imagen = new Image( 200, 200 );					// Instanció y creo el objeto Image.
		imagen .src = rattata .ruta;					// Modifico el valor de la URL.
		imagen .setAttribute( 'alt', rattata .nombre ); // Agrego atributos alt y title a la imagen.
		imagen .setAttribute( 'title', rattata .nombre );

	// Obtengo el elemento <p> por su ID en el cual deseo insertar el nuevo nodo.
	var elemento_descripcion = document .getElementById( 'descripcionPokemon' ), 
	    ul = document .createElement( 'ul' ),			// 0   Creo el elemento que deseo insertar <ul> 
	    li = document .createElement( 'li' );			// 1.1 Creo el elemento contenedor <li> donde deseo insertar el dato.
	
	li .textContent = 'Grito: ' + rattata .grito;		// 1.2 Inserto el dato dentro del elemento.
	ul .appendChild( li );								// 1.3 Inserto el elemento creado <li> en el elemento padre <ul>

	li = document.createElement( 'li' );				// 2.1 Creo el elemento contenedor <li> donde deseo insertar el dato.
	li .textContent = 'Vida: ' + rattata .vida;			// 2.2 Inserto el dato dentro del elemento.
	ul .appendChild( li );								// 2.3 Inserto el elemento creado <li> en el elemento padre <ul>

	li = document.createElement( 'li' );				// 3.1 Creo el elemento contenedor <li> donde deseo insertar el dato.
	li .textContent = 'Ataque: ' + rattata .ataque; 	// 3.2 Inserto el dato dentro del elemento.
	ul .appendChild( li );								// 3.3 Inserto el elemento creado <li> en el elemento padre <ul>

	//console .log( document .getElementById( 'nombrePokemon' ).parentNode );

	// Inserto los elementos del elemento descripción del Pokemón.
	elemento_descripcion .textContent = '';				// 4.1 Limpio el contenido actual del elemento <p>.
	elemento_descripcion .appendChild( imagen );		// 4.2 Inserto el elemento creado <img> en el elemento padre <p>
	elemento_descripcion .appendChild( ul );			// 4.3 Inserto el elemento creado <lu> en el elemento padre <p>
	
}