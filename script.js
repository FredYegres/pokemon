var imagenes = [];
imagenes["Bulbasaur"] = "images/poke1.png";
imagenes["Charmander"] = "images/poke2.png";
imagenes["Squirtle"] = "images/poke3.png";

var audios = [];
audios["Bulbasaur"] = "audio/bulbasaur.mp3";
audios["Charmander"] = "audio/charmander.mp3";
audios["Squirtle"] = "audio/squirtle.mp3";

var coleccion = [];
coleccion.push(new Pokemon("Bulbasaur", "Planta", 45, 49, 49));
coleccion.push(new Pokemon("Charmander", "Fuego", 39, 52, 43));
coleccion.push(new Pokemon("Squirtle", "Agua", 44, 48, 65));

var boton = document.getElementById("botonMostrar");
boton.addEventListener("click", mostrar);
function mostrar() {
    if (coleccion[0].cargado == true && coleccion[1].cargado == true && coleccion[2].cargado == true) {
        for (p of coleccion) {
        p.mostrar();
    }
    }
}
coleccion[0].imagen.addEventListener("load", cargarPoke0);
coleccion[1].imagen.addEventListener("load", cargarPoke1);
coleccion[2].imagen.addEventListener("load", cargarPoke2);

function cargarPoke0() {
    coleccion[0].cargado = true;
}
function cargarPoke1() {
    coleccion[1].cargado = true;
}
function cargarPoke2() {
    coleccion[2].cargado = true;
}
function ocultar(){
    var elemento = document.getElementById("botonMostrar");
    elemento.style.display = "none";
    var pokebola = document.getElementById("pokebola");
    pokebola.style.display = "none";
}
var elementos = document.getElementsByName("pokeRadio");
var pokeClase = document.getElementsByClassName("tabla-pokemon");
var flecha = document.getElementById("labelFlecha");
function seleccionar() {
    function mostrarflecha() {
        flecha.style.display = "block"
    }
    estilos = `width: 500px;
        color: #FFFFFF;
        zoom: 150%;
        background-color: rgba(0, 0, 0, 0.5)`
    estilosBase = `
        div.tabla-pokemon {
            background: rgba(255, 255, 255, 0.5);
            height: 350px;
            width: 200px;
            float: left;
            margin: 0px 50px 50px 50px;
            text-align: center;
            border-radius: 20px;
        }
        div.tabla-pokemon:hover {
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: 20px;
            color: #FFFFFF;
        }`
    for (i = 0; i < elementos.length; i++) {
        if (elementos[0].checked == true) {
            coleccion[0].hablar();
            pokeClase[0].style = estilos;
            pokeClase[1].style.display = "none";
            pokeClase[2].style.display = "none";
            mostrarflecha();
        }
        else if (elementos[1].checked == true) {
            coleccion[1].hablar();
            pokeClase[1].style = estilos;
            pokeClase[0].style.display = "none";
            pokeClase[2].style.display = "none";
            mostrarflecha();
        }
        else if (elementos[2].checked == true) {
            coleccion[2].hablar();
            pokeClase[2].style = estilos;
            pokeClase[0].style.display = "none";
            pokeClase[1].style.display = "none";
            mostrarflecha();
        }
    }
}
function atras() {
    pokeClase[0].style = estilosBase;
    pokeClase[1].style = estilosBase;
    pokeClase[2].style = estilosBase;
    flecha.style.display = "none";
}