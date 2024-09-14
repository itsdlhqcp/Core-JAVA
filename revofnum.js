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