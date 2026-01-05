var a=100;
while(a>=50){
    if (a%13==0)
        console.log(a);
    a--;
}
class Student

{

constructor (name, year){

this.name=name

this.year = year

}


age()

{

let date= new Date();

return date.getFullYear()- this.year;

}

}
student1=new Student("VIDHISHA",2012)

student2=new Student("RIDHI",2008

)
console.log("STUDENT NAME IS:"+student1.name+"  STUDENT AGE IS :"+student1.age())
console.log("STUDENT NAME IS:"+student2.name+"   STUDENT AGE IS :"+student2.age());

class Car{
    constructor(porsche){
        this.brand=porsche;
    }
    present(){
        return("I have a car having brand name"+this.brand)
    }
}
class supercar extends Car{
    constructor (porsche,top_speed){
      super(porsche);
      this.top_speed=top_speed;
    }
    show(){
        return("This  car from "+this.brand+"and its top_speed"+this.top_speed)
    }
}
obj1=new supercar("Audi", 300);

console.log(obj1.show())

console.log(obj1.present())



