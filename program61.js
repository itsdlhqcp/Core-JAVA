a=[1000,'Noel','developer','kochi',25000,3]

//object
employee = {id:1000,name:'Noel',desg:'developer',loc:'Kochi',bud:'25000',no:'3'}

//display 

console.log(employee)
console.log(a[1]);
console.log(employee.id)
console.log(employee["name"])

for(let key in employee){
    console.log(employee[key])
}

// w.r .t a program to print whaether loc key is present in object or not
isPres = false
for(let key in employee){
    if(key=='loc'){
        isPres = true
    }
}

console.log(isPres?'present':'not present');

console.log('loc' in employee);
console.log(`loc is: ${'loc' in employee ?
    'present':'not present'}`);

    console.log('---------------------------')

    employee["age"]=35
    console.log(employee);


    //w.a.p to check whaether Gender key is present or not in object 
    isPres = false
    for(let key in employee){
      if(key=='xx'){
          isPres = true
         }
      else{ 
        employee["xx"]=11
      }
     }
    console.log(isPres?'present':'not present');
    console.log(employee);

    'empGender' in employee? console.lo('present'):(employee["empGender"]='Male',console.log(employee));

  employee["status"]='Active'
  console.log(employee);

  employee["status"]="InActive"
  console.log(employee);

console.log(delete employee.status?(console.log('deleted successfully'),console.log(employee)):console.log('not able to delete'))