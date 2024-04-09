//VERSIÓN CORREGIDA

// Declaración de preguntas
var preguntas = [
    "Viscenso¿A que edad fue enviado park joo-hyung a Italia?",
    "-Aterrizaje de emergencia en tu corazon¿Quienes son los personajes secundarios?",
    "-the king: yhe eternal monarch¿En que año fue emitido?",
    "-Tue Beauty¿Como se llama la protagonista?",
];

// Declaración de opciones, cada elemento de la lista (que a su vez es una lista)
// corresponde a las posibles respuestas de una pregunta.
// Se mantiene el orden de la lista de preguntas.
var opciones = [
    ["12 años",
    "5 años",
    "8 años",
    "30 años"],
    ["Cha sang-woo y Ri mu-hyeok",
    "Kim young-min y Yoo su-bin",
    "Seo dan y Gu seung-joon",
    "Lee shi-young y Hwang woo-seul-hye",],
    ["2016",
    "2018",
    "2020",
    "2019 ",],
    ["kang soo-jin",
    "Lim joo-kyung",
    "Choi soo-ah",
    "Lim hee-kyung"] 
 ]
  
 var puntajePorOpcion = [
    [0, 0, 5, 0],
    [0, 0, 5, 0],
    [5, 0, 0, 5],
    [0, 5, 0, 0],
   
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

    // Determinamos estilo de vida (max = 20)
    if (puntaje >= 20) {
        doramas = "<span id='doramas-excelente'>EXCELENTE</span>";
    } else if (puntaje > 20) {
        doramas = "<span id='doramas-bueno'>BUENO</span>";
    } else if (puntaje > 15) {
        doramas= "<span id='doramas-aceptable'>ACEPTABLE</span>";
    } else if (puntaje > 10) {
        doramas = "<span id='doramas-regular'>REGULAR</span>";
    } else {
        MUSICA = "<span id='musica-malo'>MALO</span>";
    }


    div.innerHTML += `<p class='resultado_obtenido'>Has obtenido ${puntaje} puntos, lo cual significa que tu conocimiento en musica asiatia es ${MUSICA}.</p>`;

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

