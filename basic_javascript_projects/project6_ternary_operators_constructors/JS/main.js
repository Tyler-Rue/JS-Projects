function ride_func() {
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = can_ride + " to ride.";
}

function vote_func() {
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age < 18) ? "You are too young":"You are old enough";
    document.getElementById("vote").innerHTML = can_vote + " to vote.";
}

function vehicle(make, model, year, color) { //sets up default values
    this.vehicle_make = make;                //for new objects created
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}
var Jack = new vehicle("Dodge", "Viper", 2020, "Red"); //created new object Jack and assigned new values to object
var Emily = new vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new vehicle("Ford", "Pinto", 1971, "Mustard");
function my_func() {
    document.getElementById("keywords_and_constructors").innerHTML = 
    "Erik drives a " + Erik.vehicle_color + "-colored " + Erik.vehicle_model + " manufactured in " + Erik.vehicle_year;
}

function student(name, major, active) {
    this.student_name = name;
    this.student_major = major;
    this.student_active = active;
}
var John = new student("John Doe", "English", "active");
function is_active() {
    document.getElementById("new_and_this").innerHTML = "John Doe is currently a(n) " + John.student_major + " major and is " + John.student_active;
}

function person(first, last, age,) {
    this.first_name = first;
    this.last_name = last;
    this.age = age;
}

function count_func() {
    document.getElementById("counting").innerHTML = count();
    function count() {
        var starting_point = 9;
        function plus_one() {starting_point += 1;}  //creating a nested function to count +1
        plus_one();
        return starting_point;
    }
}