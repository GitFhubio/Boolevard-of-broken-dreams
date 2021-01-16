// __________f inserita onkeydown al body _________________
// Ovviamente devo combinare le condizioni di  input e direzione naturale
// ho solo creato una forma
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
// _______________  funzione di gioco      ________________

function RandomApple(){
apple=g[Math.floor(Math.random()*g_width)][Math.floor(Math.random()*g_height)];
// console.log(apple);
apple.element.classList.add('apple');
}
function start()
{
    clock = setInterval(function(){game();}, 300);
}

$(document).ready(function(){
  griglia = document.getElementById('griglia');
  g=[];
  g_width = 14;
  g_height = 14;
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

  griglia = document.getElementById('griglia');
  quadrati=griglia.children; // omaggio a jquery,anche noi teniamo alla famiglia
  for (var i = 0; i < quadrati.length; i++) {
    quadrati[i].setAttribute('number',i);
    quadrati[i].innerText=i;
  }
score=0;
Direction='Right';
snakeDirection = 'Right';
Xcoda=3;
Ycoda=g_height/2;
codaSnake=g[Ycoda][Xcoda];
Ycorpo=g_height/2;
Xcorpo=4;
corpoSnake=g[Ycorpo][Xcorpo];
Xtesta=5;
Ytesta=g_height/2;
testaSnake=g[Ytesta][Xtesta];
// console.log(testaSnake);
testaSnake.element.classList.add('snake','testaSnake');
corpoSnake.element.classList.add('snake','corpoSnake');
codaSnake.element.classList.add('snake','codaSnake');


RandomApple();

})

function game(){
// Snake comportamento base:

function snakeNatural(){
switch (snakeDirection){
case 'Up':
g[Ycoda][Xcoda].element.classList.remove('snake');
g[Ycoda][Xcoda].element.classList.remove('codaSnake');
g[Ycorpo-1][Xcorpo].element.classList.add('snake','corpoSnake');
g[Ytesta-1][Xtesta].element.classList.add('snake','testaSnake');
g[Ycoda-1][Xcoda].element.classList.add('snake','codaSnake');
Ycoda--;
Ytesta--;
Ycorpo--;
break;
case 'Down':
g[Ycoda][Xcoda].element.classList.remove('snake');
g[Ycoda][Xcoda].element.classList.remove('codaSnake');
g[Ycorpo+1][Xcorpo].element.classList.add('snake','corpoSnake');
g[Ytesta+1][Xtesta].element.classList.add('snake','testaSnake');
g[Ycoda+1][Xcoda].element.classList.add('snake','codaSnake');
Ycoda++;
Ytesta++;
Ycorpo++;
break;
case 'Left':
g[Ycoda][Xcoda].element.classList.remove('snake');
g[Ycoda][Xcoda].element.classList.remove('codaSnake');
g[Ycorpo][Xcorpo-1].element.classList.add('snake','corpoSnake');
g[Ytesta][Xtesta-1].element.classList.add('snake','testaSnake');
g[Ycoda][Xcoda-1].element.classList.add('snake','codaSnake');
Xcoda--;
Xtesta--;
Xcorpo--;
break;
case 'Right':
g[Ycoda][Xcoda].element.classList.remove('snake');
g[Ycoda][Xcoda].element.classList.remove('codaSnake');
g[Ycorpo][Xcorpo+1].element.classList.add('snake','corpoSnake');
g[Ytesta][Xtesta+1].element.classList.add('snake','testaSnake');
g[Ycoda][Xcoda+1].element.classList.add('snake','codaSnake');
Xcoda++;
Xtesta++;
Xcorpo++;
break;
}
}

if(snakeDirection==Direction || (snakeDirection=='Up' && Direction=='Down') || (snakeDirection=='Down' && Direction=='Up') || (snakeDirection=='Right' && Direction=='Left') ||
(snakeDirection=='Left' && Direction=='Right'))
{
  snakeNatural();
}
else {//quanto segue sono i cambi di direzione prima di tornare naturale
if (snakeDirection=='Right' && Direction=='Up'){
g[Ycoda][Xcoda].element.classList.remove('snake','codaSnake');
g[Ytesta][Xtesta].element.classList.remove('snake','testaSnake');
g[Ycorpo][Xcorpo].element.classList.remove('snake','corpoSnake');
  Xcorpo=Xcorpo+1;
  Ycorpo=Ycorpo-1;
  Ytesta=Ytesta-2;
  Xcoda=Xcoda+2;
  snakeDirection='Up';
  // funziona
}
if (snakeDirection=='Right' && Direction=='Down'){
g[Ycoda][Xcoda].element.classList.remove('snake','codaSnake');
g[Ytesta][Xtesta].element.classList.remove('snake','testaSnake');
g[Ycorpo][Xcorpo].element.classList.remove('snake','corpoSnake');
  Xcorpo=Xcorpo+1;
  Ycorpo=Ycorpo+1;
  Ytesta=Ytesta+2;
  Xcoda=Xcoda+2;
  snakeDirection='Down';
  // funziona
}
if (snakeDirection=='Up' && Direction=='Right'){
g[Ycoda][Xcoda].element.classList.remove('snake','codaSnake');
g[Ytesta][Xtesta].element.classList.remove('snake','testaSnake');
g[Ycorpo][Xcorpo].element.classList.remove('snake','corpoSnake');
  Xcorpo=Xcorpo+1;
  Ycorpo=Ycorpo-1;
  Ycoda=Ycoda-2;
  Xtesta=Xtesta+2;
  snakeDirection='Right';
}
// funziona(gesu cristo wannabe)
if (snakeDirection=='Up' && Direction=='Left'){
g[Ycoda][Xcoda].element.classList.remove('snake','codaSnake');
g[Ytesta][Xtesta].element.classList.remove('snake','testaSnake');
g[Ycorpo][Xcorpo].element.classList.remove('snake','corpoSnake');
  Xcorpo=Xcorpo-1;
  Ycorpo=Ycorpo-1;
  Ycoda=Ycoda-2;
  Xtesta=Xtesta-2;
  snakeDirection='Left';
  // funziona
}
if (snakeDirection=='Left' && Direction=='Up'){
g[Ycoda][Xcoda].element.classList.remove('snake','codaSnake');
g[Ytesta][Xtesta].element.classList.remove('snake','testaSnake');
g[Ycorpo][Xcorpo].element.classList.remove('snake','corpoSnake');
  Xcorpo=Xcorpo-1;
  Ycorpo=Ycorpo-1;
  Xcoda=Xcoda-2;
  Ytesta=Ytesta-2;
  snakeDirection='Up';
  // funziona
}
if (snakeDirection=='Left' && Direction=='Down'){
g[Ycoda][Xcoda].element.classList.remove('snake','codaSnake');
g[Ytesta][Xtesta].element.classList.remove('snake','testaSnake');
g[Ycorpo][Xcorpo].element.classList.remove('snake','corpoSnake');
  Xcorpo=Xcorpo-1;
  Ycorpo=Ycorpo+1;
  Xcoda=Xcoda-2;
  Ytesta=Ytesta+2;
  snakeDirection='Down';
  // funziona
}
if (snakeDirection=='Down' && Direction=='Right'){
g[Ycoda][Xcoda].element.classList.remove('snake','codaSnake');
g[Ytesta][Xtesta].element.classList.remove('snake','testaSnake');
g[Ycorpo][Xcorpo].element.classList.remove('snake','corpoSnake');
  Xcorpo=Xcorpo+1;
  Ycorpo=Ycorpo+1;
  Ycoda=Ycoda+2;
  Xtesta=Xtesta+2;
  snakeDirection='Right';
  // funziona
}
if (snakeDirection=='Down' && Direction=='Left'){
g[Ycoda][Xcoda].element.classList.remove('snake','codaSnake');
g[Ytesta][Xtesta].element.classList.remove('snake','testaSnake');
g[Ycorpo][Xcorpo].element.classList.remove('snake','corpoSnake');
  Xcorpo=Xcorpo-1;
  Ycorpo=Ycorpo+1;
  Ycoda=Ycoda+2;
  Xtesta=Xtesta-2;
  snakeDirection='Left';
}
}
// i cambi di direzione che non mi riescono


// switch(Direction + "|" + snakeDirection) {
//   // direzioni uguali o opposte(keeping)
//     case "Right|Right":
//     break;
//     case "Left|Right":
//     g[Ycoda][Xcoda].element.classList.remove('snake');
//     g[Ycoda][Xcoda].element.classList.remove('codaSnake');
//     g[Ycorpo][Xcorpo+1].element.classList.add('snake','corpoSnake');
//     g[Ytesta][Xtesta+1].element.classList.add('snake','testaSnake');
//     g[Ycoda][Xcoda+1].element.classList.add('snake','codaSnake');
//     Xcoda++;
//     Xtesta++;
//     Xcorpo++;
//     break;
//     case "Left|Left":
//     break;
//     case "Right|Left":
//     g[Ycoda][Xcoda].element.classList.remove('snake');
//     g[Ycoda][Xcoda].element.classList.remove('codaSnake');
//     g[Ycorpo][Xcorpo-1].element.classList.add('snake','corpoSnake');
//     g[Ytesta][Xtesta-1].element.classList.add('snake','testaSnake');
//     g[Ycoda][Xcoda-1].element.classList.add('snake','codaSnake');
//     Xcoda--;
//     Xtesta--;
//     Xcorpo--;
//     break;
//     case "Up|Up":
//     break;
//     case "Up|Down":
//     g[Ycoda][Xcoda].element.classList.remove('snake');
//     g[Ycoda][Xcoda].element.classList.remove('codaSnake');
//     g[Ycorpo][Xcorpo-1].element.classList.add('snake','corpoSnake');
//     g[Ytesta][Xtesta-1].element.classList.add('snake','testaSnake');
//     g[Ycoda][Xcoda-1].element.classList.add('snake','codaSnake');
//     Xcoda++;
//     Xtesta++;
//     Xcorpo++;
//     break;
//     case "Down|Down":
//     break;
//     case "Down|Up":
//     g[Ycoda][Xcoda].element.classList.remove('snake');
//     g[Ycoda][Xcoda].element.classList.remove('codaSnake');
//     g[Ycorpo][Xcorpo-1].element.classList.add('snake','corpoSnake');
//     g[Ytesta][Xtesta-1].element.classList.add('snake','testaSnake');
//     g[Ycoda][Xcoda-1].element.classList.add('snake','codaSnake');
//     Xcoda--;
//     Xtesta--;
//     Xcorpo--;
//     break;
// // cambi di direzione(r/up e down,l/up e down/ ,up/right e left, down right e left)
//     case "Right|Up":
//     g[Ycoda][Xcoda].element.classList.remove('snake');
//     g[Ycoda][Xcoda].element.classList.remove('codaSnake');
//     g[Ycorpo-1][Xcorpo].element.classList.add('snake','corpoSnake');
//     g[Ytesta][Xtesta+1].element.classList.add('snake','testaSnake');
//     g[Ycoda-1][Xcoda].element.classList.add('snake','codaSnake');
//     Ycoda--;
//     Xtesta++;
//     Ycorpo--;
//     break;
//     case "Right|Down":
//     g[Ycoda][Xcoda].element.classList.remove('snake');
//     g[Ycoda][Xcoda].element.classList.remove('codaSnake');
//     g[Ycorpo+1][Xcorpo].element.classList.add('snake','corpoSnake');
//     g[Ytesta][Xtesta+1].element.classList.add('snake','testaSnake');
//     g[Ycoda+1][Xcoda].element.classList.add('snake','codaSnake');
//     Ycoda++;
//     Xtesta++;
//     Ycorpo++;
//     break;
//     case "Left|Up":
//     g[Ycoda][Xcoda].element.classList.remove('snake');
//     g[Ycoda][Xcoda].element.classList.remove('codaSnake');
//     g[Ycorpo+1][Xcorpo].element.classList.add('snake','corpoSnake');
//     g[Ytesta][Xtesta-1].element.classList.add('snake','testaSnake');
//     g[Ycoda+1][Xcoda].element.classList.add('snake','codaSnake');
//     Ycoda--;
//     Xtesta--;
//     Ycorpo--;
//     break;
//     case "Left|Down":
//     g[Ycoda][Xcoda].element.classList.remove('snake');
//     g[Ycoda][Xcoda].element.classList.remove('codaSnake');
//     g[Ycorpo+1][Xcorpo].element.classList.add('snake','corpoSnake');
//     g[Ytesta][Xtesta-1].element.classList.add('snake','testaSnake');
//     g[Ycoda+1][Xcoda].element.classList.add('snake','codaSnake');
//     Ycoda++;
//     Xtesta--;
//     Ycorpo++;
//     break;
//     case "Up|Right":
//     g[Ycorpo][Xcorpo].element.classList.remove('snake','corpoSnake');
//     g[Ytesta][Xtesta].element.classList.remove('snake','testaSnake');
//     g[Ycoda][Xcoda].element.classList.remove('snake','codaSnake');
//     g[Ycorpo-1][Xcorpo+1].element.classList.add('snake','corpoSnake');
//     g[Ytesta-1][Xtesta].element.classList.add('snake','testaSnake');
//     g[Ycoda][Xcoda+2].element.classList.add('snake','codaSnake');
//     break;
//     case "Down|Right":
//     g[Ycoda][Xcoda].element.classList.remove('snake');
//     g[Ycoda][Xcoda].element.classList.remove('codaSnake');
//     g[Ycorpo][Xcorpo+1].element.classList.add('snake','corpoSnake');
//     g[Ytesta+1][Xtesta].element.classList.add('snake','testaSnake');
//     g[Ycoda][Xcoda+1].element.classList.add('snake','codaSnake');
//     Xcoda++;
//     Ytesta++;
//     Xcorpo++;
//     break;
// }

var punteggio=document.getElementById('punteggio');
punteggio.innerHTML='<h2>Punteggio</h2>'+score;
if( g[Ytesta][Xtesta].element.classList.contains('apple'))
{
  g[Ytesta][Xtesta].element.classList.remove('apple');
 RandomApple();
 score++;
}


if (Xtesta <= 0 || Ytesta <= 0 || Xtesta >= g_width || Ytesta >= g_height) {
clearInterval(clock);
}

}

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
