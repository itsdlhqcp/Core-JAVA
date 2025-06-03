str= ' Luminar'
console.log(str)
str1=str.trim();
console.log(str1)

str2= 'good morning all'
str3 = str2.split('o')
console.log(str3)

// console.log('-------------------------')

// //microsoft -google

 str6 = 'I joined microsoft'
 str8 = str6.replace('microsoft','google')
 console.log(str8)

 strn = 'I have joined the google nop google hello google'

 stry = strn.replaceAll('google','null')
 console.log(stry)

// str5 = strn.replaceAll('google','null')
// console.log(str5)

// console.log('----------------------------------')

// text = 'hello'
// s= Array.from(text)
// console.log(s);

text = 'hello'
s = Array.from(text)
console.log(s)

// //w.a.p to print all vowels in the given string
 strv = "Hello World";

 vowel=['a','e','i','o','u','A','E','I','O','U']
// console.log(vowel)

// arr = str.split('')
// console.log(arr)

// for(char of arr){
//     if(vowel.includes(char)){}
//     console.log(char)
// }

// console.log('--------------------------------------')

 //Array.from(str).filter(char=>vowel.includes(char)).forEach((item)=>console.log(item))

// Array.from(str).filter(char=>vowel.includes(char)).forEach((item)=>console.log(item))





// Array.from(str).filter(char=>vowel.includes(char)).forEach((item)=>console.log(item))

// //first way

// str= 'malayalams'
// console.log(str.length)
// //to check palindrome or not using string method

// start=0
// end=str.length-1
// isPalindrome=true
// while(start<end){
//     if(str[start]!=str[end]){
//         isPalindrome=false
//     }
//     start++
//     end--
// }

// console.log(isPalindrome?'The word is palindrome':'The word is not palindrome');

// console.log('----------------------------------')

// pal=""
// for(i=str.length-1;i>=0;i--){
//     pal=pal+str[i]
// }
// console.log(pal==str?'The word is palindrome':'The word is not palindrome')

// write a program to print all vowels in astring
console.log('((((----------------------------------))))')
strt = 'helloworld'
vowel=['a','e','i','o','u','A','E','I','O','U'] 
count = 0 
Array.from(strt).filter(char=>vowel.includes(char)).forEach(()=>count++);
Array.from(strt).filter(char=>vowel.includes(char)).forEach((item)=>console.log(item));
console.log(count)


// str= 'malayalam'
// console.log(str.length)
// //to check palindrome or not using string method

// start=0
// end=str.length-1
// isPalindrome=true
// while(start<end){
//     if(str[start]!=str[end]){
//         isPalindrome=false
//     }
//     start++
//     end--
// }




sting="malayalamX"
isPalindrome = true
start=0
end=sting.length-1
while(start<end){
    if(sting[start]!=sting[end]){
        isPalindrome=false
    }
    start++
    end--
}
console.log(isPalindrome? "YES":"NO")