// program to print a pattern 

// 5 4 3 2 1 
// 5 4 3 2
// 5 4 3 
// 5 4
// 5 


// for (let i=0; i< 5; i++){
//     for(let j=5 ; j> i; j--){
//         console.log(j + ' ');
//     }

// }

const arr = [5,4,3,2,1]

for(let i= arr.length; i>0; i--){
    console.log(arr.slice(0,i).join(' '))
}