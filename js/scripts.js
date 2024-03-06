
var faBars = $(".fa-bars");

var faX = $(".fa-xmark");

var navtoggleResponsive = $(".navtoggle responsive")

var navToggle = $(".navtoggle")

if (document.getElementById('myNavtoggle')) {
    faX.hide();
} else {
    faBars.show();
}

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') { 
        x.className += ' responsive';
        faBars.hide();
        faX.show();
    } 
    else {
        x.className = 'navtoggle';
        faBars.show();
        faX.hide();
    }
}


