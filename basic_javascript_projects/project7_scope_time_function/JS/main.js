var x = 10;      //use of a global variable, declared outside of any function
function add_1() {
    document.write(20 + x + "<br>");
}
function add_2() {
    document.write(x + 100 + "<br>");
}
add_1();
add_2();

function sub_1() {   
    var y = 15;   //use of a local variable, declared inside the function
    document.write(20 - y + "<br>");
}
function sub_2() {
    console.log(y - 10 + "<br>"); 
}
sub_1();
sub_2(); //returns y is undefined due to y never being declared globally or locally

if (1 < 2) {
    document.write("The left number is smaller than the number on the right.")
}

function get_Date() {  //.getHours() gets current local time 0-23
    if (new Date().getHours() < 18) {
        document.getElementById("greeting").innerHTML = "How are you today?";
    }
}

if (10 > 2) {
    var str = "10 is larger than two"
    console.log(str)
}

function age() {
    age = document.getElementById("age").value;
    if (age >= 18) {
        vote = "You are old enough to vote!";
    }
    else {
        vote = "You are not old enough to vote.";
    }
    document.getElementById("How_old_are_you?").innerHTML = vote;
}

function time() {
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0) {
        reply = "Good morning!" + time; //displays a greeting with the hour
    }
    else if (time >= 12 == time < 18) {
        reply = "Good afternoon!" + time;
    }
    else {
        reply = "Good evening!" + time;
    }
    document.getElementById("time").innerHTML = reply;
}
