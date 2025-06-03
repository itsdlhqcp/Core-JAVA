function sumNested(arr){
    let sum =0;
    for (let item of arr){
        if(Array.isArray(item)){
            sum += sumNested(item) // recurssion method
        }else{
            sum += item;
        }
    }
    return sum;
}
  
  console.log(sumNested([5, [2, [3, 4], 5], 6])); // 21
  