class StuName{ 
// let prop = value; 
constructor(Name){
   this.Name=Name;
}
getName(){
  return this.Name;
}
setName(newName){
    newName=newName.trim();
    if(newName=="" || newName===" ")  {
       console.log("Name can not be empty");
       return Error;
    }
    this.Name=newName;
    return "Success";
 }
}
let s1=new StuName("Aakash");
console.log(s1.getName())
s1.setName("Raju");
console.log(s1.getName());
