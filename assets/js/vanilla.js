
var viewport_height = document.documentElement.clientHeight;
document.getElementById("home").style.height = viewport_height + 'px';

var respbtn = document.querySelectorAll('.respbtn');


for (var z = 0; z < respbtn.length; z++) {
	var elem = respbtn[z];
	elem.onclick = function () {
		alert(1);
		
	}
} ;


function detectscroll() {

	var y = window.scrollY;
	var calcy = y / 2;
	document.getElementById("logohome").style.marginBottom = y + 'px';


	if (y > 1) {
		document.getElementById("header").classList.add('topheader');
	} else {
		document.getElementById("header").classList.remove('topheader');
	}
}


detectscroll();
window.addEventListener('resize', function () {
	detectscroll();
	var viewport_height = document.documentElement.clientHeight;
	document.getElementById("home").style.height = viewport_height + 'px';
});

window.addEventListener('scroll', function () {
	detectscroll();

});






