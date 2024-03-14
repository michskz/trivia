//VERSIÓN CORREGIDA

// Declaración de preguntas
var preguntas = [
    "¿Quien es el protagonista de Estación zombie?",
    "¿Quien es el director del huesped?",
    "¿Que relación tenian Seita y Setsuko?",
    "¿En que pelicula aparece JIN MURAKI como personaje principal?",
];

// Declaración de opciones, cada elemento de la lista (que a su vez es una lista)
// corresponde a las posibles respuestas de una pregunta.
// Se mantiene el orden de la lista de preguntas.
var opciones = [
    ["Jung Yoo-mi",
    "Gong Yoo",
    "Choi Woo-shik",
    "Sohee Kim"],
    ["Bong Joon-ho ",
    "Song Kang-ho",
    "Byun Hee-bong",
    "Park Hae-il",],
    ["Eran amigos",
    "Eran novios ",
    "Eran vecinos ",
    "Eran hermanos"],
    ["The Medium",
    "Ringu",
    "Noroi: The Curse",
    "I Saw the Devil",]
    ]

var puntajePorOpcion = [
    [0, 5, 0, 0],
    [5, 0, 0, 0],
    [0, 0, 0, 5],
    [0, 0, 5, 0],
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

    // Determinamos la pelicula correcta (max = 35)
    if (puntaje >= 20) {
        peliculaCorrecta = "<span id='pelicula-excelente'>EXCELENTE</span>";
    } else if (puntaje > 15) {
        peliculaCorrecta = "<span id='pelicula-bueno'>BUENO</span>";
    } else if (puntaje > 10) {
        peliculaCorrecta  = "<span id='pelicula-aceptable'>ACEPTABLE</span>";
    } else {
        peliculaCorrecta  = "<span id='pelicula-malo'>MALO</span>"
    }


    div.innerHTML += `<p class='resultado_obtenido'>Has obtenido ${puntaje} puntos, lo cual significa que eres ${peliculaCorrecta} peliculas asiaticas.</p>`;

    let puntos=document.getElementsByClassName("puntos");
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
document.getElementById("op5").addEventListener("click", function () {
    actualizarPuntaje(5);
});

