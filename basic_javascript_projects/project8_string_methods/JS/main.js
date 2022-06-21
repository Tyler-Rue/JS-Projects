function full_sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete sentence.";
    var whole_sentence = part_1.concat(part_2, part_3); //.concat concatenates the strings
    document.getElementById("concatenate").innerHTML = whole_sentence;
}

function slice_method() {
    var sentence = "All work and no play makes Johnny a dull boy.";
    var section = sentence.slice(27, 33); //27 and 33 are the starting and ending index values to be sliced
    document.getElementById("slice").innerHTML = section;
}

function uppercase() {
    let text = "Hello world";
    let result = text.toUpperCase(); //.toUpperCase() makes the string Hello world uppercase
    document.getElementById("uppercase").innerHTML = result;
}

function first_match() {
    let text = "Green is one of the best colors"
    let position = text.search(/best/) //finds the first match and returns index value where match begins
    document.getElementById("match").innerHTML = position;
}

function string_convert() {
    var x = 192;
    document.getElementById("convert_to_string").innerHTML = x.toString(); //converts number 192 to string "192"
}

function precision() {
    var x = 1234.56789011111;
    document.getElementById("precision").innerHTML = x.toPrecision(10); //returns number to the 10th digit in the number
}

function primitive_value_of_string() {
    let text = "Hey world";
    let result = text.valueOf(); //returns primitive value of a string
    document.getElementById("primitive_value").innerHTML = result;
}

function number_to_string() {
    let num = 5.56789;
    let n = num.toFixed(1); //returns number as a string rounded to the desired decimal point
    document.getElementById("convert").innerHTML = n;
}