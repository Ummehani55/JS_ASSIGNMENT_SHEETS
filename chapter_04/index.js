//JS_ASSIGNMENT_SHEET_04

//---------------01----------------
//1.Declare 3 variables in one statement.
// var a, b, c;

//---------------02----------------
//2. Declare 5 legal & 5 illegal variable names.
//legal
// var userName;
// var username123;
// var user_name;
// var $username;
// var USERNAME;

//illegal
// var @username;
// var user name;
// var -username;
// var 5username;
// var !username;

//----------------03----------------
/*3. Display this in your browser
a) A heading stating “Rules for naming JS variables”
b) Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable
c) Variables must begin with a ______, ______ or _____. For example $name, _name or name
d) Variable names are case _________
e) Variable names should not be JS _________*/

document.writeln(`
    <h1><b>Rules for naming JS variables</b></h1><br>
    Variable names can only contain <b>number, $, letters and _</b>. For example $my_1stVariable<br>
    Variables must begin with a <b> $, _ or letters</b>. For example $name, _name or name<br>
    Variable names are case <b> sensitive </b><br>
    Variable names should not be JS <b>keywords</b><br>
  `)