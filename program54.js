a=[10, 11, 12, 13, 14, 15]

b = a.sort((a,b)=>b-a); 
console.log(b);

console.log("--------------------")

sq = b.map(((num)=>num**2));
console.log(sq);

console.log("--------------------") 

x = a.find((num)=>num%2==0);
console.log(x);


y=[]
for(i=0; i<a.length; i++){
    if(a[i]%2==0){
       y.push(a[i]);
    }
}
console.log(y);

f = a.includes((num)=>num==12);
console.log(f);

sm = a.some((num)=>num%2==0)
console.log(sm);

console.log("--------------------") 
z=[2,4,7]
h = z.includes((num)=>num==7);
console.log(h);





