
$(document).ready(function(){

  $('.fa-bars').on('click', function(){

    $('.wrapper').slideToggle(1000);
    $('.fa-bars').hide();
    $('#iconMenu').hide();
    $('.fa-times').show();
    $('#iconClose').show();
  });


  $('.fa-times').on('click', function(){

    $('.wrapper').slideToggle(1000);
    $('.fa-times').hide();
    $('#iconClose').hide();
    $('.fa-bars').show();
    $('#iconMenu').show();
  });

  $( ".button-container button" ).click(function() {
    $( ".link-container" ).toggle();
  });  
});







