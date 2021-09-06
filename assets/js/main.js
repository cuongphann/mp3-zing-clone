// active nav menue
const navMenu = document.querySelectorAll('.nav__menu-item');
navMenu.forEach(function(item) {
    item.addEventListener('click', function(e) {
        const navMenuItem = document.querySelector('.nav__menu-item.menu__active')
        navMenuItem.classList.remove('menu__active');
        this.classList.add('menu__active');
    })
})


// acvite nav bar main 
const navMain = document.querySelectorAll('.nav__bar-item');
navMain.forEach(function(item) {
    item.addEventListener('click', function(e) {
        var current = document.getElementsByClassName("isactive");
        current[0].className = current[0].className.replace(" isactive", "");
        this.className += " isactive";
    })
})
// fill icon heart 


// change widht thumb when range 
const sliderVolume = document.getElementById('control-volume')
const progressVolume = document.querySelector('.range__progress-volume')
sliderVolume.onchange = function() {
    const x = sliderVolume.value;
    progressVolume.style.width = x + '%';
}

//  show bg header when scroll
const mainScroll = document.querySelector('.main__container')
function scrollTop() {
    const scrollTop = document.getElementById('header')
    if(this.scrollTop >= 35)
        scrollTop.classList.add('show__header');
    else scrollTop.classList.remove('show__header');
}
mainScroll.addEventListener('scroll', scrollTop)
