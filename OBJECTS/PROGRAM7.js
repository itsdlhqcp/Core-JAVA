// INHERITANCE OF THE CLASSES
class A {
    bike(){
           console.log("My bike is duke");
    }
}

class B extends A {
    display(){
        console.log("Inside class B");
    }
}

const c = new B()

c.bike();


// inheritance by objects
baleno = {
    model:"hatch back",
    varient:["manuel","automatic"],
    manufacturer:"maruti"
}

glanza={
    manufacturer:"toyota"
}

glanza.__proto__=baleno
console.log(glanza.manufacturer);
console.log(glanza.model)

console.log("---------------------------------")
// Mult-level  inheritance

class X {
    methodx(){
        console.log("Inside class A");
    }
}

class Y extends X {
    methody(){
        console.log("Inside class B");
    }
}

class Z extends Y {
    methodz(){
        console.log("Inside class C");
    }
}

const obj = new Z()
obj.methodz()