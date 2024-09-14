class Bank {
    accountDetails = {
        1000:{acno:1001, username:'userone',password:'userone',balance:50000},
        1001:{acno:1000, username:'userone',password:'userone',balance:440000},
        1002:{acno:1002, username:'userone',password:'userone',balance:50000},
        1003:{acno:1003, username:'userone',password:'userone',balance:230000},
        1004:{acno:1004, username:'userone',password:'userone',balance:524000}
    }

    //w.a.p to validate a given account 
    validate(aNo){
        // return aNo in this.accountDetails?true:false
        if(aNo in this.accountDetails){
            console.log('valid')
        }else{
            console.log('invalid')
        }
    }

    //w.a.p to authenticate a given account
    
    // authenticate(acno, pswd){
    //     if(acno in this.accountDetails && this.accountDetails[acno].password === psw){
    //         console.log('authenticated')
    //     }
    // }

    authenticate(acno, pswd){
        if(this.validate(acno)){
            if(this.accountDetails[acno].password === pswd){
                console.log('authenticated')
            }
            else{
                console.log('invalid password')
            }
        }else{
            console.log('invalid account')
        }
    }

    // w.a.p to find the balence of an account 

    //w.a.p to transfer fund between two acccount
}
const user = new Bank()
user.validate(1001)
// console.log(user.validate(1000)?'valid':'InValid') // true

user.authenticate(1000,'userone')