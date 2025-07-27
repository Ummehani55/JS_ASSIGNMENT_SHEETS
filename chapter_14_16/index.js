//JS_ASSIGNMENT_SHEET_14-16

//-----------------------01------------------------------
/*1. Declare an empty array using JS literal notation to store student names in future.*/

// var student_names = [];

//-----------------------02------------------------------
/*2. Declare an empty array using JS object notation to store student names in future.*/
// var studentNames = [];

//-----------------------03------------------------------
/*3. Declare and initialize a strings array.*/
// var string = ["abc" , "xyz"];

//-----------------------04------------------------------
/*4. Declare and initialize a numbers array*/
// var number = [1 , 2 , 3 , 4 , 5 , 6];

//-----------------------05------------------------------
/*5. Declare and initialize a boolean array.*/
// var boolean = [true, false];

//-----------------------06------------------------------
/*6. Declare and initialize a mixed array.*/
// var mixed_array = ["a", 1 , true , "b", 2, false];

//-----------------------07------------------------------
/*7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like: */

// var qualifications = ["","SSC" , "HSC" , "BSC" ,"BS" , "BCOM", "MS" , "M.Phill" ,"PhD"];
// for(var i = 1; i<=qualifications.length-1; i++){
//     document.writeln(i + ")" + qualifications[i] + "<br>");
// }

//-----------------------08------------------------------
/*8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:*/

// var student_names = ["Aliyana", "Ali", "Ahmed"];
// var marks = [320, 230, 480];
// var percentage = ["64%" ,"46%", "96%"];

// for(var i= 0; i< student_names.length; i++){
//     document.writeln(`
//         Score of ${student_names[i]} is ${marks[i]}. Percentage ${percentage[i]}<br>`);
// }

//-----------------------09-------------------------------
/*9. Initialize an array with color names. Display the array elements in your browser.

a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser. 

b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser. 

c. Add two more color to the beginning of the array. Display the updated array in your browser.

d. Delete the first color in the array. Display the updated array in your browser. 

e. Delete the last color in the array. Display the updated array in your browser. 

f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser. 

g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.*/

var colors_name = ["red" , "blue", "yellow" , "green" ,"orange"];
// for(var i = 0; i < colors_name.length; i++){
//     document.writeln(colors_name[i]);
// }

//--a

// var add_color_beginning = prompt("Enter the color you want to add to the beginning");
// colors_name.unshift(add_color_beginning);
// for(var i = 0; i < colors_name.length; i++){
//     document.writeln(colors_name[i]);
// }

//--b 

// var add_color_end = prompt("Enter the color you want to add to the end");
// colors_name.push(add_color_end);
// for(var i = 0; i < colors_name.length; i++){
//     document.writeln(colors_name[i]);
// }

//--c

// var add_more_color_beginning1 = prompt("Enter the color you want to add to the beginning");
// var add_more_color_beginning2 = prompt("Enter the color you want to add to the beginning");

// colors_name.unshift(add_more_color_beginning1);
// colors_name.unshift(add_more_color_beginning2);

// for(var i = 0; i < colors_name.length; i++){
//     document.writeln(colors_name[i]);
// }

//--d

// colors_name.shift()
// document.writeln(colors_name);

//--e

// colors_name.pop()
// document.writeln(colors_name);

//----------------------10----------------------------
/*
10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
*/

// var scores = [90, 85, 95, 80, 75, 70, 65];
// for(var i = 0; i < scores.length; i++){
//     for(var j = 0; j < scores.length; j++){
//         if(scores[j] > scores[j+1]){
//             var num = scores[j]
//             scores[j] = scores[j+1]
//             scores[j+1] = num;
//         }

//     }
// }
// document.writeln(scores);

//-----------------------11---------------------------
/*
11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
*/       

// var cities = ["Karachi", "Lahore", "Quetta", "Peshawar" , "Faisalabad" ,"Islamabad"];
// var selectedCities = cities.slice(1, 4); 
// document.writeln(`Cities : ${ cities} <br>`);
// document.writeln(`Selected Cities :${selectedCities}`);

//-----------------------12--------------------------
/*
12. Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)
*/

// var string  = ["This", "is", "my", "cat"];
// var singleString = string.join(" ");
// document.writeln(`Array: <br> ${string} <br>
//     String: <br> ${singleString}`);

//----------------------13--------------------------
/*
13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)
*/
// var devices = ["keyboard", "mouse", "printer", "monitor"];
// var myvar = "Out";
// for(var i = 0; i < devices.length; i++){
//     document.writeln(`${myvar}<br>
//         ${devices[i]}<br>`);
// }

//-----------------------14--------------------------
/*
14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out)
*/

// var devices = ["keyboard", "mouse", "printer", "monitor"];
// var myvar = "Out";
// for(var i = devices.length-1; i >= 0 ; i--){
//     document.writeln(`${myvar}<br>
//         ${devices[i]}<br>`);
// }

//-----------------------15--------------------------
/*
15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:
*/

var phone_manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.writeln(`<ul type = none class = dropdown>Hover here`)
for(i = 0; i < phone_manufacturers.length; i++){
    document.writeln(`<li>${phone_manufacturers[i]}</li>`);
}
document.writeln(`</ul>`);