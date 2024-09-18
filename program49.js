a=[10,2,4,6,11,12]
//arrange the given array in ascending order
console.log(a);
// method - sort 
//syntax
// array.sort((a,b)=>a-b)= ascending
// array.sort((a,b)=>b-a)= descending

   const x = a.sort((a,b)=>a-b)   //ascending
   console.log(x);

   const y = a.sort((a,b)=>b-a)
   console.log(y); //descending

// c=a.sort((n1,n2)=>n1-n2)
// console.log(c);

// d=a.sort((n1,n2)=>n2-n1)
// console.log(d);

// // w. a. p to check wheather 2 is present in array or not
// arr= [10,15,2,3,5]

// searchItem = 2
// isPresent= false
// for (num in arr){
//     if(num==searchItem){
//         isPresent=true
//         break
//     }
// }

// console.log(isPresent?'PRESENT':'NOT PRESENT');

arr= [10,15,2,3,5] 

searchItem = 2 
isAvailabkle = false 
for(item of arr){
    if(item==searchItem){
        isAvailable = true
    }
}
console.log(isAvailable ? 'PRESENT' : 'Not present')



// // good to go with it

// a=[10,11,12,2,3,4]
// // w.a.p to check 2 is p[resnt or not