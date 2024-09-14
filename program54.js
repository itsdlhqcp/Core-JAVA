a=[10, 11, 12, 13, 14, 15]

sum= a.reduce((n1,n2)=>n1+n2)
console.log(sum)

//lowest

low = a.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(low)

highest = a.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(highest)

for(num of a){
    console.log(num);
}
console.log('---------------------------')


//w.a.p to print sqr of a given num
a.forEach(num=> console.log(num))

//find all even numbers from the given array
b=[10, 11, 12, 13, 14, 15]
even=b.filter((num)=>num%2==0)
console.log(even)

//w.a.p to print sqr of a given num
a.forEach(num=> console.log(num**2))

sq= a.map((num)=>num**2)
console.log(sq)

console.log('---------------------------')

//w. a. p to find first ele satisty the condition

b = a.find((num)=>num%2==0)
console.log(b)

// w. a. p to return true or false using some 

b = a.some((num)=>num%2==0)
console.log(b)

// w. a. p to return true or false using some 

z=[2,4,7]

b = z.includes((num)=>num%2==0)
console.log(b)