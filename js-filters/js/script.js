var fileTag = document.getElementById("filetag"),
    preview = document.getElementById("preview");
    
fileTag.addEventListener("change", function() {
  changeImage(this);
});

function changeImage(input) {
  var reader;

  if (input.files && input.files[0]) {
    reader = new FileReader();

    reader.onload = function(e) {
      preview.setAttribute('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}


$('input[type=range]').change(function(){
$('#preview').css({
  'filter'         :'grayscale('+ $('#grayscale').val() +'%)brightness(' + $('#brightness').val() + '%)saturate(' + $('#saturate').val() + '%)sepia(' + $('#sepia').val() + '%)invert(' + $('#invert').val() + '%)contrast(' + $('#contrast').val() + '%)',
})
});