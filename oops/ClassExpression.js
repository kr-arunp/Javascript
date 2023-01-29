let Student =class{
   constructor(Name){
       this.Name=Name;
   }
   getName(){
   return this.Name;
   }

}
let s1=new Student("Arun");

console.log(s1.getName())
console.log(typeof s1);

console.log(typeof Student)
//First class Citizen 
//it means that we can pass a class into a function ,return it from a function and assign it to the class
//a variable
let msg=getObj(class {
    sayHi(){
    console.log("Hello World");
    }
});

function  getObj(aClass){
return new aClass; 
}
let res=msg.sayHi();
console.log(res)