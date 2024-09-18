a=[10, 11, 12, 13, 14, 15]

// sum= a.reduce((n1,n2)=>n1+n2)
// console.log(sum)
// s=0
// for(i=0; i<=a.length-1; i++){
//         s+= a[i]
//         console.log(s)
// }

f = a.flat()
console.log(f)

console.log("---------------------------------")

sum = a.reduce((a,b)=> a+b)
console.log(sum)

console.log("-------------------------------")

// lowest ele of an array 

lowest = a.reduce((a, b)=> a<b ? a: b)
console.log(lowest) 

console.log("--------------------------------------")

low = a.reduce((a,b)=>a <b ? a: b)
console.log(low)

highh = a.reduce((a, b)=> a>b? a: b)
console.log(highh)

sh = a.shift()
console.log(sh)
//lowest

// low = a.reduce((n1,n2)=>n1<n2?n1:n2)
// console.log(low)

// highest = a.reduce((n1,n2)=>n1>n2?n1:n2)
// console.log(highest)

// for(num of a){
//     console.log(num);
// }
// console.log('---------------------------')


console.log("----------------------------------for each-")
// //w.a.p to print sqr of a given num
// a.forEach(num=> console.log(num))
a.forEach(num=> console.log(num))


// //find all even numbers from the given array
// b=[10, 11, 12, 13, 14, 15]
// even=b.filter((num)=>num%2==0)
// console.log(even)

even = a.filter((num)=>num%2==0)
console.log(even)

e = a.filter((n)=>n%2==0)
console.log(e)

// //w.a.p to print sqr of a given num
// a.forEach(num=> console.log(num**2))
a.forEach(num=>console.log(num**2))
console.log("--------------------")
a.forEach(num=>console.log(num**2))

// sq= a.map((num)=>num**2)
// console.log(sq)

console.log("--------------------------------------")
b = [1 , 2 , 3 ,4 ,5]
// sq = b.map((num)=>num**2)
// console.log(sq)

sq = b.map((num)=>num**2)
console.log(sq)

console.log("--------------------------")

sq = b.map((num)=>num**2)
console.log(sq)

// console.log('---------------------------')

// //w. a. p to find first ele satisty the condition

// b = a.find((num)=>num%2==0)
// console.log(b)
console.log("-------------------------------")
fnd = a.find((num)=>num%2==0)
console.log(fnd)

// // w. a. p to return true or false using some 

sm = a.some((num)=>num%2==0)
console.log(sm)

// b = a.some((num)=>num%2==0)
// console.log(b)

// // w. a. p to return true or false using some 

z=[2,4,7]

// b = z.includes((num)=>num%2==0)
// console.log(b)
console.log("----------------------")

xxy = z.includes((num)=>num%2==0)
console.log(xxy)
















