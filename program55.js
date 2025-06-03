//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]
//1. display all product name

products.forEach((item)=>console.log(item[1]))

// //2. display product whose price < Rs.50

b= products.find((pr)=>pr[1]=='oreo')
console.log(b[2]);

console.log("-------------------------------------")
v = products.find((pr)=>pr[1]=='lays');
console.log(v[2]);
//print the price of oreo
console.log("*********************************");

br = products.reduce((p1,p2)=>p1[2]>p2[2]? p1:p2)
console.log(br[2]);