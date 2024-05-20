function openTab(evt, tabName) {
	// Declarar todas las variables
	var i, tabcontent, tablinks;

	// Agarrar todos los elementos con la clase "tabcontent" y esconderlos
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Agarrar todos los elementos con la clase "tablinks" y quitarles la clase "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Mostrar la pestana actual, y agregar la clase "active" al boton que abrio la pestaña
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}
