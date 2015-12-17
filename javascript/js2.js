var btn1 = document.querySelector('.btn1');
// console.log(btn1);
btn1.style.fontSize = '50px';
btn1.style.fontWeight = 'bold';

var label1 = document.querySelector('.label1');
// console.log(label1);

label1.addEventListener('click', function(){
	alert('Klik!');
});

btn1.addEventListener('click', function(){
	label1.style.fontSize = '100px';
});


/*********************************/

// .gradovi li

var gradovi = document.querySelectorAll('.gradovi li');
console.log(gradovi);
console.log(gradovi.length);

for(var i = 0; i < gradovi.length; i = i + 1){
	// console.log('grad!');
	// console.log(gradovi[i]);
	// console.log(gradovi[i].innerText);

	gradovi[i].addEventListener('click', function(){
		// alert(this.dataset.img);

		var sliki = document.querySelectorAll('.images img');
		for(var a = 0; a < sliki.length; a++){
			sliki[a].style.display = 'none';
		}
		
		document.querySelector('.' + this.dataset.img).style.display = 'inline';

	});
}