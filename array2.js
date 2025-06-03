const array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
s=3;
isPresent = false; 
for (item of array) {
    if(item == s) {
        isPresent = true;
        break;
    }
}

console.log(isPresent? `Yes ${s} item exists` : "No item exists");

//////////////////////////////

const array2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '2'];
duplicate = false;
for (i = 0; i < array2.length; i++) {
    for (j=i+1; j < array2.length; j++) {
        if(array2[i] == array2[j]) {
            duplicate = true;
            break;
        }
    }
}
console.log(duplicate? "Yes duplicate exists" : "No duplicate exists");

console.log("**********************************************")

const array3 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '2'];
isp = false;
for (i=0;i<= array3.length-1; i++){
    for(j=i+1; j<= array3.length-1; j++) {
        if (array3[i] == array3[j]){
            isp = true;
            break;
        }
    }
}
console.log(isp ? "duo present": "dup not present")

//////////////

let pairExist = false;
let count = 0;
pairsum = 6;

for (let i = 0; i < array2.length; i++) {
    for (let j = i + 1; j < array3.length; j++) {
        if (Number(array2[i]) + Number(array3[j]) === pairsum) {
            pairExist = true;
            count++;
        }
    }
}

console.log(count);
console.log(pairExist ? "pair sum exist" : "no");

// given two array of ellement based on check 
/// create a new array where duplicate element not exist


console.log("++++++++++++++++++++++")

p=[10,11,12,20,30]
q=[11,20,25,30,33]

r=[]

for(let i=0; i< p.length -1 ; i++){
      checkxx = false;
    for (j= i +1; j < q.length -1; j++){
        if (p[i]==q[i] && p[i] && q[j]){
            checkxx = true;
        }
    }
    if(checkxx=true){
        r.push(p[i]);
    }
}
console.log(r)
