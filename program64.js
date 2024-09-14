const { GiConsoleController } = require("react-icons/gi")

accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]

//1. total number of accounts
console.log(`TOTAL NO OF ACCOUNTS: ${accounts.length}`) //6
console.log('---------------------------------')
//2. print account number whose ac_type is savings

for(let arr in accounts){
    for(let ar in accounts){
        if(arr.ac_type=='savings'){
           console.log(arr.acno)
        }
    }
}

accounts.filter((item)=>item.ac_type=="savings").forEach((item)=>console.log(item.acno))
console.log('---------------------------------')
//3.print the balance of accnount number 1000

console.log('balance of account number 1000')
for(item of accounts){
    if(item.acno==1000){
        console.log(item.balance)
    }
}
s=accounts.find((data)=>data.acno==1000)["balance"]
console.log(s);

console.log('---------------------------------')
//4. print all gpay transactions
console.log('all gpay transactions');
for(let data of accounts){
    for(let info of data.transaction){
        if(info.mode=='gpay'){
            console.log(info)
        }
    }
}
console.log('---------------------------------')
console.log(accounts.map((data)=>data.transaction).flat().filter((item)=>item.mode=='gpay').forEach((item)=>{console.log(item)}))
console.log('---------------------------------')

//5. print all transaction whose amount > 5000

  for(let data of accounts){
    for(let tdata of data.transaction){
        if(tdata.amount>5000){
            console.log(tdata)
        }
    }
  }

  console.log('----------------------------------------------------------------')

  console.log(accounts.map((data)=>data.transaction).flat().filter((item)=>item.amount>5000))
//6. print credit transaction of account 1002

//7. print debit transaction of account 1002
  console.log('debit transaction of account')
  debit = accounts.find((ac)=>ac.acno==1002).transaction
  console.log(debit);

  console.log('----------------------------------------------------------------')
//8. print transaction history of 1002

//spraed operator used to merge two arrays
 //which is represented by three dots

//  console.log('transaction history of 1002');

//  transHis ={
//     credit:credita,
//     debit:debita
//  }
//  console.log(transHis)

// //array
// //spread
// tHis = [...credita , ...debita]
// console.log(tHis)

// console.log('----------------------------------------------------------------')

HIGHEST = accounts.map((item)=>item.balance).reduce((a,b)=>a>b?a:b)