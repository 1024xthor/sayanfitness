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

document.querySelectorAll('.card-grafico').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // posición X dentro de la tarjeta
        const y = e.clientY - rect.top;  // posición Y dentro de la tarjeta
        
        // Calculamos el centro
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Multiplicador de giro: 0.5 para 180 grados, 1.0 para 360 si te vuelves loco
        const rotateX = (centerY - y) / 5; 
        const rotateY = (x - centerX) / 5;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    // Al quitar el mouse, vuelve a su sitio suavemente
    card.addEventListener('mouseleave', () => {
        card.style.transition = "transform 0.5s ease";
        card.style.transform = `rotateX(0deg) rotateY(0deg)`;
        setTimeout(() => { card.style.transition = ""; }, 500);
    });
});
