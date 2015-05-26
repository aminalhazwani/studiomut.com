// These functions handle the visibility of the side
// elements and accordingly chnage the state of the other
// components of the page
$('#about').click(function(){
	$('.about').addClass('visible');
	$('#about').addClass('active');
	$('.overlay').addClass('active');
	$('.close__side-elements').addClass('active');
	setTimeout(function() {
		$('.close__side-elements').addClass('fixed');
	}, 500);
	$('main').addClass('fixed');
	$('header > a').addClass('white');
	$('header > button').addClass('white');
});

$('#clients').click(function(){
	$('.clients').addClass('visible');
	$('#clients').addClass('active');
	$('.overlay').addClass('active');
	$('.close__side-elements').addClass('active');
	setTimeout(function() {
		$('.close__side-elements').addClass('fixed');
	}, 500);
	$('main').addClass('fixed');
	$('header > a').addClass('white');
	$('header > button').addClass('white');
});

$('#contact').click(function(){
	$('.contact').addClass('visible');
	$('#contact').addClass('active');
	$('.overlay').addClass('active');
	$('.close__side-elements').addClass('active');
	setTimeout(function() {
		$('.close__side-elements').addClass('fixed');
	}, 500);
	$('main').addClass('fixed');
	$('header > a').addClass('white');
	$('header > button').addClass('white');
});

$('.showcase__info--more').click(function(){
	$('.project-information').addClass('visible');
	$('.overlay').addClass('active');
	$('.close__side-elements').addClass('active');
	setTimeout(function() {
		$('.close__side-elements').addClass('fixed');
	}, 500);
	$('main').addClass('fixed');
	$('header > a').addClass('white');
	$('header > button').addClass('white');
});

$('.overlay').click(function(){
    if ( $('.about').hasClass('visible') )  {
		$('.about').removeClass('visible');
		$('#about').removeClass('active');
		$('.overlay').removeClass('active');
		$('.close__side-elements').removeClass('active');
		$('.close__side-elements').removeClass('fixed');
		$('main').removeClass('fixed');
		$('header > a').removeClass('white');
		$('header > button').removeClass('white');
	}
	if ( $('.clients').hasClass('visible') )  {
		$('.clients').removeClass('visible');
		$('#clients').removeClass('active');
		$('.overlay').removeClass('active');
		$('.close__side-elements').removeClass('active');
		$('.close__side-elements').removeClass('fixed');
		$('main').removeClass('fixed');
		$('header > a').removeClass('white');
		$('header > button').removeClass('white');
	}
	if ( $('.contact').hasClass('visible') )  {
		$('.contact').removeClass('visible');
		$('#contact').removeClass('active');
		$('.overlay').removeClass('active');
		$('.close__side-elements').removeClass('active');
		$('.close__side-elements').removeClass('fixed');
		$('main').removeClass('fixed');
		$('header > a').removeClass('white');
		$('header > button').removeClass('white');
	}
	if ( $('.project-information').hasClass('visible') )  {
		$('.project-information').removeClass('visible');
		$('.overlay').removeClass('active');
		$('.close__side-elements').removeClass('active');
		$('.close__side-elements').removeClass('fixed');
		$('main').removeClass('fixed');
		$('header > a').removeClass('white');
		$('header > button').removeClass('white');
	}
});

$('.close__side-elements').click(function(){
	if ( $('.about').hasClass('visible') )  {
		$('.about').removeClass('visible');
		$('#about').removeClass('active');
		$('.overlay').removeClass('active');
		$('.close__side-elements').removeClass('active');
		$('.close__side-elements').removeClass('fixed');
		$('main').removeClass('fixed');
		$('header > a').removeClass('white');
		$('header > button').removeClass('white');
	}
	if ( $('.clients').hasClass('visible') )  {
		$('.clients').removeClass('visible');
		$('#clients').removeClass('active');
		$('.overlay').removeClass('active');
		$('.close__side-elements').removeClass('active');
		$('.close__side-elements').removeClass('fixed');
		$('main').removeClass('fixed');
		$('header > a').removeClass('white');
		$('header > button').removeClass('white');
	}
	if ( $('.contact').hasClass('visible') )  {
		$('.contact').removeClass('visible');
		$('#contact').removeClass('active');
		$('.overlay').removeClass('active');
		$('.close__side-elements').removeClass('active');
		$('.close__side-elements').removeClass('fixed');
		$('main').removeClass('fixed');
		$('header > a').removeClass('white');
		$('header > button').removeClass('white');
	}
	if ( $('.project-information').hasClass('visible') )  {
		$('.project-information').removeClass('visible');
		$('.overlay').removeClass('active');
		$('.close__side-elements').removeClass('active');
		$('.close__side-elements').removeClass('fixed');
		$('main').removeClass('fixed');
		$('header > a').removeClass('white');
		$('header > button').removeClass('white');
	}
});

$(document).on('keydown', function(e) {
	if ( e.keyCode === 27 ) {
		if ( $('.about').hasClass('visible') )  {
			$('.about').removeClass('visible');
			$('#about').removeClass('active');
			$('.overlay').removeClass('active');
			$('.close__side-elements').removeClass('active');
			$('.close__side-elements').removeClass('fixed');
			$('main').removeClass('fixed');
			$('header > a').removeClass('white');
			$('header > button').removeClass('white');
		}
		if ( $('.clients').hasClass('visible') )  {
			$('.clients').removeClass('visible');
			$('#clients').removeClass('active');
			$('.overlay').removeClass('active');
			$('.close__side-elements').removeClass('active');
			$('.close__side-elements').removeClass('fixed');
			$('main').removeClass('fixed');
			$('header > a').removeClass('white');
			$('header > button').removeClass('white');
		}
		if ( $('.contact').hasClass('visible') )  {
			$('.contact').removeClass('visible');
			$('#contact').removeClass('active');
			$('.overlay').removeClass('active');
			$('.close__side-elements').removeClass('active');
			$('.close__side-elements').removeClass('fixed');
			$('main').removeClass('fixed');
			$('header > a').removeClass('white');
			$('header > button').removeClass('white');
		}
		if ( $('.project-information').hasClass('visible') )  {
			$('.project-information').removeClass('visible');
			$('.overlay').removeClass('active');
			$('.close__side-elements').removeClass('active');
			$('.close__side-elements').removeClass('fixed');
			$('main').removeClass('fixed');
			$('header > a').removeClass('white');
			$('header > button').removeClass('white');
		}
	}
});