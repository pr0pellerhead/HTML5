var sliki = [
	'barcelona.jpg',
	'berlin.jpg',
	'newyork.jpg',
	'paris.jpg',
	'vienna.jpg'
	];

// console.log(sliki[3]);
var brojac = 0;
var slika = document.querySelector('#slika');

setInterval(function(){

	if(sliki[brojac] == undefined) {
		brojac = 0;
	}

	slika.src = 'images/' + sliki[brojac];
	brojac++;
	
}, 3000);