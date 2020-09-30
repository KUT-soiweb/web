$(function(){





	$('#about').click(function(){
		$('html,body').animate({
			scrollTop:-90 + $('#intro-wrapper').offset().top
		},'slow')
	});

	$('#works').click(function(){
		$('html,body').animate({
			scrollTop:-90 + $('#promos-wrapper').offset().top
		},'slow')
	});

});