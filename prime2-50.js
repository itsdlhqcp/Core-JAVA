// // w . a . p to display prime number between 2-50

for(i=2;i<=50;i++){               //  2 , 3 , 4
    flag=0
    for(j=2;j<i;j++){             // 2    2 < 2  , 3 < 3 ,  
        if(i%j==0){     // here loop not execute if condn. not satisfy
            flag=1
            break
        }
    }
    if(i>1 && flag==0){
        console.log(i);
    }
}

console.log("-------------------------------------------")
// for(i=1; i<=20; i++){
//     console.log(i)
// }

// console.log("-----------------------")

// console.log(2 % 2)

// w . A P to print a num is prime or composite

// flag=1
// num=4
// if (num == 1) {
//     console.log('neither prime nor composite');
// }
// else {
//     for(i=2;i<num;i++){  //2<4, 3<4
//         if(num%i==0){  //4%2=0 , 4%3
//             flag=0
//             break
//         }
//     }
//     console.log(flag == 1 ? 'prime' : 'not prime');
// }


// W . A .P TO CHECK NUM IS PRIME OR NOT 
num =8
flag = 1
if(num==1){
    console.log('neither prime nor composite')
}else{
    for(i=2;i<num;i++){
        flag=0
        break
    }
    if(num>1 && flag==1){
        console.log('it is prime num')
    }else{
        console.log('it is composite num')
    }
}
