

function fadeOut() {
console.log('====================================');
console.log("fadeout");
console.log('====================================');
    $('.loader-background').toggleClass('loader-gradient')
    $('.loader-background').toggleClass('gradient-fade')
}
setTimeout(fadeOut, 2000);