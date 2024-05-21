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

for (let i = 0; i < element.length; i++) {
	element[i].addEventListener("click", () => {
		const titulo = element[i].querySelector("span").textContent;

		let yaExiste = false;
		const items = listaEjercicios.getElementsByTagName("li");

		for (let j = 0; j < items.length; j++) {
			if (items[j].textContent === titulo) {
				yaExiste = true;
				window.alert("Ejercicio " + titulo + " ya ha sido agregado");
				break;
			}
		}

		if (!yaExiste) {
			// Agregar el elemento a la lista
			const li = document.createElement("li");
			li.textContent = titulo;
			listaEjercicios.appendChild(li);
		}
	});
}

// Funciones para imprimir los datos de los inputs y calcular el peso en base a la edad, altura y sexo

function calcular() {
	let nombre = document.getElementById("nombre").value;
	let peso = document.getElementById("peso").value;
	let edad = document.getElementById("edad").value;
	let altura = document.getElementById("altura").value;
	let sexo = document.getElementById("sexo").value;

	if (!nombre || !peso || !edad || !altura || !sexo) {
		window.alert("Favor ingresar todos los datos necesarios");
		return;
	}

	const listaResumen = document.getElementById("lista-resumen");
	listaResumen.innerHTML = "";

	const liNombre = document.createElement("li");
	liNombre.textContent = `Nombre: ${nombre}`;
	listaResumen.appendChild(liNombre);

	const liPeso = document.createElement("li");
	liPeso.textContent = `Peso: ${peso} lbs.`;
	listaResumen.appendChild(liPeso);

	const liEdad = document.createElement("li");
	liEdad.textContent = `Edad: ${edad}`;
	listaResumen.appendChild(liEdad);

	const liAltura = document.createElement("li");
	liAltura.textContent = `Altura: ${altura} cm.`;
	listaResumen.appendChild(liAltura);

	const liSexo = document.createElement("li");
	liSexo.textContent = `Sexo: ${sexo}`;
	listaResumen.appendChild(liSexo);

	const pesoIdeal = calcularPesoIdeal(altura, sexo);

	const liPesoIdeal = document.createElement("li");
	liPesoIdeal.textContent = `Peso Ideal: ${pesoIdeal.toFixed(2)} lbs`;
	listaResumen.appendChild(liPesoIdeal);
}

function calcularPesoIdeal(altura, sexo) {
	const alturaMetros = altura / 100;

	const imcIdeal = sexo === 'masculino' ? 22 : 21;

	const pesoIdealKg = imcIdeal * (alturaMetros * alturaMetros);

	const pesoIdealLbs = pesoIdealKg * 2.20462;

	return pesoIdealLbs;
}