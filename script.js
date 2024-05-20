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

// Función para abrir la pestaña que tenga el ID defaultOpen por defecto
document.getElementById("defaultOpen").click();

// Agregar un event listener en elementos que tengan el id tab_item
const element = document.getElementsByClassName("tab_item");

// Seleccionar el aside donde se enlistaran los titulos de los ejercicios
const listaEjercicios = document.getElementById("lista-ejercicios");

for(let i = 0; i < element.length; i++) {
	element[i].addEventListener("click", () => {
		const titulo = element[i].querySelector('span').textContent;

    let yaExiste = false;
    const items =listaEjercicios.getElementsByTagName('li');

    for(let j = 0; j < items.length; j++) {
      if(items[j].textContent === titulo) {
        yaExiste = true;
        window.alert("Ejercicio " + titulo + " ya ha sido agregado");
        break;
      }
    }

    if (!yaExiste) {
      // Agregar el elemento a la lista
      const li = document.createElement('li');
      li.textContent = titulo;
      listaEjercicios.appendChild(li);
    }
	});
}