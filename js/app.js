$(document).foundation();



//Homepage animations

//Title name animation
$(document).ready(function() {
  
  $('#alexander').addClass('animated fadeIn').delay(500);
  
  $('#alexander').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $('#winkler').addClass('animated fadeIn');
  });
  
  
});