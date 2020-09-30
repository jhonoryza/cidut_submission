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

// let namaku = 'agus';
// console.log(namaku);
// let nama2 = [20, 'usep', 'arif'];
// console.log(nama2);
// console.log(nama2[1]);


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

    if (slides !== undefined && slides.length != 0 && dots !== undefined || dots.length != 0) {
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
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
includeHTML();