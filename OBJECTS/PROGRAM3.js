text = "hai hello all hello world"
// w.a.p to display the word count in an array
// o/p = {hai:1 , hello: 2 , all: 1 , world: 1}

words = text.split(' ')
// console.log(words);

obj={}
for(word of words){
    if (word in obj)
    {
        obj[word]+=1
    }
    else{
       obj[word]=1
    }
}

console.log(obj);

// array method 

wc={}
text.split(' ').forEach(item => item in wc?wc[item]+=1 : wc[item]=1)
console.log(wc)

// hw
// 1) create student object and implement basic object operation
// 2) numArray = [10,20,30,40,30,20,50,30,60.70,10,40,80] - w.a.p to print the number count from given array
         // o/p:- {10:2 , 20:2 , ...}

         numArray = [10,20,30,40,30,20,50,30,60.70,10,40,80]
         num={}
         numArray.forEach(item => item in num? num[item]+=1 : num[item]=1)
         console.log(num);

 // 3)pattern = 'ABBAABAB' -w.a.p to print first recursive letter . o/p -B
 
 pattern = 'ABBAABAB'
 x = pattern.split(' ')
 console.log(x)