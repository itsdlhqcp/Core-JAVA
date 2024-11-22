// class Employee{
//     //properties
//     Empname 
//     EmpDesign 
//     EmpLoc 

//     //Constructors
//     constructor(name , desg , loc){
//        this.Empname = name;
//        this.EmpDesign = desg;
//        this.EmpLoc = loc;
//     }

//     //Methods
//     display(){
//         console.log(`Employee name is :${this.Empname}
//             and employee designation is ${this.EmpDesign}
//             and his location at ${this.EmpLoc}`)
//     }

// }

// const emp1 = new Employee('Neel','Developer','Kochi')
// emp1.display()

class Employee {
    //property
     EmpName;
     EmpDesign;
     EmpLoc;
    //constructor
    constructor (name, design, loc){
        this.EmpName = name;
        this.EmpDesign = design;
        this.EmpLoc = loc;
    }
    //method
    display(){
        console.log(`The employee name is : ${this.EmpName}
            the employee design is  : ${this.EmpDesign}
            and the employee location is : ${this.EmpLoc}`)
    }
}

const emp1 = new Employee("alen", "hex", "kara");
emp1.display();






// w.a.p a to create a classs with name as student and display its features

// class student {
//     //property
//      stdName
//      stdAge
//      stdLoc
     
//     //constructor 
//      constructor(name , age , loc){
//         this.stdName = name
//         this.stdAge = age 
//         this.stdLoc = loc
//      }

//     //methods
//     display(){
//         console.log(`Sudent name is : ${this.stdName} as his Age is ${this.stdAge} and his location at ${this.stdAge}`)
//     }

// }

// const st = new student('Neel','25','BANGLORE')
// st.display()

class student {
    stdName;
    stdLoc;
    stdDesig;

    constructor(name,loc,design){
         this.stdName = name;
         this.stdLoc = loc;
         this.stdDesig = design;
    }

    display(){
        console.log(`Student name is : ${this.stdName} and 
            student location is: ${this.stdLoc}
            and student designation is : ${this.stdDesig}`)
    }
}

const st1 = new student("ani","iouy","fsfxt");
st1.display();