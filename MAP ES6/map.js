// let mymap=new Map();

let mymap=[1,2,3,4,5,6,7,8,9]
mymap.forEach((e)=>{
  console.log(e)
})

let mp=new Map();
mp.set('age',22);
mp.set('name','arun');

console.log(mp)

for(let [key,value] of mp){
  console.log("Key is +"+key+"Value is +"+value)
}
let res=mp.delete('hade');
console.log(res);
// mp.clear();
console.log(mp);


for(let i of mp.values()){

  console.log(i);
}
for(let i of mp.keys()){
  console.log(i);
}
console.log("this is entries iterator")
for(let i of mp.entries()){
  console.log(i[0]);
  console.log(i[1]);
}
let a=[1,2,3,4,4];
let b=[12,23,23,4,3,4];
let c=[...a,'Arun',...b];
console.log(c)
let items=c.map((e)=>e*2)
console.log(items)

let str="Arun Kumar         "

str.padStart(10,'Hi I Am');
console.log(str)

