class Pokemon {
    constructor (nombre, tipo, vida, ataque, defensa) {
        this.imagen = new Image();
        this.audio = new Audio();
        this.nombre = nombre;
        this.tipo = tipo;
        this.vida = vida;
        this.ataque = ataque;
        this.defensa = defensa;
        this.audio.src = audios[this.nombre];
        this.imagen.src = imagenes[this.nombre];
    }
    hablar() {
        this.audio.play();
    }
    mostrar(){
        function crearId() {
            return Date.now().toString(36) + Math.floor(Math.pow(10, 12) 
            + Math.random() * 9*Math.pow(10, 12)).toString(36);
        } 
        const uid = crearId();
        var contenedor = document.getElementById("contenido");
        var div = document.createElement("div");
        var h2 = document.createElement("h2");
        var radio =  document.createElement("input");
        var label = document.createElement("label");
        radio.setAttribute("type", "radio");
        radio.setAttribute("onclick", "seleccionar()");
        radio.setAttribute("id", uid)
        radio.setAttribute("name", "pokeRadio");
        label.setAttribute("for", uid);
        label.setAttribute("class", "pokeLabel");
        label.appendChild(radio);
        label.appendChild(this.imagen);
        label.appendChild(h2);
        h2.innerHTML = this.nombre ;
        div.appendChild(label);
        div.setAttribute("class", "tabla-pokemon");
        contenedor.appendChild(div);

        var coleccion = {
            "Vida: ": this.vida,
            "Tipo: ": this.tipo,
            "Ataque: ": this.ataque,
            "Defensa: ": this.defensa,
          }; 
        var tabla = document.createElement("table");
        for (var stat in coleccion) {
          var filaTexto  = "<tr>"+stat+"</tr><tr>"
          + coleccion[stat] + "</tr>";
          var fila = document.createElement("tr");
          fila.innerHTML = filaTexto;
          tabla.appendChild(fila);
        };
        label.appendChild(tabla);
    }
}