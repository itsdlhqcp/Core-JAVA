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

for(pname of products){
    console.log(pname[1])
}

products.forEach((item)=>console.log(item[1]))

//2. display product whose price < Rs.50
for(pname of products){
    if(pname[2]<50){
        console.log(pname[1])
    }
}

products.filter((pro)=>pro[2]<50).forEach((item)=>console.log(item[1]))

//3. print price of oreo
for(pname of products){
    if(pname[1]== 'oreo'){
        console.log(pname[2])
    }
}

b= products.find((pr)=>pr[1]=='oreo')
console.log(b[2]);
//4. print costly product name
max=0
for(pname of products){
    if(pname[2]>max){
        max=pname[2]
    }
}
for(pname of products){
    if(max==pname[2]){
       console.log(pname)
    }
}

array = products.reduce((a1,a2)=>a1[2]>a2[1]?a1:a2)
console.log(array[1]);
//5. display out of stock product
console.log('-------------------------------------------');

for(pname of products){
    if(pname[3]==0){
       console.log(pname)
    }
}

products.filter((item)=>item[3]==0).forEach((item)=>console.log(item[1]))
//6. sort products based on stock in decsending order

console.log('-------------------------------------------');

decreasingOrder = products.sort((prod1,prod2)=>prod2[3]-prod1[3])
console.log(decreasingOrder)
//7. print product having maximum available stock

console.log('-------------------------------------------');

maxStock = products.reduce((prod1,prod2)=>prod2[3]>prod1[3]?prod1:prod2)
console.log(maxStock)

//8. is there any product can be purchased by Rs. 10

console.log('-------------------------------------------');
// Laisha=employee.find((emp)=>emp[1]=='Laisha')
// console.log(Laisha)

// check=false
// byTen = products.find((prod)=>prod[2]==10)
// check=true
// console.log(check?byTen:'element not available')

b=products.some((item)=>item[2]<=10)
console.log(b?'yes':'no');
console.log('-------------------------------------------');
//9. Is there any product in the range of 10 to 30


k=products.some((item)=>item[2]>=10&&item[2]<=30)
console.log(k?'yes':'no');

//10. print all products in the range of 10 to 30

l = products.filter((item)=>item[2]>=10 && item[2]<=30).forEach((item)=>console.log(item[1]))
console.log(l)