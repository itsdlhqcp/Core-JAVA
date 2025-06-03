//w . a . p to display the reverse of a number
input = 123
id = 0
rem = 0

while(input>0){
    id=input%10;
    rem=rem*10+id;
    input=Math.floor(input/10);
}
console.log(rem);

// w . a. p to dispaly all fibonacci series

n = 10
firstterm = 0
secondterm = 1
console.log(`fibancocci series of first ${n} terms is`)
for(i=1; i<=n; i++){
    console.log(firstterm + " ");
   firstterm = secondterm;
   secondterm = firstterm + secondterm;
}

// 0 
// 0 + 1 = 1 
// 0 + 1 + 2 = 3 ...

put = 'hello world'
freq = {}
maxfreq = 0
maxChar = ''
for (let char of put){
    if(char !== ' '){
        freq[char] = (freq[char] || 0) + 1
    }
    if (maxfreq< freq[char]){
        maxfreq = freq[char]
        maxChar = char
    }
}

console.log(freq)
console.log(`max frequency element is ${maxChar} and its frequency is ${maxfreq}`)

// hello world here is the string 

let row = 5;
let letter = 65;

for(let i=0;i<row;i++){
    let str = "";
    for(let j=0;j<=i;j++){
        str += String.fromCharCode(letter) + " ";
    }
    console.log(str);
    letter++;
}

// Move Zeroes to End
// Move all 0s to the end of the array, maintaining order of others.

//let arr = [0, 1, 0, 3, 12];
// let nonZeroes = arr.filter(num => num !== 0);
// let zeroes = Array(arr.length - nonZeroes.length).fill(0);
// arr = [...nonZeroes, ...zeroes];

// console.log(arr); // Output: [1, 3, 12, 0, 0]

// remove Duplicates from Sorted Array
// Remove duplicates in-place and return ne

let arr = [0, 1, 0, 3, 12];
nonZeros = arr.filter(num => num!== 0)
zeroes = Array(arr.length - nonZeros.length).fill(0)
newarr = [...nonZeros,...zeroes]
console.log(`new array is ${newarr}`)



let nums = [1, 1, 2, 2, 3, 4, 4];
let h = 0;

for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[h]) {
        h++;
        nums[h] = nums[j];
    }
}
let newLength = h + 1;
console.log("New length:", newLength);           
console.log("Updated array:", nums.slice(0, newLength)); 
