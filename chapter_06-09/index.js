//JS_ASSIGNMENT_SHEET_06-09

//------------------------01-------------------------------
//1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

// var a = 5;
// document.writeln(`
//     <h3>Answer # 01</h1>
//     <h4>Result</h4>
//     The value of a is: ${a}<br>
//     <b>------------------------</b><br>
//     The value of ++a is ${++a}<br>
//     Now the value of a is ${a}<br><br>
//     The value of a++ is ${a++}<br>
//     Now the value of a is ${a}<br><br>
//     The value of --a is ${--a}<br>
//     Now the value of a is ${a}<br><br>
//     The value of a-- is ${a--}<br>
//     Now the value of a is ${a}<br><br>
//     `);

    
//-------------------------02-------------------------------
/*2. What will be the output in variables a, b & result after execution of the following script: 
var a = 2, b = 1; 
 result = --a - --b + ++b + b--; 
Explain the output at each stage: 
--a; 
--a - --b; 
--a - --b + ++b; 
--a - --b + ++b + b--;
*/

//  var a = 2;
//  var b = 1;
//  var result = --a - --b + ++b + b--; 

// document.writeln(`
//     <h3>Answer # 02</h1>
//     a is ${a}<br>
//     b is ${b}<br>
//     result is ${result}
//     `);

//--------------------------03--------------------------
//3. Write a program that takes input a name from user & greet the user.

// var username = prompt("Enter your Name.")
// document.writeln(`
//     <h3>Answer # 03</h1>
//     Hey, ${username}<br>`);

//--------------------------04--------------------------
// 04 nh hai

//--------------------------05--------------------------
/*
5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
*/
// document.writeln(`<h3>Answer # 05</h3>`);
// var table = +prompt("Enter any number.",5);

// for(var i = 1; i <= 10; i++){
//     document.writeln(`
//     ${table} X ${i} = ${table*i}<br>`)

// }

//---------------------------06-----------------------
/*
6. Take
a) Take three subjects name from user and store them in 3 different variables.
b) Total marks for each subject is 100, store it in another variable.
c) Take obtained marks for first subject from user and stored it in different variable.
d) Take obtained marks for remaining 2 subjects from user and store them in variables.
e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
*/
// var subject_1 = prompt("Enter subject 1"); 
// var subject_2 = prompt("Enter subject 2"); 
// var subject_3 = prompt("Enter subject 3");

// var marks_1 = +prompt("Enter marks of subject 1");
// var marks_2 = +prompt("Enter marks of subject 2");
// var marks_3 = +prompt("Enter marks of subject 3");

// var total = 100;
// var total_marks = marks_1 + marks_2 + marks_3;

// document.writeln(`
//     <h3>Answer # 06</h3>
//     <table border="2" celpadding="4" celspacing="2" border-collapse="collapse">
//         <tr align="center">
//             <th>Subjet</th>
//             <th>Total Marks</th>
//             <th>Obtained Marks</th>
//             <th>Percentage</th>
//          </tr>

//          <tr align="center">
//             <td>${subject_1}</td>
//             <td>${total} </td>
//             <td>${marks_1}</td>
//             <td>${(marks_1/total)*100}%</td>
//          </tr>

//          <tr align="center">
//             <td>${subject_2}</td>
//             <td>${total} </td>
//             <td>${marks_2}</td>
//             <td>${(marks_2/total)*100}%</td>
//          </tr>

//          <tr align="center">
//             <td>${subject_3}</td>
//             <td>${total} </td>
//             <td>${marks_3}</td>
//             <td>${(marks_3/total)*100}%</td>
//          </tr>
         

//     </table>`)