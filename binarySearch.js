// x=[3,4,6,7,8,4,6]
// a=0 
// b=x.length-1;
// searchItem=18;
// isPresent=false 
// while(a<=b){
//     x.sort((a,b)=>a-b)
//     mid=Math.floor((a+b)/2);
//     if(x[mid]==searchItem){
//         isPresent=true
//         break
//     }else{
//         if(x[mid]<searchItem){
//             a=mid+1 
//         }else{
//            b=mid-1
//         }
//     }
// }
// console.log(isPresent? 'yes':'no')


p=[11,51,12,40,30]
q=[40,31,45,30,33]
p.sort((a,b)=>a-b) 
q.sort((a,b)=>a-b)
a=0 
b=0 
isPresent=false 
r=[]
while(a<p.length && b<q.length){
    if(p[a]==q[b]){
        console.log(p[a]) 
        isPresent=true 
        r.push(p[a]) 
        a++ 
        b++
    }else if (p[a]>q[b]){
        b++
    }else{
        a++
    }
}
console.log(r)
