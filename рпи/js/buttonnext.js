let offset = 0;
let ind = 0;
let slidertext=['wok with beef' ,'wok with pig' ,'wok with fish', 'wok with chicken'];
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function () {
    offset = offset + 300;
    ind = ind + 1;
    if (offset > 900) {
        offset = 0;
        textset = 0;
        ind = 0;
    }
    sliderLine.style.left = -offset + 'px';
    document.getElementById("sliderp").innerHTML = slidertext[ind];
    
})



document.querySelector('.slider-prev').addEventListener('click', function () {
    offset = offset - 300;
    ind = ind - 1;
    if (offset < 0) {
        offset = 900;
        ind = 3;
    }
    sliderLine.style.left = -offset + 'px';
    document.getElementById("sliderp").innerHTML = slidertext[ind];
})


document.addEventListener('keydown', function (e) {
    if (e.keyCode === 39) {
        offset = offset + 300;
        ind = ind + 1;
        if (offset > 900) {
            offset = 0;
            ind = 0;
        }
        sliderLine.style.left = -offset + 'px';
        document.getElementById("sliderp").innerHTML = slidertext[ind];
    } else if (e.keyCode === 37) {
        offset = offset - 300;
        ind = ind - 1;
        if (offset < 0) {
            offset = 900;
            ind = 3;
        }
        sliderLine.style.left = -offset + 'px';
        document.getElementById("sliderp").innerHTML = slidertext[ind];
    }
});