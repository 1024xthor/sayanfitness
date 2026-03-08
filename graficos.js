document.addEventListener("DOMContentLoaded", function(){

/* GRAFICO DE LINEAS */

const linea = document.getElementById("graficoLineas");

if(linea){

new Chart(linea,{

type:"line",

data:{
labels:["Semana1","Semana2","Semana3","Semana4"],

datasets:[{

label:"Progreso físico",

data:[20,40,65,90],

borderColor:"#00f7ff",

backgroundColor:"rgba(0,247,255,0.15)",

borderWidth:3,

tension:0.4,

pointRadius:5,

pointBackgroundColor:"#00f7ff"

}]

},

options:{

responsive:true,

plugins:{
legend:{
labels:{color:"#fff"}
}
},

scales:{

x:{
ticks:{color:"#aaa"},
grid:{color:"rgba(0,255,255,0.1)"}
},

y:{
ticks:{color:"#aaa"},
grid:{color:"rgba(0,255,255,0.1)"}
}

}

}

});

}


/* GRAFICO DE BARRAS */

const barras = document.getElementById("graficoBarras");

if(barras){

new Chart(barras,{

type:"bar",

data:{
labels:["Fuerza","Resistencia","Energía","Disciplina"],

datasets:[{

label:"Mejora",

data:[70,55,60,80],

backgroundColor:[
"#00f7ff",
"#ff2e88",
"#ffa600",
"#ffe600"
],

borderRadius:8

}]

},

options:{

responsive:true,

plugins:{
legend:{
labels:{color:"#fff"}
}
},

scales:{

x:{
ticks:{color:"#aaa"},
grid:{display:false}
},

y:{
ticks:{color:"#aaa"},
grid:{color:"rgba(0,255,255,0.1)"}
}

}

}

});

}

});
