// wRITE A PROGRAM to print the given PATTERN

// 5 4 3 2 1
// 5 4 3 2
// 5 4 3
// 5 4
// 5  

const arr = [5,4,3,2,1];

for(let i=arr.length; i>0;i--){
    console.log(arr.slice(0,i).join(" "));
}