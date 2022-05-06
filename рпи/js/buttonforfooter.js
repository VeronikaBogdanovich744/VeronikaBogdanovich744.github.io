var modal = document.getElementById('mymodal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    var n = document.getElementsByTagName("input")[0].value;
    var e = document.getElementsByTagName("input")[1].value;
    var t = document.getElementsByTagName("input")[2].value;
    var w = document.getElementsByTagName("input")[3].value;
    var m = document.getElementsByTagName("input")[4].value;

    if (n == "") {
        button.disabled = true;

    }
    else if (e == "") {
        button.disabled = true;

    }
    else if (t == "") {
        button.disabled = true;

    }
    else if (w == "") {
        button.disabled = true;

    }
    else if (m == "") {
        button.disabled = true;

    }
    else {
        modal.style.display = "block";
        document.getElementById('modaln').innerHTML = "Name: " + n;
        document.getElementById('modale').innerHTML = "Email: " + e;
        document.getElementById('modalt').innerHTML = "Telephon: " + t;
        document.getElementById('modalw').innerHTML = "Website: " + w;
        document.getElementById('modalm').innerHTML = "Message: " + m;
    }

    setTimeout(function () { modal.style.display = "none"}, 6000);

   
}
  span.onclick = function () {
    modal.style.display = "none";
}




