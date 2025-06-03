//string methods 

str = 'LUMINAR'

str1 = str.toLowerCase()
console.log(str1)

slr="hello World"
console.log(slr.toUpperCase());

// const mail = (data)=>{
//     return data.endsWith('@gmail.com')?'valid gmail id':'Invalid gmail id'
// }
// console.log(mail('abcmail.com'));

const mail = (data) => {
    return data.endsWith('@gmail.com')?'valid':'invalid'
}
console.log(mail('hello@gmail.co'))


const xcom = (data) => {
    return data.endsWith('@xcom')?'valid':'invalid'
}
console.log(xcom('hello@gamil.com'))

// //print wheather a given word starts with letter Q - function 

// const Checkword = (word)=>{
//     return word.startsWith('Q')|| word.startsWith('q')?'The word starts with letter Q':'The word does not start with letter Q '
// }
// console.log(Checkword('Queen'));

const checkw = (word) => {
    return word.startsWith('Q')? "sTARTS WITH Q":"NOT"
}

console.log(checkw('HELLO'))