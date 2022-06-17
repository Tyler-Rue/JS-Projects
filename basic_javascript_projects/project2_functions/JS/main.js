function my_first_function() {                                    
    var str1 = "This is the new paragraph text!";
    var str2 = "And some more text.";
    var str3 = str1 + " " + str2;          //Adding str1 and str2 together with a space in between            
    document.getElementById("Button_Text").innerHTML = str3;      //.innerHTML modifies an existing HTML element
}

function my_function() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";         //+= is an alternate way to add variables together
    document.getElementById("Concat").innerHTML = sentence;
}