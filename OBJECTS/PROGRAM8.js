class X {
    //sum of input numbers
   add(...arg){
    const sum = arg.reduce((n1,n2)=>n1+n2)
    console.log(sum);
   }
}

const obj = new X()
obj.add(1,2,3,4,5)


//EXAMPLE OF POLYMORPHISM 
// here thae last method is executed

class A {
    method1() {
        console.log('method1 in A')
    }
}

class B extends A {
    method1() {
        console.log('method1 in B')
    }

    method1() {
        console.log('method1 in C')
    }
}

const x = new B()
x.method1() //method1 in B