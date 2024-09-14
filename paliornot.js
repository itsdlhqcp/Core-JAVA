// program to chech a str is palindrome or not

// String = "CgHello" 

// left = 0;
// right = String.length - 1; 

// while(left < right){
//     if(String[left] != String[right]){
//         console.log("String is not palindrome");
//     }else{
//             right--;
//             left++;
//     }
//     console.log("String is palindrome");
// }

input =12321
id = 0
rem=0
temp=input
while(input>0){//123>0//12>0//1>0//0>0

id=input%10 //123%10=3//12%10=2//1%10=1
rem=(rem*10)+ld//0*10=0+3=3 //3*10=30+2=32//32*10=320+1=321
input = Math.floor(input/10) //123/10=12.3=12//12/10=1.2=1//1/10=0.1=0

}
console. log(temp == rem? 'palindrome': 'not a palindrome'); 

//w.a.p to find the factorial of a given