function call_loop() {
    var digit = "";
    var x = 1;
    while (x < 11) { //continues doing loop while condition is true
        digit += "<br>" + x;
        x++;
    }
    document.getElementById("loop").innerHTML = digit;
}

let string = "Length of this string";
//let length = string.length;
document.write(string.length);

var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var content = "";
var y;
function for_loop() {
    for (y = 0; y < instruments.length; y++) { //for loop to iterate through the array
        content += instruments[y] + "<br>";
    }
    document.getElementById("list_of_instruments").innerHTML = content;
}

function cat_pics() {
    var cat_pic = []; //creates array
    cat_pic[0] = "sleeping"; //assigning values at indices 
    cat_pic[1] = "playing";
    cat_pic[2] = "eating";
    cat_pic[3] = "purring";
    document.getElementById("cat").innerHTML = "In this picture, the cat is " + cat_pic[2] + ".";
}

function constant_func() {
    const instrument = {type:"guitar", brand:"Fender", color:"black"};
    instrument.color = "blue"; //changed value of color property
    instrument.price = "$900"; //added new property and value
    document.getElementById("constant").innerHTML = `The cost of the ${instrument.color} ${instrument.type} was ${instrument.price}`;
}

{
    let x = 33;
    document.write("<br>" + x);
}

let x = my_func(4, 3); 
document.getElementById("return").innerHTML = x;

function my_func(a, b) {
  return a * b;   
} 

let car = { //creating a car object
    make: "Dodge ",
    model: "Viper ",
    year: "2021 " ,
    color: "red " ,
    description : function () {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("car_object").innerHTML = car.description();
