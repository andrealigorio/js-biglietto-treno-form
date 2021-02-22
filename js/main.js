const price = 0.21;
const youngDiscount = 0.80;
const oldDiscount = 0.60;

var trainWagon = Math.floor(Math.random()*10) + 1;
var trainCode = Math.floor(Math.random()*10000) + 90000;


//DEFINISCO AZIONI DEL BOTTONE GENERA
var generate = document.getElementById("generate");
generate.addEventListener("click", 
    function() {
    var show = document.getElementById("box_ticket");
    show.className = "show"
    var nameSurname = document.getElementById("name_surname").value;
    document.getElementById("name").innerHTML = nameSurname;
    document.getElementById("train_wagon").innerHTML = trainWagon;
    document.getElementById("train_code").innerHTML = trainCode;
    var kilometres = document.getElementById("kilometres").value;
    var ticketPrice = price * kilometres;
    var age = document.getElementById("ages").value;
    if (age == "under18") {
        ticketPrice *= youngDiscount;
        document.getElementById("discount").innerHTML = "Sconto Minorenne";
        document.getElementById("price").innerHTML = ticketPrice.toFixed(2) + " €";
    } else if (age == "over18") {
        document.getElementById("price").innerHTML = ticketPrice.toFixed(2) + " €";
        document.getElementById("discount").innerHTML = "";
    } else {
        ticketPrice *= oldDiscount;
        document.getElementById("discount").innerHTML = "Sconto Silver";
        document.getElementById("price").innerHTML = ticketPrice.toFixed(2) + " €";
    }
    }
);
//DEFINISCO AZIONI DEL BOTTONE ANNULLA
var cancel = document.getElementById("cancel");
cancel.addEventListener("click",
    function () {
        document.getElementById("name_surname").value = "";
        document.getElementById("kilometres").value = "";
        document.getElementById("ages").value = "under18";
        var hidden = document.getElementById("box_ticket");
        hidden.className = "hidden";
    }
);
