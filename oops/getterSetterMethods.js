class Emp_info{

constructor(Emp_name,emp_id){
  this.Emp_name=Emp_name;
  this.emp_id=emp_id;

}

getEmpName(){
   return this.Emp_name;
}
setEmpName(newName){
   newName=newName.trim();
   
    if(newName==="" || newName===" ") {
       this.Emp_name = newName;
       return 'Name Can not be empty';
    }
    this.Emp_name=newName;
    return true;
}
getEmpId(){
   return this.emp_id;
}
}
let Emp={
  name:'Ram',
  id:'221',
  age:'22',
  Department:'Developer'
};
let Emp_data=new Emp_info(Emp.name,Emp.id,Emp.age,Emp.Department);
console.log(Emp);
console.log(Emp_data.getEmpId())
let newEmpName="Raju Shah";
console.log(Emp_data.getEmpName())
let bool=Emp_data.setEmpName(newEmpName);
console.log(bool);
console.log(Emp_data.getEmpName())
let bool2=Emp_data.setEmpName(" ");
console.log(bool2)
console.log(Emp_data.getEmpName());
