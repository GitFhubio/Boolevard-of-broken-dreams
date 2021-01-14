alert('This one is called Mardy Bum ladies and gentlemen. Click play down there');

var audio = document.getElementById("audio");

function play() {

  audio.play();

}
function pause() {

  audio.pause();
}
function stop()
{audio.pause();
audio.currentTime = 0;
}

var songtext;
$(document).ready(function() {
  songtext = [
    ["*Intro*", 27000],
    ["</br> Well, now then, mardy bum", 3000],
    ["</br> I've seen your frown and it's like looking down the barrel of a gun and it goes off", 5000],
    ["</br> And out come all these words", 2500],
    ["</br> Oh, there's a very pleasant side to you a side I much prefer it's one that ", 5000],
    ["</br> laughs and jokes around", 3500],
    ["</br> Remember cuddles in the kitchen, yeah to get things off the ground And it was", 5000],
    ["</br> up, up and away", 3000],
    ["</br> Oh, but it's right hard to remember that on a day like today When you're all", 5000],
    ["</br> argumentative", 3000],
    ["</br> And you've got the face on", 1500],

  ];
  var text = "";
  $.each(songtext, function(a, b) {
    text += "<span id='p" + a + "' style='color:white'>" + b[0] + "</span> ";
  });

  $('#karaoke').html(text);

  cc = 0;
  $('#btn').on('click', function(e) {
    e.preventDefault();
    nextWord();
  });
});

var cc = 0;

function nextWord() {
  $('#p' + cc).css("color", "red");
  cc++;
  if (cc > songtext.length - 1) return;
  window.setTimeout(nextWord, songtext[cc - 1][1]);
}

function dance() {
var demo= document.getElementById('demo');
if(demo.className==="opa0"){
  demo.className="opa1";
}else{
  demo.className="opa0";
}
}
