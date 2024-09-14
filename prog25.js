for (i=0;i<=10;i++){
    console.log(i);
}

// ---------------

///program to find factorial of a number 

num = 4
fact=1
for (i=1 ;i<=num;i++){
    fact *= i;
}
console.log(fact);

//w a p to create a for loop which can iterate upto 10 but display only upto 5
for (i=0;i<=10;i++){
    console.log(i<6 ? `i`: ``);
}

// alternmative 

for (i=0;i<=10;i++){
    while(i<6){
        console.log(i);
    }
}