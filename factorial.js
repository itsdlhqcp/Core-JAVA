// W.A.P to find factorial of a number 
// input = 4
// i=1
// fact=1
// while(i<=input){
//     fact=fact*i;
//     i++;
// }
// console.log(fact);

// write program to display numbers whose expontial is in a given range user can input power from 8-36
// sq  --   1 4 9 16 25 ...
// cu  --   1 8 27 64 ... 
// write a program to print wheather a number is armstrong or not 

// num = 153
// digit=0
// orgNum = num 
// res = 0 
// while(num!=0){
//     digit = num % 10;
//     res += Math.pow(digit,3);
//     num = Math.floor(num /10);
// }
// if(res == orgNum){
//     console.log("It is armstrong number");
// }

// armstrong num or not
// num =15
// res=0
// orgNum = num 
// digit=0

// while(num!=0){
//     digit = num % 10;
//     res += Math.pow(digit,3);
//     num=Math.floor(num/10);
// }
// if(res==orgNum){
//     console.log('Its is armstrong')
// }else{
//     console.log('it not')
// }

// console.log("----------------------------")
// console.log("----------------------------")

// num=153 
// digit = 0
// orgNum = num 
// res = 0
// while(num != 0){
//     digit = num % 10;
//     res += Math.pow(digit, 3);
//     num = Math.floor(num / 10)
// }

// if(res === orgNum){
//     console.log("It is armstrong number");
// }else{
//     console.log("It is not armstrong number");
// }


// // -----------------------------------

// num = 153
// id = 0 
// sum = 0 
// temp = num

// while(num>0){
//     id = num%10
//     sum += Math.pow(id,3)
//     num = Math.floor(num/10)
// }
// console.log(temp==sum? `armstrong`:`not an armstrong number`);


num = 1534
res = 0
org = num
dig = 0

while(num!=0){
 dig = num % 10;
 res += Math.pow(dig, 3);
 num = Math.floor(num/10)
}
if (res == org){
    console.log("its armstrong num")
 }else {
    console.log("its not")
 }

// console.log("**********")





// 2 ^3 ==>> write a program for making this
// x = 2;
// power = 3;
// num = 1;

// for(i =0; i < power; i++)   {
//     num = num * x ;
// }

// console.log("its expo is", num);