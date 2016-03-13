$('document').ready(function(){

  var step = 0; // 4 possible steps based on increment % 4
  var rotate = 0;
  var incr = 1;
  var $bgCircle = $('#bgCircle');
  var $top = $('#top');
  var $bottom = $('#bottom');
  var $rotate = $('#rotate');

  $('#bgCircleGradient1').on('click', togglePlayPause)
  $('#bgCircleGradient1').on('animationend', function(){
  	$(this).css({'animation': ''});
  })
  function togglePlayPause(){

	$('#bgCircleGradient1').css({'animation': 'Radial .1s ease'})  	

    if(incr % 4 === 1){
      $top.removeClass();
      $bottom.removeClass();
      rotate = 90 * incr; //90

      $top.addClass('pauseTop_0');
      $bottom.addClass('pauseBottom_0');
      $rotate.css({transform: 'rotate('+rotate+'deg)'});
    }
    if(incr % 4 === 2){
      $top.removeClass();
      $bottom.removeClass();
      rotate = 90 * incr; // 180

      $top.addClass('playTop_01');
      $bottom.addClass('playBottom_01');
      $rotate.css({transform: 'rotate('+rotate+'deg)'});
    }
    if(incr % 4 === 3){
      $top.removeClass();
      $bottom.removeClass();
      rotate = 90 * incr; // 270

      $top.addClass('pauseTop_02');
      $bottom.addClass('pauseBottom_02');
      $rotate.css({transform: 'rotate('+rotate+'deg)'});
    }
    if(incr % 4 === 0){
      $top.removeClass();
      $bottom.removeClass();
      rotate = 90 * incr; // 360

      $rotate.css({transform: 'rotate('+rotate+'deg)'});
    }

    incr++;
  
  }

});
	

