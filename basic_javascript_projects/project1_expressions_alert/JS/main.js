//HTML Events:
//onchange	An HTML element has been changed
//onclick	The user clicks an HTML element
//onmouseover	The user moves the mouse over an HTML element
//onmouseout	The user moves the mouse away from an HTML element
//onkeydown	The user pushes a keyboard key
//onload	The browser has finished loading the page

window.alert("Hello, World!");

document.write("Hello World");

var A = "This is a string";
document.write(A);

var X = "String in a window";
window.alert(X);

document.write("Lisa told Bart, \"Knock it off, Bart! Or I'll tell dad!\""); //Using "" and ' in a string

document.write("\"Be who you are and say what you feel," + " because those who mind don\'t matter and those who matter don\'t mind.\"" + "-Dr.Seuss");

var B = "Concatenated" + " String"
document.write(B);

var Family = "The Arezzinis", Dad = "Jeremiah", Mom = "Hermoine", Daughter = "Penny", Son = "Zorro";  //Assigning values to multiple variables
document.write(Dad);

document.write(4 * 4);

function my_first_function() {                                    //Example comment
    var str = "This is the button text!";                         //expanding
    document.getElementById("Button_Text").innerHTML = str;       //multiple lines
}

function my_function() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";         //+= is an alternate way to add variables together
    document.getElementById("Concat").innerHTML = sentence;
}