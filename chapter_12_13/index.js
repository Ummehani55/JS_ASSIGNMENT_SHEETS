//JS_AASIGNMENT_SHEET_12-13


//----------------------01---------------------
/*
1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
*/

// var char = prompt("Enter Number or String");

// if(char >= String.fromCharCode(65) && char <= String.fromCharCode(90)){
//     alert("Uppercase Letter");
// }else if(char >= String.fromCharCode(97) && char <= String.fromCharCode(122)){
//     alert("Lowercase letter");
// }else if(char >= String.fromCharCode(48) && char <= String.fromCharCode(57)){
//     alert("Number");
// }else{
//     alert("Invalid Number or String");
// }

//---------------------02---------------------
/*
2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.*/

// var integer1 = +prompt("Enter first integer");
// var integer2 = +prompt("Enter second integer");

// if (integer1 === integer2){
//     alert("Both integers are equal");
// }else if(integer1 > integer2){
//     alert("First integer is the larger");
// }else{
//     alert("Secong integer is larger");
// }


//---------------------03----------------------
/*
3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.*/

// var input = +prompt("Enter any number");

// if (input > 0){
//     alert("Positive");
// }else if(input < 0){
//     alert("Negative");
// }else{
//     alert("Zero");
// }


//---------------------04----------------------
/*4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise*/

// var char = prompt("Enter a single character");

// if (char.toLowerCase() === "a" || char.toLowerCase() === "e" || char.toLowerCase() === "i" || char.toLowerCase() === "o" || char.toLowerCase() === "u"){
//     alert("True");
// } else if(char.length != 1){
//     alert("Please enter single character");
// }else{
//     alert("False");
// }

// --------------------05----------------------
/*
5. Write a program that
a. Store correct password in a JS variable.
b. Asks user to enter his/her password
c. Validate the two passwords:
i. Check if user has entered password. If not, then give message “ Please enter your password”
ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.
*/

// var pswd = "123456";
// var user_password = prompt("Enter correct password");

// if (user_password === null || user_password ===" "){
//     alert("Please enter your password");
// }else if(user_password === pswd){
//     alert("Correct! The password you entered matches the original password")
// }else{
//     alert("Incorrect password");
// }


//--------------------06------------------------
/*
6. This if/else statement does not work. Try to fix it: 
var greeting; 
var hour = 13; 
if (hour < 18) { 
greeting = "Good day"; 
else greeting = "Good evening"; 
}
*/

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     alert("Good day");
// } else {
//     alert("Good evening");
// }

//---------------------07------------------------
/*
7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements
*/

// var time = +prompt("What time is it?");

// if(time >= 0 && time < 1200){
//     alert("Good Morning");
// }else if(time >= 1200 && time < 1700){
//     alert("Good Afternoon");
// }else if(time >= 1700 && time < 2100){
//     alert("Good Evening");
// }else if(time >= 2100 && time < 2359){
//     alert("Good Night");
// }else{
//     alert("Invalid time");
// }