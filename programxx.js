
////   * * * *
//     * * * *
//     * * * * 


for(row=1; row<=3; row++){
    str=""
    for(col=1;col<=4; col++){
        str = str + ' #'
    }
    console.log(str)
}

console.log("-------------------------------------")
// 1 1 1 1
// 2 2 2 2
// 3 3 3 3 

for(row=1; row<=3; row++){
    str = "" 
    for(col=1; col<=4; col++){
        str = str + row + " "
    }
    console.log(str)
}
     

console.log("-----------------------------------------")

for(row=1; row<=3; row++){
    str = "" 
    for(col=1;col<=4;col++){
        str = str + col + " "
    }
    console.log(str)
}

console.log("-------------------------------------")

// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 


for(row=1; row<=3;row++){
    str = ""
    for(col=1; col<=row; col++){
        str = str + col + " "
    }
    console.log(str)
}




// * 
// * * 
// * * * 
// * * * * 

// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4

console.log("---------------------------")

for(row=1; row<=4; row++){
    str=""
    for(col=1; col<=row; col++){
        str = str + col + " "
    }
    console.log(str)
}

console.log("----------------------------------")

for(row =1; row<=3; row++){
    str = "" 
    for(col =1; col<=row; col++){
        str = str + '*' + " "
    }
    console.log(str)
}

console.log("------------------------")

// * * * *
// * * * 
// * * 
// *

for(row=4; row>=1; row--){   // row = 4  4>=1 
    str = "" 
    for(col=1; col<=row; col++){    // 1<=4
         str = str + "*" + " "
    }
    console.log(str)
}

console.log("------------------------") 
console.log("------------------------")

// * * * *
// * * * 
// * * 
// *

for(row=4; row>=1; row--){
    str = ""
    for(col=1; col<=row; col++){
        str = str + "*" + " "
    }
    console.log(str)
}


console.log("---------------------------------------------")

// *
// * *
// * * *
// * * * *
// * * *
// * *
// * 

for(row=1;row<=9;row++){
    if(row<5){
        str=""
          for(col=1;col<=row;col++){
            str = str + "* "
          }
          console.log(str)
    }else{
        str=""
        for(col=1;col<=(9-row)+1;col++){
            str = str + "* "
        }
        console.log(str)
    }
}

console.log("---------------------------------")

for(row=1;row<9;row++){
    if(row<5){
        str=""
        for(col=1;col<=row;col++){
            str= str + "* "
        }
        console.log(str)
    }else{
        strx=""
         for(col=1;col<=(9-row)+1;col++){
            strx = strx + "* "
         }
         console.log(strx)
    }
}

console.log("---------------------------")