let grayscale = document.getElementById('grayscale');
let blur = document.getElementById('blur');
let brightness = document.getElementById('brightness');
const preview = document.querySelector('img');
let allFilters='';

$( document ).ready(function() {
  deletefilters();
});

function previewFile() {
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      // convert image file to base64 string
      preview.src = reader.result;
    }, false); 
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  function filter(id,value,unity){
    //  preview.style.filter=id+'('+value+unity+')';
     preview.style.filter=`${id}(${value}${unity})`;
    //  ecma
  }

function deletefilters(){
  preview.style.filter='none';
  grayscale.value = 0;
  blur.value = 0;
  brightness.value = 100;
}