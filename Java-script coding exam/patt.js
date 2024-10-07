// for(row=1; row< 6; row++){
//     str=""
//     for(col=1;col<=4; col ++){
//         str = str + '# '
//     }
//     console.log(str)
// }





// for for 5
// then print in all 5

for(i=0;i<=4;i++){
    str=''
    for(j=0;j<=4;j++){
      str= str + "# "
    }
    console.log(str)
}

// *
// * *
// * * * 
// * * * *

for(i=0; i<=4; i++){
    str = ''
    for(j=0; j<=i; j++){
        str = str + i
    }
    console.log(str)
}


// to check a num is prime or not 

num=2
flag=0
if(num==1){
    console.log(num + " is not a prime number")
}else{
    for(i=2;i<num;i++){
        if(num%i==0){
            flag=1
            break
        }
    }
}

console.log(flag ? "true": "false");