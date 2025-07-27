//JS-ASSIGNMENT_SHEET_05

//--------------01------------------
//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
var num1 = 25;
var num2 = 25;
var sum = num1 + num2;
document.writeln(`
    <h3>Answer # 01</h3>
    Sum of  ${num1} and  ${num2} is ${sum}<br><br>
    `);

//--------------02------------------
//2. Repeat task1 for subtraction, multiplication, division & modulus.
var num1 = 25;
var num2 = 25;
var subtract = num1 - num2;
document.writeln(`
    <h3>Answer # 02</h3>
    <b>Subtract of  ${num1} and  ${num2} is ${subtract}</b><br>
    `);

var num1 = 25;
var num2 = 25;
var multiply = num1 * num2;
document.writeln(`<b>Multiplication of  ${num1} and  ${num2} is ${multiply}</b> <br>`);

var num1 = 25;
var num2 = 25;
var division = num1 / num2;
document.writeln(`<b>Division of  ${num1} and  ${num2} is ${division}</b><br><br><br>`);

//---------------03------------------
/*
3. Do the following using JS Mathematic Expressions 
a. Declare a variable. 
b. Show the value of variable in your browser like “Value 
after variable declaration is: ??”. 
c. Initialize the variable with some number. 
d. Show the value of variable in your browser like “Initial 
value: 5”. 
e. Increment the variable. 
f. Show the value of variable in your browser like “Value 
after increment is: 6”. 
g. Add 7 to the variable. 
h. Show the value of variable in your browser like “Value 
after addition is: 13”. 
i. Decrement the variable. 
j. Show the value of variable in your browser like “Value 
after decrement is: 12”. 
k. Show the remainder after dividing the variable’s value 
by 3.  
l. Output : “The remainder is : 0”.
*/
var num;
document.writeln(`
    <h3>Answer # 03</h3><br>
    Value after variable declaration is <b>${num}</b> <br>
    `);

num = 5;
document.writeln(`Initial Value: <b>${num}</b> <br>`);

num++;
document.writeln(`Value after increment is: <b>${num}</b> <br>`);

num = num + 7;
document.writeln(`Value after adition is: <b>${num}</b>  <br>`);

num--;
document.writeln(`Value after decrement is: <b>${num}</b> <br>`);

var remainder = num % 3;
document.writeln(`The remainder is : <b>${remainder}</b> <br><br><br>`);


//----------------------04--------------------
//4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:

var eachTicket = 600;
var total = 600*5;
document.writeln(`
    <h3>Answer # 04</h3>
    Total cost to buy 5 tickets to a movie is <b>${total}PKR</b><br><br><br>
    `);

//----------------------05--------------------
//5. Write a script to display multiplication table of any number in your browser.
var table = 4
for(var i = 1; i <= 10; i++){
    document.writeln(`
        ${table} X ${i} = ${table*i}<br> 
        `)
}

//----------------------06--------------------
/*6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
a. Store a Celsius temperature into a variable.
b. Convert it to Fahrenheit & output “NNoC is NNoF”.
c. Now store a Fahrenheit temperature into a variable.
d. Convert it to Celsius & output “NNoF is NNoC”.*/

var celTemp = 25;
var ferTemp = 70;
//conversion
var cel_fer = (ferTemp - 32)* 5 / 9;
var fer_cel = (celTemp * 9 / 5) + 32;

document.writeln(`
    <h3>Answr # 06</h3>
    ${celTemp} °C is ${fer_cel} °F <br><br>`);
document.writeln(`${ferTemp} °F is ${cel_fer} °C <br>`);


//-----------------------07---------------------
/*
7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
a. Price of item 1 
b. Price of item 2 
c. Ordered quantity of item 1 
d. Ordered Quantity of item 2 
e. Shipping charges
Compute the total cost & show the receipt in your browser.
*/

var item_1_price = 650;
var item_2_price = 100;
var item_1_quantity = 3;
var item_2_quantity = 7;

var shipping_charges = 100;

var item_1_cost = item_1_price * item_1_quantity;
var item_2_cost = item_2_price * item_2_quantity;
var total_cost = item_1_cost + item_2_cost + shipping_charges;

document.writeln(`
    <h3>Answer # 07</h3>
    <h4>Shopping cart</h4>
    Price of item 1 is  ${item_1_price}<br>
    Quantity of item 1 is ${item_1_quantity}<br><br>
    Price of item 2 is ${item_2_price}<br>
    Quantity of item 2 is ${item_2_quantity}<br><br>
    Shipping Charges is ${shipping_charges}<br>
    Total cost of your order is ${total_cost}<br><br>`);

//------------------08--------------------
//8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
var totalMarks = 980;
var obtainMarks = 804;

var percentage = (obtainMarks / totalMarks )*100;
document.writeln(`
    <h3>Answer # 08</h3>
    <h4>Marksheet</h4>
    Total Marks: ${totalMarks}<br>
    Marks Obtained: ${804}<br>
    Percentage: ${percentage}% <br>`);

//------------------09--------------------
/*
9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)*/

var  US$1 = 104.80; // Pakistani rupees
var Saudi_riyal = 28; // Pakistani rupees

var total_currency = (10*104.8) + (25*28);

document.writeln(` 
    <h3>Answer # 09</h3>
    <h4>Currency in PKR</h4>
    Total currency in PKR : ${total_currency}<br><br> `);

//---------------------10-------------------
/*
10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
a. Add 5
b. Multiply by 10 
c. Divide the result by 2 Perform all calculations in a single expression
*/

var my_num = 2;
var result = my_num + (5 * 10) / 2;
document.writeln(`
    <h3>Answer # 10</h3>
     My answer is ${result}<br>`);

//--------------------11--------------------
/*
11. The Age Calculator: Forgot how old someone is? Calculate it! 
a. Store the current year in a variable. 
b. Store their birth year in a variable. 
c. Calculate their 2 possible ages based on the stored values.
Output them to the screen like so: “They are either NN or NN years old”.
*/    

var currentYear = 2025;
var birthYear = 2007;

var myAge = currentYear - birthYear;
document.writeln(`
    <h3>Answer # 11</h3>
    <h4>Age Calculator</h4><br>
    Current Year: ${currentYear}<br>
    Birth Year: ${birthYear}<br>
    My Age: ${myAge}<br><br>
    `);

//-------------------12---------------------
/*
12. The Geometrizer: Calculate properties of a circle. 
a. Store a radius into a variable.
b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
*/

var radius = 5;
var circumference = 2 * 3.142 * radius;
var area_circle = 3.142 * radius + radius

document.writeln(`
    <h3>Answer # 12</h3>
    <h4>The Geometrizer</h4>
    Radius of Circle is: 5<br>
    The circumference is: ${circumference}<br>
    The area is: ${area_circle}<br>

    `)

//----------------------13----------------------
/*13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. 
a. Store your favorite snack into a variable 
b. Store your current age into a variable. 
c. Store a maximum age into a variable. 
d. Store an estimated amount per day (as a number). 
e. Calculate how many would you eat total for the rest of your life.
Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
*/

var fav_snack = "chips";
var current_age = 18;
var max_age = 55;
var estimated_amount_per_day = 2;
var reslt = (max_age - current_age) * estimated_amount_per_day;

document.writeln(`
    <h3>Answer # 13</h3>
    <h4>The lifetime Supply Calculator</h4>
    Favourite Snack: ${fav_snack}<br>
    Current Age: ${current_age}<br>
    Estimated Maximum Age: ${max_age}<br>
    Amount of Snacks per day: ${estimated_amount_per_day}<br>
    You will need ${reslt} ${fav_snack} to last you until the ripe old age of ${max_age}<br>
    `);


