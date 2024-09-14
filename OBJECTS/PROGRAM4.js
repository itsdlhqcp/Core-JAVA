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

console.log(`Account length is ${accounts.length}`)
console.log("---------------------------------------")

//2. print account number whose ac_type is savings

accounts.forEach(account => {
    if(account.ac_type === 'savings'){
        console.log(account.acno)
    }
})

accounts.forEach(account =>{
    if(account.ac_type === 'savings'){
        console.log(account.acno)
    }
})

//3.print the balance of accnount number 1000

accounts.forEach(account => {
    if(account.acno === 1000){
        console.log(account.balance)
    }
})

//4. print all gpay transactions

accounts.forEach(account =>{
    console.log(account.transaction)
})

console.log("------------------------------------")
//5. print all transaction whose amount > 5000

accounts.forEach(account => {
    if(account.balance > 5000){
        console.log(account.transaction)
    }
})

//6. print credit transaction of account 1002

credita = accounts.map((data)=>data.transaction).flat().filter((item)=>item.to==1002)
console.log(credita)

//7. print debit transaction of account 1002
console.log("------------------------------------------")

debita = accounts.find((ac)=>ac.acno==1002).transaction
console.log(debita)

//8. print transaction history of 1002 

tranHis = {
    credit: credita,
    debit : debita
}
console.log("-------------------------")
console.log(tranHis)

//print highest balence account details

highest = accounts.map((item)=>item.balance).reduce((a,b)=>a>b?a:b)
console.log(highest)

highest = accounts.map((item)=>item.balance).reduce((a,b)=>a>b?a:b)
console.log(accounts.find((item)=>item.balance==highest));

console.log("-------------------------------")

h=accounts.reduce((a1,a2)=>a1.balance>a2.balance?a1:a2)
console.log(h)