function add() {
    var x = 2;
    var y = 2;
    var add = x + y;
    document.getElementById("Math").innerHTML = "2 + 2 = " + add;
}

function sub() {
    var sub = 5 - 2;
    document.getElementById("Math2").innerHTML = "5 - 2 = " + sub;
}

function mul() {
    var mul = 6 * 8;
    document.getElementById("Math3").innerHTML = "6 * 8 = " + mul;
}

function div() {
    var div = 48 / 6;
    document.getElementById("Math4").innerHTML = "48 / 6 = " + div;
}

function more_math() {
    var math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math5").innerHTML = "1 plus 2, multiplied by 10, divided in half and the subtracted by 5 equals " + math;
}

function mod() {
    var mod = 25 % 6;
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + mod; //% divides and gives remainder
}

function negation() {
    var x = 10;
    document.getElementById("Math7").innerHTML = -x; //returns negative or opposite of value given
}

var x = 5;
x++;
document.write(x);  
//Can't get new line to work??
var y = 5.25;
y--;
document.write(y);

window.alert(Math.random()); //random number between 0 and 1

window.alert(Math.random() * 100); //random number between 0 and 100

window.alert(Math.round(10.2424)) //rounds given number to nearest whole number