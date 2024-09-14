for (i=0;i<=10;i++){
    if (i<6){
        console.log(i)
    }
}

//prime num or not 

num=7
flag = 0 
a = Math.floor(num/2)

for(i=2;i<=a;i++){
    if(num%i==0){
        flag=1
        break
    }
}
console.log(flag==0?`prime`:`not prime`)