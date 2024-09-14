//oops
class Employee{
    Empname
    EmpDesg 
    EmpLoc 

    //Constructor 
    constructor(name , desg , loc ){
        this.Empname = name;
        this.EmpDesg = desg;
        this.EmpLoc = loc;
    }
    //methods 
    display(){
        console.log(`Employee name is :${this.Empname}
            and employee designation is ${this.EmpDesg}`);
    }
}

const emp1 = new Employee('Neel','developer','Kochi')
emp1.display()

//w.a.p to craete a class with name a student and display its features 
class Student{
    Stname
    StAge
    StRollno

    constructor(name , age , rollno ){
        this.Stname = name 
        this.StAge = age
        this.StRollno = rollno
    }

    display(){
        console.log(Stname,
            StAge,
            StRollno)
    }

}
        const ch1 = new Employee('Amin','27','25')
        ch1.display()
