let clicked = 0;
const cat1  = 'cat1';
const cat2 = 'cat2';

window.onload = function() {

	document.getElementsByClassName('cat-img-title')[0].textContent = cat1;
	document.getElementsByClassName('cat-img-title')[1].textContent = cat2;
	Array.from(document.getElementsByClassName('cat-img')).forEach((el) => {
		el.onclick = function(e) {
			clicked++;
			document.getElementById('clicked').textContent = clicked;
		}
	});
}