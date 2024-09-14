
// Array Representation
a = [1000,'Neel','develop[er','Kochi',25000, 3]
// how array data is stored  a = [1000, '' , 'developer']

//[id , name , designation , location , salary , experience]

//In case of arrays we do not have clarity that how data is stored
// In case of objects we have a clarity that how data is stored

// objects representation
employee = {id:1000, name:'noel', desgn:'developer',loc:'kochi',sal:25000,exp:3}

//display 

console.log(employee)
// Array accesssing
console.log(a[1]);
// Object accessing
console.log(employee["name"])
console.log(employee.name)

console.log('---------------------------------')
// IN 
for(let key in employee){
    console.log(key)
}
console.log('---------------------------------')

// accessing the data of variable
for(let key in employee){
    console.log(employee[key])
}

//w.a.p to print wheather loc key is present in the object or not
ispresent=false
for(let key in employee){
    if(key == 'loc'){
          ispresent=true
    }
}
console.log(ispresent?'present':'not present')

// alternative method
console.log('loc' in employee)
console.log(`loc is :${'loc' in employee ? 'present': 'not present'}`)

// adding age to employee object
employee['age']=30
console.log(employee)

// w.a.p to check wheather employee geneder key is present in the object if yes print 'yes' otherwise print not and add key ass "empGender" with value as "Male"
ispresent=false
for(let key in employee){
    if(key == 'empGender'){
        ispresent=true
}else{
   employee['empGender']='male'
}
console.log(ispresent? "present": "not presnt")
}

console.log(employee)

//-------------------------------------------------
'empGender' in employee? console.log('present'):(employee[empGender]='male',console.log('not present'),console.log( employee))
console.log('---------------------------')

//UPDATING THE VALUE IN OBJ.

employee['empGender']='female'
employee['age']+=5
console.log(employee)

employee['status']='isActive'
console.log(employee)

console.log(delete employee.status? (console.log('deleted successfully'),console.log(employee)):console.log('not able to delete suceessfully'))
console.log(employee)

delete employee.status? (console.log("deleted successfully"), console.log(employee)) : console.log("not able to deklete successfully")