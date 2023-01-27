let fruits = ["apple", "banana","Mango", "Orange"]; 
console.log(fruits)
//Method-1
//push(item):-  this method is used ro add the item at the end of the Array.
fruits.push('pineapple')
console.log(fruits)
//method-2 pop():- it removes the item at the end of the Array
fruits.pop();
console.log(fruits);
//method-3  shift():- it removes the item from the start of the Array
fruits.shift();
console.log(fruits);
//method-4 unshift():- it add an item at the start of the Array
fruits.unshift('apple');
console.log(fruits)
//method-5 splice():- The slice() method returns selected elements in an array, as a new array.
/*
The slice() method selects from a given start, up to a (not inclusive) given end.

The slice() method does not change the original array.
it removes the item at the the specified position 
*/
console.log(fruits)
fruits.splice(1,2)
console.log(fruits);
//method method-6 : concat()
//it is used to add //combine //joins the two arrays together into new Array
//it does not change the original array
let prices=[25, 35, 40, 45];
let newArray=fruits.concat(prices);
console.log(newArray);
//method :7 copyWithin()
var arr=["AngularJS","Node.js","JQuery","Bootstrap"] 
//method-8 every()
const ages = [32, 33, 36, 40,22,32,33,26,23,23,45];
let all18=ages.every((i)=>{
    return i>=18
})
console.log(all18);

//method -9  fill() it basically modified the arrays, it overwrites the array value from start to end if specified
let arr1=[1,2,3,4,4,5,6,7,8,9,10,11,12,13,14]
arr1.fill(2,3,6);
console.log(arr1);
// Array’s splice() method
//this method can be used to insert, delete replace the item in the array 

//Deleting elements using JavaScript Array’s splice() method
/*
it returns an new array containing items that are deleted or replaced and insert 
and given array will modified.
*/
let num_arr=[1, 2, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8,];
let res1=num_arr.splice(8,6)
//second argument denotes the number of elements that will be deleted from the position that is 
//available at the first argument
console.log(num_arr)
console.log(res1)

let scores = [1, 2, 3, 4, 5];
let deletedScores = scores.splice(0, 3);
console.log(scores)
console.log(deletedScores);
//for insertion we need to pass the three arguments 
scores.splice(2, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8);
console.log(scores);
//replace the item
scores.splice(2, 1, 12);
console.log(scores)
//we can replace the the multiple items 
scores.splice(2,2,12,23)
console.log(scores);

//indexOf
//it is used to search an item in the array
//it returns the first occurrence of the item
let idx1=scores.indexOf(12);
console.log(idx1)
console.log(scores.indexOf(1231313));
//we can pass the index num where we want to make a search 
console.log(scores.indexOf(12, 2));
console.log(scores.indexOf(12, 3));
//search item,fromIdex

