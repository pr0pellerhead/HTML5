var btnLeft = document.querySelector('.left');
var btnRight = document.querySelector('.right');
var ul = document.querySelector('.wrap ul');

var margin = 0;

btnLeft.addEventListener('click', function(){
	if(margin > -1600){
		margin = margin - 400;
		ul.style.marginLeft = margin + 'px';
	}
});

btnRight.addEventListener('click', function(){
	if(margin < 0){
		margin = margin + 400;
		ul.style.marginLeft = margin + 'px';
	}
});

setInterval(function(){
	if(margin > -1600){
		margin = margin - 400;
		ul.style.marginLeft = margin + 'px';
	}else{
		margin = 0;
		ul.style.marginLeft = margin + 'px';
	}
}, 1500);


// function zdravo(ime){
// 	console.log('zdravo ' + ime);
// }

// zdravo('Bojan');
// zdravo('Pero');
// zdravo('Janko');
// zdravo('Stanko');



