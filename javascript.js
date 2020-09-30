function myFunction() {
    alert('Arsip percobaan javascript');
}

window.addEventListener('resize', changeNavigasi);

function changeNavigasi() {
    //resize just happened, pixels changed
    // console.log(screen.width);
    let lebarLayar = screen.width;
    if (lebarLayar < 600) {
        let tombolHome = document.getElementById('tombol-home');
        tombolHome.setAttribute('style', 'padding: 10px');

        let tombolNews = document.getElementById('tombol-news');
        tombolNews.setAttribute('style', 'padding: 10px');

        let tombolKontak = document.getElementById('tombol-contact');
        tombolKontak.setAttribute('style', 'padding: 10px');
    } else {
        let tombolHome = document.getElementById('tombol-home');
        tombolHome.setAttribute('style', 'padding: 20px');

        let tombolNews = document.getElementById('tombol-news');
        tombolNews.setAttribute('style', 'padding: 20px');

        let tombolKontak = document.getElementById('tombol-contact');
        tombolKontak.setAttribute('style', 'padding: 20px');
    }
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
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(function () {
        plusSlides(1);
    }, 3000);
}