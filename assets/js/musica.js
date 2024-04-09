//VERSIÓN CORREGIDA

// Declaración de preguntas
var preguntas = [
    "¿A que anime pertenece la cancion UNRAVEL como opening?",
    "¿Cual de estas canciones no pertenece a BTS?",
    "¿Quien canta el ost del lakorn ´Cutie Pie´?",
    "A que pais pertenece el integrante del grupo got7 Jackson Wang?",
];

// Declaración de opciones, cada elemento de la lista (que a su vez es una lista)
// corresponde a las posibles respuestas de una pregunta.
// Se mantiene el orden de la lista de preguntas.
var opciones = [
    ["Naruto",
    "One Piece",
    "Tokyo Ghoul",
    "Nanatzu no Taizai"],
    ["Maniac",
    "Boy with luv",
    "Rain",
    "Sea",],
    ["Saint",
    "Bright",
    "Jeff Saturn",
    "Nunew ",],
    ["China",
    "USA",
    "Corea del Sur",
    "Japon"] 
 ]
  
var puntajePorOpcion = [
    [0, 0, 5, 0],
    [5, 0, 0, 0],
    [0, 0, 0, 5],
    [5, 0, 0, 0],
   
  //27 22 17 12 10
  //22 22 14 11 10   
]


// Acá se define el despliegue de las preguntas y se almacenan los puntajes
var puntaje = 0;
var i = 0;

// Despliegue de los resultados
function mostrarResultado() {
    // Se remueven los hijos del div con clase "card", dentro de él agregaremos los resultados
    var div = document.getElementsByClassName("card")[0];
    div.innerHTML = "";

  

    // Agregamos los elementos correspondientes a los resultados
    div.innerHTML += "<h3 class='resultado_titulo'>Resultados</h3>";

    // Determinamos estilo de vida (max = 35)
    if (puntaje >= 20) {
        MUSICA = "<span id='musica-excelente'>EXCELENTE</span>";
    } else if (puntaje > 20) {
        MUSICA = "<span id='musica-bueno'>BUENO</span>";
    } else if (puntaje > 15) {
        MUSICA= "<span id='musica-aceptable'>ACEPTABLE</span>";
    } else if (puntaje > 10) {
        MUSICA = "<span id='musica-regular'>REGULAR</span>";
    } else {
        MUSICA = "<span id='musica-malo'>MALO</span>";
    }


    div.innerHTML += `<p class='resultado_obtenido'>Has obtenido ${puntaje} puntos, lo cual significa que tu conocimiento en musica asiatica es ${MUSICA}.</p>`;

    let puntos=document.getElementsByClassName("puntos");
    // puntos.style.display="block";
    // puntos[0].setAttribute("hidden","false");
    puntos[0].removeAttribute("hidden");
    puntos[1].removeAttribute("hidden");

}

function actualizarPuntaje(opcion) {
    var indice = opcion - 1;
     puntaje += puntajePorOpcion[i][indice];

    i++
    if (i < preguntas.length) {
       
        siguientePregunta();
    } else {
        mostrarResultado();
    }
}

function siguientePregunta() {
    document.getElementById("pregunta").innerHTML = preguntas[i];
    document.getElementById("op1").innerHTML = opciones[i][0];
    document.getElementById("op2").innerHTML = opciones[i][1];
    document.getElementById("op3").innerHTML = opciones[i][2];
    document.getElementById("op4").innerHTML = opciones[i][3];
  
}

siguientePregunta();  // Muestra la primera pregunta
document.getElementById("op1").addEventListener("click", function () {
    actualizarPuntaje(1);
});
document.getElementById("op2").addEventListener("click", function () {
    actualizarPuntaje(2);
});
document.getElementById("op3").addEventListener("click", function () {
    actualizarPuntaje(3);
});
document.getElementById("op4").addEventListener("click", function () {
    actualizarPuntaje(4);
});

