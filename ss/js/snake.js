// Gioco snake con griglia html/css
// if direction=directionsnake if direction l o r Xsnake=[g_width/2]++ --
// if direction u o d ysnake=[g_height/2]++ --
// else
// (mi sa che è meglio lo switch pure qua)
// key U
// if direction l
// Xsnake -- e ysnake++
// if direction r
// Xsnake ++ e ysnake ++
// key D
// if direction l
// Xsnake -- e ysnake--
// if direction r
// Xsnake ++ e ysnake --
// key L
// if direction u
// Xsnake -- e ysnake++
// if direction d
// Xsnake ++ e ysnake --
// key R
// if direction u
// Xsnake -- e ysnake++
// if direction d
// Xsnake ++ e ysnake --
// else if direction opposta do nothing
// in tutto questo if
// xsnake o y snake = mela generata
// genero nuova mela e score ++
// e snakeLength++
// winning sempre
// while xnake++ -- ysnake++ -- =! ysnake xsnake e =! x e y appartengono a griglia
// '

$( document ).ready(function() {
    console.log( "Vediamo se con JQuery ho vantaggi in un codice un pò più complesso.Risposta no" );
});

function TastoPremuto(event) {
    switch (event.keyCode) {
        case 38:
      Direction = 'Up';
      break;
        case 40:
       Direction = 'Down';
        break;
        case 37:
        Direction = 'Left';
       break;
        case 39:
        Direction = 'Right';
        break;
        default:
        break;
    }
    event.preventDefault();
    // x evitare comportamento standard come scroll pagina-dopo consulto con alfredo
}


var score=0;
var apple;
var snake;
var snakeDirection;
var Direction;
// function fabio()
// {
// var scelta=parseInt(document.getElementById('myselect').value);
// return gioco(scelta);
// }

var griglia = document.getElementById('griglia');
var g=[];
var g_width = 26;
var g_height = 26;
    for (var y = 0; y < g_height; y++) {
        var row = [];
        for (var x = 0; x < g_width; x++) {
            var cell = [];
            cell.element = document.createElement('div');

            griglia.appendChild(cell.element);
            row.push(cell);
        }
        g.push(row);
    }
// all'inizio il serpente parte da qualche parte:
var griglia = document.getElementById('griglia');
var quadrati=griglia.children; // omaggio a jquery,anche noi teniamo alla famiglia
for (var i = 0; i < quadrati.length; i++) {
  quadrati[i].setAttribute('number',i);
  quadrati[i].innerText=i;
}
var Xcoda=3;
var Ycoda=g_height/2;
var codaSnake=g[Ycoda][Xcoda];
var Xtesta=7;
var Ytesta=g_height/2;
var testaSnake=g[Ytesta][Xtesta];
console.log(testaSnake);
// Direction='Right'; // questo lo decommento per i test
snakeDirection = 'Right';
// codaSnake.element.className='snake';
testaSnake.element.className='snake testasnake';

  // $("[number=4]").addClass('snake');
// console.log($("[number=4]"));//Ma vaffanculo a te, i palazzi, i palazzinari, i maggiordomi, i cani, i giardini e l'anima de li mortacci tua.
// console.log(document.querySelector("div[number='4']"));

// quanto segue vale se faccio un cambio di direzione
// se premo stessa direzione o opposta non succede niente

// Snake comportamento base:

g[Ytesta][Xtesta].element.classList.remove('snake testaSnake');
g[Ycoda][Xcoda].element.classList.remove('snake codaSnake');
switch (snakeDirection){
case 'Up':
g[Ytesta-1][Xtesta].element.className='snake testaSnake';
g[Ycoda-1][Xcoda].element.className='snake codaSnake';
break;
case 'Down':
g[Ytesta+1][Xtesta].element.className='snake testaSnake';
g[Ycoda+1][Xcoda].element.className='snake codaSnake';
break;
case 'Left':
g[Ytesta][Xtesta-1].element.className='snake testaSnake';
g[Ycoda][Xcoda-1].element.className='snake codaSnake';
break;
case 'Right':
g[Ytesta][Xtesta+1].element.className='snake testaSnake';
g[Ycoda][Xcoda+1].element.className='snake codaSnake';
break;
}



// Cambio direzione da tastiera

g[Ytesta][Xtesta].element.classList.remove('snake testaSnake');
 switch (Direction){
 case 'Up':
g[Ytesta-1][Xtesta].element.className='snake testaSnake';
 break;
 case 'Down':
g[Ytesta+1][Xtesta].element.className='snake testaSnake';
 break;
 case 'Left':
g[Ytesta][Xtesta-1].element.className='snake testaSnake';
 break;
 case 'Right':
g[Ytesta][Xtesta+1].element.className='snake testaSnake';
 break;
}

// quando il serpente si muove cioe sempre
// la coda diventa ciò che era la testa prima?

// switch(Direction + "|" + snakeDirection) {
//     case "Up|Left":
//     g[Ytesta-1][Xtesta].element.className='snake';
//
//     break;
//     case "Up|Right":
//     g[Ytesta-1][Xtesta].element.className='snake';
//
//     break;
//     case "Down|Left":
//     g[Ytesta+1][Xtesta].element.className='snake';
//     break;
//     case "Down|Right":
//     g[Ytesta+1][Xtesta].element.className='snake';
//     break;
//     case "Right|Up":
//     g[Ytesta+1][Xtesta+1].element.className='snake';
//     break;
//     case "Right|Down":
//     g[Ytesta+1][Xtesta+1].element.className='snake';
//     break;
//     case "Left|Up":
//     g[Ytesta-1][Xtesta-1].element.className='snake';
//
//     break;
//     case "Left|Down":
//     g[Ytesta+1][Xtesta-1].element.className='snake';
//     break;
// }


// si prende con punto element no outerhtml ho perso un'ora uccido tutti
function RandomApple(){
 var apple=g[Math.floor(Math.random()*(g_width+1))][Math.floor(Math.random()*(g_height+1))];
console.log(apple);
return apple;
}

// var audiofail = new Audio('css/exp.mp3');
// audiofail.play();
//  setTimeout(function(){ window.location.reload(false); }, 2000);
// }

//   var vid = document.getElementById("myVideo");
//   vid.play();
//   vid.style.opacity="1";
//   var festa=document.getElementsByClassName("festa")[0];
//   festa.innerText="Grandissimo, non ci sono mine nei paraggi della casella "+this.innerHTML+" !";
//   var suggerimento=document.getElementById('suggerimento');
//   setTimeout(function(){
//     suggerimento.innerText='Suggerimento:applicare l\'ultimo punto può farti arrivare alla vittoria molto più facilmente!' ;
//   },14000);
//
//
//   vid.addEventListener("timeupdate", function(){
//     if(this.currentTime >= 12) {
//          this.pause();
//          this.style.opacity="0";
//          this.currentTime = 0;
//          festa.innerText="";
//          setTimeout(function(){
//             suggerimento.style.display = "none";
//           },10000);
//      }
//    })
//
// });


$("*").addClass('blue');
$('button')
.hover(function(){$(this).addClass('yellow');},function(){$(this).removeClass('yellow');})
.dblclick(function(){alert('Tanto non vinci comunque');
});


// tu a snake gli dai una direzione iniziale, che è la direzione in cui si coloreranno i 5 quadratini, mettiamo direzione destra ok? e colori 5 quadratini sulla destra di base

// devi usare i numeri delle celle come riferimento. se con la testa di snake sto al numero X, se voglio andare a destra allora dovrò avere una funzione che a partire da X mi colora i numeri in una determinata direzione, se a sinistra un'altra, se sopra ancora un'altra, se sotto un'altra ancora


// snake sicuramente ogni tot, tipo ogni 500 millisecondi, deve andare avanti sempre di un quadratino verso una direzione x
//
// se fai così sappiamo che :
// SE snake va verso destra, allora deve colorare la cella col numero successivo
// SE snake va a sinistra, deve colorare la cella col numero precedente
// SE snake va su, allora dovrà colorare la cella n attuale fratto qualcosa (devo un attimo provarmelo per capire)
// SE snake va giu allora dovrà colorare la cella n attuale fratto qualcos' altro
// eh sì devi avere un setInterval per l'avanzamento di snake no?
// un set interval che gli dice che ogni secondo deve andare avanti di un quadratino rispetto alla posizione che gli dà la tastiera
//
// nel set interval ti fai una funzione che controlla quale sia la direzione data e da lì ti calcoli i quadratini da colorare

// console.log(quadrati[5].getAttribute('number'));


// creo una funzione perché sta mela nel gioco viene creata ogni volta
// che viene mangiata,e il serpente si allunga
