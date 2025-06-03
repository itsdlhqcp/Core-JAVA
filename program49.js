a=[10,2,4,6,11,12]
//arrange the given array in ascending order
console.log(a);

b = a.sort((a,b)=>a-b);
console.log(b);

console.log("-------------------------------------") 

arr= [10,15,2,3,5] 

serachItem = 0
ifPresent = false
for(item of arr){
    if(item == serachItem){
        ifPresent = true
        break;
    }
    }
console.log(ifPresent? "Item is present" : "Item is not present")