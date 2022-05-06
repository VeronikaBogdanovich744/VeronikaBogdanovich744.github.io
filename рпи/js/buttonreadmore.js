var modal2 = document.getElementById('mymodal2');
var span2 = document.getElementsByClassName("close2")[0];

var i;
for (i = 0; i < 9; ++i) {
    var btn2 = document.getElementsByClassName("modalreadmore")[i];

    let Img = document.getElementsByClassName("imgmodal")[i];
    let modalImg = document.getElementById("img01");

    let text = document.getElementsByClassName("h3modal")[i].textContent;
    let text2 = document.getElementsByClassName("p1modal")[i].textContent;
    let text3 = document.getElementsByClassName("p2modal")[i].textContent;


    btn2.onclick = function () {
        modal2.style.display = "block";

        modalImg.src = Img.src;
        document.getElementById("modal2h3").innerHTML = text;
        document.getElementById("modal2p1").innerHTML = text2;
        document.getElementById("modal2p2").innerHTML = text3;
    }
}


span2.onclick = function () {
    modal2.style.display = "none";
}

window.onclick = function (event) {
    if (event.target != modal2) {
        modal2.style.display = "none";
    }
}

window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}
