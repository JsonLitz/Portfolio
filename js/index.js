$(document).ready(function() {
 $('.pic1desc','.pic2desc','.pic3desc','.pic4desc').hide();


//When the Image is hovered upon, show the hidden div using Mouseover
 $('#picture1').hover(function() {
   $('.pic1desc').show();
},function() {
  $('.pic1desc').hide();
});

//same for `#picture2`
$('#picture2').hover(function() {
   $('.pic2desc').show();
},function() {
  $('.pic2desc').hide();
});



//same for picture 3

$('#picture3').hover(function() {
   $('.pic3desc').show();
},function() {
  $('.pic2desc').hide();
});




//same for picture 4
$('#picture4').hover(function() {
   $('.pic4desc').show();
},function() {
  $('.pic2desc').hide();
});


$('.test-box2').mouseenter(function() {
    $(this).addClass('show');
});

$('.test-box2').mouseleave(function() {
    $(this).removeClass('show');
});


$('.box').mouseenter(function(){
  $(this).addClass('change');
 });
  
$('.placeholder').mouseenter(function(){
  $(this).addClass('change');
});
});

