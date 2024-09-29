// x = 7 
// y = 8 
// console.log(`x and y are equal: `)


isPalindrome=true 
input = 'ooooooa'
x=input.split('')
a=0
b=x.length-1

while(a<b){
    if(x[a]==x[b]){
        a++ 
        b--
    }else{
        isPalindrome=false
        break
    }
}

console.log(isPalindrome ? 'string is palindrome': 'not')


//    *
//   * *
//  *   *
// *     *
//  *   *
//   * *
//    *


    n=4
    for (let i = 1; i <= n; i++) {                      // 1, 2, 3, 4 
        let row = '';
        // Create spaces before the first star
        for (let j = 1; j <= n - i; j++) {             // 1 1<=3, 2 2<= 2 , 3 3<=1
                                   
            row += ' ';                               // " ", "  " , "   "
        }
        // Add the first star
        row += '*';                                   // " ", "  " , "   ", "    *"
        
        // Add spaces or second star based on the row number
        if (i > 1) {
            for (let j = 1; j <= (2 * (i - 1)) - 1; j++) {
                row += ' ';                           // " ", "  " , "  *", "  * *"
            }                                         // " ", "  " , "  *", "  *  *"
            row += '*';
        }
        
        console.log(row);
    }

    // Loop through the lower half of the pattern
    for (let i = n - 1; i >= 1; i--) {
        let row = '';
        // Create spaces before the first star
        for (let j = 1; j <= n - i; j++) {
            row += ' ';
        }
        // Add the first star
        row += '*';
        
        // Add spaces or second star based on the row number
        if (i > 1) {
            for (let j = 1; j <= (2 * (i - 1)) - 1; j++) {
                row += ' ';
            }
            row += '*';
        }
        
        console.log(row);
    }




    const cars = [
        {
            id: 1, make: "Toyota", model:"Camry",price: 24425, inStock:'yes',features: {
                engine: '2.5L 4-cylinder', horsepower:310
            }
        },
        {
            id: 2, make: "Ford", model:"Mustang",price:27470,inStock:'No',features: {
                engine: "2.3L turbo 4-cylinder", horsepower: 310
            }
        },
        {
            id: 3,make:"Chevorlet",model:"Tahoe",price:49900, inStock:'yes',features:{
                engine: "5.3L V8",horsepower:355
            }
        },
        {
            id: 4, make:"Tesla", model:"3 Series",price: 41450, inStock:'No',features:{
                engine: "Electric",horsepower: 283
            }
        },
        {
            id:5, make: "BMW",model:"X Series",price:41450, inStock:'No',features:{
                engine: "2.01,turbo 4-cylinder", horsepower:255
            }
        }
    ]

    
  console.log("------------------------------------------------------------")
  // program to print the name of the cars
    cars.forEach((item)=>console.log(item.make))

console.log("------------------------------------------------------------")

  cars.forEach(car => {
    if (car.price > 30000){
        console.log(car.model)
    }
  })

  console.log("------------------------------------------------------------") 

  //PRINT OUT STOCK CARS 

  console.log("Stock cars available are:")
  cars.forEach(car => {
    if(car.inStock=='yes'){
        console.log(car.make)
    }
  })

  console.log("------------------------------------------------------------")
  // print cars whose hourse power greater than or equal to 300

  cars.forEach(car =>{
    if(car.features.horsepower>=300){
        console.log(car.make)
    }
  })

  console.log("-------------------------------------------------------------")
  //what will be revenue generated if all the cars are sold out 
  const rev = cars.reduce((total, car)=> total + car.price , 0)
  console.log(rev)


  console.log("-------------------------------------------------")
  console.log("-------------------------------------------------") 

  console.log("CREATE A LIBRARY CLASS")

  class Library {
    constructor(){
        this.collections = {}
    }

    addBook(title, author,year, availablity){
        this.collections[title] = {
            title: title, 
            author: author,
            year: year,
            availablity: availablity
        }
    }

    displayCollections(){
        console.log("Collection: are here");
        for(const book in this.collections)
            console.log(`Title: ${this.collections[book].title} - Author: ${this.collections[book].author}, - Year: ${this.collections[book].year} , - availablity: ${this.collections[book].availablity}` )
    } 

    deleteBook(title){
        if(this.collections[title]){
            delete this.collections[title]
            console.log(`${title} has been deleted`);
        }else{
            console.log(`${title} not found in the collections`)
        }
    }
  }

  const myLibrary = new Library();
  myLibrary.addBook("Harry Potter","J.K Rowlling","2007","yes");
  myLibrary.addBook("HK Miller","R.K katanm","2009","no");
  myLibrary.addBook("The story of myLife","Hellen kELLER","2005","yes");
  myLibrary.addBook("JACK DANIEL","Jack Daniel","2004","yes");
 console.log("----------------------------------------------")

  myLibrary.displayCollections();
  myLibrary.deleteBook("HK Miller");
  myLibrary.displayCollections();