const { ImStarEmpty } = require("react-icons/im")

products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only
products.forEach((item)=>console.log(item.pName))
console.log('--------------------------')
//2. print all mobile details whose display is lcd
for(pro of products){
    if(pro.display=='lcd'){
        console.log(pro)
    }
}
products.filter((pro)=>pro.display=='lcd').forEach((item)=>console.log(item))
console.log('----------------------------------')

//3. print 5g mobile phone name
for(pro of products){
    if(pro.band=='5g'){
        console.log(pro.pName)
    }
}

products.filter((pro)=>pro.band=='5g').forEach((item)=>console.log(item.pName))
console.log('--------------------------')

//4. sort mobile based on price

asorder = products.sort((pro1, pro2)=>pro1.price-pro2.price)
console.log(asorder)
console.log('--------------------------')

//5. print costly mobile
costlyProduct = products.reduce((pro1,pro2)=>pro1.price<pro2.price?pro1:pro2)
console.log(costlyProduct)
console.log('--------------------------')
//6. print low cost mobile

cheapPro = products.reduce((pro1,pro2)=>pro1.price<pro2.price?pro1:pro2)
console.log(cheapPro)