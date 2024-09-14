// w . a .p to print whose pair sum is 6

//2+5 = 7 2+6= 2+7 

//sum==pairsum
//low++ higher--
//sum>pairsum
//higher--
//sum<pairsum
//lower++

b=[2,3,4,5]
i=0
j=b.length-1
pairsum=7

while(i<j){
    if(b[i]+b[j]==pairsum){
        console.log(`(${b[i]},${b[j]})`);
        j++
        i--
    }
    else if(b[i]+b[j]>pairsum){
        j--
    }else{
        i++
    }
}

//sum of all numbers inside given array

//print all odd numbers from given array