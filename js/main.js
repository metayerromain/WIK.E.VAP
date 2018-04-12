var home = document.querySelector('.home-imgContainer');
var homeImg = document.querySelector('.home-img');
var clope = document.querySelectorAll('.Clope');
var nav = document.querySelector('.Navigation');
var piecesClope = document.querySelectorAll('.Clope-Image-Container');
var component = document.querySelectorAll('.Component');
var roundButtons = document.querySelectorAll('.Round-Container-Round');
var componentHeight = component[0].offsetTop - 300;

//ANIMATION AU LANCEMENT (SUR LA HOMEPAGE)

setTimeout(function(){
  home.classList.add("is-Active");
}, 200);

setTimeout(function(){
  homeImg.style.opacity = "1";
}, 400)

//AFFICHAGE DE LA NAVIGATION QUAND ON PASSE LA HOMEPAGE

window.addEventListener("scroll", function(e){
  if (window.scrollY >= componentHeight) {
    nav.style.opacity = "1";
  }
  else {
    nav.style.opacity = "";
  }
});

//ANIMATION AU CLIC SUR LA NAV

for (var i = 0; i < roundButtons.length; i++) {
  roundButtons[i].addEventListener("click", function(){
    for (var i = 0; i < roundButtons.length; i++) {
      roundButtons[i].style.backgroundColor = "#FFF";
    }
    this.style.backgroundColor = "#003049";
  });
}

//ANIMATION SUR LES ELEMENTS STATIQUES AU SCROLL

var allpieces;
window.addEventListener("scroll", function(){
  for (var i = 0; i < component.length; i++) {
    var componentTop = component[i].offsetTop;
    if (window.scrollY >= componentTop - 400 || window.scrollY <= 400) {
      allpieces = piecesClope[i].children;

      for (var y = 0; y < piecesClope.length; y++) {
        piecesClope[y].children[y].style.opacity = ".2";
      }
      for (var a = 0; a < roundButtons.length; a++) {
        clope[a].classList.remove("clope-Active");
        roundButtons[a].style.backgroundColor = "#FFF";
      }
      allpieces[i].style.opacity = "1";
      clope[i].classList.add("clope-Active");
      roundButtons[i].style.backgroundColor = "#003049";
    }
  }
});

// E-CIGARETTE ANIM

var clope1 = document.querySelectorAll('.clope1 > div');
var clope2 = document.querySelectorAll('.clope2 > div');
var clope3 = document.querySelectorAll('.clope3 > div');
var clope4 = document.querySelectorAll('.clope4 > div');

window.addEventListener('scroll', function() {
  for (var i = 0; i < component.length; i++) {
    var componentTop = component[i].offsetTop;
    for (var a = 0; a < clope1.length; a++) {
      if (window.scrollY >= componentTop - 600 && i == 0) {
        clope1[a].classList.add('img-Active');
      }
      if (window.scrollY >= componentTop - 600 && i == 1) {
        clope2[a].classList.add('img-Active');
      }
      if (window.scrollY >= componentTop - 600 && i == 2) {
        clope3[a].classList.add('img-Active');
      }
      if (window.scrollY >= componentTop - 600 && i == 3) {
        clope4[a].classList.add('img-Active');
      }
    }
  }
});

// SMOOTH SCROLLING

$(document).ready(function() {
  $('.js-scrollTo').on('click', function() {
    var page = $(this).attr('href');
    var speed = 750;
    $('html, body').animate( { scrollTop: $(page).offset().top }, speed );
    return false;
  });
});

// BUBBLES

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(f) {
  setTimeout(f, 800 / 60)
}

var bubble1 = document.getElementById('bubble1')
var bubble2 = document.getElementById('bubble2')
var bubble3 = document.getElementById('bubble3')
var bubble4 = document.getElementById('bubble4')
var bubble5 = document.getElementById('bubble5')
var bubble6 = document.getElementById('bubble6')
var bubble7 = document.getElementById('bubble7')
var bubble8 = document.getElementById('bubble8')
var bubble9 = document.getElementById('bubble9')
var bubble10 = document.getElementById('bubble10')
var bubble11 = document.getElementById('bubble10')

var rand1 = 20;
var rand2 = 50;
var rand3 = 15;
var rand4 = 40;

function parallaxbubbles() {

  var scrolltop = window.pageYOffset
  bubble1.style.top = -scrolltop * rand1 / 100 + 'px'
  bubble2.style.top = -scrolltop * rand2 / 100 + 'px'
  bubble3.style.top = -scrolltop * rand3 / 100 + 'px'
  bubble4.style.top = -scrolltop * rand4 / 100 + 'px'
  bubble5.style.top = -scrolltop * rand2 / 100 + 'px'
  bubble6.style.top = -scrolltop * rand1 / 100 + 'px'
  bubble7.style.top = -scrolltop * rand3 / 100 + 'px'
  bubble8.style.top = -scrolltop * rand1 / 100 + 'px'
  bubble9.style.top = -scrolltop * rand4 / 100 + 'px'
  bubble10.style.top = -scrolltop * rand4 / 100 + 'px'
  bubble11.style.top = -scrolltop * rand1 / 100 + 'px'
}

window.addEventListener('scroll', function() {
  requestAnimationFrame(parallaxbubbles)
}, false);
