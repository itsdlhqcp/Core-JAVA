text = "hai hello all hello world"
// w.a.p to display the word count in an array
// o/p = {hai:1 , hello: 2 , all: 1 , world: 1}

words = text.split(' ')
// console.log(words);

console.log(words);

console.log("************************************")

// obj={}
// for(word of words){
//     if (word in obj)
//     {
//         obj[word]+=1
//     }
//     else{
//        obj[word]=1
//     }
// }

// console.log(obj);

console.log('**********************************************')

obj={}
for(word of words){
    if(word in obj){
        obj[word] += 1;
    }else{
        obj[word] = 1;
    }
}
console.log(obj);

// // array method 

// wc={}
// text.split(' ').forEach(item => item in wc?wc[item]+=1 : wc[item]=1)
// console.log(wc)
console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%');
console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%');
wc = {}
text.split(' ').forEach(item => item in wc ? wc[item]+=1: wc[item]=1);
console.log(wc);

// // hw
// // 1) create student object and implement basic object operation

console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
  var student = {
    name:"Alex",
    class:"10th",
    rollNo:"25",
    age:"25",
    badge:"Blue"
  }
  console.log(student);

  student["mark"]="256";
  console.log(student);

  console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");

  "rank" in student ? console.log("present"): (student["rank"]="12", console.log(student));

  student["easy subjects"]= ["maths","chemistry","hindi"];
  console.log(student);

  student["subname"]="ale"
  console.log(student);
// // 2) numArray = [10,20,30,40,30,20,50,30,60.70,10,40,80] - w.a.p to print the number count from given array
//          // o/p:- {10:2 , 20:2 , ...}

//          numArray = [10,20,30,40,30,20,50,30,60.70,10,40,80]
//          num={}
//          numArray.forEach(item => item in num? num[item]+=1 : num[item]=1)
//          console.log(num);

console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
numArray = [10,20,30,40,30,20,50,30,60.70,10,40,80]
num={}
numArray.forEach(item => item in num? num[item]+=1 : num[item]=1);
console.log(num);

//  // 3)pattern = 'ABBAABAB' -w.a.p to print first recursive letter . o/p -B
 
//  pattern = 'ABBAABAB'
//  x = pattern.split(' ')
//  console.log(x)
console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
pattern = 'ABBAABAB';
x = pattern.split(' ');
console.log(x);