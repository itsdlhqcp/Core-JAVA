// w . a .p to display prime number between 2-50

for(i=2;i<=50;i++){
    flag=0
    for(j=2;j<i;j++){
        if(i%j==0){
            flag=1
            break
        }
    }
    if(i>1 && flag==0){
        console.log(i);
    }
}

// 

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