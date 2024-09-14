flag=1
num=4
if (num == 1) {
    console.log('neither prime nor composite');
}
else {
    for(i=2;i<num;i++){  //2<4, 3<4
        if(num%i==0){  //4%2=0 , 4%3
            flag=0
            break
        }
    }
    console.log(flag == 1 ? 'prime' : 'not prime');

}


//1,2 3 4 5 6 7 8 9 10 ...... 50

//87/1 = 1 //4/1=1
//7/2 =
//7/3 = //4/3 =
//7/4 //4/4 =4
//7/5 =
//7/6 =
//7/7 = 7

//4/2 =2

//6/1 =1.
//6/2 =
//6/3 =3
//6/4
//6/5
//6/6 =6


// W A P TO PRINT ALL ARMSTRONG NUMBERS BETWEEN 8-500

// W A P TO FIND GCD AND HCD OF 2 EVEN NUMBERS 

num1 = 12
num2 = 24 
gcd=1
for (i=1; i<=12 && i<=24; i++){
    if (num1%i==0 && num2%i==0){
        gcd=i
    }
}
console.log(gcd)