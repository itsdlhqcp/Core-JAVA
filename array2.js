//  // w.a.p to print all items in an array 
//  fruit= ['Apple','Orrange','Kiwi','Pine-Apple']

//  for (i=0;i<=fruit.length-1;i++){
//    console.log(fruit[i])
//  }

//  const expense = [25000, 10000, 50000, 2000]

//  //w. a. p to find lowest of expense - 2000
//  highest = expense[0]
//  for(item of expense){
//     console.log(item);
//     if(highest<item){
//         highest=item
//     }
//  }

//  //w. a. p to find highest of expense - 2000
//  lowest = expense[0]
//  for(item of expense){
//     console.log(item);
//     if(lowest>item){
//         lowest=item
//     }
//  }
//  //w. a. p to find total of expense - 2000

// for(item of expense){
//     total += item;
// }
// console.log(total);


//write a program to check wheather two is present or not in an array (H/W
// const array = ['1','2','3','4','5']
// searchItem = 2
// isPresent = false;

// for(item of array){
//     if(item == searchItem){
//        isPresent = true;
//        break
//     }
// }

// console.log(isPresent?'present':'not present');

const array = ['1','2','3','4','5']
searchItem = 2
isPresent = false

for(item of array){
    if(item == searchItem){
        isPresent = true;
        break;
    }
}
console.log(isPresent ? 'present':'Not present');

// // input= [4.5.6]
// // output= [11,10,9]
// input=['4','5','6']
// if(input[1]==4 && input[3]==6){
//     for (i=4;i<=6;i++){
//         console.log(i+7);
//         i--;
//     }
// }

// input=['4','5','6']
// if(input[0]==4 && input[2]==6){
//     for(i=4;i<=6;i++){
//         console.log(i+7);
//         i--;
//         continue
//     }
// }


a = [10,20,30,10,20,40,50,50]
isDuplicate = false
output=[]
for(i=0;i<=a.length-1;i++){
    for(j=i+1;j<=a.length-1;j++){
        if(a[i]==a[j]){
            isDuplicate = true;
            output.push(a[i]);
            break;
        }
    }
}

console.log(isDuplicate? output: 'No Dup Found');

// // w .a . p to print whose pair sum is 6 
// b= [2,3,4,5]

// for(i=0;i<=b.length-1;i++){
//     for(j=i+1;j<=b.length-1;j++){
//         if(b[i]+b[j]==6){
//             check=true;
//         }
//     }
//     if(check==false){
//         console.log('no pairs');
//     }
// }

// b= [2,3,4,5] 
// for(i=0;i<=b.length-1;i++){
//     for(j=i+1;j<=b.length-1;j++){
//         if(b[i]+b[j]==6){
//             console.log(b[j],b[i]);
//         }
//     }
// }


b= [2,3,5,5] 
pairSum= false
pairs =0
for(i=0;i<=b.length-1;i++){
    for(j=i+1;j<=b.length-1;j++){
        if(b[i]+b[j]==6){
            pairSum=true
            pairs++
            console.log(`no.of pairs whose sum is 6 is ${pairs}`)
            console.log(`respective pairs are ${b[i],b[j]}`)
        }
    }
    if(pairSum==false){
        console.log('no pairs');
        break;
    }
}


// // Truthy operator - &&
// // Syntax 
// // condition && statement 
// // w.a.p to print common numbers between two given array 
// // p=[10,11,12,20,30]
// // q=[11,20,25,30,33]
// // o/p = 11, 20, 30

console.log("--------------------------------------------------------")

p=[10,11,12,20,30]
q=[11,20,25,30,33]

r=[]

for(i=0;i<=p.length-1;i++){
    check=false
    for(j=0;j<=q.length-1;j++){
        if(p[i]==q[j] && p[i] && q[j]){     // if no element in both to rep null value 
            console.log(p[i]);
            check=true
        }
    }
    if(check=true){
        r.push(p[i]);
    }
}
// // program it in another same way

// o=[]
// isPresent=false

// console.log("-------------------------------------------------")
// p=[10,11,12,20,30]
// q=[11,20,25,30,33]

// for(i=0;i<=p.length-1;i++){
//     check=false
//     for(j=i+1;j<=q.length-1;j++){
//         if(p[i]==q[j] && p[i] && q[j]){
//             console.log(p[i]);
//             check=true
//         }
//     }
//     if(check==false){
//         console.log('no same')
//         break;
//     }
// }