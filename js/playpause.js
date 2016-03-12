(function(){ // start IIFE

	var increment, step, rotate;
	var top, bottom, rotate;
	var $bgCircle;

	init = function(){
		increment = 0;
		step = 0;
		rotate = 0;
		// apply default styles
		
		$bgCircle = $('#bgCircle')

		console.log($bgCircle);

	}

	init();

	// global for now
var increment = 0; 

var setInt = setInterval(function(){
  
  var step = increment % 4;
  var rotate;
  var $top = $('#top');
  var $bottom = $('#bottom');
  var $rotate = $('#rotate');
  
  // console.log(step)

  // pause 0
  if(step === 0){
    
    increment++;
    rotate = 90 * increment; // 90

    $top.removeClass();
    $bottom.removeClass();

  	$top.addClass('pauseTop_0');
  	$bottom.addClass('pauseBottom_0');

   	$rotate.css({transform: 'rotate('+rotate+'deg)'})
  }

  // play 1
  else if(step === 1){

    increment++;
    rotate = 90 * increment; // 180

    $top.removeClass();
    $bottom.removeClass();

    $top.addClass('playTop_01');
    $bottom.addClass('playBottom_01');
	
    $rotate.css({transform: 'rotate('+rotate+'deg)'})
    
  }

  // pause 2
  else if(step === 2){

    increment++;
    rotate = 90 * increment; // 270

    $top.removeClass();
    $bottom.removeClass();

    $top.addClass('pauseTop_02');
    $bottom.addClass('pauseBottom_02');

    $rotate.css({transform: 'rotate('+rotate+'deg)'})
  
  }
  // play 3, same as initial state
  else if(step === 3){

    increment++;
    rotate = 90 * increment; // 360

    $top.removeClass();
    $bottom.removeClass();

    $rotate.css({transform: 'rotate('+rotate+'deg)'})
  
  }
}, 2000);

})(); // end IIFE