var gradovi = document.querySelectorAll('.gradovi li');

for(var i = 0; i < gradovi.length; i = i + 1){

	gradovi[i].addEventListener('click', function(){

		var sliki = document.querySelectorAll('.images img');
		for(var a = 0; a < sliki.length; a++){
			sliki[a].style.display = 'none';
		}

		var element_class = '.' + this.dataset.img; // .img-newyork
		var image = document.querySelector(element_class);
		image.style.display = 'inline';

	});
}