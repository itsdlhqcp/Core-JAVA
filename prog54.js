a= [[2,33],[20,15],[5,14],[13,25]]

// b= a.flat(2)
// console.log(b)

b = a.flat(2)
console.log(b)

//nested array

// [id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

console.log("-------------------------------------")

// print all employee name 
for (emp of employee){
    console.log(emp[1])
}

console.log("------------------------------------------")
//print total numbers of employee
// count=0
// for (emp of employee){
//     count++
// }
// console.log(count)

count = 0
for(emp of employee){
   count++
}
console.log(count)

console.log("------------------------------------------")
//print developer employee details

// for (emp of employee){
//   if(emp[2]=='developer'){
//     console.log(emp)
    
//    }
 
//  }

for(emp of employee){
   if(emp[2]=='developer'){
      console.log(emp)
   }
}

console.log("----------------------------------------------")

 //print employee whose salary > 30000
//  for (emp of employee){
//     if(emp[4] > 30000){
//         console.log(emp[1])
       
//     }
    
//     }


    for(emp of employee){
      if(emp[4]>30000){
         console.log(emp[1])
      }
    }

 // print details of employee Laisha

   // for (emp of employee){
   //  if(emp[1] == 'Laisha'){
   //    console.log(emp)
       
   //  }
    
   //  }

   for(emp of employee){
      if(emp[1]=='Laisha'){
         console.log(emp)
      }                 
   }

//arrange employee based on their salary in descending order
//sort

descendingOrder = employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
console.log(descendingOrder);


//arrange employee based on their experience in ascending order

ascendingOrder = employee.sort((emp1,emp2)=>emp1[5]-emp2[5])
console.log(ascendingOrder);

// print the employ name whose have the higest salary
// descendingOrder = employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
// console.log(descendingOrder[0]);

decOr = employee.sort((emp1,emp2)=>emp1[5]-emp2[5]);
console.log(decOr);

// w. a .p to print new array having the cubes of elements in a given array 

console.log("--------------------------------------------------------------------------")
console.log("--------------------------------------------------------------------------")




// // w. a.p to create a new array with elements in the following manner 

// if the element is less than 13 increment by 1

//w.a.p to print developer employees details 
// console.log('-------------------------------------');

// employee.filter(n=>n[2]=='developer').forEach((item)=>
// console.log(item));

employee.filter(n=>n[2]=='developer').forEach((item)=>console.log(item))

console.log('-------------------------------------');

// //w. a. p print employee salary > 30000
//  employee.filter((emp)=>emp[4]>30000).forEach((item)=>console.log(item[1]))
//  console.log('-------------------------------------');

employee.filter(n=>n[4]>30000).forEach((item)=>console.log(item))

//  //W.A.P TO PRINT EMPLOYEE WHOSE NAME IS LAISHA

// Laisha=employee.find((emp)=>emp[1]=='Laisha')
// console.log(Laisha)

employee.filter(n=>n[1]=='Laisha').forEach((item)=>console.log(item));
console.log('-------------------------------------');

// //W. A.P to print employee whose salary is highest 
//  console.log('-------------------------------------');

// highSal = employee.reduce((emp1,emp2)=>emp1[4]>emp2[4]?emp1:emp2)
//  console.log(highSal)

