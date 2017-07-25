// Answer the following questions in this file using comments without running the code

// 1.
// What does `givenName` equal right now?
let givenName;
// A: undefined;


// 2.
// What is `givenName` set to right now?
givenName = 
// A: "Tim";


// 3.
// What is `givenName` set to right now?
givenName = givenName;
// A: "Tim";


// 4.
// What is `greeting` set to?
let greeting = "Hello, how are you? " + givenName;
// A:"Hello, how are you? Tim";


// 5.
// What is `math` set to?
let high = 50;
let low  = 10;
let math = high - low;
// A: 40;


// 6.
// What is `math` set to?
math = high - "5";
// A: 


// 7.
// Create a variable to calculate Tim's age
// The answer should read "Tim is 33 years old"
// The answer shoud not be written in a comment.
let born = 1984;
let today = 2017;
// A:Tim is(today-born)years;
     Tim is (1984-2017)years;


// 8.
// Adjust this code. Store some information in the following variables.
// A:
let yourName= Varinder;  
let instructorName= Gargi;


// 9.
// Update the variables `yourName` and `instructorName` so the expression below reads correctly.
// A:  let statement = Varinder + "is taking a class at The Iron Yard, my instructor's name is" + Gargi;


// This statement should read correctly
let statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;


// 10.
// We've created a variable named after each primitive type.
// Use the `=` operator to assign a value to each variable matching the type in the name.
let myNumber; 1;
let myString;Varinder
let myBoolean; true
// This one's a little tricky - think carefully about what makes a value "undefined"!
let myUndefined; ""
// A:


// For questions 11 - 19: List which boolean value will be stored in each variable. (Remember: `==` does not check data type)

// 11.
let x = (false == 0);
// A. True


// 12.
let y = (false == "");
// A.True


// 13.
let z = (0 == "");
// A. False


// 14.
let a = (null == null);
// A.True


// 25.
let b = (undefined == undefined);
// A.False


// 16.
let c = (undefined == null);
// A.False


// 17.
let d = (null == false);
// A. False


// 18.
let e = (NaN == null);
// A. False


// 19.
let f = (NaN == NaN);
// A.True


// 20.
// Fix the `if...else` statement below by adding an `if` keyword and conditional expression.
// Use the variable `thirsty` as part of your conditional expression.
// A:
if thirsty = true;

{
  console.log("I'm parched!");
} else if {False=='thirsty';
  console.log("I've had enough to drink.");
}

// For questions 21 - 29 list which statement will be logged.

// 21.
let x;

if(x){
	console.log("True!");
} else if {False;
	console.log("False");
}
// A:


// 22.
if(""){
	console.log("True!");
} else {
	console.log("False!");
}
// A:


// 23.
// this expression will set x to NaN
let x = 1 * undefined;

if(x){
	console.log("True!");
} else {
	console.log("False!");
}
// A:


// 24.
if(false){
	console.log("True!");
} else {
	console.log("False!");
}
// A:


// 25.
if(-5 && 5){
	console.log("True!");
} else {
	console.log("False!");
}
// A:


// 26.
if("Hello World!"){
	console.log("True!");
} else {
	console.log("False!");
}
// A:


// 27.
if({}){
	console.log("True!");
} else {
	console.log("False!");
}
// A:


// 28.
if({name: "Yehuda Katz"}){
	console.log("True!");
} else {
	console.log("False!");
}
// A:


// 29.
if(new Date()){
	console.log("True!");
} else {
	console.log("False!");
}
// A:


// 30.
// Link this file to the sibling `index.html` document, open the file in your browser and make sure there are no errors in your console.
