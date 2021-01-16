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
}
function RandomApple(){
 var apple=g[Math.floor(Math.random()*g_width)][Math.floor(Math.random()*g_height)];
// console.log(apple);
apple.element.className='apple';
}

var griglia = document.getElementById('griglia');
var g=[];
var g_width = 14;
var g_height = 14;
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


// var Xcorpo=3;
// var Ycorpo=g_height/2+1;
// var Xtesta=3;
// var Ytesta=g_height/2+2;

RandomApple();

var Xcoda=3;
var Ycoda=g_height/2;
var codaSnake=g[Ycoda][Xcoda];
var Ycorpo=g_height/2;
var Xcorpo=4;
var corpoSnake=g[Ycorpo][Xcorpo];
var Xtesta=5;
var Ytesta=g_height/2;
var testaSnake=g[Ytesta][Xtesta];
console.log(testaSnake);

testaSnake.element.className='snake testaSnake';
corpoSnake.element.className='snake corpoSnake';
codaSnake.element.className='snake codaSnake';

// Snake comportamento base:
function SnakeMovement(){
switch (snakeDirection){
case 'Up':
g[Ycoda][Xcoda].element.classList.remove('snake');
g[Ycoda][Xcoda].element.classList.remove('codaSnake');
g[Ycorpo-1][Xcorpo].element.className='snake corpoSnake';
g[Ytesta-1][Xtesta].element.className='snake testaSnake';
g[Ycoda-1][Xcoda].element.className='snake codaSnake';
break;
case 'Down':
g[Ycoda][Xcoda].element.classList.remove('snake');
g[Ycoda][Xcoda].element.classList.remove('codaSnake');
g[Ycorpo+1][Xcorpo].element.classList='snake corpoSnake';
g[Ytesta+1][Xtesta].element.className='snake testaSnake';
g[Ycoda+1][Xcoda].element.className='snake codaSnake';
break;
case 'Left':
g[Ycoda][Xcoda].element.classList.remove('snake');
g[Ycoda][Xcoda].element.classList.remove('codaSnake');
g[Ycorpo][Xcorpo-1].element.className='snake corpoSnake';
g[Ytesta][Xtesta-1].element.className='snake testaSnake';
g[Ycoda][Xcoda-1].element.className='snake codaSnake';
break;
case 'Right':
g[Ycoda][Xcoda].element.classList.remove('snake');
g[Ycoda][Xcoda].element.classList.remove('codaSnake');
g[Ycorpo][Xcorpo+1].element.className='snake corpoSnake';
g[Ytesta][Xtesta+1].element.className='snake testaSnake';
g[Ycoda][Xcoda+1].element.className='snake codaSnake';
break;
}
}
function InputMovement(){

g[Ytesta][Xtesta].element.classList.remove('testaSnake');
g[Ytesta][Xtesta].element.classList.remove('snake');
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
}
// Direction='Right'; // questo lo decommento per i test
snakeDirection = 'Right';

if (Xtesta < 0 || Ytesta < 0 || Xtesta >= g_width || Ytesta >= g_height) {
    end();
    newgame();
}
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

// $("*").addClass('blue');
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
