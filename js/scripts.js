var faBars = $(".fa-bars");

var faX = $(".fa-xmark");

var navtoggleResponsive = $(".navtoggle responsive")

var navToggle = $(".navtoggle")

// if (document.getElementById('myNavtoggle')) {
    // faX.hide();
// } else {
    // faBars.show();
// }

function myFunction(x) {
    x.classList.toggle("change");
  }

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') { 
        x.className += ' responsive';
    } 
    else {
        x.className = 'navtoggle';
    }
}


