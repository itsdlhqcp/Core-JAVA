flag = 1
num =2 
if (num ==1){
    console.log('neither prime nor compsite type number')
}else{
    for(i=2; i<num; i++){
        if(num % i == 0){
            flag = 0 

     break
    }
}
console.log(falg==1? 'prime':'not prime')
}