//------------------01----------------------
//1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age = "18 years"
alert("I am " + age + " old");

//------------------02----------------------
//2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
var numberOfVisits = 1
alert("You have visit this site " + numberOfVisits + " times")

//------------------03----------------------
//3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
var birthYear = 2007;
alert("My birth year is " + birthYear + "\nData type of my declared variable is number");

//------------------04----------------------
/*4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
 a. Visitor’s name 
 b. Product title 
 c. Quantity i.e. how many products a visitor wants to order
 Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”. */
var visitorName = prompt("Enter your Name");
var productTitle = prompt("Enter the product title:");
var quantity = +prompt("Enter the quantity:");

document.writeln(visitorName + " ordered" + quantity +" " + productTitle + " on XYZ Clothing store");
