// Gioco snake con griglia html/css

$( document ).ready(function() {
    console.log( "Vediamo se con JQuery ho vantaggi in un codice un pò più complesso.Risposta no" );
});

function TastoPremuto(event) {
    switch (event.keyCode) {
        case 38:
      Direction = 'U';
      break;
        case 40:
       Direction = 'D';
        break;
        case 37:
        Direction = 'L';
       break;
        case 39:
        Direction = 'R';
        break;
        default:
        break;
    }
    event.preventDefault();
    // x evitare comportamento standard come scroll pagina-dopo consulto con alfredo
}


var score=0;
var snakeDirection;
var apple;
var snake;
var snakeLength=4;
// function fabio()
// {
// var scelta=parseInt(document.getElementById('myselect').value);
// return gioco(scelta);
// }


// var griglia= $('#griglia');
// griglia.html('');
// for (var x = 0; x < max; x++) {
// if(x % 2 == 0)
//         {griglia.append('<div class="quadrato pari" id="n'+x+'">'+x+'</div>');}
//         else{
//               griglia.append('<div class="quadrato dispari" id="n'+x+'">'+x+'</div>');
//
//       }
//    }

// non va bene questo tipo di griglia numerica mi servono le coordinate
// sennò non ne esco mai ed è impossibile renderlo parametrico


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
var Xsnake=[g_width/2];
var Ysnake=[g_height/2];

var snake=g[Xsnake][Ysnake];
console.log(snake);
console.log(snake.length);

//perché poi varierà
// for (var i =g_width/2;i<=g_width/2+snakeLength; i++) {
//   snake.push(i);
// }
// console.log(snake);

snakeDirection = 'R';

// creo una funzione perché sta mela nel gioco viene creata ogni volta
// che viene mangiata,e il serpente si allunga

function RandomApple(){
 var apple=g[Math.floor(Math.random()*(g_width+1))][Math.floor(Math.random()*(g_height+1))];
console.log(apple);
return apple;
}


scrivo pseudocodice

if direction=directionsnake
if direction l o r Xsnake=[g_width/2]++ --
if direction u o d ysnake=[g_height/2]++ --



else
// (mi sa che è meglio lo switch pure qua)

key U

if direction l
Xsnake -- e ysnake++
if direction r
Xsnake ++ e ysnake ++

key D

if direction l
Xsnake -- e ysnake--
if direction r
Xsnake ++ e ysnake --

key L

if direction u
Xsnake -- e ysnake++
if direction d
Xsnake ++ e ysnake --

key R

if direction u
Xsnake -- e ysnake++
if direction d
Xsnake ++ e ysnake --


else if direction opposta do nothing


in tutto questo if

xsnake o y snake = mela generata
genero nuova mela e score ++
e snakeLength++

winning sempre
while xnake++ -- ysnake++ -- =! ysnake xsnake e =! x e y appartengono a griglia
}
PROBLEMA piu grosso:
come gestisco la length proprietà a schermo?


  // if (event.keyCode == 40) {
  //     navigazione('down');
  // }
// if ($(this).hasClass('buono')){
// // alert('Bravo,hai evitato mine');
// $(this).addClass('verde-cliccato');
//
// }
//  else if($(this).hasClass('malevolo')){
// // alert('Hai preso una mina: hai perso');
// $(this).addClass('rosso');
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
// $(document).keydown(function(event){
//   var quadrati= $('.quadrato');
//   if (event.keyCode == 39) {
//       for (var indicetesta = 113; indicetesta <119; indicetesta+=1) {
//     testasnake=$(quadrati.eq(indicetesta));
//     testasnake.removeClass();
//     testasnake.addClass('quadrato divento-snake');
//
//   }
//   for (var indicecoda = 109; indicecoda <114; indicecoda+=1) {
// codasnake=$(quadrati.eq(indicecoda));
// codasnake.removeClass('snake');
//
// }
//
// }
// });


$("*").addClass('blue');
$('button')
.hover(function(){$(this).addClass('yellow');},function(){$(this).removeClass('yellow');})
.dblclick(function(){alert('Tanto non vinci comunque');
});
