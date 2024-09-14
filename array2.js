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
const array = ['1','2','3','4','5']
searchItem = 2
isPresent = false;

for(item of array){
    if(item == searchItem){
       isPresent = true;
       break
    }
}

console.log(isPresent?'present':'not present');

// input= [4.5.6]
// output= [11,10,9]
input=['4','5','6']
if(input[1]==4 && input[3]==6){
    for (i=4;i<=6;i++){
        console.log(i+7);
        i--;
    }
}

// w.a.p to print repeated item in an array
a = [10,20,30,10,20,40,50]
output=[]
isDuplicate=false

for(i=0;i<=a.length-1;i++){
    for(j=i+1;j<=a.length-1;j++){
        if(a[i]==a[j]){
              isDuplicate=true;
              output.push(a[i]);
              break;
        }
    }
}

console.log(isDuplicate?output:'No dupli avilable');

// w a p to print whose pair sum is 6
// b= [2,3,4,5]


a = [10,20,30,10,20,40,50]

output = []
isDuplicate=false
for(i=0;i<=a.length-1;i++){
    for(j=i+1;j<=a.length-1;j++){
        if(a[i]==a[j]){
            isDuplicate=true
            check=false
            for(k=0;k<=a.length-1;k++){
                if(a[i]==output[k]){
                    check=true
                    break
                }
            }
            if(!check){
                output.push(a[i])
                break
            }
        }
    }
}

console.log(isDuplicate?output:'not duplicate');

// w .a . p to print whose pair sum is 6 
b= [2,3,4,5]

for(i=0;i<=b.length-1;i++){
    for(j=i+1;j<=b.length-1;j++){
        if(b[i]+b[j]==6){
            check=true;
        }
    }
    if(check==false){
        console.log('no pairs');
    }
}

// Truthy operator - &&
// Syntax 
// condition && statement 
// w.a.p to print common numbers between two given array 
// p=[10,11,12,20,30]
// q=[11,20,25,30,33]
// o/p = 11, 20, 30

p=[10,11,12,20,30]
q=[11,20,25,30,33]

r=[]

for(i=0;i<=p.length-1;i++){
    check=false
    for(j=i+1;j<=q.length-1;j++){
        if(p[i]==q[j] && p[i] && q[j]){
            console.log(p[i]);
            check=true
        }
    }
    if(check=true){
        r.push(p[i]);
    }
}
// program it in another same way

o=[]
isPresent=false