//JS_ASSIGNMENT_SHEET_17-20

//-------------------------01---------------------------
/*1. Declare and initialize an empty multidimensional array. (Array of arrays)*/
var array = [
    [
        [],
        [],
    ],
]

//-------------------------02--------------------------
/*2. Declare and initialize a multidimensional array representing the following matrix:*/
var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1],
]

//-------------------------03-------------------------
/*3. Write a program to print numeric counting from 1 to 10.*/

// for(i = 1; i <= 10; i++){
//     document.writeln(`${[i]}<br>`);
// }

//-------------------------04--------------------------
/*4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.*/

// var table_number = prompt("Enter any number to show its multiplication table");
// var table_length = prompt("Enter length multiplication table");
// document.writeln(` Multiplication Table of ${table_number}<br>
//     Length: ${table_length}<br>`);

// for(var i = 1; i <= table_length; i++){
//     document.writeln(`${table_number} X ${[i]} = ${table_number*[i]}<br> `);
// }

//-------------------------05--------------------------
/*5. Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]*/

// var fruits =["Apple", "Banana", "Mango","Orange", "Strawberry"];
// for(i = 0; i <= fruits.length-1; i++){
//     document.writeln(`${fruits[i]}<br>`);
// }
// for(i = 0; i <= fruits.length-1; i++){
//     document.writeln(`Element at ${[i]} is ${fruits[i]}<br>`);
// }

//-------------------------06--------------------------
/*
6. Generate the following series in your browser. See example output. 
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
*/

document.writeln(`<b>Counting</b><br>`)
for(i = 1; i <= 15; i++){
    document.writeln(`${[i]},`);
}

document.writeln(`<br><b>Reverse Counting</b><br>`)
for(i = 10; i >= 1; i--){
    document.writeln(`${[i]},`);
}

document.writeln(`<br><b>Even</b><br>`)
for(i = 0; i <= 20; i++){
    if(i % 2 == 0)
    document.writeln(`${[i]},`);
}

document.writeln(`<br><b>Odd</b><br>`)
for(i = 0; i <= 20; i++){
    if(i % 2 != 0)
    document.writeln(`${[i]},`);
}

document.writeln(`<br><b>Series</b><br>`)
for(i = 1; i <= 20; i++){
    if(i % 2 == 0)
    document.writeln(`${[i]}k,`);
}

//-------------------------07------------------------------
/*
7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example:
*/

// var bakeryItems =["cake", "apple pie", "cookie", "chips", "patties"];
// var user_want = prompt("Find you favorite item ... \ncake---apple pie---cookie---chips---patties").toLowerCase();
// var getIndex = bakeryItems.indexOf(user_want);

// if(getIndex === -1){
//     alert(`We are Sorry ${user_want} is not available in our bakery`);
// }else{
//     alert(`${user_want} is available at index ${getIndex} in our bakery`);
// }


//-------------------------08-------------------------------
/*
8. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].*/

// var number = [24, 53, 78, 91, 12];
// var max = number[0];
// for(var i = 1; i < number.length; i++){
//     if(number[i] > max){
//         max = number[i]
//     }
//     console.log(max);
// }

//-------------------------09-------------------------------
/*
9. Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]*/

// var number = [24, 53, 78, 91, 12];
// var min = number[0];
// for(var i = 1; i < number.length; i++){
//     if(number[i] < min){
//         min = number[i]
//     }
//     console.log(min);
// }


//-------------------------10-------------------------------
/*
10. Write a program to print multiples of 5 ranging 1 to 100.*/

// var num = +prompt("Enter a number to print its multiples from 1 to 100");
// var output = " ";
// for(var i = 1; i <= 100; i++){
//     if (i % num === 0){
//         output+= i + ",";
//     }
// }
// document.writeln(`<br>Multiples of ${num} from 1 to 100 are: \n${output}`);