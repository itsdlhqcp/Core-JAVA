const { TbSquareRoundedLetterW } = require("react-icons/tb")

str= ' Luminar'
console.log(str)
str1=str.trim()
console.log(str1)

str2= 'good morning all'
str3 = str2.split('o')
console.log(str3)

console.log('-------------------------')

//microsoft -google

strl = 'I joined microsoft'
str4=strl.replace('microsoft','google')
console.log(str4)

strn = 'I have joined the google nop google hello google'

str5 = strn.replaceAll('google','null')
console.log(str5)

console.log('----------------------------------')

text = 'hello'
s= Array.from(text)
console.log(s);

//w.a.p to print all vowels in the given string
strv = "Hello World";

vowel=['a','e','i','o','u','A','E','I','O','U']
console.log(vowel)

arr = str.split('')
console.log(arr)

for(char of arr){
    if(vowel.includes(char)){}
    console.log(char)
}

console.log('--------------------------------------')

Array.from(str).filter(char=>vowel.includes(char)).forEach((item)=>console.log(item))

//first way

str= 'malayalams'
console.log(str.length)
//to check palindrome or not using string method

start=0
end=str.length-1
isPalindrome=true
while(start<end){
    if(str[start]!=str[end]){
        isPalindrome=false
    }
    start++
    end--
}

console.log(isPalindrome?'The word is palindrome':'The word is not palindrome');

console.log('----------------------------------')

pal=""
for(i=str.length-1;i>=0;i--){
    pal=pal+str[i]
}
console.log(pal==str?'The word is palindrome':'The word is not palindrome')

