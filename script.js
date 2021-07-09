var slideIndex = 1;
showSlides(slideIndex);
var prevArrow = document.querySelector('.prev');
var nextArrow = document.querySelector('.next');

//back arrow
prevArrow.addEventListener('click', function () {
	plusSlides(-1);
});
//forward arrow
nextArrow.addEventListener('click', function () {
	plusSlides(1);
});
//arrows make slides go forward or backward
function plusSlides(n) {
	showSlides((slideIndex += n));
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName('mySlides');
	// var dots = document.getElementsByClassName('dot');

	// if n is greater than 2 set it to 1
	if (n > slides.length) {
		slideIndex = 1;
	}

	// if n is 0 set it to 2
	if (n < 1) {
		slideIndex = slides.length;
	}

	// loop through slides
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}

	//
	slides[slideIndex - 1].style.display = 'grid';
}
