document.write(typeof 150);

document.write("<br>");  //adds a line of space
document.write("<br>");

document.write("10" + 5 + "<br>"); //adds 5 onto the end of string "10" resulting in 105

document.write("<br>");

function nan_test_function1() {
    document.getElementById("Test1").innerHTML = 0 / 0;             
}

document.write(isNaN("This is a string") + "<br>");  

document.write("<br>");

document.write(isNaN(007) + "<br>");

document.write("<br>");

document.write(2E310 + "<br>"); //any number larger than 1.7976931348623157E308 returns infinity

document.write("<br>");

document.write(-3E310 + "<br>"); //returns -Infinity

document.write("<br>");

document.write(10 > 2); //boolean resulting in true

document.write("<br>");
document.write("<br>");

document.write(10 < 2); //boolean resulting in false

console.log(2 + 2); //displays result in console

console.log(10 < 2);

document.write("<br>");
document.write("<br>");

document.write(10 == 10);

document.write("<br>");
document.write("<br>");

document.write(3 == 11);

document.write("<br>");
document.write("<br>");

x = 10;
y = 10;
document.write(x === y); //=== compares both value and type to check if they are equal

document.write("<br>");
document.write("<br>");

x = 20;
y = "apples"
document.write(x === y);

document.write("<br>");
document.write("<br>");

x = 82;
y = "82";
document.write(x === y); //in this case int and string are not the same type resulting in false

document.write("<br>");
document.write("<br>");

x = "String one"
y = "String two"
document.write(x === y)

document.write("<br>");
document.write("<br>");

document.write(5 > 2 && 10 > 4);

document.write("<br>");
document.write("<br>");

document.write(5 > 10 && 10 > 4);

document.write("<br>");
document.write("<br>");

document.write(5 > 10 || 10 > 4);

document.write("<br>");
document.write("<br>");

document.write(5 > 10 || 10 > 20);
document.write("<br>");
document.write("<br>");

function not_func() {
    document.getElementById("not").innerHTML = !(20 > 10);
}

document.write(!(5 > 10));




























