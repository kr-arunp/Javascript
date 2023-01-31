//task is to calculate the area,diameter and circumference of the circle
//we have give an array of number that denotes the radiuses of the circle

let Radius=[1, 2, 3, 4, 5];

//Calculate the Area of the circle

let getArea =(Radius)=>{
 let area=[];
 for(let i of Radius){
	 area.push(Math.PI*i*i);
 }
 return area;
}

//calculating the circumference of the circles

let getCircumference = (Radius) => {
  let Circumferences = [];
  for (let i of Radius) {
    Circumferences.push(2 * Math.PI * i);
  }
  return Circumferences;
};
//lets calculating the diameters of the circles

let getDiameters=(Radius) => {
  let Diameters = [];
  for (let i of Radius) {
    Diameters.push(2 * i);
  }
  return Diameters;
}
console.log(`Areas of the circles are ${getArea(Radius)}`);
console.log(`Circumferences of the circles are ${getCircumference(Radius)}`);
console.log(`Diameters of the circles are ${getDiameters(Radius)}`);
//Using the Higher Order Functions

let Compute=(Radius,Logic)=>{
let area=[];
 for(let i of Radius){
	 area.push(Logic(i));
 }
 return area; 
}

//calculate the area 
let FindArea=(Radius)=>{
	return Math.PI*Radius*Radius;
}

//Calculate the circumference
let FindCircumference=(Radius) => {
	return 2*Math.PI*Radius;
};
//Calculate the Diameter
let FindDiameter = (Radius) => {
  return 2* Radius;
};
//print all

console.log(`Areas of the circles are ${Compute(Radius,FindArea)}`);
console.log(
  `Circumferences of the circles are ${Compute(Radius,FindCircumference)}`
);
console.log(`Diameters of the circles are ${Compute(Radius,FindDiameter)}`);
