
/// PATTERN PRINTING


// write a program to print the pattern


//   # # # #
//   # # # #
//   # # # #

for(row=1;row<=4;row++){
    str=""
    for(col=1;col<=4;col++){
        str = str + '# '
    }
    console.log(str);
}



// write a program to print the pattern


//   1 1 1 1
//   2 2 2 2 
//   3 3 3 3  

for(row=1;row<=4;row++){
    str = ""
    for(col=1;col<=4;col++){
        str = str + row
    }
    console.log(str);
}

// 1 2 3 4 
// 1 2 3 4
// 1 2 3 4

for(row=1;row<=4;row++){
    str=""
    for(col=1;col<=4;col++){
        str = str + col + " "
    }
    console.log(str)
}

// 1
// 1 2
// 1 2 3
// 1 2 3 4

for(row=1;row<=4;row++){
    str=""
    for(col=1;col<=row;col++){
        str = str + col + " "
    }
    console.log(str)
}

// *
// * *
// * * *
// * * * *

for(row=1;row<=4;row++){
    str=""
    for(col=1;col<=row;col++){
        str = str + "*" + " "
    }
    console.log(str)
}

// 1
// 2 2
// 3 3 3
// 4 4 4 4

for(row=1;row<=4;row++){
    str=""
    for(col=1;col<=row;col++){
        str = str + row + " "
    }
    console.log(str)
}

// * * * *
// * * *
// * *
// *

for(row=4;row>=1;row--){
    str=""
    for(col=1;col<=row;col++){
        str = str + "*" + " "
    }
    console.log(str)
}
 

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
            str=str+"* "
        }
        console.log(str);
    }
    else{
        str=""
        for(col=1;col<=(9-row)+1;col++){
            str=str+"* "
        }
        console.log(str);
    }
}

console.log('----------------------------------------')

for(row=1;row<=4;row++){
    str=""
    for(spa=4;spa>row;spa++){
        str = str + " "
    }
    for(col=1;col<=row;col++){
        str = str + "*" + " "
    }
    console.log(str);
}


//       *   
//     *   *
//   *       *
// * * * * * * *