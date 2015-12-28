var k1 = document.querySelector('#kopce');
// console.log(k1);

k1.addEventListener('mouseout', function(){
	alert('Javascript!');
});

var k2 = document.querySelector('.container');
// console.log(k2);

var ime = k2.dataset.ime;
var prezime = k2.dataset.prezime;
var predmet = k2.dataset.predmet;

console.log(ime);
console.log(prezime);
console.log(predmet);

for(var c = 0; c < 10; c++){
	console.log('zdravo!');
	console.log('--');
}

console.log('kraj');