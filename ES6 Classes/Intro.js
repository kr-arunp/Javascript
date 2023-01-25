//class declaration
class Knackroot{

constructor(add,Name,num_emp){
   this.add=add;
   this.Name=Name;
   this.num_emp=num_emp;

}
getName(){
   return this.Name;
}
getAddresse(){
    return this.add;
}

}
let kr=new Knackroot('Near Sal Hospital','Knackroot LLP',59);

let Name=kr.getName();
console.log(Name);
console.log(Name.toString());
console.log(kr.getAddresse());
