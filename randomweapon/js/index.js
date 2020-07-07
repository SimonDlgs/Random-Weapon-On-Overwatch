let started;
let tryingcnt;
let diffcnt;
var startbtn = document.getElementById('start');

function resetall() {
	tryingcnt = 0;
	ana = 0;
	ange = 0;
	ashe = 0;
	baptiste = 0;
	bastion = 0;
	bouldozer = 0;
	dva = 0;
	doomfist = 0;
	echo = 0;
	fatale = 0;
	faucheur = 0;
	gendji = 0;
	lucio = 0;
	mcree = 0;
	mei = 0;
	moira = 0;
	orisa = 0;
	pharah = 0;
	reinhardt = 0;
	sigma = 0;
	soldat = 0;
	sombra = 0;
	symmetra = 0;
	torbjorn = 0;
	tracer = 0;
	winston = 0;
	zarya = 0;
	zenyatta = 0;
	persec = 0;
	diffcnt = 0;
	document.getElementById("ana").innerHTML = "0";
	document.getElementById("ange").innerHTML = "0";
	document.getElementById("ashe").innerHTML = "0";
	document.getElementById("baptiste").innerHTML = "0";
	document.getElementById("bastion").innerHTML = "0";
	document.getElementById("bouldozer").innerHTML = "0";
	document.getElementById("dva").innerHTML = "0";
	document.getElementById("doomfist").innerHTML = "0";
	document.getElementById("echo").innerHTML = "0";
	document.getElementById("fatale").innerHTML = "0";
	document.getElementById("faucheur").innerHTML = "0";
	document.getElementById("gendji").innerHTML = "0";
	document.getElementById("lucio").innerHTML = "0";
	document.getElementById("mcree").innerHTML = "0";
	document.getElementById("mei").innerHTML = "0";
	document.getElementById("moira").innerHTML = "0";
	document.getElementById("orisa").innerHTML = "0";
	document.getElementById("pharah").innerHTML = "0";
	document.getElementById("reinhardt").innerHTML = "0";
	document.getElementById("sigma").innerHTML = "0";
	document.getElementById("soldat").innerHTML = "0";
	document.getElementById("sombra").innerHTML = "0";
	document.getElementById("symmetra").innerHTML = "0";
	document.getElementById("torbjorn").innerHTML = "0";
	document.getElementById("tracer").innerHTML = "0";
	document.getElementById("winston").innerHTML = "0";
	document.getElementById("zarya").innerHTML = "0";
	document.getElementById("zenyatta").innerHTML = "0";
	document.getElementById("hrs").innerHTML = "00";
	document.getElementById("mins").innerHTML = "00";
	document.getElementById("secs").innerHTML = "00";
	document.getElementById("try").innerHTML = "0";
	document.getElementById("currenthero").innerHTML = "";
	document.getElementById("diffcnt").innerHTML = "0/s";
} //Reset all settings and webpage

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
}); //When start button is clicked

$("#reset").click(function() {
	resetall();
	document.getElementById("start").classList.remove("active");
	document.getElementById("start").innerHTML = "C'est parti !";
	started = false;
});

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'); //Formating great numbers (Exemple : 1000000 will convert to 1.000.000)
}

function letsgo() {
	if (!tryingcnt || tryingcnt < 1) {
		let date_ob = new Date();
	}


	if ((typeof nsecs !== 'undefined') && (typeof tryingcnt !== 'undefined')) {
		if (nsecs != persec) {
			persec = nsecs;
			document.getElementById("diffcnt").innerHTML =+ Math.abs(diffcnt - tryingcnt) + '/s'; //Convert and show count of random per second
			diffcnt = tryingcnt;
		}
	}

	tryingcnt++; //Count of random

	var now = new Date;
	difference = (now - date_ob);

	hours = Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
	mins = Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
	secs = Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

	nhours = (hours < 10 ? "0" : "") + hours;
	nmins = (mins < 10 ? "0" : "") + mins;
	nsecs = (secs < 10 ? "0" : "") + secs;
	
    document.getElementById('hrs').firstChild.nodeValue = nhours; //Hours of stopwatch
	document.getElementById('mins').firstChild.nodeValue = nmins; //Minutes of stopwatch
	document.getElementById('secs').firstChild.nodeValue = nsecs; //Seconds of stopwatch

	document.getElementById('try').firstChild.nodeValue = formatNumber(tryingcnt);

	let getRandomCase = Math.floor(Math.random() * (28 - 0) + 0);
	switch (getRandomCase) {
		case 0:
			ana++;
			selectedhero = 'Ana';
			break;
		case 1:
			ange++;
			selectedhero = 'Ange';
			break;
		case 2:
			ashe++;
			selectedhero = 'Ashe';
			break;
		case 3:
			baptiste++;
			selectedhero = 'Baptiste';
			break;
		case 4:
			bastion++;
			selectedhero = 'Bastion';
			break;
		case 5:
			bouldozer++;
			selectedhero = 'Bouldozer';
			break;
		case 6:
			dva++;
			selectedhero = 'Dva';
			break;
		case 7:
			doomfist++;
			selectedhero = 'Doomfist';
			break;
		case 8:
			echo++;
			selectedhero = 'Écho';
			break;
		case 9:
			fatale++;
			selectedhero = 'Fatale';
			break;
		case 10:
			faucheur++;
			selectedhero = 'Faucheur';
			break;
		case 11:
			gendji++;
			selectedhero = 'Gendji';
			break;
		case 12:
			zenyatta++;
			selectedhero = 'Zenyatta';
			break;
		case 13:
			lucio++;
			selectedhero = 'Lùcio';
			break;
		case 14:
			mcree++;
			selectedhero = 'Mccree';
			break;
		case 15:
			mei++;
			selectedhero = 'Mei';
			break;
		case 16:
			moira++;
			selectedhero = 'Moira';
			break;
		case 17:
			orisa++;
			selectedhero = 'Orisa';
			break;
		case 18:
			pharah++;
			selectedhero = 'Pharah';
			break;
		case 19:
			reinhardt++;
			selectedhero = 'Reinhardt';
			break;
		case 20:
			sigma++;
			selectedhero = 'Sigma';
			break;
		case 21:
			soldat++;
			selectedhero = 'Soldat : 76';
			break;
		case 22:
			sombra++;
			selectedhero = 'Sombra';
			break;
		case 23:
			symmetra++;
			selectedhero = 'Symmetra';
			break;
		case 24:
			torbjorn++;
			selectedhero = 'Torbjörn';
			break;
		case 25:
			tracer++;
			selectedhero = 'Tracer';
			break;
		case 26:
			winston++;
			selectedhero = 'Winston';
			break;
		case 27:
			zarya++;
			selectedhero = 'Zarya';
			break;
	}

	document.getElementById("currenthero").innerHTML = selectedhero;
	document.getElementById("ana").innerHTML = formatNumber(ana);
	document.getElementById("ange").innerHTML = formatNumber(ange);
	document.getElementById("ashe").innerHTML = formatNumber(ashe);
	document.getElementById("baptiste").innerHTML = formatNumber(baptiste);
	document.getElementById("bastion").innerHTML = formatNumber(bastion);
	document.getElementById("bouldozer").innerHTML = formatNumber(bouldozer);
	document.getElementById("dva").innerHTML = formatNumber(dva);
	document.getElementById("doomfist").innerHTML = formatNumber(doomfist);
	document.getElementById("echo").innerHTML = formatNumber(echo);
	document.getElementById("fatale").innerHTML = formatNumber(fatale);
	document.getElementById("faucheur").innerHTML = formatNumber(faucheur);
	document.getElementById("gendji").innerHTML = formatNumber(gendji);
	document.getElementById("lucio").innerHTML = formatNumber(lucio);
	document.getElementById("mcree").innerHTML = formatNumber(mcree);
	document.getElementById("mei").innerHTML = formatNumber(mei);
	document.getElementById("moira").innerHTML = formatNumber(moira);
	document.getElementById("orisa").innerHTML = formatNumber(orisa);
	document.getElementById("pharah").innerHTML = formatNumber(pharah);
	document.getElementById("reinhardt").innerHTML = formatNumber(reinhardt);
	document.getElementById("sigma").innerHTML = formatNumber(sigma);
	document.getElementById("soldat").innerHTML = formatNumber(soldat);
	document.getElementById("sombra").innerHTML = formatNumber(sombra);
	document.getElementById("symmetra").innerHTML = formatNumber(symmetra);
	document.getElementById("torbjorn").innerHTML = formatNumber(torbjorn);
	document.getElementById("tracer").innerHTML = formatNumber(tracer);
	document.getElementById("winston").innerHTML = formatNumber(winston);
	document.getElementById("zarya").innerHTML = formatNumber(zarya);
	document.getElementById("zenyatta").innerHTML = formatNumber(zenyatta);

	if (started === true && tryingcnt < 100000) {
		setTimeout(function () { //Relaunch procedure
			var now = new Date;
			letsgo();
		}, 0);
	} else {
		document.getElementById("start").classList.remove("active");
		document.getElementById("start").innerHTML = "C'est parti !";
		started = false;
		if (tryingcnt > 99999) {
			document.getElementById("result").style.display = "block";
			document.getElementById("resultlabel").innerHTML = selectedhero + " !";
		}
	}
}