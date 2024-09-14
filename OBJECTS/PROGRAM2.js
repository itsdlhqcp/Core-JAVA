var car = {
    name:"Baleno",
    model:"Hatch Back",
    manufacturer:"Maruti",
    price:"2005",
    color:"Blue"
}

//w.a.p to display thae car name and manufacturer name

console.log(car.name, car.manufacturer)

//w.a.p to check if model key is available in car , if the display the model key

"model" in car ? console.log(car.model) : console.log("model key is not available in the car")

//add "variant" key to car object with value as manual

car["variant"]="manual"
console.log(car)

//insert another value as "automatic" to varient key

car["variant"]="automatic"
console.log(car)

// add "color" key to the object with value as "red", "white","blue"

car["color"]= ["red","white","blue"]
console.log(car)

var student = {
    name:"Rahul",
    age:20,
    marks:90,
    grade:"A",
    "class name":"XII"
}

//w.a.p to display the student name and his age

console.log(student.name , student.age)

//w.a.p to check if grade key is available in student , if the display the model key

"grade" in student? console.log("grade is available") :  student['grade']="C"
console.log(student)

//add "variant" key to student object with value as XNo

student["XNo"] = "7"
console.log(student)

//insert another value as "29" to  RollNo key

student["XNo"]="2"
console.log(student)

// add "bage color" key to the object with value as "red", "white","blue"

student["badge color"]= ["red" , "white" , "blue"]
console.log(student)

