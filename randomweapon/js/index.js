let started;
let tryingcnt;
let diffcnt;
var startbtn = document.getElementById('start');
var perso = [
    ["ana", 0],
    ["ange", 0],
    ["ashe", 0],
    ["baptiste", 0],
    ["bastion", 0],
    ["bouldozer", 0],
    ["dva", 0],
    ["doomfist", 0],
    ["echo", 0],
    ["fatale", 0],
    ["faucheur", 0],
    ["gendji", 0],
    ["lucio", 0],
    ["mcree", 0],
    ["mei", 0],
    ["moira", 0],
    ["orisa", 0],
    ["pharah", 0],
    ["reinhardt", 0],
    ["sigma", 0],
    ["soldat", 0],
    ["sombra", 0],
    ["symmetra", 0],
    ["torbjorn", 0],
    ["tracer", 0],
    ["winston", 0],
    ["zarya", 0],
    ["zenyatta", 0],
]

//Reset all settings and webpage
function resetall() {

    for (var i = 0; i < perso.length; i++) {
        document.getElementById(perso[i][0]).innerHTML = "0";

        tryingcnt = 0;
        persec = 0;
        diffcnt = 0;
    }
    document.getElementById("currenthero").innerHTML = "";
    document.getElementById("diffcnt").innerHTML = "0/s";
}

//When start button is clicked
$("#start").click(function () {
    if (startbtn.classList.contains("active")) {
        document.getElementById("start").classList.remove("active");
        document.getElementById("start").innerHTML = "C'est parti !";
        started = false;
    } else {
        resetall();
        document.getElementById("start").classList.add("active");
        document.getElementById("start").innerHTML = "STOP !";
        date_ob = new Date();
        started = true;
        letsgo();
    }
});

$("#reset").click(function () {
    for (var i = 0; i < perso.length; i++) {
        document.getElementById(perso[i][0]).innerHTML = "0";
    }
    started = false;
    tryingcnt = 0;
    persec = 0;
    diffcnt = 0;
});

function formatNumber(num) {
    //Formating great numbers (Exemple : 1000000 will convert to 1.000.000)
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

function letsgo() {
    if (!tryingcnt || tryingcnt < 1) {
        let date_ob = new Date();
    }

    if ((typeof nsecs !== 'undefined') && (typeof tryingcnt !== 'undefined')) {
        if (nsecs != persec) {
            persec = nsecs;
            document.getElementById("diffcnt").innerHTML = + Math.abs(diffcnt - tryingcnt) + '/s';
            diffcnt = tryingcnt;
        }
    }

    tryingcnt++;

    var now = new Date;
    difference = (now - date_ob);

    hours = Math.floor((difference % (60 * 60 * 1000 * 24)) / (60 * 60 * 1000) * 1);
    mins = Math.floor(((difference % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) / (60 * 1000) * 1);
    secs = Math.floor((((difference % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) % (60 * 1000)) / 1000 * 1);

    nhours = (hours < 10 ? "0" : "") + hours;
    nmins = (mins < 10 ? "0" : "") + mins;
    nsecs = (secs < 10 ? "0" : "") + secs;

    document.getElementById('hrs').firstChild.nodeValue = nhours;
    document.getElementById('mins').firstChild.nodeValue = nmins;
    document.getElementById('secs').firstChild.nodeValue = nsecs;

    document.getElementById('try').firstChild.nodeValue = formatNumber(tryingcnt);

    let getRandomCase = Math.floor(Math.random() * (28 - 0) + 0);

    let random_perso = Math.floor(Math.random() * perso.length);

    document.getElementById("currenthero").innerHTML = perso[random_perso][0];
    perso[random_perso][1]++;

    document.getElementById(perso[random_perso][0]).innerHTML = perso[random_perso][1];
    selectedhero = perso[random_perso][0];

    if (started === true && tryingcnt < 1000) {
        setTimeout(function () {
            var now = new Date;
            letsgo();
        }, 0);
    } else {
        document.getElementById("start").classList.remove("active");
        document.getElementById("start").innerHTML = "C'est parti !";
        started = false;
        if (tryingcnt > 999) {
            document.getElementById("result").style.display = "block";
            document.getElementById("resultlabel").innerHTML = selectedhero + " !";
        }
    }
}