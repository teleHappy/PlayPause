$('document').ready(function(){

  var step = increment = rotate = 0; // 4 possible steps based on increment % 4
  var incremental = 1;
  var $bgCircle = $('#bgCircle');
  var $top = $('#top');
  var $bottom = $('#bottom');
  var $rotate = $('#rotate');

  $bgCircle.on('click', togglePlayPause);

  function reset(){
    step = increment = rotate = 0;
    
    $top.removeClass();
    $bottom.removeClass();

    $rotate.css({transform: 'rotate('+rotate+'deg)'});
  }

  function togglePlayPause(){
    // default state is play0 - user or system has not yet initiated playback
   // debugger
    if(incremental%4 === 1){

      rotate = 90 * incremental;

      $top.removeClass();
      $bottom.removeClass();

      $top.addClass('pauseTop_0');
      $bottom.addClass('pauseBottom_0');

      $rotate.css({transform: 'rotate('+rotate+'deg)'})

    }
    if(incremental%4 === 2){

      rotate = 90 * incremental; // 180

      $top.removeClass();
      $bottom.removeClass();

      $top.addClass('playTop_01');
      $bottom.addClass('playBottom_01');

      $rotate.css({transform: 'rotate('+rotate+'deg)'})

    }
    if(incremental%4 === 3){

      rotate = 90 * incremental; // 270

      $top.removeClass();
      $bottom.removeClass();

      $top.addClass('pauseTop_02');
      $bottom.addClass('pauseBottom_02');

      $rotate.css({transform: 'rotate('+rotate+'deg)'})

    }
    if(incremental%4 === 0){

      rotate = 90 * incremental; // 360

      $top.removeClass();
      $bottom.removeClass();

      $rotate.css({transform: 'rotate('+rotate+'deg)'})

    }

    incremental++;
  }

});
	

