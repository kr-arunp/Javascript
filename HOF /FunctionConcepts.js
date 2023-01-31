//Function Statement in js

/*
A function statement in JavaScript is a block of code that defines a named function. 
It specifies the name of the function, the parameters it takes (if any),
and the statements that are executed when the function is called.
Function statements can be called multiple times, 
which makes them reusable and helps to keep your code organized. 
The syntax for a function statement is as follows:
*/

//A function can take inputs (known as parameters) 
//and return an output (return value).
function getName(name){
	return name;
}
console.log(getName("Arun"));

//the main difference between the function Declaration and
//expression is that the function declaration is hoisted while 
//function expression is  not hoisted
//Hoisted means we can call the function before declaration in 
//the code

//eg
//Calling the function before the declarations

console.log(AddFunctionDeclaration(12, 12)); //24 ,as they are Hoisted


//Function Expression
let AddFunctionExpression=(a, b)=>{
	return a+b;
}
console.log(AddFunctionExpression(12, 12)); 
//undefined or Error(on NodeJs) as they are not Hoisted 
//Function Declaration or Function Statement both are same
function AddFunctionDeclaration(a, b){
	return a+b; 
}

//Anonymous Function
//a function declaration or statement with out name
//Below function generates an Error
// function(a, b){
// 	return a+b;
// } 

//Named  Function Expression 

//It is function expression without anonymous function declaration
//or with name 
 
let  add=function getAddition(a,b){
	return a+b;
}
console.log(add(12,23));

console.log(getAddition(11,11))  //error
