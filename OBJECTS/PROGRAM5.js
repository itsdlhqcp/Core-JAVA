class Employee{
    //properties
    Empname 
    EmpDesign 
    EmpLoc 

    //Constructors
    constructor(name , desg , loc){
       this.Empname = name;
       this.EmpDesign = desg;
       this.EmpLoc = loc;
    }

    //Methods
    display(){
        console.log(`Employee name is :${this.Empname}
            and employee designation is ${this.EmpDesign}
            and his location at ${this.EmpLoc}`)
    }

}

const emp1 = new Employee('Neel','Developer','Kochi')
emp1.display()

// w.a.p a to create a classs with name as student and display its features

class student {
    //property
     stdName
     stdAge
     stdLoc
     
    //constructor 
     constructor(name , age , loc){
        this.stdName = name
        this.stdAge = age 
        this.stdLoc = loc
     }

    //methods
    display(){
        console.log(`Sudent name is : ${this.stdName} as his Age is ${this.stdAge} and his location at ${this.stdAge}`)
    }

}

const st = new student('Neel','25','BANGLORE')
st.display()