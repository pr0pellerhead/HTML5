$(document).ready(function(){

	var margin = 0;

	$('.left').on('click', function(){
		if(margin > -1600){
			margin = margin - 400;
			$('.wrap ul').css('marginLeft', margin + 'px');
		}
	});

	$('.right').on('click', function(){
		if(margin < 0){
			margin = margin + 400;
			$('.wrap ul').css('marginLeft', margin + 'px');
		}
	});

	setInterval(function(){
		if(margin > -1600){
			margin = margin - 400;
			$('.wrap ul').css('marginLeft', margin + 'px');
		}else{
			margin = 0;
			$('.wrap ul').css('marginLeft', margin + 'px');
		}
	}, 1500);

});
