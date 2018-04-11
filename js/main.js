var home = document.querySelector('.home-imgContainer');
var clope = document.querySelectorAll('.Clope');
var nav = document.querySelector('.Navigation');
var component = document.querySelectorAll('.Component');
var roundButtons = document.querySelectorAll('.Round-Container-Round');
var componentHeight = component[0].offsetTop - 300;

window.addEventListener("scroll", function(e){
  if (window.scrollY >= componentHeight) {
    nav.style.opacity = "1";
  }
  else {
    nav.style.opacity = "";
  }
});

for (var i = 0; i < roundButtons.length; i++) {
  roundButtons[i].addEventListener("click", function(){
    for (var i = 0; i < roundButtons.length; i++) {
      roundButtons[i].style.backgroundColor = "#FFF";
    }
    this.style.backgroundColor = "#003049";
  });
}

window.addEventListener("scroll", function(){
  for (var i = 0; i < component.length; i++) {
    var componentTop = component[i].offsetTop;
    if (window.scrollY >= componentTop - 200) {
      for (var a = 0; a < roundButtons.length; a++) {
        clope[a].classList.remove("clope-Active");
        roundButtons[a].style.backgroundColor = "#FFF";
      }
      clope[i].classList.add("clope-Active");
      roundButtons[i].style.backgroundColor = "#003049";
    }
  }
});

setTimeout(function(){
  home.classList.add("is-Active");
}, 200);


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
