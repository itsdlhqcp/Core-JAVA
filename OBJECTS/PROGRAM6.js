class Bank {

    //property
    accountDetails={
        1000:{acno:1000, username:'username',password:'userone',balence:50000},
        2000:{acno:2000, username:'usertwo',password:'usertwo',balence:1000},
        2001:{acno:3000, username:'userthree',password:'userfour',balence:40000},
        3000:{acno:4000, username:'userfour',password:'userfive',balence:30000},
        1003:{acno:5000, username:'userfive',password:'userSix',balence:60000}
    }
   
    //Methods and constructor

    //w.a .p to validated the account
    //   return aNo in this accaountDetails
    // validate(aNo){
    //    if(aNo in this.accountDetails){
    //          console.log('valid');
    //    }else{
    //         console.log('invalid');
    //    }
    // }

    validate(aNo){
        return aNo in this.accountDetails?true:false
    //    if(aNo in this.accountDetails){
    //      console.log('valid');
    //    }else{
    //     console.log('invalid');
    //    }
    }
   
  

    authenticate(acno, pswd) {
        if (this.validate(acno)) {
            if (this.accountDetails[acno].password == pswd) {
                console.log("authentication success");
            } else {
                console.log('invalid password');
            }
        } else {
            console.log('invalid account');
        }
    }
    

    //write a program to find balence of an account

    balenceEnquiry(acno ,pswd ){
        if(this.validate(acno)){
           if(this.accountDetails[acno].password==pswd){
                  console.log("balence is",this.accountDetails[acno].balence)
           }else{
            console.log('invalid password')
           }
        }else{
            console.log('invalid account')
        }
    }

    //w.a.p to tranfer fund between account

    fundTransfer(fromacno, frompswd, toacno, amount) {
        if (this.validate(fromacno) && this.validate(toacno)) {
            if (this.accountDetails[fromacno].password == frompswd) {
                if (this.accountDetails[fromacno].balence >= amount) { // Fixed typo 'acno' to 'fromacno'
                    console.log(`INITIAL AMOUNT OF ACCOUNT: ${this.accountDetails[fromacno].balence}`);
                    // Transaction procedures
                    this.accountDetails[fromacno].balence -= amount;
                    this.accountDetails[toacno].balence += amount;
                    console.log(`BALANCE AFTER TRANSACTION: ${this.accountDetails[fromacno].balence}`);
                } else {
                    console.log('insufficient balance');
                }
            } else {
                console.log("Password is invalid");
            }
        } else {
            console.log("Invalid account details");
        }
    }
    

}

// const user = new Bank()
// user.validate(1000)

const user = new Bank()
// user.validate(1)

user.authenticate(1000,"userone")

user.balenceEnquiry(1000,"userone")

user.fundTransfer(1000, "userone", 2000 ,500)