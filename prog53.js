a= [[2,33],[20,15],[5,14],[13,25]]

// print all number less than 15 
for(let subarray of a){
   // console.log(subarray)
    for(let num of subarray){
        console.log(num)
    }
}

//print sum of all elements inside an array
sum=0
for(let subarray of a){
    // console.log(subarray)
     for(let num of subarray){
         console.log(num)
         sum+=num
     }
 }
 console.log(sum)


 console.log("-------------------------------------")

 //to print all odd num in an array
arrayx = []
sum=0
for(let subarray of a){
    // console.log(subarray)
     for(let num of subarray){
        onCheck =false
         if(num%2!==0)
         {
            onCheck =true
         }
         if(onCheck==true){
            arrayx.push(num)
         }
     }
 }
 console.log(arrayx)



//  a= [[2,33],[20,15],[5,14],[13,25]]

//  b= a.flat(2)
//  console.log(b)

// w . a. p to print odd nums in an array 
console.log("-------------------------------------------------------------")


arrayx = []
for(x of a){
    for(num of x){
        isCheck = false
        if(num % 2 != 0){
           isCheck = true
        }
        if(isCheck== true){
            arrayx.push(num)
        }
    }
}

console.log(arrayx)
