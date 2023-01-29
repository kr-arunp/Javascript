/** @format */
/*
Higher-order functions in JavaScript are a special category of functions 
that either accept functions as an argument or return functions.

On the other side, if the function uses only primitives or objects
as arguments or return values, these functions are first-order.

it provides code reusability 
*/
function calculate(operation, initialValue, numbers) {
  let total = initialValue;
  for (const number of numbers) {
    total = operation(total, number);
  }
  return total;
}

function sum(n1, n2) {
  return n1 + n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

console.log(calculate(sum, 0, [1, 2, 4])); // => 7
console.log(calculate(multiply, 1, [1, 2, 4])); // => 8

//map array function is a HOF which accepts a mapper fun
//and returns a new array 
let arr=[1, 2, 3, 4, 5];

let DoubleArray=arr.map(function mapper(ele){
	return ele*2;
})
console.log(DoubleArray);
