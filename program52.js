// write a program to find the pairs with sum of 7 in an array

b=[2,3,4,5]
i=0
j=b.length-1
pairsum=7

while(i<j){
    if(b[i]+b[j]==pairsum){
        console.log(`pair sum of 7 is with are ${b[i]} and ${b[j]}`);
        i++;
        j--;
    }else if(b[i]+b[j]>pairsum){
        j--
    }else{
        i++
    }
}