const price = 0.21;
const youngDiscount = 0.80;
const oldDiscount = 0.60;

var trainWagon = Math.floor(Math.random()*10) + 1;
var trainCode = Math.floor(Math.random()*10000) + 90000;


var generate = document.getElementById("generate");
generate.addEventListener("click", 
    function() {
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
        document.getElementById("price").innerHTML = Math.round(ticketPrice * 100) / 100 + " €";
    } else if (age == "over18") {
        document.getElementById("price").innerHTML = Math.round(ticketPrice * 100) / 100 + " €";
    } else {
        ticketPrice *= oldDiscount;
        document.getElementById("discount").innerHTML = "Sconto Silver";
        document.getElementById("price").innerHTML = Math.round(ticketPrice * 100) / 100 + " €";
    }
    }
);
