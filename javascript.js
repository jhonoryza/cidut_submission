let node = document.getElementById("judul");
for (let i = 0; i < 4; i++) {
    node.innerHTML = node.innerHTML + '<h3>Artikel ' + (i + 1) + '</h3>';
    if (i == 0) {
        isi_paragraph = '<p>lorem ipsum</p>';
    } else if (i == 1) {
        isi_paragraph = '<p>dmkamdakmdkam</p>';
    } else if (i == 2) {
        isi_paragraph = '<p>kacau</p>';
    } else {
        isi_paragraph = 'aduh';
    }
    node.innerHTML = node.innerHTML + isi_paragraph;
}
function myFunction() {
    alert('Arsip percobaan javascript');
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide-show");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 1500);
}

//test codingan cidut/
