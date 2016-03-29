/**
 * PlayPause module provides animated transitions between Play and Pause symbols
 * 
 * Version: 0.1
 * 
 */

function PlayPause(sr, $){
  
  // variables //
  var rotate,
      incr,
      $bgCircle,
      $top,
      $bottom,
      $bgCircleGradient1;

  // methods //
  /**
   * Initialize the ui and state properties
   *
   * @return {[type]} [description]
   */
  this.init = function(){
    rotate = 0;
    incr = 1;
    $bgCircle = $(sr.querySelector('#bgCircle'));
    $top = $(sr.querySelector('#top'));
    $bottom = $(sr.querySelector('#bottom'));
    $rotate = $(sr.querySelector('#rotate'));  
    $bgCircleGradient1 = $(sr.querySelector('#bgCircleGradient1'));
  };
 
  /**
   * Rotates the play-pause container element and toggles between pause and play css-rendered styles
   *
   * @param  {Object} e Event object
   *
   * @return {void}
   */
  this.togglePlayPause = function(e){   

    if(incr % 4 === 1){
      $top.removeClass();
      $bottom.removeClass();
      rotate = 90 * incr; //90

      $top.addClass('pauseTop_step_1');
      $bottom.addClass('pauseBottom_step_1');
      $rotate.css({transform: 'rotate('+rotate+'deg)'});
    }
    if(incr % 4 === 2){
      $top.removeClass();
      $bottom.removeClass();
      rotate = 90 * incr; // 180

      $top.addClass('playTop_step_2');
      $bottom.addClass('playBottom_step_2');
      $rotate.css({transform: 'rotate('+rotate+'deg)'});
    }
    if(incr % 4 === 3){
      $top.removeClass();
      $bottom.removeClass();
      rotate = 90 * incr; // 270

      $top.addClass('pauseTop_step_3');
      $bottom.addClass('pauseBottom_step_3');
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
}

  
	

