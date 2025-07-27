//JS_ASSIGNMENT_SHEET_09_11

//--------------------------01---------------------------
/*1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
*/

// var city = prompt("Enter your city name");
// if (city==="karachi"){
//   alert("Welcome to city of lights");
// }else{
//     alert("Welcome to " + city);
// }


//---------------------------02-----------------------------
/*
2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
*/

// var gender = prompt("Enter your Gender");
// if (gender === "female"){
//     alert("Good Morning, Ma'am");
// }else if(gender === "male"){
//     alert("Good Morning, Sir");
// }


//---------------------------03------------------------------
/*
3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
*/

// var color = prompt("Enter color of road traffic signal ");

// if (color === "red") {
//   alert("Must Stop");
// } else if (color === "yellow") {
//   alert("Ready to move");
// } else if (color === "green") {
//   alert("Move Now");
// }


//--------------------------04-----------------------
/*
4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
*/
// var fuel = +prompt("Enetr remaining fuel in yor car");
// if (fuel < "0.25"){
//     alert("Please refill the fuel in your car")
// } else{
//     alert("Keep driving bro..")
// }


//-------------------------05------------------------
/*
5. Run this script, & check whether alert message would be displayed or not. Record the outputs.*/

// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83) { 
//     alert("given condition for variable b is true"); 
// }

// var c = 12; 
// if (c++ === 13){ 
//     alert("condition 1 is true"); 
// } if (c === 13){ 
//     alert("condition 2 is true"); 

// } if (++c < 14){ 
//     alert("condition 3 is true"); 
// } if(c === 14){ 
//     alert("condition 4 is true");
// }


// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){    
//     alert("The cost equals"); 
// }

// if (true){ 
//     alert("True"); 
// } 
// if (false){ 
//     alert("False"); 
// }

// if("car" < "cat"){
//     alert("car is smaller than cat"); 
// }

//---------------------------06------------------------------
/*
6. Write a program to take input the marks obtained in three 
subjects & total marks. Compute & show the resulting 
percentage on your page. Take percentage & compute 
grade as per following table: 
*/

// var obtained_marks = +prompt("Enter obtained marks: ");
// var total_marks = 100;

// if (obtained_marks < 100) {
//   document.write("Total marks: " + total_marks + "<br>");
//   document.write("Obtained marks: " + obtained_marks + "<br>");
//   var percentage = (obtained_marks / total_marks) * 100;

//   document.write("Percentage: " + percentage);
//   if (percentage >= 80) {
//     document.write("<br>" + "Grade: A-one" + "<br>");
//     document.write("Remarks: Excellent");
//   } else if (percentage >= 70) {
//     document.write("<br>" + "Grade: A" + "<br>");
//     document.write("Remarks: Good");
//   } else if (percentage >= 60) {
//     document.write("<br>" + "Grade: B" + "<br>");
//     document.write("Remarks: You need to improve");
//   } else if (percentage < 60) {
//     document.write("<br>" + "Grade: Fail" + "<br>");
//     document.write("Remarks: Sorry");
//   } else {
//     document.write("<br>" + "Enter valid marks");
//   }
// } else {
//   document.write("<br>" + "Enter valid marks");
// }


//-------------------------07---------------------------
/*
7. Guess game:
Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. 
a. If user guesses the same number, show “Bingo! Correct answer”. 
b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
*/

// var secret_num = 6;
// var user_guess = +prompt("Guess a secret number (ranging from 1 to 10)");

// if ( user_guess === secret_num){
//     alert("Bingo! Correct answer");
// }else if (user_guess === secret_num +1 || user_guess === secret_num-1){
//     alert("Close enough to the correct answer");
// }else {
//     alert("Wrong answer, Try again");
// }

//-----------------------08--------------------------
/*
8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
*/

// var user_input = +prompt("Enter a number to check whether the given number is divisible by 3")

// if(user_input % 3 === 0){
//     alert("Given the number is divisible by 3");
// }else{
//     alert("Given the number is not divisible by 3");
// }

//-----------------------09--------------------------
//9. Write a program that checks whether the given input is an even number or an odd number.

// var user_input = +prompt("Enter number to check weather given number even or odd .");

// if (user_input % 2 === 0) {
//   alert("Even Number");
// } else {
//   alert("Odd Number");
// }


//-----------------------10-------------------------
/*
10. Write a program that takes temperature as input and shows a message based on following criteria 
a. T > 40 then “It is too hot outside.” 
b. T > 30 then “The Weather today is Normal.” 
c. T > 20 then “Today’s Weather is cool.” 
d. T > 10 then “OMG! Today’s weather is so Cool.”
*/

// var user_input = +prompt("Enter the Temperature in degrees");

// if(user_input > 40){
//     alert("It is too hot outside.")
// }else if(user_input > 30){
//     alert("The Weather today is Normal.")
// }else if(user_input > 20){
//     alert("Today’s Weather is cool.")
// }else if(user_input > 10){
//     alert("The Weather today is Normal.")
// }else {
//     alert("Enter valid Temperature");
// }

//----------------------11------------------------
/*11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: 
a. First number 
b. Second number 
c. Operation (+, -, *, /, %) Compute & show the calculated result to user.
*/

// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// var operation = prompt("Enter any aperation you want to do first \n+ , - , * , / , %");

// if(operation === "+"){
//     alert(num1 + num2);
// }else if(operation === "-"){
//     alert(num1 - num2);
// }else if(operation === "*"){
//     alert(num1 * num2);
// }else if(operation === "/"){
//     alert(num1 / num2);
// }else if(operation === "%"){
//     alert(num1 % num2);
// }else {
//     alert("Enter valid operation");
// }
